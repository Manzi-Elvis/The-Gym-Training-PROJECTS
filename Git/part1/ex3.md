# Exercise 3:







```bash
pick 4ff7071 # chore: Create initial file
squash 6b7ffcf # chore: Create second file
pick 02445bf # chore: Create third and fourth files

# Rebase 02445bf onto fb868a4 (3 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup [-C | -c] <commit> = like "squash" but keep only the previous
#                    commit's log message, unless -C is used, in which case
#                    keep only this commit's message; -c is same as -C but
#                    opens the editor
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
#         create a merge commit using the original merge commit's
#         message (or the oneline, if no original merge commit was
#         specified); use -c <commit> to reword the commit message
# u, update-ref <ref> = track a placeholder for the <ref> to be updated
#                       to this position in the new commits. The <ref> is
#                       updated at the end of the rebase
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
~                                                                                                                         
~                                                                                                                         
.git/rebase-merge/git-rebase-todo[+] [unix] (16:23 06/07/2026)                                                     2,6 All
                                                              
```




```bash
# This is a combination of 2 commits.
# This is the 1st commit message:

chore: Create initial file

# This is the commit message #2:

chore: Create second file

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Mon Jul 6 15:58:45 2026 +0200
#
# interactive rebase in progress; onto fb868a4
# Last commands done (2 commands done):
#    pick 4ff7071 # chore: Create initial file
#    squash 6b7ffcf # chore: Create second file
# Next command to do (1 remaining command):
#    pick 02445bf # chore: Create third and fourth files
# You are currently rebasing branch 'main' on 'fb868a4'.
#
#
# Initial commit
#
# Changes to be committed:
#       new file:   test1.md
#       new file:   test2.md
#
~                                                                                                                         
~                                                                                                                         
~                                                                                                                         
~                                                                                                                         
~                                                                                                                         
~                                                                                                                         
~                                                                                                                         
.git/COMMIT_EDITMSG [unix] (16:25 06/07/2026)                                                                      1,1 All
"~/Documents/PROJECTS/Advanced-Git/.git/COMMIT_EDITMSG" [unix] 29L, 782B      
```




```bash
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git rebase -i --root
[detached HEAD 61301e7] chore: Create initial file
 Date: Mon Jul 6 15:58:45 2026 +0200
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test1.md
 create mode 100644 test2.md
Successfully rebased and updated refs/heads/main.
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --oneline
29005d4 (HEAD -> main) chore: Create third and fourth files
61301e7 chore: Create initial file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> 

```