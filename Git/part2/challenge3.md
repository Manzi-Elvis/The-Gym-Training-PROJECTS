# Challenge 3:

```bash
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> New-Item readme.txt -ItemType File


    Directory: C:\Users\elvis\Documents\PROJECTS\Advanced-Git


Mode                 LastWriteTime         Length Name                                                                   
----                 -------------         ------ ----                                                                   
-a----          7/7/2026   9:58 AM              0 readme.txt                                                             


PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> Set-Content readme.txt "Welcome to the Advanced-Git practice repository."
>> 
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add readme.txt
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "Updated project readme"
[main a7259d4] Updated project readme
 1 file changed, 1 insertion(+)
 create mode 100644 readme.txt
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --oneline
a7259d4 (HEAD -> main) Updated project readme
33db0d4 (origin/main, origin/HEAD) Implemented test 5
7ea480e chore: Create third and fourth files
c1e6467 chore: Create fifth file
61301e7 chore: Create initial file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git branch
  ft/branch
  ft/new-feature
* main
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> 
```