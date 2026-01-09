---
name: rask-prototype
description: Lag raske wireframe-prototyper for design-konsept basert på stikkord. Bruk for UI-ideer, konsepttesting, eller skisser. Parametrar bruker eller konseptnamn.
---

# Rask Prototype

## Formål
Genererer raske wireframe/skisse-stil HTML-prototyper for konsepttesting og idéutforsking. Prototypene har Gramo-farger og samme design-språk som eksisterende prototyper.

## Når skal du bruke denne skillen?
- Når brukeren ber om "rask prototype", "wireframe", "skisse" eller "konsept"
- Når brukeren vil teste en UI-idé raskt
- Når brukeren gir stikkord for et designkonsept

## Instruksjoner

### 1. Hent kontekst
- Spør brukeren om: **konseptnamn**, **hovedfunksjon**, og **målgruppe** (hvis ikke oppgitt)
- Bruk eksisterende prototyper under `Design/Prototyper/Statistikk/Statistikk-2/` som referanse

### 2. Generer HTML-prototype

**Standard plassering:**
```
Design/Prototyper/Statistikk/Statistikk-2/konsept-[bokstav]-[navn].html
```

**VIKTIG - Fil-struktur:**
- **ALLE nye prototyper** plasseres direkte i `Design/Prototyper/Statistikk/Statistikk-2/`
- Filnavn skal være `konsept-[bokstav]-[navn].html` (f.eks. `konsept-a-gramo-fokus.html`)
- Finn neste ledige bokstav ved å sjekke eksisterende filer i mappen
- Oppdater alltid `index.html` i samme mappe med den nye prototypen
- Link fra konsept tilbake til `index.html` i footer

**Standard wireframe-stil (som konsept-a-storytelling.html):**
- Prototype-banner med gul bakgrunn (`.prototype-banner`)
- Grid-basert bakgrunn (`background-size: 20px 20px`)
- Wireframe-boksar med stiplede kantlinjer (`.wireframe-box`)
- Annotasjonar med 💡 (`.annotation`) og spørsmål med ❓ (`.question`)
- Placeholders for bilete/diagram (`.placeholder`)
- Design-notater nederst (`.design-notes`)

**Gramo fargepalett:**
```css
--sketch-blue: #2563eb;
--sketch-light: #dbeafe;
--sketch-gray: #64748b;
--sketch-bg: #f8fafc;
--wireframe: #cbd5e1;
```

**Grunnleggjande seksjonar:**
1. **Prototype-banner** - markerer at dette er ein prototype
2. **Hero/Hook** - hovudvisualisering eller hook
3. **Konsept-innhald** - kjernekomponentar med wireframe-boksar
4. **Design-notater** - styrkar, svakheiter, spørsmål

### 3. Inkluder designnotat

Legg alltid til en `.design-notes`-seksjon nederst med:
- **Styrke:** Hva er bra med konseptet?
- **Svakhet:** Hva er utfordringer?
- **Best for:** Hvilket brukstilfelle passer dette?
- **Spørsmål:** Hva må avklares?

### 4. Lagre filen og oppdater index

**Prosess:**
1. **Finn neste bokstav:** Sjekk eksisterende filer i `Design/Prototyper/Statistikk/Statistikk-2/` for å finne neste ledige bokstav (A, B, C, etc.)
2. **Lagre prototype:** `Design/Prototyper/Statistikk/Statistikk-2/konsept-[bokstav]-[navn].html`
3. **Oppdater index.html:** Legg til nytt kort i galleriet i `Design/Prototyper/Statistikk/Statistikk-2/index.html` med:
   - Riktig card-tag basert på type (storytelling, compare, metadata, etc.)
   - Emoji-ikon
   - Tittel med bokstav
   - Beskrivelse
   - Feature-chips
4. **Legg til footer-link:** `<a href="index.html">← Tilbake til oversikt</a>`
5. **Kopier til docs:** Kopier den nye filen til `docs/` for GitHub Pages publisering

### 5. Vis resultatet

Informer brukeren om:
- Filsti til prototypen (både i Design/Prototyper og docs/)
- Hvordan åpne den i nettleser (`open [filsti]` på macOS)
- Forslag til videre iterasjoner

## Eksempel

**Bruker:** `/rask-prototype ISRC-registrering kompakt verktøy`

**Output:**
1. Sjekker eksisterende prototyper i `Design/Prototyper/Statistikk/Statistikk-2/` (ser A-R er brukt)
2. Oppretter `Design/Prototyper/Statistikk/Statistikk-2/konsept-s-kompakt-verktoy.html`
3. Genererer wireframe med:
   - Hero: "Registrer ISRC på 3 steg"
   - Steg 1-3 med wireframe-bokser
   - Forklaringsannotasjoner
   - Designnotat med styrker/svakheter
   - Footer med link til `index.html`
4. Oppdaterer `Design/Prototyper/Statistikk/Statistikk-2/index.html` med nytt galleri-kort
5. Kopierer til `docs/konsept-s-kompakt-verktoy.html`
6. Melder tilbake: "Prototype laget: [filsti]. Åpne med: `open [filsti]`"

## Tips
- Hold det enkelt - wireframes skal være raske å lage
- Bruk placeholders (`[Bilde]`, `[Diagram]`) i stedet for ekte innhold
- Fokuser på struktur og flyt, ikke detaljer
- Annoter flittig med 💡 og ❓
- Inkluder alltid design-notater for refleksjon
- **VIKTIG:** Bruk bokmål, ikke nynorsk i alle prototyper
- **VIKTIG:** Alle prototyper legges i `Design/Prototyper/Statistikk/Statistikk-2/`

## Relaterte filer
- Eksempel: `Design/Prototyper/Statistikk/Statistikk-2/konsept-a-gramo-fokus.html`
- Eksempel: `Design/Prototyper/Statistikk/Statistikk-2/konsept-a-storytelling.html`
- Eksempel: `Design/Prototyper/Statistikk/Statistikk-2/index.html`
