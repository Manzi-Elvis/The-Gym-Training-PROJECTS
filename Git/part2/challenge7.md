# Challenge 7:

```powershell
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> New-Item merge-test.txt -ItemType File


    Directory: C:\Users\elvis\Documents\PROJECTS\Advanced-Git


Mode                 LastWriteTime         Length Name                                                                   
----                 -------------         ------ ----                                                                   
-a----          7/7/2026  10:13 AM              0 merge-test.txt                                                         


PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> Set-Content merge-test.txt "Content for merge branch demonstration"
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add merge-test.txt
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "Add merge-test file for branch merging demo"
[ft/new-branch-from-commit a7e9da2] Add merge-test file for branch merging demo
 1 file changed, 1 insertion(+)
 create mode 100644 merge-test.txt
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git merge ft/new-branch-from-commit
Merge made by the 'ort' strategy.
 merge-test.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 merge-test.txt
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --oneline --graph
*   227cbfd (HEAD -> main) Merge branch 'ft/new-branch-from-commit'
|\  
| * a7e9da2 (ft/new-branch-from-commit) Add merge-test file for branch merging demo
* | a7259d4 (origin/main, origin/HEAD) Updated project readme
* | 33db0d4 Implemented test 5
|/  
* 7ea480e chore: Create third and fourth files
* c1e6467 chore: Create fifth file
* 61301e7 chore: Create initial file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git>
```