# Challenge 10:

```bash
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --oneline
4459abe (HEAD -> ft/improved-branch-name, origin/ft/improved-branch-name) Add rebase-test file for branch rebasing demo
227cbfd (main) Merge branch 'ft/new-branch-from-commit'
a7e9da2 Add merge-test file for branch merging demo
a7259d4 (origin/main, origin/HEAD) Updated project readme
33db0d4 Implemented test 5
7ea480e chore: Create third and fourth files
c1e6467 chore: Create fifth file
61301e7 chore: Create initial file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git checkout 7ea480e
Note: switching to '7ea480e'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at 7ea480e chore: Create third and fourth files
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git status
HEAD detached at 7ea480e
nothing to commit, working tree clean
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git branch
* (HEAD detached at 7ea480e)
  ft/branch
  ft/improved-branch-name
  main
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git checkout main
Previous HEAD position was 7ea480e chore: Create third and fourth files
Switched to branch 'main'
Your branch is ahead of 'origin/main' by 2 commits.
  (use "git push" to publish your local commits)
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git push origin main
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/Manzi-Elvis/Advanced-Git.git
   a7259d4..227cbfd  main -> main
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> 
```