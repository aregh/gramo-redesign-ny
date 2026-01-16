# Prototyper – Gramo Redesign

> Wireframe-konsepter for Gramo redesign

## Status

**Sist oppdatert:** 10. januar 2026
**Ansvarlig:** Inge Fossland (design), Are Halland (konsept)
**Fase:** Fase 1 (konseptutvikling) ✅
**Antall prototyper:** 20
**Kategorier:** Om Gramo (1), Statistikk (19)

---

## 🎯 Formål

Denne katalogen inneholder alle HTML-prototyper for Gramo redesign-prosjektet. Prototypene er self-contained wireframes som kan åpnes direkte i nettleser.

**Fokusområder:**
- **Om Gramo:** Onboarding og informasjon om Gramo
- **Statistikk:** Visualisering av spilledata fra norske radiostasjoner

---

## 📁 Struktur

```
Design/Prototyper/
├── index.html                                    ← Hovedoversikt med alle prototyper
├── om-gramo-tekstvariasjoner-v1-20260109.html   ← Self-contained prototype
├── statistikk-storytelling-v1-20260105.html
├── statistikk-sammenligning-v1-20260105.html
└── [20 prototyper totalt...]
```

**Alle prototyper ligger direkte i rot-katalogen** for enkel tilgang og oversikt.

---

## 📝 Navngivingskonvensjon

Alle prototyper følger formatet:

```
[tema]-[stikkord]-v[versjon]-[YYYYMMDD].html
```

**Eksempler:**
- `om-gramo-tekstvariasjoner-v1-20260109.html`
- `statistikk-storytelling-v1-20260105.html`
- `statistikk-storytelling-v2-20260110.html` ← ny versjon

**Fordeler:**
- ✅ Lett å identifisere tema og konsept
- ✅ Versjonsnummer tydelig synlig
- ✅ Kronologisk sortering via dato
- ✅ Self-contained (ingen eksterne avhengigheter)
- ✅ Lett å bygge videre på eksisterende konsepter

---

## 🚀 Bruk

### 1. Se alle prototyper

Åpne oversikten:
```bash
open Design/Prototyper/index.html
```

Her finner du:
- 📊 Alle prototyper gruppert etter tema
- ⏰ Tidslinje med siste prototyper
- 🔗 Direkte lenker til hver prototype
- ✏️ Input-felt for å lage nye versjoner

### 2. Se en enkelt prototype

Åpne prototypen direkte:
```bash
open Design/Prototyper/statistikk-storytelling-v1-20260105.html
```

### 3. Lag ny versjon av prototype

**Metode A: Fra prototypen selv (anbefalt)**

1. Åpne prototypen i nettleser
2. Scroll ned til bunnen
3. Skriv inn hva du vil endre i tekstfeltet
4. Klikk "Lag v2"
5. Kommandoen kopieres til clipboard
6. Lim inn i Claude-chatten

**Metode B: Fra oversikten**

1. Åpne `index.html`
2. Finn prototypen du vil iterere på
3. Skriv stikkord i input-feltet
4. Klikk "Lag v2"
5. Lim kommandoen inn i Claude

**Metode C: Direkte i Claude**

```
/rask-prototype statistikk-storytelling med fokus på geografi
```
→ Genererer `statistikk-storytelling-v2-20260110.html`

---

## 📋 Prototyper

### Om Gramo (1 konsept)

Prototyper for å forklare "hva er Gramo":

| Konsept | Fil | Beskrivelse | Status |
|---------|-----|-------------|--------|
| **Tekstvariasjoner** | `om-gramo-tekstvariasjoner-v1-20260109.html` | SMALL/MEDIUM/LARGE-varianter, FAQs, nøkkeltall, § 21-forankring | ✅ Prototype |

### Statistikk (19 konsepter)

Prototyper for statistikkvisning basert på radiodata:

| Konsept | Fil | Vinkling | Status |
|---------|-----|----------|--------|
| **Storytelling** | `statistikk-storytelling-v1-20260105.html` | Narrativ tilnærming med tall som historier | ✅ |
| **Sammenligning** | `statistikk-sammenligning-v1-20260105.html` | Norge vs. verden, kjønn, tidsperioder | ✅ |
| **Gramo-fokus** | `statistikk-gramo-fokus-v1-20260105.html` | ISRC-fokusert metadata | ✅ |
| **Kanal** | `statistikk-kanal-v1-20260105.html` | Kanalprofiler (P1 vs P3 vs Radio Norge) | ✅ |
| **Long tail** | `statistikk-long-tail-v1-20260105.html` | Fokus på mindre artister + CTA | ✅ |
| **Geografi & tid** | `statistikk-geografi-tid-v1-20260105.html` | Geografisk fordeling over tid | ✅ |
| **Toppliste** | `statistikk-toppliste-v1-20260105.html` | Interaktiv filtrering (kjønn, språk, etc.) | ✅ |
| **SoMe-vinklinger** | `statistikk-some-vinklinger-v1-20260105.html` | Innhold optimalisert for deling | ✅ |
| **Live** | `statistikk-live-v1-20260105.html` | Sanntidsdata og nå-lytting | ✅ |
| **Dybdedykk** | `statistikk-djupdykk-v1-20260105.html` | Detaljert analyse av enkeltlåt | ✅ |
| **Artistprofil** | `statistikk-artistprofil-v1-20260105.html` | Dedikert artistside med statistikk | ✅ |
| **Tidsmaskin** | `statistikk-tidsmaskin-v1-20260105.html` | Utforsk historiske trender | ✅ |
| **Låtreise** | `statistikk-latreise-v1-20260105.html` | Følg en låts reise gjennom radio-Norge | ✅ |
| **Streaming** | `statistikk-streaming-v1-20260105.html` | Radio vs. streaming-sammenligning | ✅ |
| **Samarbeid** | `statistikk-samarbeid-v1-20260105.html` | Visualisere musikalske samarbeid | ✅ |
| **Kreditering** | `statistikk-kreditering-v1-20260105.html` | Fremheve produsenter, låtskrivere, musikere | ✅ |
| **Plateselskap** | `statistikk-plateselskap-v1-20260105.html` | Oversikt per plateselskap/label | ✅ |
| **Min Radio** | `statistikk-minradio-v1-20260105.html` | Personalisert statistikk for brukere | ✅ |
| **Årsberetning** | `statistikk-aarsberetning-v1-20260105.html` | Årsrapport-format med høydepunkter | ✅ |

---

## 🛠️ Teknisk

### Self-contained HTML

- Alle prototyper er én HTML-fil
- Ingen eksterne CSS/JS-filer
- Kan åpnes direkte i nettleser
- Fungerer offline

### Stil

- **Wireframe-estetikk:** Grid-bakgrunn, stiplede linjer
- **Gramo fargepalett:** sketch-blue (#2563eb), wireframe grå (#cbd5e1)
- **Annotasjoner:** 💡 for forklaringer, ❓ for spørsmål
- **Design-notater:** Styrker, svakheter, spørsmål nederst i hver prototype

### Interaktiv footer

Hver prototype har en footer med:
- 💬 Input-felt for feedback/endringer
- 🔄 "Lag v2"-knapp som kopierer kommando til clipboard
- ← Link tilbake til oversikt

**Eksempel-workflow:**
1. Åpne `statistikk-storytelling-v1-20260105.html`
2. Skriv i input-felt: "med fokus på geografi"
3. Klikk "Lag v2"
4. Lim inn: `/rask-prototype statistikk-storytelling med fokus på geografi`
5. Claude genererer: `statistikk-storytelling-v2-20260110.html`

---

## 📌 Workflow

### Typisk arbeidsflyt:

1. **Utforsk** → Åpne `index.html`
2. **Se** → Klikk på prototype
3. **Vurder** → Les design-notater, test konsept
4. **Iterer** → Skriv feedback i input-felt
5. **Generer** → Klikk "Lag v2", lim inn i Claude
6. **Sammenlign** → Åpne v1 og v2 side-ved-side
7. **Velg** → Bestem hvilken versjon som fungerer best

### Eksempel: Iterativ utvikling

```
1. Åpne statistikk-storytelling-v1-20260105.html
2. Se konseptet, tenk: "Dette trenger geografisk fokus"
3. Skriv i input-felt: "med fokus på geografi"
4. Klikk "Lag v2" → kopierer: /rask-prototype statistikk-storytelling med fokus på geografi
5. Lim inn i Claude-chatten
6. Claude genererer statistikk-storytelling-v2-20260110.html
7. Sammenlign v1 og v2
8. Eventuelt lag v3 med ytterligere justeringer
```

---

## 🎨 Design-prinsipper

- **Rask** - Wireframes skal være raske å lage og iterere på
- **Enkel** - Fokus på struktur, ikke detaljer
- **Annotert** - Tydelige forklaringer og spørsmål
- **Self-contained** - Ingen eksterne avhengigheter
- **Versjonert** - Lett å sammenligne ulike versjoner

---

## 📝 Vedlikehold

### Legge til ny prototype i oversikten

Når du har generert en ny prototype via `/rask-prototype`:

1. Åpne `index.html`
2. Finn riktig kategori (Om Gramo / Statistikk)
3. Legg til ny `<div class="version-group">` eller ny versjon i eksisterende gruppe
4. Oppdater "Siste prototyper"-tidslinje øverst
5. Oppdater antall i kategori-header

### Arkivere gamle versjoner

Hvis en prototype har mange versjoner (v1, v2, v3, v4...):
- Behold siste 2-3 versjoner synlige i index.html
- Eller behold alle - filene er små og det er nyttig å se utviklingen

---

## 🔗 Relaterte filer

- **Skill:** `.agent/skills/rask-prototype/skill.md` - Genererer nye prototyper
- **Dokumentasjon:** `KONTEKST.md`, `LOGG.md`, `2DOS.md`
- **Analyse:** `Analyse/Statistikk-visualisering.md`, `Analyse/Metadata.md`

---

## Neste steg

### Uke 2, 2026 (Fase 1-avslutning)

**Fredag 10. januar:**
- [ ] **Presentasjon for Kim** - vise konseptene
- [ ] **Diskusjon med Inge** - teknisk gjennomførbarhet
- [ ] **Prioritering** - hvilke konsepter går videre til Fase 2?

### Fase 2 (februar-mars 2026)

**Basert på prioritering:**
1. Velg 2-3 konsepter for videre utvikling
2. Detaljert design (Inge)
3. Teknisk implementering
4. Brukertesting
5. Iterasjon

---

*Sist oppdatert: 10. januar 2026*
