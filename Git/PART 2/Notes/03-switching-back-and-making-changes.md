# Challenge 3: Switching Back and Making More Changes

## The Situation
Switch back to `main` and make a separate, unrelated change there — reinforcing that branches keep completely independent working directories.

## The Concept: Branches Swap Your Working Directory
When you `checkout` (or `switch`) to a different branch, Git doesn't just update an abstract pointer — it actually **changes the files on disk** to match whatever that branch's latest commit contains. Files that exist only on the branch you're leaving disappear from your working directory; files that exist only on the branch you're moving to appear.

This is why `feature.txt` (added on `ft/new-feature` in Challenge 2) is nowhere to be found once you're back on `main` — it's not deleted, it's just not part of `main`'s history.

## Steps We Took
```bash
git checkout main
New-Item readme.txt -ItemType File
Set-Content readme.txt "Welcome to the Advanced-Git practice repository."
git add readme.txt
git commit -m "Updated project readme"
git log --oneline
git branch
```

## Result
```
a7259d4 (HEAD -> main) Updated project readme
33db0d4 (origin/main, origin/HEAD) Implemented test 5
7ea480e chore: Create third and fourth files
c1e6467 chore: Create fifth file
61301e7 chore: Create initial file
```
```
  ft/branch
  ft/new-feature
* main
```

`main` now has its own new commit (`a7259d4`), completely separate from `ft/new-feature`'s `feature.txt` commit. Two branches, two different futures — until something merges them back together.

## Quick Memory Hook
> **"Switching branches = swapping your desk, not just relabeling it."**
> Whatever files a branch's latest commit contains, that's what appears in your working directory the moment you check it out.

## When You'd Use This in Real Life
- Handling an urgent fix on `main` while a feature branch is still in progress — switch back, fix, commit, push, then return to your feature work without it interfering.