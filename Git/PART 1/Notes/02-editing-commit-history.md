# Challenge 2: Editing Commit History (Reword)

## The Situation
You want to fix the message of a commit that is **not** the most recent one — so `--amend` (Challenge 1) won't work, since it only touches the last commit. You need **interactive rebase**.

## The Concept: `git rebase -i`
Interactive rebase lets you rewrite a range of commit history: reorder, reword, squash, edit, or drop commits. It works by "replaying" commits one at a time on top of a base point, letting you intervene at each step.

`git rebase -i HEAD~2` means: *"Let me interactively edit the last 2 commits."*

The number after `~` = how many commits back from HEAD you want to include.

## Steps We Took

1. Started the interactive rebase covering the last 2 commits:
   ```bash
   git rebase -i HEAD~2
   ```

2. Git opened an editor (Vim, by default on most systems) showing a **todo list**, oldest commit first:
   ```
   pick 64dc976 chore: Create another file
   pick 9901cbf chore: Create third and fourth files
   ```

3. We changed `pick` to `reword` (or `r`) on the commit we wanted to rename:
   ```
   reword 64dc976 chore: Create another file
   pick 9901cbf chore: Create third and fourth files
   ```

4. Saved and closed that file (Vim: `Esc`, then `:wq`, then `Enter`).

5. Git then opened a **second** editor screen — this time just for the commit message of that one commit. We cleared the old text and replaced it with:
   ```
   chore: Create second file
   ```
   Saved and closed again.

## ⚠️ A Real Snag I Hit: Stuck Rebase
The first attempt got interrupted (editor closed before finishing), leaving Git in a stuck "rebase in progress" state. The fix:
```bash
git rebase --abort
```
This safely cancels an in-progress rebase and restores your branch to exactly how it was before you started — no damage done. It's your escape hatch any time a rebase goes sideways.

We also configured a reliable editor to avoid this happening again:
```bash
git config --global core.editor "notepad"
# or, if you have VS Code:
git config --global core.editor "code --wait"
```

## Vim Cheat-Sheet (since it's Git's default editor)
| Goal | Keys |
|---|---|
| Enter edit/insert mode | `i` |
| Leave insert mode | `Esc` |
| Delete a whole line | `Esc` then `dd` |
| Delete ALL lines in file | `Esc` then `:%d` then `Enter` |
| Save and quit | `Esc` then `:wq` then `Enter` |
| Quit WITHOUT saving | `Esc` then `:q!` then `Enter` |

## Result
```
02445bf (HEAD -> main) chore: Create third and fourth files
6b7ffcf chore: Create second file          <- renamed from "Create another file"
4ff7071 chore: Create initial file
```

Notice **both** commit hashes changed (`64dc976 → 6b7ffcf` AND `9901cbf → 02445bf`), even though only one commit's message was edited.

## Quick Memory Hook
> **"Rebase = rewrite, and rewriting anything reprints everything after it."**
> A commit's hash is a fingerprint of its content + its parent's hash. Change one commit, and every commit built on top of it gets a new fingerprint too — even if their content is identical.

## When You'd Use This in Real Life
- Fixing a typo or unclear message in a commit that's a few commits back, before you push/share it.
- Cleaning up commit history before opening a Pull Request, so reviewers see clear, well-described commits.