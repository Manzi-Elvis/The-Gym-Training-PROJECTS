# Challenge 1:

```bash
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git checkout main
Already on 'main'
Your branch is up to date with 'origin/main'.
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> Set-Content readme.txt "Welcome to the Advanced-Git practice repository. Work in progress on new updates..."
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git stash
Saved working directory and index state WIP on main: 227cbfd Merge branch 'ft/new-branch-from-commit'
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git>
```