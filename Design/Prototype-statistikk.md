# Prototype-plan: Interaktiv statistikkvisualisering

> Plan for utvikling av interaktiv visualisering av Gramo-statistikk

**Opprettet:** 4. desember 2025
**Ansvar:** Inge (design), Are (innhold/data)
**Status:** Klar for utvikling

---

## Instruksjon for ny tråd

Når du starter en ny Claude-tråd for å bygge prototypen:

```
Les Design/Prototype-statistikk.md og bygg iterasjon [X].
Kildedata: Dokumenter/gramo-statistikken-2024.pdf
```

---

## Mål

Lage en interaktiv prototype som viser hvordan Gramo-statistikk kan visualiseres på ny nettside. Prototypen skal:

1. Demonstrere verdien av verifisert metadata
2. Vise interaktive filtre i praksis
3. Inspirere til datadrysning på SoMe og presse
4. Være enkel å dele med Kim og ledelsen

---

## Anbefalt verktøy

### Primært: Flourish (no-code)

**Hvorfor Flourish:**
- Ingen koding nødvendig – perfekt for rask prototyping
- Brukes av BBC, Financial Times, Deloitte
- Innebygd scrollytelling-funksjonalitet
- 50+ maler inkludert bar race, sankey, treemap
- Gratis plan med full funksjonalitet
- Responsiv embed-kode for testing på nettside

**Kilder:** [Flourish](https://flourish.studio/), [Flourish Scrollytelling](https://flourish.studio/visualisations/scrollytelling/index.html)

### Alternativ: Observable Plot

For mer avanserte behov senere:
- Bygget på D3.js, men mye enklere syntaks
- En histogram i D3 = 50 linjer, i Plot = 1 linje
- Perfekt stepping stone til full D3 om nødvendig

**Kilder:** [Observable Plot](https://observablehq.com/plot/getting-started), [D3.js](https://d3js.org/)

### For produksjon (senere):

| Verktøy | Bruksområde | Kompleksitet |
|---------|-------------|--------------|
| **Chart.js** | Enkle diagrammer, dashboards | Lav |
| **Recharts** | React-baserte visninger | Medium |
| **Apache ECharts** | Store datasett, sanntid | Medium-høy |
| **D3.js** | Full kontroll, custom design | Høy |

**Kilder:** [GeeksforGeeks: Top 10 JS Libraries](https://www.geeksforgeeks.org/javascript/javascript-libraries-for-data-visualization/), [Monterail: 15 Top Libraries](https://www.monterail.com/blog/javascript-libraries-data-visualization)

---

## Inspirasjon

### Spotify Wrapped

156 millioner brukere engasjerer seg årlig med Spotify Wrapped. Nøkkelelementer:
- Personaliserte statistikker presentert som «story»
- Animasjoner og interaktive elementer
- Delbart format for sosiale medier
- Quizer og sammenligninger

**Kilder:** [Spotify Wrapped Data Analysis](https://www.hudsong.dev/spotify-wrapped-2024-data-analysis), [Pratt Visualization](https://studentwork.prattsi.org/infovis/visualization/my-own-spotify-wrapped-visualized/)

### Scrollytelling i datajournalistikk

Beste praksis fra Sigma Awards 2024-vinnere:
- Grafikk som oppdateres inkrementelt ved scrolling
- Kombinasjon av tekst, animasjon og data
- Guidet narrativ gjennom komplekse datasett

**Eksempler:**
- New York Times: «How the New Syria Took Shape»
- Financial Times: «How China is Tearing Down Islam»
- Bloomberg: «Humans Are Biased. Generative AI is Even Worse»

**Kilder:** [Sigma Awards 2024](https://www.sigmaawards.org/meet-the-winners-of-the-sigmas-2024-for-data-journalism/), [Harvard Open Data: Scrollytelling](https://www.hodp.org/blog/scrollytelling/), [Shorthand: Scrollytelling Examples](https://shorthand.com/the-craft/scrollytelling-examples/index.html)

---

## Iterasjoner

Prototypen bygges i flere iterasjoner. Hver iterasjon kan startes i en ny Claude-tråd.

---

### Iterasjon 1: Grunnleggende visualiseringer

**Mål:** Én HTML-fil med 3 statiske diagrammer

**Bygg:**
1. **Donut: Norge vs. verden** – Nasjonsfordeling (35% NO, 35% US, 18% UK)
2. **Horisontal bar: Topp 10 mest spilte** – Med spilletid i timer
3. **Linjediagram: Norskandel 2020-2024** – Per kanal

**Teknisk:**
- Én HTML-fil med inline CSS/JS
- Chart.js fra CDN
- Gramo-farger (blå: #1e3a8a)
- Responsivt design

**Output:** `Design/Prototype/Statistikk-1/v1-grunnleggende.html`

**Status:** ✅ Ferdig

---

### Iterasjon 2: Alternative konsepter

**Mål:** Utforske ulike måter å fortelle historien på

**Varianter å teste:**
- **2a: Storytelling-fokus** – Start med «654 timer med Josefin», bygg narrativ
- **2b: Sammenligning-fokus** – Norge vs. verden som hovedvinkel
- **2c: Kanalfokus** – «Hva spiller din kanal?» som inngang
- **2d: Artistfokus** – Kygo, Chris Holsten, Delara som helter

**Spørsmål til teamet:**
- Hvilken inngang resonerer best?
- Hva vil Kim vise frem?
- Hva fungerer best for presse/SoMe?

**Output:** `Design/Prototype/Statistikk-2/`

**Status:** ⏳ Ikke startet

---

### Iterasjon 3: Interaktivitetsnivå

**Mål:** Teste hvor mye interaktivitet som trengs

**Varianter:**
- **3a: Statisk** – Kun bilder/grafikk (enklest å dele)
- **3b: Enkel filtrering** – Dropdown for «Vis norske» / «Vis alle»
- **3c: Full utforskning** – Søk, filter, zoom

**Hypotese:** Statisk fungerer best for SoMe, interaktiv for nettside.

**Output:** `Design/Prototype/Statistikk-3/`

**Status:** ⏳ Ikke startet

---

### Iterasjon 4: Presentasjonsformat

**Mål:** Teste ulike formater for ulike kanaler

**Formater:**
- **4a: Scrollytelling** – For gramo.no
- **4b: Stories-format** – For Instagram/SoMe
- **4c: Infografikk** – For presse/PR
- **4d: Dashboard** – For intern bruk/rettighetshavere

**Output:** `Design/Prototype/Statistikk-4/`

**Status:** ⏳ Ikke startet

---

### Iterasjon 5: Brukertest og iterasjon

**Mål:** Validere konsept med reelle brukere

**Aktiviteter:**
- Vis 2-3 varianter til Rita og interne
- Test delbarhet på SoMe (privat)
- Samle feedback fra Kim

**Output:** Oppsummering og anbefaling

**Status:** ⏳ Ikke startet

---

## Datastruktur

### Eksempel: Topp 10 mest spilte (JSON)

```json
[
  {"rank": 1, "title": "Josefin", "artist": "Delara", "hours": 654, "minutes": 2, "seconds": 34, "country": "NO", "language": "NO"},
  {"rank": 2, "title": "Too Sweet", "artist": "Hozier", "hours": 592, "minutes": 57, "seconds": 51, "country": "IE", "language": "EN"},
  {"rank": 3, "title": "Lose Control", "artist": "Teddy Swims", "hours": 586, "minutes": 56, "seconds": 18, "country": "US", "language": "EN"}
]
```

### Eksempel: Norskandel per kanal (JSON)

```json
[
  {"channel": "NRK P1", "2020": 52.6, "2021": 50.9, "2022": 50.9, "2023": 51.9, "2024": 51.8},
  {"channel": "NRK P3", "2020": 53.9, "2021": 51.5, "2022": 50.7, "2023": 54.0, "2024": 52.4},
  {"channel": "P4", "2020": 28.7, "2021": 27.0, "2022": 27.4, "2023": 25.4, "2024": 22.3},
  {"channel": "Radio Norge", "2020": 3.4, "2021": 3.4, "2022": 5.6, "2023": 5.4, "2024": 6.0}
]
```

### Eksempel: Nasjonsfordeling (JSON)

```json
[
  {"country": "Norge", "hours": 72856, "percentage": 35.29},
  {"country": "USA", "hours": 72094, "percentage": 34.92},
  {"country": "Storbritannia", "hours": 36635, "percentage": 17.75},
  {"country": "EU", "hours": 10986, "percentage": 5.32},
  {"country": "Norden", "hours": 10648, "percentage": 5.16}
]
```

---

## Suksesskriterier

Prototypen er vellykket når:

1. **Konseptet er validert** – Teamet er enige om hvilken vinkling som fungerer
2. **Kim er begeistret** – «Dette vil vi ha på nye gramo.no»
3. **Delbart** – Kan brukes i presse/SoMe uten videre tilpasning
4. **Beslutningsgrunnlag** – Vi vet hva som skal bygges i produksjon

---

## Åpne spørsmål

| Spørsmål | Hvem avklarer |
|----------|---------------|
| Hvilken historie vil Kim fortelle? | Are/Kim |
| Kan vi publisere data offentlig? | Kim |
| Hva fungerer best for presse? | Bastian |
| Hva engasjerer rettighetshavere? | Rita |

---

## Relaterte dokumenter

- [Analyse/Statistikk-visualisering.md](../Analyse/Statistikk-visualisering.md) – 30 visualiseringsideer
- [Designbrief.md](Designbrief.md) – Overordnet designbrief
- [Dokumenter/gramo-statistikken-2024.pdf](../Dokumenter/gramo-statistikken-2024.pdf) – Kildedata

---

## Neste steg

1. **Review iterasjon 1** – Vis grunnleggende prototype til teamet
2. **Velg vinkling** – Hvilken historie skal vi fortelle?
3. **Bygg 2-3 varianter** – Test ulike konsepter
4. **Feedback fra Kim** – Validere retning
5. **Beslutning** – Hva skal bygges videre?

---

*Sist oppdatert: 4. desember 2025*
