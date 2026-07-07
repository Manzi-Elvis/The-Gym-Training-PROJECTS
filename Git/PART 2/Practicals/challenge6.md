# Challenge 6:

```bash
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --oneline
a7259d4 (HEAD -> main, origin/main, origin/HEAD) Updated project readme
33db0d4 Implemented test 5
7ea480e chore: Create third and fourth files
c1e6467 chore: Create fifth file
61301e7 chore: Create initial file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git checkout -b ft/new-branch-from-commit 7ea480e
Switched to a new branch 'ft/new-branch-from-commit'
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git checkout -b ft/new-branch-from-commit 7ea480e
fatal: a branch named 'ft/new-branch-from-commit' already exists
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --oneline
7ea480e (HEAD -> ft/new-branch-from-commit) chore: Create third and fourth files
c1e6467 chore: Create fifth file
61301e7 chore: Create initial file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git branch
  ft/branch
* ft/new-branch-from-commit
  main
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git>
```