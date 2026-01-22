---
name: rask-prototype
description: Lag raske wireframe-prototyper. Støtter både nye konsepter og iterasjoner på eksisterende. Format [tema]-[stikkord]-v[nr]-[YYYYMMDD].html
---

# Rask Prototype

## Formål
Genererer raske wireframe/skisse-stil HTML-prototyper for konsepttesting og idéutforsking. Prototypene har Gramo-farger og samme design-språk som eksisterende prototyper.

**Nøkkelfunksjon:** Rask iterasjon - skriv stikkord, få prototype.

## Når skal du bruke denne skillen?
- Når brukeren ber om "rask prototype", "wireframe", "skisse" eller "konsept"
- Når brukeren vil lage ny versjon av eksisterende prototype
- Når brukeren gir stikkord for et designkonsept

## Input-format

Skillen støtter **to bruksmåter**:

### 1. Ny prototype
```
/rask-prototype [tema] [stikkord/beskrivelse]
```
**Eksempel:** `/rask-prototype statistikk kompakt ISRC-verktøy`
**Output:** `statistikk-kompakt-isrc-verktoy-v1-20260110.html`

### 2. Ny versjon av eksisterende
```
/rask-prototype [eksisterende-konsept] [stikkord for endringer]
```
**Eksempel:** `/rask-prototype statistikk-storytelling med fokus på geografi`
**Output:** `statistikk-storytelling-v2-20260110.html`

## Instruksjoner

### 1. Analyser input og sjekk eksisterende

**Prosess:**
1. **Parse input** - identifiser tema og stikkord
2. **Sjekk eksisterende** - søk i `Design/Prototyper/` etter lignende prototyper
3. **Bestem versjon:**
   - Hvis eksisterende konsept funnet → neste versjonsnummer (v2, v3, etc.)
   - Hvis nytt konsept → v1
4. **Generer filnavn:** `[tema]-[stikkord]-v[nr]-[YYYYMMDD].html`

**Viktig:**
- Hvis brukeren spesifiserer eksisterende konsept (f.eks. "statistikk-storytelling") → les den filen først for kontekst
- Hvis helt nytt konsept → bruk eksisterende prototyper som stilreferanse

### 2. Generer HTML-prototype

**Standard plassering:**
```
Design/Prototyper/[tema]-[stikkord]-v[nr]-[YYYYMMDD].html
```

**VIKTIG - Fil-struktur:**
- **ALLE prototyper** plasseres direkte i `Design/Prototyper/` (rot-nivå)
- Filnavn følger formatet: `[tema]-[stikkord]-v[nr]-[YYYYMMDD].html`
- Bruk dagens dato i ISO-format (YYYYMMDD)
- Hver prototype er self-contained HTML (ingen eksterne avhengigheter)
- Inkluder alltid footer med link til `index.html`

**Standard wireframe-stil:**
- Prototype-banner med gul bakgrunn (`.prototype-banner`)
- Grid-basert bakgrunn (`background-size: 20px 20px`)
- Wireframe-bokser med stiplede kantlinjer (`.wireframe-box`)
- Annotasjoner med 💡 (`.annotation`) og spørsmål med ❓ (`.question`)
- Placeholders for bilder/diagram (`.placeholder`)
- Design-notater nederst (`.design-notes`)
- Footer med link tilbake til oversikt

**Gramo fargepalett:**
```css
--sketch-blue: #2563eb;
--sketch-light: #dbeafe;
--sketch-gray: #64748b;
--sketch-bg: #f8fafc;
--wireframe: #cbd5e1;
```

**Grunnleggende seksjoner:**
1. **Prototype-banner** - markerer at dette er en prototype
2. **Hero/Hook** - hovedvisualisering eller hook
3. **Konsept-innhold** - kjernekomponenter med wireframe-bokser
4. **Design-notater** - styrker, svakheter, spørsmål
5. **Footer** - link til `index.html`

### 3. Inkluder designnotat

Legg alltid til en `.design-notes`-seksjon nederst med:
- **Styrke:** Hva er bra med konseptet?
- **Svakhet:** Hva er utfordringer?
- **Best for:** Hvilket brukstilfelle passer dette?
- **Spørsmål:** Hva må avklares?

### 4. Lagre filen

**Prosess:**
1. **Generer filnavn** basert på dagens dato (YYYYMMDD)
2. **Lagre prototype:** `Design/Prototyper/[filnavn].html`
3. **IKKE oppdater index.html** - brukeren gjør dette manuelt ved behov

### 5. Vis resultatet

Informer brukeren om:
- Filsti til prototypen
- Versjonsnummer (hvis iterasjon)
- Hvordan åpne den i nettleser (`open [filsti]` på macOS)
- Hint: Gå til `Design/Prototyper/index.html` for å legge til i oversikten

## Eksempler

### Eksempel 1: Ny prototype

**Bruker:** `/rask-prototype om-gramo FAQs med kategorisering`

**Output:**
1. Sjekker eksisterende prototyper i `Design/Prototyper/`
2. Finner `om-gramo-tekstvariasjoner-v1-20260109.html`
3. Dette er nytt konsept (FAQs) → v1
4. Genererer filnavn: `om-gramo-faqs-v1-20260110.html`
5. Lager prototype med:
   - FAQ-struktur med kategorier
   - Wireframe-bokser for spørsmål/svar
   - Design-notater
   - Footer med link til index.html
6. Lagrer i `Design/Prototyper/om-gramo-faqs-v1-20260110.html`
7. Melder tilbake: "✅ Prototype laget: Design/Prototyper/om-gramo-faqs-v1-20260110.html"

### Eksempel 2: Ny versjon (iterasjon)

**Bruker:** `/rask-prototype statistikk-storytelling med fokus på geografi`

**Output:**
1. Finner `statistikk-storytelling-v1-20260105.html`
2. Leser v1 for kontekst og stil
3. Neste versjon → v2
4. Genererer filnavn: `statistikk-storytelling-v2-20260110.html`
5. Lager prototype basert på v1, men med:
   - Geografisk kart-element
   - Storytelling-struktur bevart
   - Geo-data integrert i narrativ
   - Design-notater: forskjeller fra v1
   - Footer med link til index.html
6. Lagrer i `Design/Prototyper/statistikk-storytelling-v2-20260110.html`
7. Melder tilbake: "✅ v2 laget basert på v1. Se Design/Prototyper/statistikk-storytelling-v2-20260110.html"

### Eksempel 3: Variant med nye stikkord

**Bruker:** `/rask-prototype statistikk-sammenligning radiokanaler vs streaming`

**Output:**
1. Finner `statistikk-sammenligning-v1-20260105.html`
2. Leser v1 for struktur
3. Dette er ny vinkling → v2
4. Genererer filnavn: `statistikk-sammenligning-v2-20260110.html`
5. Lager prototype med:
   - Samme sammenligning-layout som v1
   - Nytt innhold: radiokanaler vs streaming
   - Annotasjoner om forskjeller
   - Design-notater
   - Footer med link til index.html
6. Lagrer i `Design/Prototyper/statistikk-sammenligning-v2-20260110.html`
7. Melder tilbake: "✅ v2 med fokus på radio vs streaming. Design/Prototyper/statistikk-sammenligning-v2-20260110.html"

## Workflow-tips

### Rask iterasjon
```
1. Bruker åpner index.html
2. Ser "statistikk-storytelling-v1"
3. Skriver stikkord i input: "med fokus på geografi"
4. Klikker "Lag v2" → kopierer til clipboard
5. Limer inn i chat: /rask-prototype statistikk-storytelling med fokus på geografi
6. Skillen genererer v2 automatisk
7. Bruker oppdaterer index.html manuelt (eller lar agenten gjøre det)
```

### Ny prototype
```
1. Bruker: /rask-prototype isrc-registrering 3-stegs wizard
2. Skillen lager: isrc-registrering-wizard-v1-20260110.html
3. Bruker åpner, tester, gir feedback
4. Bruker: /rask-prototype isrc-registrering-wizard forenklet til 2 steg
5. Skillen lager: isrc-registrering-wizard-v2-20260110.html
```

## Tips
- Hold det enkelt - wireframes skal være raske å lage
- Bruk placeholders (`[Bilde]`, `[Diagram]`) i stedet for ekte innhold
- Fokuser på struktur og flyt, ikke detaljer
- Annoter flittig med 💡 og ❓
- Inkluder alltid design-notater for refleksjon
- **VIKTIG:** Bruk bokmål, ikke nynorsk i alle prototyper
- **VIKTIG:** Alle prototyper legges direkte i `Design/Prototyper/` (rot-nivå)
- **VIKTIG:** Inkluder alltid footer med link til `index.html`

## Relaterte filer
- Oversikt: `Design/Prototyper/index.html`
- Eksempel: `Design/Prototyper/statistikk-storytelling-v1-20260105.html`
- Eksempel: `Design/Prototyper/om-gramo-tekstvariasjoner-v1-20260109.html`
