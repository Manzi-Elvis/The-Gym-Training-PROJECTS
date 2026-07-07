# Challenge 4:

```powershell
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git remote -v
origin  https://github.com/Manzi-Elvis/Advanced-Git.git (fetch)
origin  https://github.com/Manzi-Elvis/Advanced-Git.git (push)
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git branch -vv
  ft/branch      23b78e6 Implemented test 5
  ft/new-feature 6b849f7 Implemented core functionality for new feature
* main           a7259d4 [origin/main: ahead 1] Updated project readme
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git push -u origin ft/new-feature
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 359 bytes | 359.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote: 
remote: Create a pull request for 'ft/new-feature' on GitHub by visiting:
remote:      https://github.com/Manzi-Elvis/Advanced-Git/pull/new/ft/new-feature
remote: 
To https://github.com/Manzi-Elvis/Advanced-Git.git
 * [new branch]      ft/new-feature -> ft/new-feature
branch 'ft/new-feature' set up to track 'origin/ft/new-feature'.
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git push -u origin ft/branch
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 300 bytes | 300.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote: 
remote: Create a pull request for 'ft/branch' on GitHub by visiting:
remote:      https://github.com/Manzi-Elvis/Advanced-Git/pull/new/ft/branch
remote: 
To https://github.com/Manzi-Elvis/Advanced-Git.git
 * [new branch]      ft/branch -> ft/branch
branch 'ft/branch' set up to track 'origin/ft/branch'.
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git push origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 352 bytes | 352.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/Manzi-Elvis/Advanced-Git.git
   33db0d4..a7259d4  main -> main
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git>
```