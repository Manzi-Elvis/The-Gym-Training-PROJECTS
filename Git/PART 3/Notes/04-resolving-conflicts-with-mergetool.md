# Challenge 4: Resolving Merge Conflicts with a Merge Tool

## The Situation
Instead of manually editing conflict markers in a plain text editor (Challenge 3), use a visual/interactive merge tool to resolve a conflict.

## The Concept: `git mergetool`
`git mergetool` launches an external, configured diff/merge application that shows conflicting versions **side by side** (often three-way: your version, their version, and the common ancestor), letting you visually pick or combine changes rather than reading raw text markers. Common tools: VS Code's built-in merge editor, KDiff3, Meld, Beyond Compare.

## Setup: Configuring VS Code as the Merge Tool
```bash
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'
```
`--wait` tells VS Code to hold the terminal until you close the file, so Git knows when you're done resolving.

## Steps We Took

1. Created a genuine conflict (same technique as Challenge 3 — both branches editing the same line after diverging):
   ```bash
   # On ft/conflict-demo:
   Set-Content readme.txt "...CONFLICT-DEMO branch version - ATTEMPT 3, via mergetool."
   git add readme.txt
   git commit -m "chore: Update readme for mergetool demo"

   # On main:
   Set-Content readme.txt "...MAIN branch version - ATTEMPT 3, via mergetool."
   git add readme.txt
   git commit -m "chore: Update readme on main for mergetool demo"

   git merge ft/conflict-demo
   ```
   ```
   CONFLICT (content): Merge conflict in readme.txt
   ```

2. Launched the merge tool:
   ```bash
   git mergetool
   ```
   This opened VS Code's 3-way merge view (incoming / current / result panes). We picked the incoming (`ft/conflict-demo`) version in the result pane, saved, and closed.

3. Completed the merge:
   ```bash
   git commit -m "chore: Resolve conflict using mergetool"
   ```

## ⚠️ The `.orig` Backup File
After resolving, `git status` revealed an unexpected leftover:
```
Untracked files:
        readme.txt.orig
```

By default, `git mergetool` preserves a `.orig` copy of the file **as it looked with conflict markers still in it**, as a safety net. It's untracked and won't be committed, but it clutters your working directory if left around.

**Clean it up:**
```bash
Remove-Item readme.txt.orig
```

**Stop this from happening on future runs:**
```bash
git config --global mergetool.keepBackup false
```

## Quick Memory Hook
> **"Mergetool = same conflict, visual resolution instead of manual text editing."**
> Underlying mechanics are identical to Challenge 3 — the tool just gives you a friendlier interface to produce the same clean, marker-free result.

> **"Mergetool leaves `.orig` backups by default — turn `keepBackup` off if you don't want them."**

## When You'd Use This in Real Life
- Large or complex conflicts where reading raw `<<<<<<<` markers in a plain text file is hard to follow — a visual tool makes the "who changed what" much clearer.
- Team members less comfortable with manual conflict-marker editing often prefer this workflow.