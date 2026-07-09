# Challenge 4:

```bash
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git config --global merge.tool vscode
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git config --global mergetool.vscode.cmd 'code --wait $MERGED'
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git checkout ft/conflict-demo
Switched to branch 'ft/conflict-demo'
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> Set-Content readme.txt "This is the CONFLICT-DEMO branch version - ATTEMPT 3, via mergetool."
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add readme.txt
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "chore: Update readme for mergetool demo"
[ft/conflict-demo 2b45364] chore: Update readme for mergetool demo
 1 file changed, 1 insertion(+), 1 deletion(-)
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> Set-Content readme.txt "This is the MAIN branch version - ATTEMPT 3, via mergetool."
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add readme.txt
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "chore: Update readme on main for mergetool demo"
[main 94f26c6] chore: Update readme on main for mergetool demo
 1 file changed, 1 insertion(+), 2 deletions(-)
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git merge ft/conflict-demo
Auto-merging readme.txt
CONFLICT (content): Merge conflict in readme.txt
Automatic merge failed; fix conflicts and then commit the result.
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git mergetool
Merging:
readme.txt

Normal merge conflict for 'readme.txt':
  {local}: modified file
  {remote}: modified file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git commit -m "chore: Resolve conflict using mergetool"
[main c232885] chore: Resolve conflict using mergetool
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> Get-Content readme.txt
This is the CONFLICT-DEMO branch version - ATTEMPT 3, via mergetool.
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git status
On branch main
Your branch is ahead of 'origin/main' by 3 commits.
  (use "git push" to publish your local commits)

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        readme.txt.orig

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> Remove-Item readme.txt.orig
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git config --global mergetool.keepBackup false
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git status
On branch main
Your branch is ahead of 'origin/main' by 3 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git push origin main
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 12 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (7/7), 841 bytes | 168.00 KiB/s, done.
Total 7 (delta 3), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (3/3), completed with 1 local object.
To https://github.com/Manzi-Elvis/Advanced-Git.git
   4f62c83..c232885  main -> main
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> 
```