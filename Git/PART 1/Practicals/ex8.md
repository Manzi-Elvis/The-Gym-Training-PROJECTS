# Exercise 8:

```bash
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git checkout -b ft/branch
Switched to a new branch 'ft/branch'
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> New-Item test5.md -ItemType File
New-Item : The file 'C:\Users\elvis\Documents\PROJECTS\Advanced-Git\test5.md' already exists.
At line:1 char:1
+ New-Item test5.md -ItemType File
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : WriteError: (C:\Users\elvis\...ed-Git\test5.md:String) [New-Item], IOException
    + FullyQualifiedErrorId : NewItemIOError,Microsoft.PowerShell.Commands.NewItemCommand
 
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> New-Item test6.md -ItemType File


    Directory: C:\Users\elvis\Documents\PROJECTS\Advanced-Git


Mode                 LastWriteTime         Length Name                                                                   
----                 -------------         ------ ----                                                                   
-a----          7/6/2026   6:26 PM              0 test6.md                                                               


PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> Set-Content test6.md "test 5 content"
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add test6.md
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "Implemented test 5"
>> 
[ft/branch 23b78e6] Implemented test 5
 1 file changed, 1 insertion(+)
 create mode 100644 test6.md
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --oneline
23b78e6 (HEAD -> ft/branch) Implemented test 5
7ea480e (main) chore: Create third and fourth files
c1e6467 chore: Create fifth file
61301e7 chore: Create initial file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git checkout main
Switched to branch 'main'
Your branch is based on 'origin/main', but the upstream is gone.
  (use "git branch --unset-upstream" to fixup)
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git cherry-pick 23b78e6
[main 33db0d4] Implemented test 5
 Date: Mon Jul 6 18:27:13 2026 +0200
 1 file changed, 1 insertion(+)
 create mode 100644 test6.md
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --oneline
33db0d4 (HEAD -> main) Implemented test 5
7ea480e chore: Create third and fourth files
c1e6467 chore: Create fifth file
61301e7 chore: Create initial file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> 
```