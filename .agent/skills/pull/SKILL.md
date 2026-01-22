---
name: pull
description: Henter siste endringer fra GitHub (git pull). Bruk når brukeren ber om å hente endringer, synkronisere med GitHub, eller oppdatere lokal kopi. Identifiserer bruker automatisk basert på sti.
allowed-tools: Bash(git pull:*), Bash(git status:*), Bash(pwd:*)
---

# Git Pull - Hent endringer fra GitHub

## Hva denne skill gjør

Henter og fletter inn siste endringer fra GitHub-repositoryet til din lokale branch. Identifiserer automatisk hvem som bruker kommandoen basert på working directory.

## Når skal du bruke denne

Bruk denne skill når brukeren:
- Ber om å "pull fra GitHub"
- Vil "hente siste endringer"
- Skal "synkronisere med remote"
- Starter arbeidsdagen (før redigering)

## Instruksjoner

1. **Identifiser bruker** basert på working directory:
   - `/Users/arehalland/` → Are Halland
   - Andre stier → Sjekk KONTEKST.md for Bastian/Torstein sine stier

2. **Sjekk git status først:**
   ```bash
   git status
   ```
   - Hvis det er ucommitted endringer, STOPP og spør brukeren hva de vil gjøre

3. **Pull endringer:**
   ```bash
   git pull origin main
   ```

4. **Rapporter resultat:**
   - Hvis suksess: "✅ [Bruker]: Hentet siste endringer fra GitHub"
   - Hvis konflikter: Guide brukeren gjennom løsning
   - Hvis feil: Forklar problemet tydelig

5. **Vis status etter pull:**
   ```bash
   git status
   ```

## Best practices

- Alltid sjekk git status før pull
- Hvis lokale endringer: spør om commit eller stash først
- Rapporter merge-konflikter tydelig
- Inkluder brukerens navn i alle meldinger for sporbarhet

## Eksempel på bruk

```
Bruker: "Hent siste endringer"
Agent: "✅ Are Halland: Hentet siste endringer fra GitHub. 3 filer oppdatert."
```
