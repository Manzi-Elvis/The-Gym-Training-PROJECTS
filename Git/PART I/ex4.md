# Challenge 4: Splitting a Commit

## The Situation
The opposite problem from squashing: one commit is doing **too much**. `"chore: Create third and fourth files"` bundles two unrelated file additions into a single commit. Let's break it into two separate, more precise commits.

## The Concept: `git reset`
`git reset <commit>` moves your branch pointer (HEAD) back to a specified commit — but what happens to your changed files depends on the reset **mode**:

| Mode | What happens to your files |
|---|---|
| `--soft` | Changes stay **staged** (in the index), ready to commit again |
| (default / `--mixed`) | Changes stay in your **working directory**, but unstaged |
| `--hard` | Changes are **deleted** entirely — ⚠️ destructive, use with caution |

We used the **default (mixed)** mode: `git reset HEAD~1` — this uncommits the last commit, but keeps `test3.md` and `test4.md` sitting in your working directory as uncommitted changes, ready to be re-added however you like.

## Steps We Took

1. Reset one commit back, keeping the files as uncommitted changes:
   ```bash
   git reset HEAD~1
   ```
   At this point, `test3.md` and `test4.md` show up as untracked/unstaged again — the commit is gone, but the files are still on disk.

2. Committed `test3.md` on its own:
   ```bash
   git add test3.md
   git commit -m "chore: Create Third File"
   ```

3. Committed `test4.md` on its own:
   ```bash
   git add test4.md
   git commit -m "chore: Create fourth file"
   ```

## Result
```
3118e23 (HEAD -> main) chore: Create fourth file
ee4c22c chore: Create Third File
61301e7 chore: Create initial file
```

One combined commit became two focused, individually-described commits.

## Quick Memory Hook
> **"Reset = rewind the pointer, decide what to do with the files yourself."**
> `reset` (mixed/default) is essentially "uncommit but keep my work" — perfect for splitting a commit apart, since it hands the changes back to you to re-stage and re-commit however you want.

> Compare to `--hard`: that would have **deleted** `test3.md` and `test4.md` entirely. Always double check which mode you're using before running `reset`.

## When You'd Use This in Real Life
- You committed a big batch of unrelated changes together and want cleaner, atomic commits (one logical change per commit — a widely followed best practice).
- Undoing a commit while still wanting to rework and recommit the same changes differently.