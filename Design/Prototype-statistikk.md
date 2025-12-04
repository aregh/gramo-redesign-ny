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

## Metadata og lenker som kan berike statistikken

### Låt-nivå
| Felt | Kjelde | Kommentar |
|------|--------|-----------|
| **ISRC** | Gramo (autoritativ) | Unik ID for opptak |
| Tittel, lengde | Gramo/Spotify | |
| Utgivingsdato | Spotify/MusicBrainz | |
| Spotify-lenke | Spotify API | `open.spotify.com/track/{ID}` |
| Apple Music-lenke | Apple Music API | `music.apple.com/no/...` |
| Tidal-lenke | Tidal | `tidal.com/browse/track/{ID}` |
| YouTube-lenke | YouTube/Musicfetch | Søkebasert |
| Deezer-lenke | Deezer API | `deezer.com/track/{ID}` |
| Tekst/lyrics | Genius | `genius.com/{artist}/{track}-lyrics` |
| Låtskrivarar | MusicBrainz/TONO | ISWC-kopling |
| Produsentar | MusicBrainz/Discogs | |
| Plateselskap | Spotify/Discogs | |

### Artist-nivå
| Felt | Kjelde | Kommentar |
|------|--------|-----------|
| Namn (+ variasjonar) | Gramo/MusicBrainz | Norsk vs. internasjonal |
| Kjønn | Gramo-metadata | For filter |
| By/region | Gramo-metadata | Bergen, Oslo, etc. |
| Land | Spotify/MusicBrainz | |
| Aktiv/avdød | Wikipedia/MusicBrainz | |
| Spotify-profil | Spotify API | Followers, popularitet |
| Instagram | Manuell/API | |
| TikTok | Manuell | |
| Offisiell nettside | MusicBrainz/Discogs | |
| Diskografi | Discogs | Komplett oversikt |

### Sanntidsdata (livestatistikk)
| Kjelde | Kva den gir | Tilgang |
|--------|-------------|---------|
| **ACRCloud** | Radio-monitoring 100+ stasjoner | Kommersiell |
| **Chartmetric** | Sanntid på 1000+ radiostasjoner | Kommersiell |
| **Soundcharts** | Strøymedata, playlister, SoMe | Kommersiell |
| **AudD** | Musikkgjenkjenning i audiostraumar | Kommersiell |
| **NRK API?** | Direkte speladata | Må undersøkast |

### Lenke-mønster
```
Spotify:       https://open.spotify.com/track/{SPOTIFY_ID}
Apple Music:   https://music.apple.com/no/album/{ALBUM}/{ID}
Tidal:         https://tidal.com/browse/track/{TIDAL_ID}
Deezer:        https://www.deezer.com/track/{DEEZER_ID}
YouTube:       https://music.youtube.com/search?q={ARTIST}+{TRACK}
Genius:        https://genius.com/{ARTIST}-{TRACK}-lyrics
MusicBrainz:   https://musicbrainz.org/recording/{MBID}
Discogs:       https://www.discogs.com/artist/{ID}
```

**Tips:** Musicfetch API kan gi alle lenker frå éin ISRC-spørring.

---

## 10 nye konseptidear (H-Q)

### H: Livestatistikk – «Akkurat no på radio»
**Konsept:** Sanntidsvisning av kva som spelar akkurat no på norske radiokanalar.
- Ticker med «No på P3: [Låt] av [Artist]»
- Live-oppdatering kvart 3. minutt
- «Siste 24 timar»-visning
- Klikk → fullstendig artistprofil

**Teknisk:** Krev ACRCloud eller NRK-API for sanntid.

---

### I: Djupdykk – «Alt om denne låta»
**Konsept:** Éin låt, all kontekst. Klikk på ein låt i topplista → ekspanderer til fullstendig profil.
- Strøymelenker (Spotify, Apple, Tidal, YouTube, Deezer)
- Låtskrivarar og produsentar
- Utgivingsdato og plateselskap
- Spelhistorikk på radio (graf over tid)
- «Høyr meir frå [Artist]»

**Metadata:** ISRC → Musicfetch → alle lenker.

---

### J: Artistprofil 2.0 – «Kygo på ein stad»
**Konsept:** Dedikert artistside med alt samla:
- Bio + bilete
- Alle lenker (Spotify, Instagram, TikTok, nettside)
- Diskografi med radiospeling per album
- Tidslinje: «Kygo sin radiokarriere 2014-2024»
- Kart: «Kvar i verda kjem spelelistene frå?»

**Metadata:** Discogs (diskografi) + Spotify (lenker) + Gramo (speletal).

---

### K: Tidsmaskin – «Radio i 2019 vs. 2024»
**Konsept:** Samanlikn to tidsperiodar side-by-side.
- Vel år: 2019 ↔ 2024
- Topp 10 artistar då vs. no
- Kven har forsvunne? Kven er nye?
- «Avicii var #45 i 2019, no #12»
- Animert overgang mellom åra

**Teknisk:** Historiske data frå Gramo.

---

### L: Låtreisa – «Josefin frå utgiving til #1»
**Konsept:** Tidslinje for éin låt si reise på radio.
- Utgivingsdato → første radiospeling
- Dag-for-dag oppbygging
- «Tipping point» når låta tok av
- Kva kanal spelte den først?
- Total akkumulert tid

**Teknisk:** Detaljert historikk per låt.

---

### M: Strøymekoplingar – «Lytt no»
**Konsept:** Frå statistikk til lytting på 1 klikk.
- Kvart element i topplista har strøymelenker
- Hover → viser Spotify/Apple/Tidal-ikon
- Klikk → opnar i føretrekt teneste
- «Logg inn med Spotify» for personleggjering

**Metadata:** Musicfetch eller manuell ISRC-kopling.

---

### N: Samarbeid – «Kven spelar saman?»
**Konsept:** Visualiser artistar som ofte spelar saman.
- Nettverksdiagram: Kygo ↔ Justin Jesso ↔ Conrad Sewell
- «Artistar som ofte vert spelt etter kvarandre»
- Featuring-koplingar
- Produsent-nettverk

**Metadata:** MusicBrainz (relasjonar) + Gramo (speledata).

---

### O: Krediteringsfokus – «Bak låtane»
**Konsept:** Løft fram produsentar og låtskrivarar.
- «Topp 10 produsentar 2024»
- «Stargate har produsert X av topp 100»
- Klikk på produsent → alle låtar
- «Låtskrivarar på topp 10»

**Metadata:** MusicBrainz (works/recordings) + TONO (ISWC).

---

### P: Plateselskap-perspektiv – «Kven eig hitsa?»
**Konsept:** Vis marknadsandel per plateselskap.
- Universal vs. Sony vs. Warner vs. uavhengige
- «56% av norsk radio er frå dei tre store»
- Trendlinje: Uavhengige veks?
- Filter: Vis berre uavhengige

**Metadata:** Spotify (label) + Discogs.

---

### Q: «Min radiosmak» – Personleg statistikk
**Konsept:** Logg inn → sjå statistikk om musikken din (for artistar).
- «Dine låtar vart spelt X timar i 2024»
- «Din mest spelte kanal: NRK P3»
- «Din peak: Veke 23, 42 spelar»
- Samanlikn med landsgjennomsnittet
- Del til SoMe

**Teknisk:** Krev innlogging og kopling til Gramo-medlemsdata.

---

## Prioriteringsmatrise (nye konsept)

| Konsept | Kompleksitet | Verdi | Teknisk avhengnad |
|---------|-------------|-------|-------------------|
| **H: Live** | 🔴 Høg | Høg | ACRCloud/NRK-API |
| **I: Djupdykk låt** | 🟡 Medium | Høg | Musicfetch |
| **J: Artistprofil** | 🟡 Medium | Høg | Discogs + Spotify |
| **K: Tidsmaskin** | 🟢 Låg | Medium | Berre Gramo-data |
| **L: Låtreise** | 🟡 Medium | Medium | Detaljert historikk |
| **M: Strøymelenker** | 🟢 Låg | Høg | Musicfetch/ISRC |
| **N: Samarbeid** | 🔴 Høg | Medium | MusicBrainz + analyse |
| **O: Kreditering** | 🟡 Medium | Medium | MusicBrainz + TONO |
| **P: Plateselskap** | 🟢 Låg | Medium | Spotify label-data |
| **Q: Min radiosmak** | 🔴 Høg | Høg | Innlogging + Apollon |

---

## Tilrådde API-ar for metadata-beriking

1. **Musicfetch** – Éin ISRC → alle strøymelenker
2. **MusicBrainz** – Gratis, open, ISRC-verifisering
3. **Spotify API** – Popularitet, lenker, bilete
4. **Discogs API** – Diskografi, bio, plateselskap
5. **ACRCloud** – For livestatistikk (kommersiell)

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
