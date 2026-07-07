# Exercise 5:


```bash
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git rebase -i HEAD~2
[detached HEAD d0f6621] chore: Create third and fourth files
 Date: Mon Jul 6 16:33:32 2026 +0200
 2 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test3.md
 create mode 100644 test4.md
Successfully rebased and updated refs/heads/main.
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> git log --oneline
d0f6621 (HEAD -> main) chore: Create third and fourth files
61301e7 chore: Create initial file
PS C:\Users\elvis\Documents\PROJECTS\Advanced-Git> 

```









```bash
pick ee4c22c # chore: Create Third File
squash 3118e23 # chore: Create fourth file

# Rebase 61301e7..3118e23 onto 61301e7 (2 commands)
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
~                                                                                                                         
.git/rebase-merge/git-rebase-todo[+] [unix] (16:35 06/07/2026)                                                     3,1 All
-- INSERT --
```