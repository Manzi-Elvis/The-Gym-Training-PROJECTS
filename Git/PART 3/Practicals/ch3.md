# Challenge 3: 

```bash
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> Set-Content readme.txt "Welcome to the Advanced-Git practice repository. This is the MAIN branch version"
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add readme.txt
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "chore: Update readme text on main"
[main 8c379d3] chore: Update readme text on main
 1 file changed, 1 insertion(+), 1 deletion(-)
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git checkout -b ft/conflict-demo
>> 
Switched to a new branch 'ft/conflict-demo'
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> Set-Content readme.txt "Welcome to the Advanced-Git practice repository. This is the CONFLICT-DEMO branch version."
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add readme.txt
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "chore: Update readme text on ft/conflict-demo"
[ft/conflict-demo 0cb6851] chore: Update readme text on ft/conflict-demo
 1 file changed, 1 insertion(+), 1 deletion(-)
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git checkout main
Switched to branch 'main'
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git merge ft/conflict-demo
Updating 8c379d3..0cb6851
Fast-forward
 readme.txt | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)


#  DIDN'T GET A MERGE CONFLICT, SO I HAD TO START OVER
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> 
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> 
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git checkout ft/conflict-demo
Switched to branch 'ft/conflict-demo'
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> Set-Content readme.txt "Welcome to the Advanced-Git practice repository. This is the CONFLICT-DEMO branch version - ATTEMPT 2."
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add readme.txt
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "chore: Further update readme on ft/conflict-demo"
[ft/conflict-demo 02018f0] chore: Further update readme on ft/conflict-demo
 1 file changed, 1 insertion(+), 1 deletion(-)
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git checkout main
Switched to branch 'main'
Your branch is ahead of 'origin/main' by 2 commits.
  (use "git push" to publish your local commits)
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> Set-Content readme.txt "Welcome to the Advanced-Git practice repository. This is the MAIN branch version - ATTEMPT 2."
>> 
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add readme.txt
>> 
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "chore: Further update readme on main"
[main b2afd59] chore: Further update readme on main
 1 file changed, 1 insertion(+), 1 deletion(-)
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git merge ft/conflict-demo
Auto-merging readme.txt
CONFLICT (content): Merge conflict in readme.txt
Automatic merge failed; fix conflicts and then commit the result.
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git status
On branch main
Your branch is ahead of 'origin/main' by 3 commits.
  (use "git push" to publish your local commits)

You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add readme.txt
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "chore: Resolve merge conflict in readme.txt"
[main 4f62c83] chore: Resolve merge conflict in readme.txt
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> Get-Content readme.txt
Welcome to the Advanced-Git practice repository. This is the resolved version,
combining changes from both main and ft/conflict-demo.
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git push origin main
Enumerating objects: 17, done.
Counting objects: 100% (17/17), done.
Delta compression using up to 12 threads
Compressing objects: 100% (15/15), done.
Writing objects: 100% (15/15), 1.57 KiB | 69.00 KiB/s, done.
Total 15 (delta 8), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (8/8), completed with 1 local object.
To https://github.com/Manzi-Elvis/Advanced-Git.git
   227cbfd..4f62c83  main -> main
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> 
``