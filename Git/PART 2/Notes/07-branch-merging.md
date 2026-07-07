# Challenge 7: Branch Merging

## The Situation
Time to bring `ft/new-branch-from-commit`'s work back into `main` — using a true **merge** (as opposed to rebase, which comes next in Challenge 8).

## The Concept: Three-Way Merge
When two branches have diverged (each has commits the other doesn't), `git merge` creates a **new merge commit** with **two parents** — one pointing to each branch's tip. This preserves the exact history of both branches, joined together at this new point.

Contrast this with a **fast-forward merge** (which happens when the target branch has no new commits of its own since the branches split) — in that case, no merge commit is needed; the branch pointer just moves forward.

## Steps We Took

1. Gave the branch a unique commit so the merge would actually have something to bring in:
   ```bash
   New-Item merge-test.txt -ItemType File
   Set-Content merge-test.txt "Content for merge branch demonstration"
   git add merge-test.txt
   git commit -m "Add merge-test file for branch merging demo"
   ```

2. Switched to `main` and merged:
   ```bash
   git checkout main
   git merge ft/new-branch-from-commit
   ```
   ```
   Merge made by the 'ort' strategy.
   ```
   *(`ort` is Git's current default merge strategy — it replaced the older `recursive` strategy; functionally similar, but faster and more robust on complex histories.)*

3. Since both branches had diverged, Git opened an editor for the merge commit message. The auto-generated default (`"Merge branch 'ft/new-branch-from-commit'"`) was fine as-is — saved and closed without changes.

## Result
```
*   227cbfd (HEAD -> main) Merge branch 'ft/new-branch-from-commit'
|\  
| * a7e9da2 Add merge-test file for branch merging demo
* | a7259d4 Updated project readme
* | 33db0d4 Implemented test 5
|/  
* 7ea480e chore: Create third and fourth files
```

The `|\` and `|/` shape is the visual signature of a real merge: two lines of history splitting apart, then rejoining at a two-parent commit.

## Quick Memory Hook
> **"Merge = preserve both stories, join them with a two-parent commit."**
> Nothing gets rewritten; both branches' commits stay exactly as they were, permanently visible in the graph.

## When You'd Use This in Real Life
- Merging a completed feature branch into `main` — most teams prefer merge (often via a Pull Request's "Merge" button) specifically *because* it preserves full history and doesn't rewrite commits others may have already pulled.
- Any situation where preserving an accurate historical record of "when did these branches combine" matters more than having a perfectly linear history.