# Challenge 6: Creating a Branch from a Commit

## The Situation
Branches don't have to start from the tip of another branch — you can create one from **any commit** in history, including one buried a few commits back.

## The Concept
`git checkout -b <new-branch-name> <commit-hash>` creates a new branch pointer that starts at the **specified commit**, not at wherever your current branch happens to be. This is useful when you want to build something based on an earlier point in history — for example, if a bug was introduced after a certain commit and you want a clean branch from just before it.

## Steps We Took

1. Identified the commit two positions back from `main`'s tip:
   ```bash
   git log --oneline
   ```
   ```
   a7259d4 (HEAD -> main) Updated project readme
   33db0d4 Implemented test 5
   7ea480e chore: Create third and fourth files    <- target: two back from HEAD
   ```

2. Created the new branch starting exactly there:
   ```bash
   git checkout -b ft/new-branch-from-commit 7ea480e
   ```

## Result
```
7ea480e (HEAD -> ft/new-branch-from-commit) chore: Create third and fourth files
c1e6467 chore: Create fifth file
61301e7 chore: Create initial file
```
```
  ft/branch
* ft/new-branch-from-commit
  main
```

Notice this new branch does **not** contain `33db0d4` or `a7259d4` — those commits only exist "ahead," on `main`. The new branch genuinely starts from that earlier point in time.

## Quick Memory Hook
> **"`checkout -b <name> <commit>` = start a branch from history, not from 'now'."**
> Without specifying a commit, `-b` always branches from your current HEAD. Adding a hash overrides that starting point.

## When You'd Use This in Real Life
- Creating a hotfix branch from a specific tagged release commit, rather than from the tip of a `main` that's since moved on with unreleased changes.
- Investigating "when did this bug appear" by branching from suspect points in history and testing.