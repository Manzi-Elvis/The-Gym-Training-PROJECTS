# Challenge 3: Keeping History Tidy — Squashing Commits

## The Situation
You have two commits that, in hindsight, should really be **one** logical change. "Create second file" doesn't deserve its own line in history separate from "Create initial file" — let's merge them.

## The Concept: `squash`
In an interactive rebase todo list, marking a commit as `squash` (or `s`) tells Git:
> "Combine this commit's changes into the commit directly **above** it, and let me write one combined message."

The commit marked `squash` disappears as a separate entry — its changes get folded into the one before it.

## ⚠️ A Wrinkle We Hit: `HEAD~3` Doesn't Exist
We wanted to rebase far enough back to include the very **first** (root) commit, so we tried:
```bash
git rebase -i HEAD~3
```
But got:
```
fatal: invalid upstream 'HEAD~3'
```
This happens because there were only 3 commits total — `HEAD~3` tries to go one commit *before* the root commit, which doesn't exist. The `~n` syntax counts commits backward from HEAD, and you can't go further back than the very first commit.

**The fix:** use `--root` instead of counting commits, when you need to rebase all the way to the beginning of history:
```bash
git rebase -i --root
```

## Steps We Took

1. Ran the rebase including the root commit:
   ```bash
   git rebase -i --root
   ```

2. Todo list showed (oldest first):
   ```
   pick 4ff7071 chore: Create initial file
   pick 6b7ffcf chore: Create second file
   pick 02445bf chore: Create third and fourth files
   ```

3. Marked the **second** line as `squash` (this folds it into the line above it):
   ```
   pick 4ff7071 chore: Create initial file
   squash 6b7ffcf chore: Create second file
   pick 02445bf chore: Create third and fourth files
   ```

4. Saved and closed. Git then opened a message editor showing **both** old messages stacked, ready to be combined:
   ```
   # This is a combination of 2 commits.
   # This is the 1st commit message:
   chore: Create initial file
   # This is the commit message #2:
   chore: Create second file
   ```

5. We cleared everything (`:%d` in Vim) and wrote a single final message:
   ```
   chore: Create initial file
   ```
   Saved and closed.

## Result
```
29005d4 (HEAD -> main) chore: Create third and fourth files
61301e7 chore: Create initial file          <- now contains test1.md AND test2.md
```

Down from 3 commits to 2 — `test1.md` and `test2.md` are now one combined commit.

## Quick Memory Hook
> **"Squash = glue this commit to the one above it."**
> Position in the todo list matters: `squash` always merges *upward* into the previous `pick`.

> **"No commit before the root? Use `--root`, not a bigger `~number`."**

## When You'd Use This in Real Life
- Cleaning up a messy string of "WIP", "fix typo", "actually fix it" commits into one clean commit before merging a feature branch.
- Making history easier to read/review — reviewers generally prefer a handful of meaningful commits over dozens of micro-commits.