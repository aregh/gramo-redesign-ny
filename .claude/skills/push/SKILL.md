---
name: push
description: Committer og pusher endringer til GitHub (git push). Bruk når brukeren ber om å pushe, committe, eller publisere endringer. Identifiserer bruker automatisk og inkluderer brukerens navn i commit-melding.
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*), Bash(git push:*), Bash(pwd:*)
---

# Git Push - Commit og push til GitHub

## Hva denne skill gjør

Legger til endringer (git add), committer med melding, og pusher til GitHub. Identifiserer automatisk hvem som bruker kommandoen og inkluderer dette i commit-meldingen for sporbarhet.

## Når skal du bruke denne

Bruk denne skill når brukeren:
- Ber om å "push til GitHub"
- Vil "committe endringer"
- Skal "publisere arbeid"
- Avslutter arbeidsdagen

## Instruksjoner

1. **Identifiser bruker** basert på working directory:
   - `/Users/arehalland/` → Are Halland
   - Andre stier → Sjekk KONTEKST.md for Bastian/Torstein sine stier

2. **Sjekk hva som er endret:**
   ```bash
   git status
   ```
   - Hvis ingen endringer: Informer brukeren
   - Hvis endringer: Fortsett til steg 3

3. **Spør brukeren om commit-melding:**
   - "Hva er en god commit-melding for disse endringene?"
   - Sørg for at meldingen:
     - Er på bokmål
     - Starter med verb (Oppdater, Legg til, Fjern, etc.)
     - Beskriver hva og hvor
     - Maks 50 tegn i tittellinje

4. **Add alle endringer:**
   ```bash
   git add -A
   ```

5. **Commit med brukeridentifikasjon:**
   ```bash
   git commit -m "[Commit-melding] ([Bruker])"
   ```

   Eksempel:
   ```bash
   git commit -m "Oppdater KONTEKST.md med Fase 2-status (Are Halland)"
   ```

6. **Push til GitHub:**
   ```bash
   git push origin main
   ```

7. **Rapporter resultat:**
   - Hvis suksess: "✅ [Bruker]: Endringer pushet til GitHub"
   - Hvis feil: Forklar problemet og foreslå løsning

## Best practices

- Alltid sjekk git status først
- Inkluder brukerens navn i commit-melding for sporbarhet
- Bruk beskrivende commit-meldinger på bokmål
- Ved push-feil: ofte løses med `git pull` først

## Eksempel på bruk

```
Bruker: "Push endringene mine"
Claude: "Jeg ser at du har endret 3 filer. Hva er en god commit-melding?"
Bruker: "Oppdater LOGG med møtereferat"
Claude: [Committer og pusher]
Claude: "✅ Are Halland: Endringer pushet til GitHub med melding 'Oppdater LOGG med møtereferat (Are Halland)'"
```

## Commit-melding format

**Standard format:**
```
[Verb] [hva] [hvor] ([Bruker])
```

**Eksempler:**
- "Oppdater KONTEKST.md med brukeridentifikasjon (Are Halland)"
- "Legg til pull og push skills (Are Halland)"
- "Arkiver gamle prosjektmandater (Bastian Daae)"
- "Rydd opp i Innhold/-struktur (Bastian Daae)"
