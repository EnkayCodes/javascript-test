# How to Sync Your Fork with Latest Changes

When your instructor makes updates to the original repository, follow these steps to get the latest changes in your forked repository.

## First Time Setup (Only do this once)

Add the original repository as an "upstream" remote:

```bash
git remote add upstream https://github.com/osazeejedi/javascript-test.git
```

## Every Time You Want to Sync with Latest Changes

1. **Fetch the latest changes from the original repository:**
   ```bash
   git fetch upstream
   ```

2. **Switch to your main branch:**
   ```bash
   git checkout main
   ```

3. **Merge the latest changes:**
   ```bash
   git merge upstream/main
   ```

4. **Push the updates to your fork:**
   ```bash
   git push origin main
   ```

## Alternative: Single Command Method

If you're already on the main branch, you can use:
```bash
git pull upstream main
```

Then push to your fork:
```bash
git push origin main
```

## Quick Reference

**Complete workflow in one go:**
```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

## Troubleshooting

- If you get merge conflicts, resolve them in your code editor, then commit the changes
- If you're unsure which branch you're on, use `git branch` to check
- If you need to see your remotes, use `git remote -v`

---

**Remember:** 
- `upstream` = the original repository (instructor's repo)
- `origin` = your forked repository
- Always sync before starting new work to avoid conflicts
