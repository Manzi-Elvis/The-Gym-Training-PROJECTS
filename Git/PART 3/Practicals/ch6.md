# Challenge 6:

```bash
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> New-Item .gitignore -ItemType File


    Directory: C:\Users\elvis\Documents\PROJECTS\Advanced-Git


Mode                 LastWriteTime         Length Name                                                                   
----                 -------------         ------ ----                                                                   
-a----          7/9/2026   9:47 AM              0 .gitignore                                                             


PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> Add-Content .gitignore "/tmp"
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> New-Item tmp -ItemType Directory


    Directory: C:\Users\elvis\Documents\PROJECTS\Advanced-Git


Mode                 LastWriteTime         Length Name                                                                   
----                 -------------         ------ ----                                                                   
d-----          7/9/2026   9:47 AM                tmp                                                                    


PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> New-Item tmp/scratch.txt -ItemType File


    Directory: C:\Users\elvis\Documents\PROJECTS\Advanced-Git\tmp


Mode                 LastWriteTime         Length Name                                                                   
----                 -------------         ------ ----                                                                   
-a----          7/9/2026   9:48 AM              0 scratch.txt                                                            


PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add .gitignore
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "chore: Add .gitignore to exclude /tmp"
[main f041dd6] chore: Add .gitignore to exclude /tmp
 1 file changed, 1 insertion(+)
 create mode 100644 .gitignore
```