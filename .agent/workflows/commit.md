---
description: Prosedyre for å committe endringer til GitHub
---

Før du gjør noen endringer i git (commit/push), MÅ du følge denne prosedyren:

1.  **Sjekk `CONTRIBUTING.md`**:
    *   Les filen for å bekrefte gjeldende regler.
    *   **Språk:** Commit-meldinger SKAL være på **Bokmål**.
    *   **Format:** Meldingen skal starte med et **Verb** (f.eks. "Legg til", "Oppdater", "Fjern").

2.  **Synkroniser:**
    *   Kjør `git pull --rebase origin main` FØR du prøver å pushe.
    *   Løs eventuelle konflikter før du går videre.

3.  **Utførelse:**
    *   Stage endringer: `git add .` (eller spesifikke filer).
    *   Commit: `git commit -m "Verb: Beskrivelse på bokmål"`
    *   Push: `git push origin main`

// turbo
4. Sjekk status etter push med `git status`.
