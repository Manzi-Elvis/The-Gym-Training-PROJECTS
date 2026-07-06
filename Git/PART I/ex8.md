# Challenge 8: Cherry-Picking Commits

## The Situation
You have a commit sitting on a different branch, and you want **just that one commit** — not the whole branch — brought into your current branch.

## The Concept: `git cherry-pick`
`git cherry-pick <commit-hash>` takes the changes introduced by a specific commit on another branch and **re-applies them as a new commit** on your current branch.

Key distinction: this is a **copy**, not a move.
- The original commit stays exactly where it is, on its original branch.
- A brand new commit — with a **new hash** but the same changes and message — gets created on your current branch.

This is different from merging or rebasing an entire branch, where *all* commits come along. Cherry-pick is surgical: just the one commit you name.

## Steps We Took

1. Created a new branch and switched to it:
   ```bash
   git checkout -b ft/branch
   ```

2. Added a new file and committed on that branch:
   ```bash
   New-Item test6.md -ItemType File
   Set-Content test6.md "test 5 content"
   git add test6.md
   git commit -m "Implemented test 5"
   ```
   *(Note: we used `test6.md` instead of `test5.md` since `test5.md` already existed on `main` from Challenge 7 — always check for naming collisions across branches.)*

3. Confirmed the commit was there:
   ```
   23b78e6 (HEAD -> ft/branch) Implemented test 5
   7ea480e (main) chore: Create third and fourth files
   ```

4. Switched back to `main`:
   ```bash
   git checkout main
   ```

5. Cherry-picked that specific commit by hash:
   ```bash
   git cherry-pick 23b78e6
   ```

## Result
```
33db0d4 (HEAD -> main) Implemented test 5      <- new hash, copy of 23b78e6
7ea480e chore: Create third and fourth files
c1e6467 chore: Create fifth file
61301e7 chore: Create initial file
```

`main` now has the "Implemented test 5" change (as commit `33db0d4`), while `ft/branch` still has its own untouched original (`23b78e6`).

## Quick Memory Hook
> **"Cherry-pick = copy-paste a single commit onto another branch."**
> The original stays put; a new commit with new content-identical-but-different-hash appears where you ran the command.

## When You'd Use This in Real Life
- A critical bugfix was committed on a feature branch, and you need it on `main` (or a hotfix branch) immediately — without merging the rest of the unfinished feature work.
- Backporting a fix to an older release branch.