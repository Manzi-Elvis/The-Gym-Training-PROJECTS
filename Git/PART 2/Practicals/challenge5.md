# Chalenge 5:

```bash
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git branch -d ft/new-feature
warning: deleting branch 'ft/new-feature' that has been merged to
         'refs/remotes/origin/ft/new-feature', but not yet merged to HEAD
Deleted branch ft/new-feature (was 6b849f7).
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git branch -D ft/new-feature
error: branch 'ft/new-feature' not found
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git push origin --delete ft/new-feature
To https://github.com/Manzi-Elvis/Advanced-Git.git
 - [deleted]         ft/new-feature
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git branch -a
  ft/branch
* main
  remotes/origin/HEAD -> origin/main
  remotes/origin/ft/branch
  remotes/origin/main
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> 
```