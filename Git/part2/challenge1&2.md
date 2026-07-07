# Challenge 1&2:

```bash
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git checkout -b ft/new-feature
Switched to a new branch 'ft/new-feature'
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git branch
  ft/branch
* ft/new-feature
  main
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> New-Item feature.txt -ItemType File


    Directory: C:\Users\elvis\Documents\PROJECTS\Advanced-Git


Mode                 LastWriteTime         Length Name                                                                   
----                 -------------         ------ ----                                                                   
-a----          7/7/2026   9:53 AM              0 feature.txt                                                            


PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> Set-Content feature.txt "Core functionality for the new feature"
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add feature.txt
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "Implemented core functionality for new feature"
[ft/new-feature 6b849f7] Implemented core functionality for new feature
 1 file changed, 1 insertion(+)
 create mode 100644 feature.txt
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --oneline
6b849f7 (HEAD -> ft/new-feature) Implemented core functionality for new feature
33db0d4 (origin/main, origin/HEAD, main) Implemented test 5
7ea480e chore: Create third and fourth files
c1e6467 chore: Create fifth file
61301e7 chore: Create initial file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> 
```