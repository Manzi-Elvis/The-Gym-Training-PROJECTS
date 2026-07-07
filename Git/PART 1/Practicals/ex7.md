# Exercise 7:

```bash
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> New-Item test5.md -ItemType File


    Directory: C:\Users\elvis\Documents\PROJECTS\Advanced-Git


Mode                 LastWriteTime         Length Name                                                                   
----                 -------------         ------ ----                                                                   
-a----          7/6/2026   6:16 PM              0 test5.md                                                               


PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add test5.md
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "chore: Create fifth file"
[main 62957b5] chore: Create fifth file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test5.md
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --oneline
62957b5 (HEAD -> main) chore: Create fifth file
d0f6621 chore: Create third and fourth files
61301e7 chore: Create initial file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git rebase -i HEAD~3
fatal: invalid upstream 'HEAD~3'
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git rebase -i --root
Successfully rebased and updated refs/heads/main.
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --onelone
fatal: unrecognized argument: --onelone
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --oneline   
7ea480e (HEAD -> main) chore: Create third and fourth files
c1e6467 chore: Create fifth file
61301e7 chore: Create initial file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git>
```