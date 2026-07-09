# Challenge 6: Ignoring Files/Directories

## The Situation
You have files or folders you never want Git to track — build output, temp files, secrets, IDE settings. Set up `.gitignore` to exclude them.

## The Concept: `.gitignore`
A `.gitignore` file lists patterns for files/folders Git should never track, no matter how many times they appear in your working directory. It only affects **untracked** files — anything already committed keeps being tracked unless explicitly removed.

## Steps We Took

1. Created the file:
   ```bash
   New-Item .gitignore -ItemType File
   ```

2. Added a pattern to exclude a `/tmp` folder:
   ```bash
   Add-Content .gitignore "/tmp"
   ```

3. Tested it by creating exactly what we wanted ignored:
   ```bash
   New-Item tmp -ItemType Directory
   New-Item tmp/scratch.txt -ItemType File
   git status
   ```
   Result: only `.gitignore` itself showed as untracked — `tmp/` and its contents were completely invisible to Git, proving the pattern worked.

4. Committed the `.gitignore` file (the ignore rules themselves DO get tracked and shared with the team — only the *matched* files/folders are excluded):
   ```bash
   git add .gitignore
   git commit -m "chore: Add .gitignore to exclude /tmp"
   ```

## Pattern Syntax Notes
- `/tmp` — the leading `/` **anchors the pattern to the repository root**. Without it, `tmp` would match a folder/file named `tmp` anywhere in the repo tree, not just at the top level.
- Other common patterns:
  ```
  *.log           # any file ending in .log, anywhere
  node_modules/    # a specific folder name, anywhere
  /build           # only the build/ folder at repo root
  .env             # a specific file, anywhere
  ```

## ⚠️ Important Caveat: Already-Tracked Files
Adding a pattern to `.gitignore` does **not** untrack a file that Git was already tracking before the pattern existed. You must explicitly remove it from tracking first:
```bash
git rm --cached <file>
```
(`--cached` removes it from Git's tracking while leaving the actual file on your disk untouched.)

## Quick Memory Hook
> **".gitignore prevents NEW files from being tracked — it doesn't retroactively untrack existing ones."**
> Leading `/` = "root only." No leading `/` = "match anywhere in the repo."

## When You'd Use This in Real Life
- Excluding `node_modules/`, build output directories, compiled binaries, `.env` files with secrets, IDE-specific config (`.vscode/`, `.idea/`), and OS clutter (`.DS_Store`, `Thumbs.db`) — essentially every real-world project needs a `.gitignore`.
- GitHub provides ready-made `.gitignore` templates per language/framework (search "gitignore templates") that are worth starting from instead of writing one from scratch.