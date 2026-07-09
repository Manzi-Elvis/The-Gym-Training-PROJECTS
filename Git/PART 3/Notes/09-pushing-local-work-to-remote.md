# Challenge 9: Pushing Local Work to Remote Repositories

## The Situation
You have a local branch (`ft/conflict-demo`) with commits that were made entirely locally throughout Part 3 and never pushed. Get it up to the remote.

## The Concept: Reading `git branch -vv`
This command is your at-a-glance dashboard for local-vs-remote sync status across every branch:
```bash
git branch -vv
```
```
  ft/branch               23b78e6 [origin/ft/branch] Implemented test 5
  ft/conflict-demo        2b45364 chore: Update readme for mergetool demo
  ft/improved-branch-name 4459abe [origin/ft/improved-branch-name] Add rebase-test file for branch rebasing demo
* main                    f041dd6 [origin/main: ahead 1] chore: Add .gitignore to exclude /tmp
```

Reading this:
- `ft/branch` and `ft/improved-branch-name` show `[origin/...]` with no "ahead/behind" note → **fully in sync**.
- `ft/conflict-demo` shows **no bracket at all** → it has **no upstream tracking branch configured** — meaning it's never been pushed.
- `main` shows `[origin/main: ahead 1]` → tracked, but has 1 local commit not yet pushed.

## Steps We Took

**Pushed the never-before-pushed branch, establishing tracking:**
```bash
git push -u origin ft/conflict-demo
```
```
* [new branch]      ft/conflict-demo -> ft/conflict-demo
branch 'ft/conflict-demo' set up to track 'origin/ft/conflict-demo'.
```

**Verified:**
```bash
git branch -vv
```
```
  ft/conflict-demo        2b45364 [origin/ft/conflict-demo] chore: Update readme for mergetool demo
```
Now shows the tracking bracket — fully synced.

**Also pushed `main`'s pending commit**, since it was flagged "ahead 1":
```bash
git push origin main
```

## Quick Memory Hook
> **"No `[origin/...]` bracket in `git branch -vv` = never pushed, no tracking set up yet."**
> **"`[origin/x: ahead N]` = tracked, but N local commits haven't been pushed."**
> **"`[origin/x: behind N]` = tracked, but the remote has N commits you don't have locally yet — time to pull."**

## When You'd Use This in Real Life
- Regular habit before ending a work session: run `git branch -vv` across all your local branches to make sure nothing valuable is sitting unpushed (and therefore unbacked-up) on just your machine.