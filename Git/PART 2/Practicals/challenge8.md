# Challenge 8:

```powershell
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git checkout ft/new-branch-from-commit
Switched to branch 'ft/new-branch-from-commit'
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> New-Item rebase-test.txt -ItemType File


    Directory: C:\Users\elvis\Documents\PROJECTS\Advanced-Git


Mode                 LastWriteTime         Length Name                                                                   
----                 -------------         ------ ----                                                                   
-a----          7/7/2026  10:18 AM              0 rebase-test.txt                                                        


PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> Set-Content rebase-test.txt "Content for rebase demonstration"
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add rebase-test.txt
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "Add rebase-test file for branch rebasing demo"
[ft/new-branch-from-commit 439b18b] Add rebase-test file for branch rebasing demo
 1 file changed, 1 insertion(+)
 create mode 100644 rebase-test.txt
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git rebase main
Successfully rebased and updated refs/heads/ft/new-branch-from-commit.
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --oneline --graph --all
* 4459abe (HEAD -> ft/new-branch-from-commit) Add rebase-test file for branch rebasing demo
*   227cbfd (main) Merge branch 'ft/new-branch-from-commit'
|\  
| * a7e9da2 Add merge-test file for branch merging demo
* | a7259d4 (origin/main, origin/HEAD) Updated project readme
* | 33db0d4 Implemented test 5
|/  
| * 23b78e6 (origin/ft/branch, ft/branch) Implemented test 5
|/  
* 7ea480e chore: Create third and fourth files
* c1e6467 chore: Create fifth file
* 61301e7 chore: Create initial file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> 
```