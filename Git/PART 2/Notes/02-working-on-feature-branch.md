# Challenge 2: Working on the Feature Branch

## The Situation
With `ft/new-feature` created, do some actual work on it — add a file and commit, just like you would on any branch.

## The Concept
There's nothing special about committing on a feature branch versus `main` — the workflow is identical (`add`, then `commit`). What matters is **where you are** when you commit: whichever branch is currently checked out is the one that receives the new commit.

## Steps We Took
```bash
New-Item feature.txt -ItemType File
Set-Content feature.txt "Core functionality for the new feature"
git add feature.txt
git commit -m "Implemented core functionality for new feature"
git log --oneline
```

## Result
```
6b849f7 (HEAD -> ft/new-feature) Implemented core functionality for new feature
33db0d4 (origin/main, origin/HEAD, main) Implemented test 5
7ea480e chore: Create third and fourth files
c1e6467 chore: Create fifth file
61301e7 chore: Create initial file
```

Notice `feature.txt`'s commit sits **only** on `ft/new-feature` — `main` is still pointing at `33db0d4`, one commit "behind." The branches have officially diverged.

## Quick Memory Hook
> **"Commits go wherever HEAD currently points."**
> There's no separate command for "commit on a feature branch" — you just make sure you're checked out on the right branch first, then commit as normal.

## When You'd Use This in Real Life
- This is just... daily development. Every commit you make while working on a feature branch follows this exact pattern.