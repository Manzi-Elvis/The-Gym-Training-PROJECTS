# Challenge 9 (Bonus): Visualizing Commit History

## The Situation
After Challenge 8, your repo now has **two diverging branches** (`main` and `ft/branch`) that share common ancestry but have gone their separate ways. Plain `git log --oneline` only shows one branch at a time — hard to see the full picture.

## The Concept: `git log --graph --all`
- `--graph` draws ASCII lines (`|`, `*`, `/`, `\`) connecting commits, visually showing branching and merging structure.
- `--all` includes **every branch** in the repo, not just the one you're currently on.
- Often combined with `--oneline` and `--decorate` for a compact, readable view.

## Command to Try
```bash
git log --oneline --graph --all
```

Given your current repo state, you'd see something like:
```
* 33db0d4 (HEAD -> main) Implemented test 5
| * 23b78e6 (ft/branch) Implemented test 5
|/
* 7ea480e chore: Create third and fourth files
* c1e6467 chore: Create fifth file
* 61301e7 chore: Create initial file
```

Reading this:
- The `*` symbols are commits.
- Where the line **splits** (`|/` or `|\`) is where branches diverge from a common ancestor.
- `main` and `ft/branch` both contain their own version of "Implemented test 5" (different hashes, same content) — visually confirming that cherry-pick created a genuine copy, not a shared reference.

## Other Useful Variants
```bash
git log --oneline --graph --all --decorate    # explicitly show branch/tag labels at each commit
git log --graph --all --author="Elvis"        # filter by author
```

Many people also use GUI tools (GitKraken, VS Code's Git Graph extension, GitHub Desktop, `gitk`) for the same purpose — same information, more visual.

## Quick Memory Hook
> **"`--graph --all` = the whole map, not just the road you're on."**
> Without `--all`, `git log` only shows history reachable from your current branch — you could be blind to other branches sitting right next to you.

## When You'd Use This in Real Life
- Before merging or rebasing, to sanity-check exactly how branches relate to each other.
- Debugging "why didn't my commit show up" issues — often the answer is "it's on a different branch than you think."