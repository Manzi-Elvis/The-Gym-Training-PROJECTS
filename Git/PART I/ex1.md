# Challenge 1: Missing File Fix

## The Situation
You made a commit, but forgot to include one of the files you meant to add.
This is one of the most common real-world Git mistakes — and thankfully, one of the easiest to fix.

## The Concept: `git commit --amend`
`--amend` doesn't create a brand new commit. It **replaces the most recent commit** with a new one that includes whatever is currently staged, plus (optionally) a new commit message.

Think of it like editing the last sentence you wrote, instead of adding a new sentence after it.

> ⚠️ **Key rule to remember:** `--amend` only ever touches the **very last commit**. If the mistake is further back in history, you need interactive rebase instead (see Challenge 2).

## Steps We Took

1. Checked the situation:
   ```bash
   git status
   git log --oneline
   ```
   This revealed `test4.md` was untracked — it never got included in the "third and fourth files" commit.

2. Staged the missing file:
   ```bash
   git add test4.md
   ```

3. Amended the last commit to absorb it:
   ```bash
   git commit --amend -m "chore: Create third and fourth files"
   ```

## What Happened Under the Hood
- Git took everything staged (`test3.md` from before + `test4.md` now) and bundled it into **one replacement commit**.
- The old commit was discarded; a **new commit hash** was generated (this is important — amending always changes the hash, since a commit's hash is derived from its content).

## Result
```
9901cbf (HEAD -> main) chore: Create third and fourth files   <- now contains test3.md AND test4.md
64dc976 chore: Create another file
4ff7071 chore: Create initial file
```

## Quick Memory Hook
> **"Amend = redo the last commit, not add a new one."**
> If you forgot a file, `git add` it, then `commit --amend`.
> If you forgot a file **and** want to just fix the message with no new content, you can skip staging and just run `git commit --amend -m "new message"` directly.

## When You'd Use This in Real Life
- You just committed and immediately notice a typo in the message.
- You committed but forgot to `git add` a file that belongs in that same logical change.
- You want to tweak the very last commit before pushing it (never amend commits that are already pushed and shared with others — it rewrites history).