# Challenge 2: Retrieving Stashed Changes

## The Situation
Now that the urgent interruption is handled, bring your stashed work back.

## The Concept: `pop` vs. `apply`

| Command | Reapplies changes? | Keeps it in stash list? |
|---|---|---|
| `git stash pop` | Yes | **No** — removed after applying |
| `git stash apply` | Yes | **Yes** — stays available for reuse |

Use `pop` when you're done with a stash for good. Use `apply` if you might want to apply the same stashed changes to more than one branch.

## Steps We Took

1. Checked what was stashed:
   ```bash
   git stash list
   # stash@{0}: WIP on main: 227cbfd Merge branch 'ft/new-branch-from-commit'
   ```

2. Popped it back:
   ```bash
   git stash pop
   ```
   ```
   modified:   readme.txt
   Dropped refs/stash@{0} (7a119fc...)
   ```

3. Confirmed it returned:
   ```bash
   git status
   # modified:   readme.txt
   ```

4. Since this was just a demo change, committed it properly to avoid leaving it dangling:
   ```bash
   git add readme.txt
   git commit -m "chore: Update readme with work in progress note"
   ```

## Result
Working directory restored exactly as it was before stashing, and the stash entry automatically cleared from the list (`Dropped refs/stash@{0}...`).

## Quick Memory Hook
> **"Pop = apply AND clean up after itself. Apply = apply and keep the copy around."**
> `stash@{0}` is always the most recent stash; higher numbers (`stash@{1}`, `stash@{2}`...) are older ones if you've stashed multiple times.

## When You'd Use This in Real Life
- Standard companion to Challenge 1 — you almost always eventually `pop` what you stashed.
- If a stash `pop` conflicts with your current changes (can happen if things moved on since you stashed), Git will show conflict markers just like a merge conflict — resolve them the same way, then manually run `git stash drop` to clear the stash entry (since a conflicted pop won't auto-clear it).