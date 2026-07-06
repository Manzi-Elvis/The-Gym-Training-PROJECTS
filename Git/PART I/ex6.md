# Challenge 6: Dropping a Commit

## The Situation
You made a commit you regret entirely — not a wrong message, not a missing file, but a commit that shouldn't exist in history at all. Let's remove it completely.

## The Concept: `drop`
In the interactive rebase todo list, marking a commit as `drop` (or simply **deleting its line** from the list entirely) tells Git:
> "Skip this commit completely — don't replay its changes at all."

Unlike `squash` (which keeps the changes but merges them elsewhere), `drop` discards the commit's changes entirely.

## Steps We Took

1. Created an "unwanted" commit to simulate the mistake:
   ```bash
   New-Item unwanted.txt -ItemType File
   Set-Content unwanted.txt "some junk content"
   git add unwanted.txt
   git commit -m "Unwanted commit"
   ```

2. Confirmed it was there:
   ```bash
   git log --oneline
   ```
   ```
   71759b9 (HEAD -> main) Unwanted commit
   d0f6621 chore: Create third and fourth files
   61301e7 chore: Create initial file
   ```

3. Started an interactive rebase covering the last 2 commits:
   ```bash
   git rebase -i HEAD~2
   ```

4. In the todo list, we deleted the `"Unwanted commit"` line entirely (equivalent to marking it `drop`), then saved and closed.

## Result
```
d0f6621 (HEAD -> main) chore: Create third and fourth files
61301e7 chore: Create initial file
```

The "Unwanted commit" — and `unwanted.txt` itself — is completely gone from both history and your working directory.

## Quick Memory Hook
> **"Drop = pretend it never happened."**
> Deleting a line from the rebase todo list has the exact same effect as marking it `drop` — Git just skips replaying that commit.

> Contrast the three "removal" tools you now know:
> - `--amend`: replace the very last commit
> - `reset`: rewind the pointer, keep files as uncommitted (you decide what happens next)
> - `drop` (via rebase): erase a specific commit's changes entirely from history

## When You'd Use This in Real Life
- Removing an accidental commit (e.g., committed a secrets file, a debug log, or truly unwanted test file) before pushing.
- ⚠️ Reminder: if a commit like this was **already pushed and others have pulled it**, dropping it locally and force-pushing can cause serious problems for collaborators. Safe to do only on unpublished / personal-branch history, or with team agreement.