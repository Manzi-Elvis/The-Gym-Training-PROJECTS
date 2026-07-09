# Challenge 3: Branch Merging Conflicts (Manual Resolution)

## The Situation
Deliberately create a real merge conflict, then resolve it by hand.

## The Concept: When Does a Conflict Actually Happen?
A conflict only occurs when **both branches change the same lines of the same file, independently, after diverging from a common ancestor**. Critically: if one branch is simply "ahead" of the other with no competing changes, Git can resolve it automatically (fast-forward or clean auto-merge) — no conflict at all.

## ⚠️ Our First Attempt Didn't Conflict — Here's Why
We initially branched `ft/conflict-demo` off `main`'s latest commit, then only made changes on the branch — `main` itself never moved afterward. Result:
```
Updating 8c379d3..0cb6851
Fast-forward
```
No conflict, because there was nothing to reconcile — `main` had zero competing changes. This is an important lesson: **a "conflict-demo" branch doesn't guarantee a conflict** unless both sides actually diverge with real competing edits.

## The Fix: Force Genuine Divergence
Both branches needed a **new commit each, on the same line, after the split point**:

```bash
# On ft/conflict-demo:
Set-Content readme.txt "...CONFLICT-DEMO branch version - ATTEMPT 2."
git add readme.txt
git commit -m "chore: Further update readme on ft/conflict-demo"

# Back on main:
Set-Content readme.txt "...MAIN branch version - ATTEMPT 2."
git add readme.txt
git commit -m "chore: Further update readme on main"

# Now attempt the merge:
git merge ft/conflict-demo
```

This time:
```
Auto-merging readme.txt
CONFLICT (content): Merge conflict in readme.txt
Automatic merge failed; fix conflicts and then commit the result.
```

## Resolving the Conflict Manually

**Step 1:** Check status — confirms `readme.txt` is "both modified."
```bash
git status
```

**Step 2:** Open the file. Git inserts conflict markers directly into the content:
```
<<<<<<< HEAD
Welcome to the Advanced-Git practice repository. This is the MAIN branch version - ATTEMPT 2.
=======
Welcome to the Advanced-Git practice repository. This is the CONFLICT-DEMO branch version - ATTEMPT 2.
>>>>>>> ft/conflict-demo
```

Reading the markers:
- `<<<<<<< HEAD` down to `=======` → **your current branch's version**
- `=======` down to `>>>>>>> <branch>` → **the incoming branch's version**

**Step 3:** Manually edit the file to whatever the final content should be, **deleting all three marker lines entirely**. We wrote a combined, human-authored resolution:
```
Welcome to the Advanced-Git practice repository. This is the resolved version,
combining changes from both main and ft/conflict-demo.
```

**Step 4:** Stage and commit:
```bash
git add readme.txt
git commit -m "chore: Resolve merge conflict in readme.txt"
```

*(Note: with a conflict already resolved and staged, `git commit` with no `-m` — or even just `-m` with a message — completes the merge; Git already knows this is a merge commit from context.)*

## Verification
```bash
Get-Content readme.txt
```
```
Welcome to the Advanced-Git practice repository. This is the resolved version,
combining changes from both main and ft/conflict-demo.
```
Clean — no leftover `<<<<<<<`, `=======`, or `>>>>>>>` markers.

## Quick Memory Hook
> **"No divergence, no conflict."**
> If you want to practice/demo a conflict, make sure BOTH sides commit competing changes to the same lines after the branches split — not just one side.

> **"HEAD = mine, the branch name after `=======` = theirs."**
> Conflict markers always show your current branch's version first.

## When You'd Use This in Real Life
- This is one of the most common real-world Git situations — any time two people (or you across two branches) touch the same lines of the same file before merging.
- Always double check the file for lingering marker syntax before committing — committing with markers still in place introduces broken content into your codebase.