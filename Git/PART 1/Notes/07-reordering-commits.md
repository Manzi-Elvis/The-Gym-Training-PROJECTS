# Challenge 7: Reordering Commits

## The Situation
Sometimes commits get created in an order that doesn't reflect the logical sequence you'd want in history. Interactive rebase lets you physically reorder them.

## The Concept
The todo list in `git rebase -i` is just a list of lines, read and replayed **top to bottom** (oldest to newest). Reordering commit history is as simple as reordering the **lines** in that todo list before saving.

## ⚠️ The Same `HEAD~3` Snag as Challenge 3
We again hit:
```
fatal: invalid upstream 'HEAD~3'
```
For the same reason as before — with only 3 commits in the whole repo, `HEAD~3` tries to reach past the root commit. The fix, again, was:
```bash
git rebase -i --root
```

## Steps We Took

1. Added a new commit to have something to reorder:
   ```bash
   New-Item test5.md -ItemType File
   git add test5.md
   git commit -m "chore: Create fifth file"
   ```

2. Checked the order:
   ```
   62957b5 (HEAD -> main) chore: Create fifth file
   d0f6621 chore: Create third and fourth files
   61301e7 chore: Create initial file
   ```

3. Started the rebase including the root commit:
   ```bash
   git rebase -i --root
   ```

4. Todo list (oldest to newest):
   ```
   pick 61301e7 chore: Create initial file
   pick d0f6621 chore: Create third and fourth files
   pick 62957b5 chore: Create fifth file
   ```

5. Reordered the last two lines using Vim:
   - `dd` on the `d0f6621` line (deletes + copies it to Vim's buffer)
   - moved cursor down to the `62957b5` line
   - `p` (pastes the deleted line right after)

   Resulting in:
   ```
   pick 61301e7 chore: Create initial file
   pick 62957b5 chore: Create fifth file
   pick d0f6621 chore: Create third and fourth files
   ```

6. Saved and closed (`:wq`).

## Result
```
7ea480e (HEAD -> main) chore: Create third and fourth files
c1e6467 chore: Create fifth file
61301e7 chore: Create initial file
```

"Fifth file" now comes before "third and fourth files," as intended. As always with rebase, both moved/replayed commits got **new hashes**.

## Quick Memory Hook
> **"The todo list IS the new history — top to bottom, oldest to newest."**
> Reordering commits = reordering lines. `dd` to cut a line, `p` to paste it below the cursor, in Vim.

## When You'd Use This in Real Life
- You committed a bugfix before a related feature commit, but it makes more logical sense for the feature to come first.
- Grouping related commits together before merging, so the history tells a clear story.