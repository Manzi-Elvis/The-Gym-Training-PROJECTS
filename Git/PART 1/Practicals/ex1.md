# Exercise 1:

```bash
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> New-Item test1.md -ItemType File
>> New-Item test2.md -ItemType File
>> New-Item test3.md -ItemType File
>> New-Item test4.md -ItemType File


    Directory: C:\Users\elvis\Documents\PROJECTS\Advanced-Git


Mode                 LastWriteTime         Length Name                                                                   
----                 -------------         ------ ----                                                                   
-a----          7/6/2026   3:58 PM              0 test1.md                                                               
-a----          7/6/2026   3:58 PM              0 test2.md                                                               
-a----          7/6/2026   3:58 PM              0 test3.md                                                               
-a----          7/6/2026   3:58 PM              0 test4.md                                                               


PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add test1.md
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "chore: Create initial file"
[main (root-commit) 4ff7071] chore: Create initial file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test1.md
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add test2.md
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "chore: Create another file"
[main 64dc976] chore: Create another file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test2.md
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add test3.md
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "chore: Create third and fourth files"
[main 58157c7] chore: Create third and fourth files
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test3.md
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git status
On branch main
Your branch is based on 'origin/main', but the upstream is gone.
  (use "git branch --unset-upstream" to fixup)

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        test4.md

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --oneline
58157c7 (HEAD -> main) chore: Create third and fourth files
64dc976 chore: Create another file
4ff7071 chore: Create initial file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git status
On branch main
Your branch is based on 'origin/main', but the upstream is gone.
  (use "git branch --unset-upstream" to fixup)

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        test4.md

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add test4.md
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit --amend -m "chore: Create third and fourth files"
[main 9901cbf] chore: Create third and fourth files
 Date: Mon Jul 6 15:59:10 2026 +0200
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test3.md
 create mode 100644 test4.md
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git status
On branch main
Your branch is based on 'origin/main', but the upstream is gone.
  (use "git branch --unset-upstream" to fixup)

nothing to commit, working tree clean
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --oneline
9901cbf (HEAD -> main) chore: Create third and fourth files
64dc976 chore: Create another file
4ff7071 chore: Create initial file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> 
```