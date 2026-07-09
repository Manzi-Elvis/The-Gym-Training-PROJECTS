# Challenge 7:

```powershell
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git tag v1.0
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git tag -a v1.0 -m "Release version 1.0"
fatal: tag 'v1.0' already exists
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git tag v1.0
fatal: tag 'v1.0' already exists
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --oneline --decorate
f041dd6 (HEAD -> main, tag: v1.0) chore: Add .gitignore to exclude /tmp
c232885 (origin/main, origin/HEAD) chore: Resolve conflict using mergetool
94f26c6 chore: Update readme on main for mergetool demo
2b45364 (ft/conflict-demo) chore: Update readme for mergetool demo
4f62c83 chore: Resolve merge conflict in readme.txt
b2afd59 chore: Further update readme on main
02018f0 chore: Further update readme on ft/conflict-demo
0cb6851 chore: Update readme text on ft/conflict-demo
8c379d3 chore: Update readme text on main
227cbfd Merge branch 'ft/new-branch-from-commit'
a7e9da2 Add merge-test file for branch merging demo
a7259d4 Updated project readme
33db0d4 Implemented test 5
7ea480e chore: Create third and fourth files
c1e6467 chore: Create fifth file
61301e7 chore: Create initial file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git push origin v1.0
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 320 bytes | 160.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/Manzi-Elvis/Advanced-Git.git
 * [new tag]         v1.0 -> v1.0
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git>
```