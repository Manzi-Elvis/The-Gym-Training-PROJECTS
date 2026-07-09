# Challenge 2:

```bash
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git stash list
stash@{0}: WIP on main: 227cbfd Merge branch 'ft/new-branch-from-commit'
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git stash pop
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (7a119fc40c273a0392dfd48bf3b3185305412198)
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git>
```