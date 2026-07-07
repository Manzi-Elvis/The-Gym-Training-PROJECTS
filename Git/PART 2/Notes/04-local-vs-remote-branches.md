# Challenge 4: Local vs. Remote Branches

## The Situation
So far, all branches (`main`, `ft/branch`, `ft/new-feature`) exist only on your machine. Time to understand — and set up — how local branches relate to their remote (GitHub) counterparts.

## The Concept

| Term | Meaning |
|---|---|
| **Local branch** | A branch pointer that exists only on your machine |
| **Remote** | A nickname (usually `origin`) for a remote repository's URL |
| **Remote branch** (a.k.a. remote-tracking branch) | A local **reference** to what a branch looks like on the remote, shown as `origin/<branch>`. This updates only when you `fetch`/`pull`/`push` — it's a cached snapshot, not a live view. |
| **Upstream tracking** | A link between a local branch and a specific remote branch, so `git push`/`git pull` know where to sync without you specifying every time |

Local and remote branches are **independent pointers** that can drift apart:
- You commit locally → local branch moves ahead, remote branch stays behind, until you `push`.
- Someone else pushes to the remote → remote branch moves ahead of your local view, until you `fetch`/`pull`.

## Useful Inspection Commands
```bash
git remote -v
```
Shows the remote's name and URL:
```
origin  https://github.com/Manzi-Elvis/Advanced-Git.git (fetch)
origin  https://github.com/Manzi-Elvis/Advanced-Git.git (push)
```

```bash
git branch -vv
```
Shows every local branch, which remote branch it tracks (if any), and whether it's ahead/behind:
```
  ft/branch      23b78e6 Implemented test 5
  ft/new-feature 6b849f7 Implemented core functionality for new feature
* main           a7259d4 [origin/main: ahead 1] Updated project readme
```
`[origin/main: ahead 1]` means your local `main` has 1 commit that `origin/main` doesn't have yet — a clear signal you need to push.

## Steps We Took

1. Pushed each new branch to the remote, setting up tracking with `-u`:
   ```bash
   git push -u origin ft/new-feature
   git push -u origin ft/branch
   ```
   Output confirms tracking was established:
   ```
   branch 'ft/new-feature' set up to track 'origin/ft/new-feature'.
   ```

2. Pushed `main`'s pending commit too:
   ```bash
   git push origin main
   ```
   ```
   33db0d4..a7259d4  main -> main
   ```
   This `old-hash..new-hash` notation shows exactly what moved on the remote.

## Quick Memory Hook
> **"`-u` on your first push = 'remember this pairing.'"**
> After `git push -u origin <branch>` once, every future `git push` / `git pull` on that branch works with no extra arguments — Git already knows where it goes.

> **"Remote branches are snapshots, not live views."**
> `origin/main` only updates when *you* fetch/pull/push — it won't reflect someone else's changes on GitHub until you sync.

## When You'd Use This in Real Life
- Every single time you start a new branch that others need visibility into, or that you want backed up off your machine — push it early with `-u`.
- `git branch -vv` is a fast, everyday sanity check before starting work: "am I in sync with the remote, or do I need to pull/push first?"