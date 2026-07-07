# Challenge 10:

```bash
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git branch
  ft/branch
* ft/new-branch-from-commit
  main
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git branch -m ft/new-branch-from-commit ft/improved-branch-name
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git branch -m ft/improved-branch-name
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git branch
  ft/branch
* ft/improved-branch-name
  main
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git push -u origin ft/improved-branch-name
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
Delta compression using up to 12 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (8/8), 899 bytes | 449.00 KiB/s, done.
Total 8 (delta 3), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (3/3), completed with 1 local object.
remote: 
remote: Create a pull request for 'ft/improved-branch-name' on GitHub by visiting:
remote:      https://github.com/Manzi-Elvis/Advanced-Git/pull/new/ft/improved-branch-name
remote: 
To https://github.com/Manzi-Elvis/Advanced-Git.git
 * [new branch]      ft/improved-branch-name -> ft/improved-branch-name
branch 'ft/improved-branch-name' set up to track 'origin/ft/improved-branch-name'.
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> 
```