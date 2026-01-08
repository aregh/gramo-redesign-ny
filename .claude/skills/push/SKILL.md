---
name: push
description: Committer og pusher endringer til GitHub. Genererer automatisk commit-melding og identifiserer bruker.
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*), Bash(git push:*), Bash(git diff:*)
---

**Identifiser bruker:** `/Users/arehalland/` → Are Halland (sjekk KONTEKST.md for andre)

**Flyt:**
1. `git status` - sjekk endringer
2. Generer commit-melding basert på filendringer (bokmål, verb først, maks 50 tegn)
3. `git add -A`
4. `git commit -m "[Melding] ([Bruker])"`
5. `git push origin main`
6. Rapporter: "✅ [Bruker]: [Melding]"

**Format:** `[Verb] [hva] [hvor] ([Bruker])`

**Eksempler:**
- "Forenkle /idag skill til minimal kontekstbruk (Are Halland)"
- "Oppdater KONTEKST.md med brukeridentifikasjon (Are Halland)"
- "Legg til møtereferat fra prioriteringsverksted (Bastian Daae)"
