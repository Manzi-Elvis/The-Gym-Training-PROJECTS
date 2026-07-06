# Challenge 5: Advanced Squashing

## The Situation
Having just split "third and fourth files" into two commits (Challenge 4), now do the reverse: combine `"Create Third File"` and `"Create fourth file"` back into one commit — this time using `squash` instead of `reset`, to reinforce the technique from Challenge 3.

## The Concept
Same idea as Challenge 3: mark the second (newer) commit as `squash` so it folds into the commit above it, then write one final combined message. The only difference here is you didn't need `--root`, because both commits you're combining fit within the last 2 commits (`HEAD~2`).

## Steps We Took

1. Started the rebase for the last 2 commits:
   ```bash
   git rebase -i HEAD~2
   ```

2. Todo list:
   ```
   pick ee4c22c chore: Create Third File
   pick 3118e23 chore: Create fourth file
   ```

3. Marked the second line as `squash`:
   ```
   pick ee4c22c chore: Create Third File
   squash 3118e23 chore: Create fourth file
   ```

4. Saved and closed. In the combined-message editor, cleared everything and wrote:
   ```
   chore: Create third and fourth files
   ```
   Saved and closed.

## Result
```
d0f6621 (HEAD -> main) chore: Create third and fourth files
61301e7 chore: Create initial file
```

Back to 2 commits total — same end state as Challenge 3 reached, but arrived at through squash directly rather than amend.

## Quick Memory Hook
> **"HEAD~2 is enough when both commits you're squashing are already within the last 2."**
> You only need `--root` (or a bigger `~n`) when the target commit sits *outside* the range you'd normally count back to — like the very first commit in the whole repo.

## When You'd Use This in Real Life
- Reversing an over-eager split, once you realize two commits really did belong together after all.
- General history cleanup before a merge or PR — squashing is one of the most common rebase operations you'll do day-to-day.