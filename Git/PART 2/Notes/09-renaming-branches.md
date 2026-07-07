# Challenge 9: Renaming Branches

## The Situation
`ft/new-branch-from-commit` isn't a very descriptive name anymore — rename it to something clearer: `ft/improved-branch-name`.

## The Concept: `git branch -m`
`-m` stands for "move" (Git's internal term for rename, since a branch name is really just a pointer/reference being relocated). Two forms:

```bash
git branch -m <old-name> <new-name>     # rename any branch, from anywhere
git branch -m <new-name>                # rename the CURRENT branch (old name omitted)
```

## ⚠️ Local Rename ≠ Remote Rename
This is the critical gotcha: `git branch -m` only ever touches your **local** branch reference. If that branch was already pushed under its old name, the remote still shows the old name — completely unaware anything changed locally. Continuing to push/pull without addressing this can create a confusing mismatch.

**In our case**, we got lucky: `ft/new-branch-from-commit` was created and used entirely locally — it was **never pushed** to `origin` under its old name. So the rename was purely local, and pushing under the new name afterward was simple:
```bash
git push -u origin ft/improved-branch-name
```

**If it HAD already been pushed under the old name**, the correct sequence would be:
```bash
git push origin --delete <old-name>      # remove the stale name from remote
git push -u origin <new-name>            # push and track under the new name
```

## Steps We Took

1. Renamed locally (both forms shown, second one is a same-name no-op since we were already on the new name):
   ```bash
   git branch -m ft/new-branch-from-commit ft/improved-branch-name
   git branch -m ft/improved-branch-name
   ```

2. Verified:
   ```bash
   git branch
   ```
   ```
     ft/branch
   * ft/improved-branch-name
     main
   ```

3. Pushed the (never-before-pushed) branch under its new name:
   ```bash
   git push -u origin ft/improved-branch-name
   ```

## Quick Memory Hook
> **"Renaming locally is invisible to the remote. Check whether the old name was ever pushed before deciding your next step."**
> Never pushed → just push under the new name.
> Already pushed → delete old remote name, then push new name.

## When You'd Use This in Real Life
- A branch's scope grew or clarified as you worked on it, and the original name no longer reflects what it actually contains.
- Standardizing branch naming conventions across a team/project after the fact.