# Challenge 9:

```powershell
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git branch -vv
  ft/branch               23b78e6 [origin/ft/branch] Implemented test 5
  ft/conflict-demo        2b45364 chore: Update readme for mergetool demo
  ft/improved-branch-name 4459abe [origin/ft/improved-branch-name] Add rebase-test file for branch rebasing demo
* main                    f041dd6 [origin/main: ahead 1] chore: Add .gitignore to exclude /tmp
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git push -u origin ft/conflict-demo
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
remote: 
remote: Create a pull request for 'ft/conflict-demo' on GitHub by visiting:
remote:      https://github.com/Manzi-Elvis/Advanced-Git/pull/new/ft/conflict-demo
remote: 
To https://github.com/Manzi-Elvis/Advanced-Git.git
 * [new branch]      ft/conflict-demo -> ft/conflict-demo
branch 'ft/conflict-demo' set up to track 'origin/ft/conflict-demo'.
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git branch -vv
  ft/branch               23b78e6 [origin/ft/branch] Implemented test 5
  ft/conflict-demo        2b45364 [origin/ft/conflict-demo] chore: Update readme for mergetool demo
  ft/improved-branch-name 4459abe [origin/ft/improved-branch-name] Add rebase-test file for branch rebasing demo
* main                    f041dd6 [origin/main: ahead 1] chore: Add .gitignore to exclude /tmp
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git>
```