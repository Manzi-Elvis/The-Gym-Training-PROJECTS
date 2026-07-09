# Challenge 8: Listing and Deleting Tags

## The Situation
List existing tags, then remove one — both locally and from the remote.

## The Concept
Tags behave like branches in one important way: **deleting locally doesn't automatically delete from the remote, and vice versa.** They're separate operations, same as branch deletion.

## Steps We Took

**List all tags:**
```bash
git tag
```
```
v1.0
```

**Delete locally:**
```bash
git tag -d v1.0
```
```
Deleted tag 'v1.0' (was f041dd6)
```

**Confirm it's gone locally:**
```bash
git tag
```
(empty output)

**Delete from the remote too** (since we'd pushed it in Challenge 7):
```bash
git push origin --delete v1.0
```
```
- [deleted]         v1.0
```

## Quick Memory Hook
> **"`-d` only ever touches your local copy. If you pushed it, you must separately delete it remotely."**
> Exact same pattern as branch deletion:
> ```
> git tag -d <name>                    # local
> git push origin --delete <name>      # remote
> ```
> vs. branches:
> ```
> git branch -d <name>                 # local
> git push origin --delete <name>      # remote
> ```

## When You'd Use This in Real Life
- Removing a mistakenly-created or mistakenly-named release tag before anyone downstream relies on it.
- Auditing what release points currently exist in a repo (`git tag` with no arguments lists everything, often combined with `git tag -l "v1.*"` to filter by pattern).