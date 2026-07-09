# Challenge 7: Working with Tags

## The Situation
Mark a specific point in your history — commonly a release — with a permanent, named reference: a tag.

## The Concept: Tags vs. Branches
| | Branch | Tag |
|---|---|---|
| Moves as new commits are added? | Yes | **No — permanently fixed** |
| Typical use | Ongoing line of development | Marking a specific point (release, milestone) |

**Two types of tags:**
- **Lightweight** — just a name pointing to a commit, nothing more.
  ```bash
  git tag v1.0
  ```
- **Annotated** — a full Git object with its own message, tagger name, and date. Generally the recommended choice for real releases, since it carries metadata.
  ```bash
  git tag -a v1.0 -m "Release version 1.0"
  ```

## Steps We Took

```bash
git tag v1.0
```
*(Note: tag creation gives no output on success — that's normal, not a sign of failure.)*

Verified:
```bash
git log --oneline --decorate
```
```
f041dd6 (HEAD -> main, tag: v1.0) chore: Add .gitignore to exclude /tmp
```
`(tag: v1.0)` now permanently marks this exact commit.

Pushed the tag (tags are **not** pushed automatically along with regular commits — they need an explicit push):
```bash
git push origin v1.0
```

## Quick Memory Hook
> **"Tags are permanent bookmarks; branches are moving pointers."**
> Once a tag is created, it stays pointing at that exact commit forever (unless you explicitly delete/move it) — regardless of how many new commits get added afterward.

> **"Tags don't travel with `git push` by default — push them explicitly."**

## When You'd Use This in Real Life
- Marking release versions (`v1.0.0`, `v2.3.1`) so you can always jump back to exactly what was shipped at that point.
- CI/CD pipelines often trigger deployment specifically off tag pushes, treating tags as the "this is ready to ship" signal.