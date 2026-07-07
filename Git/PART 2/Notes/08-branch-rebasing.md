# Challenge 8: Branch Rebasing

## The Situation
Same goal as Challenge 7 — integrate a branch's changes into `main` — but this time using `rebase` instead of `merge`, to directly compare the resulting history shapes.

## The Concept: Rebase Replays, Doesn't Join
`git rebase <target-branch>` takes every commit on your current branch that isn't on `<target-branch>`, and **replays them one by one on top of** `<target-branch>`'s current tip. The result is a straight, linear history — as if your branch had been created from that exact point all along.

Unlike merge, rebase:
- Creates **no merge commit**.
- **Rewrites** your branch's commits (new hashes), since their parent has effectively changed.
- Should generally only be done on **your own, not-yet-shared** commits — rebasing commits others have already pulled causes their local history to diverge painfully from yours.

## Steps We Took

1. Added one more unique commit on the branch (needed something left to rebase, since the branch's earlier work was already merged in Challenge 7):
   ```bash
   git checkout ft/new-branch-from-commit
   New-Item rebase-test.txt -ItemType File
   Set-Content rebase-test.txt "Content for rebase demonstration"
   git add rebase-test.txt
   git commit -m "Add rebase-test file for branch rebasing demo"
   ```

2. Rebased the branch onto `main`'s current tip:
   ```bash
   git rebase main
   ```
   ```
   Successfully rebased and updated refs/heads/ft/new-branch-from-commit.
   ```

## Result
```
* 4459abe (HEAD -> ft/new-branch-from-commit) Add rebase-test file for branch rebasing demo
*   227cbfd (main) Merge branch 'ft/new-branch-from-commit'
|\  
| * a7e9da2 Add merge-test file for branch merging demo
* | a7259d4 Updated project readme
```

Notice `4459abe` sits as a **single clean line** directly on top of `main`'s tip (`227cbfd`) — no merge bubble, unlike Challenge 7's graph.

## Merge vs. Rebase — Side-by-Side

| | Merge | Rebase |
|---|---|---|
| History shape | Branches + merge commit (non-linear) | Straight line (linear) |
| Original commits | Untouched, hashes preserved | Rewritten, new hashes |
| Safe on shared/pushed branches? | Yes, always | Only if nobody else has the old commits |
| Best for | Preserving accurate collaborative history | Clean, readable history before merging/PR |

## Quick Memory Hook
> **"Rebase = pretend you started here. Merge = show exactly what happened."**
> Rebase trades historical accuracy for a tidier, linear log.

## When You'd Use This in Real Life
- Cleaning up your own feature branch's messy commit history before opening a Pull Request, so it applies cleanly on top of the latest `main`.
- Many teams' workflow: rebase locally to stay in sync with `main` and avoid unnecessary merge commits, but merge (not rebase) when actually integrating a finished feature into `main`.