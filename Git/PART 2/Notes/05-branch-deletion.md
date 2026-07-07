# Challenge 5: Branch Deletion

## The Situation
`ft/new-feature` has served its purpose for this exercise — time to clean it up, both locally and on the remote.

## The Concept: `-d` vs. `-D`

| Flag | Behavior |
|---|---|
| `-d` (lowercase, "delete") | **Safe delete.** Refuses if Git can't confirm the branch's commits are reachable somewhere safe. |
| `-D` (uppercase, force delete) | **Unconditional delete.** Deletes regardless of merge/safety status. Use deliberately, not by default. |

## ⚠️ A Nuance Worth Understanding
We expected `-d` to refuse (since `feature.txt`'s commit wasn't merged into `main`), planning to fall back to `-D`. Instead, we got:
```
warning: deleting branch 'ft/new-feature' that has been merged to
         'refs/remotes/origin/ft/new-feature', but not yet merged to HEAD
Deleted branch ft/new-feature (was 6b849f7).
```

**Why did `-d` succeed here?** Because `-d`'s safety check isn't strictly "is this merged into my current branch (`main`)?" — it's closer to "can I find this commit reachable from *anywhere* Git considers safe," which includes the branch's own remote-tracking counterpart. Since we'd already pushed `ft/new-feature` to GitHub in Challenge 4, Git reasoned the commit was backed up remotely, so local deletion was low-risk — hence a **warning**, not a hard refusal.

> This is a subtlety that catches people out: **pushing a branch to a remote effectively "unlocks" `-d`'s safety net for it locally**, even if it's not merged into any local branch.

## Steps We Took

1. Deleted the local branch (succeeded with a warning, per above):
   ```bash
   git branch -d ft/new-feature
   ```

2. Attempted `-D` anyway (errored harmlessly, since it was already gone):
   ```bash
   git branch -D ft/new-feature
   # error: branch 'ft/new-feature' not found
   ```

3. Deleted it from the remote too:
   ```bash
   git push origin --delete ft/new-feature
   ```

4. Verified the clean state:
   ```bash
   git branch -a
   ```

## Result
```
  ft/branch
* main
  remotes/origin/HEAD -> origin/main
  remotes/origin/ft/branch
  remotes/origin/main
```
`ft/new-feature` is gone from both local and remote.

## Quick Memory Hook
> **"`-d` checks reachability everywhere it can see — including remotes you've pushed to — not just your current branch."**
> **"`-D` doesn't check anything — use it only when you're certain."**

## When You'd Use This in Real Life
- Cleaning up after a feature has been merged (or, as here, intentionally abandoned) and you no longer need the branch cluttering your list.
- Always double-check `git branch -a` before deleting, to make sure you're not about to lose unbacked-up work.