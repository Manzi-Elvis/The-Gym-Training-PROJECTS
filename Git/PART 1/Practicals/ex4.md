# Exercise 4:

```bash
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git reset HEAD~1
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add test3.md
>> git commit -m "chore: Create Third File"
[main ee4c22c] chore: Create Third File
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test3.md
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git add test4.md
>> git commit -m "chore: Create fourth file"
[main 3118e23] chore: Create fourth file
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test4.md
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --oneline
3118e23 (HEAD -> main) chore: Create fourth file
ee4c22c chore: Create Third File
61301e7 chore: Create initial file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> 
```