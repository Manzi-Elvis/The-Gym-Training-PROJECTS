# Challenge 1: Feature Branch Creation

## The Situation
You're about to start work on a new feature. Best practice is to never work directly on `main` — instead, create a dedicated branch to isolate the feature's changes.

## The Concept: Branches Are Cheap Pointers
A Git branch is just a lightweight, movable pointer to a commit — nothing more. Creating one is instant and costs almost nothing, which is why Git culture encourages branching liberally: one branch per feature, bugfix, or experiment.

## Two Equivalent Commands
```bash
git checkout -b ft/new-feature
```
or the newer, clearer alternative:
```bash
git switch -c ft/new-feature
```

Both **create** the branch and **switch** to it in a single step.

`checkout` is the older, do-everything command — it handles branches, individual files, and commits, which historically made it a bit ambiguous/risky (e.g., it can silently discard file changes if misused). `switch` (Git 2.23+) was introduced specifically to separate "branch switching" from "file restoring" concerns, making intent clearer. Both are fine to use; `checkout` is still far more common in the wild and in older tutorials.

## Steps We Took
```bash
git checkout -b ft/new-feature
git branch
```

## Result
```
  ft/branch
* ft/new-feature
  main
```
The `*` marks your current branch.

## Quick Memory Hook
> **"`-b` = both create AND switch, in one command."**
> Without `-b`, `git checkout <name>` would try to switch to a branch called `<name>` that must already exist — and fail if it doesn't.

## When You'd Use This in Real Life
- Starting any new piece of work — feature, bugfix, experiment — should almost always begin with a fresh branch off `main` (or your team's equivalent base branch).
- Naming conventions like `ft/`, `fix/`, `chore/` (as used throughout this repo) are common team conventions to make branch purpose obvious at a glance.