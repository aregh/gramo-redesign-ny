# Pushpull

# PushPull Skill

Full sync: pull latest changes, then commit and push local changes.

## Usage
```
/pushpull [optional commit message]
```

## Behavior

1. Navigate to repository root
2. **Pull** latest changes from origin
3. Check for local changes
4. If changes exist:
  - Add all changes (`git add .`)
  - Commit with provided message or auto-generated timestamp
  - Push to origin main
5. If no local changes after pull, just report pull status

## Implementation

When this skill is invoked:

1. Navigate to repository root
2. **First: Pull from origin**
  - Check for merge conflicts
  - If conflicts, stop and guide user
3. **Then: Push local changes**
  - Check git status
  - If changes exist:
    - Stage all changes
    - If user provided a message, use it
    - Otherwise generate: "Auto-commit: YYYY-MM-DD HH:MM:SS"
    - Commit with message
    - Push to origin main
4. Report full status to user

## Examples

```bash
# Full sync with auto-generated message
/pushpull

# Full sync with custom message
/pushpull "feat: Add new statistics prototype"
```

## Error Handling

- If no git repository found, show error
- If pull fails (network/auth), show helpful message
- If merge conflicts occur during pull, stop and guide user
- If push fails (network/auth), show helpful message
- If no changes to commit after pull, inform user

## Output Format

Use emojis for visual feedback:
- 📂 Repository path
- 🔽 Pulling changes
- ➕ Adding changes
- 💾 Committing
- 🚀 Pushing
- ✅ Success
- ❌ Error
- ⚠️ Warnings (conflicts)
- ✨ No changes to push
