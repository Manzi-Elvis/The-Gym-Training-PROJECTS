# Challenge 1: Stashing Changes

## The Situation
You're mid-work on `main` with uncommitted changes, but something urgent comes up and you need a clean working directory — without committing half-finished work.

## The Concept: `git stash`
`git stash` takes your uncommitted changes (staged and unstaged, by default) and tucks them away on a hidden stack, restoring your working directory to match the last commit — as if you'd never touched anything. The changes aren't lost; they're just set aside for later.

Think of it as a temporary "shelf" for work in progress.

## Steps We Took

1. Made an uncommitted change:
   ```bash
   Set-Content readme.txt "Welcome to the Advanced-Git practice repository. Work in progress on new updates..."
   ```

2. Confirmed it was uncommitted:
   ```bash
   git status
   # modified:   readme.txt
   ```

3. Stashed it:
   ```bash
   git stash
   ```
   ```
   Saved working directory and index state WIP on main: 227cbfd Merge branch 'ft/new-branch-from-commit'
   ```

4. Confirmed the working directory was clean again:
   ```bash
   git status
   # nothing to commit, working tree clean
   ```

## What's Happening Under the Hood
Git creates a special commit-like object holding your changes, and adds a reference to it on the **stash stack** (visible via `git stash list`). Your working directory and index are then reset to match `HEAD`, hiding the changes from view until you retrieve them.

## Quick Memory Hook
> **"Stash = shelve it, don't commit it."**
> Perfect for "I need to switch context RIGHT NOW but I'm not ready to commit this."

## When You'd Use This in Real Life
- An urgent bug report comes in while you're mid-feature — stash, switch branches, fix, switch back, unstash, continue.
- You need to pull the latest changes from a teammate, but pulling would conflict with your uncommitted local edits — stash first, pull, then reapply.