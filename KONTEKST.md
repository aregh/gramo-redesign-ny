# Gramo Redesign - Prosjektkontekst

> **Hub-fil** - Les denne først. Lenker til alle relevante dokument.

⚠️ **DELT KATALOG** - Denne katalogen deles med kunden (Gramo) via GitHub. Ikke legg inn sensitiv informasjon om prising, interne vurderinger eller salgsstrategier her. For internt materiale, bruk `/Prosjekt/Gramo/`.

---

**📅 VIKTIG:** Når du leser denne filen, kjør alltid `/idag` først for å hente gjeldende dato, uke og fase.

---

## Gjeldende bruker

**Denne økten:** Are Halland (ekstern konsulent, Kjernekaren)

**Identifikasjon basert på sti:** `/Users/arehalland/Library/CloudStorage/GoogleDrive-are@kjernekaren.no/`

**Brukere i prosjektet:**
- **Are Halland** - Prosjektleder/strategi (ekstern) - Sti: `/Users/arehalland/Library/CloudStorage/GoogleDrive-are@kjernekaren.no/Min disk/_KJERNEKAREN/Prosjekt/Gramo/Gramo_kontekstarkitektur`
- **Bastian Daae** - Innhold/koordinering (intern Gramo) - Sti: [BASTIAN: legg til din sti her]
- **Torstein Norendal** - Innholdsproduksjon (ekstern, fra Fase 2) - Sti: [TORSTEIN: legg til din sti her]

**Viktig:** Ved commit/push skal brukerens navn alltid inkluderes i commit-meldinger når det er relevant for sporbarhet.

---

## Språk

**All dokumentasjon i dette prosjektet skal være på bokmål.**

Dette gjelder:
- **Katalognavn** (f.eks. `Innhold/`, `Revisjoner/`, `Transkripsjoner/`)
- **Filnavn** (f.eks. `_INNHOLD.md`, `Innholdskartlegging.md`)
- **Innhold i filer:**
  - Møtereferater
  - Analyser
  - Designbrief
  - Logg og 2DOS
  - All kommunikasjon i kontekstarkitekturen

**Viktig:** Eldre filer kan inneholde nynorsk. Ved oppdatering skal disse konverteres til bokmål.

---

## Versjonskontroll og arkivering

**Versjonskontroll:** Prosjektet bruker Git for løpende versjonskontroll av alle endringer.

**Manuell arkivering:** Kun ved viktige milepæler arkiveres filer manuelt til [Arkiv/](Arkiv/)

**Praksis:**
1. **Løpende arbeid:** Git-historikk er tilstrekkelig
2. **Fase-leveranser:** Arkiver nøkkeldokumenter til [Arkiv/](Arkiv/)
   - Fase 1-levering (januar 2026)
   - Fase 2-levering (mars 2026)
   - Fase 3-levering (juni 2026)
3. **Navnekonvensjon:** `ÅÅMMDD-<original filnavn>`
4. **Eksempel:** `Innholdsstrategi-gramo-no.md` → `Arkiv/251219-Innholdsstrategi-gramo-no.md`

Dette balanserer sporbarhet med praktisk håndterbarhet.

---

## Prosjektsammendrag

| Egenskap | Verdi |
|----------|-------|
| Klient | Gramo (kollektiv forvaltning av nærstående rettigheter) |
| Prosjekt | Redesign av digitale kanaler |
| Fase | **Overgang Fase 1 → Fase 2** (jan 2026) |
| Status | Fase 1 avsluttes uke 2 (7., 9., 10. januar), Fase 2 starter februar |
| Budsjett totalt | 100 dagsverk over 3 faser (1,85M inkl. mva) |
| Fase 1 | 30 dagsverk: Are (15), Bastian (10), Inge (5) ✅ |
| Fase 2 | 45 dagsverk (Q1 2026) - starter februar |
| **Team (intern)** | Bastian Daae (Gramo) |
| **Team (eksterne konsulenter)** | Are Halland, Inge Fossland, Torstein Norendal (fra Fase 2) |
| Kunde | Rita H. Mamelund (kontakt), Kim Skarning Andersen (prosjekteier) |

### To-spor-strategien (etablert 8. januar 2026)

Gramo.no skal være en **"HUB for alt"** med to parallelle spor:

**Spor 1: Innhold som styrker kjennskap, kunnskap og merkevare**
- Historiefortelling med data og statistikk
- Merkevareforankret visuelt redesign
- Øke engasjement og synlighet

**Spor 2: Innhold som løser toppoppgaver**
- Forbedring av sentrale brukerreiser
- Redusere supportbelastning (inkl. 3. linje/juridisk)
- Øke oppgaveløsningsgrad

**Suksesskriterium:** "Folk finner, forstår og får til"

**Viktigste strategiske mål:** Øke antall worldwide-medlemmer (inntektsmål: fra 7 mill. kr til 14 mill. kr/år fra utlandet)

---

## Hurtiglenker

### Rot
- [2DOS.md](2DOS.md) - Aktive oppgaver og neste steg
- [LOGG.md](LOGG.md) - Kronologisk logg (nyeste først)

---

## Mappestruktur

### [Bakgrunn/](Bakgrunn/)
Om Gramo, strategi, folk og metodikk.

| Fil | Beskrivelse |
|-----|-----------|
| [_BAKGRUNN.md](Bakgrunn/_BAKGRUNN.md) | Sammendrag |
| [OmGramo.md](Bakgrunn/OmGramo.md) | Om Gramo, strategi, teknisk landskap |
| [Folk.md](Bakgrunn/Folk.md) | Nøkkelpersoner og kontaktinfo |
| [Strategi.md](Bakgrunn/Strategi.md) | Gramo strategi 2025-2027 |
| [Pakker/](Bakgrunn/Pakker/) | Metodikk (Kjernemodellen, Toppoppgaver, Kontekstarkitektur) |

### [Kommunikasjon/](Kommunikasjon/)
Møter med kunden (Gramo), intervjuer og transkripsjoner. Interne teammøter ligger i `/Prosjekt/Gramo/Prosjektledelse/`.

| Mappe | Innhold |
|-------|---------|
| [Møter/](Kommunikasjon/Møter/) | Kundemøter og forberedelser |
| [Intervjuer/](Kommunikasjon/Intervjuer/) | Brukerintervjuer |
| [Transkripsjoner/](Kommunikasjon/Transkripsjoner/) | Råtranskripsjoner |

### [Dokumenter/](Dokumenter/)
Prosjektdokumenter og formelle leveranser.

| Fil | Beskrivelse |
|-----|-----------|
| [Prosjektmandat.md](Dokumenter/Prosjektmandat.md) | Formelt prosjektmandat |
| [2026-01-07-Tilbod.md](Dokumenter/2026-01-07-Tilbod.md) | Tilbud: 3 faser, 100 dagsverk |
| [BESLUTNINGER.md](Dokumenter/BESLUTNINGER.md) | Logg over viktige beslutninger |
| [Revisjoner/](Dokumenter/Revisjoner/) | Tidligere versjoner |
| [Arkiv/](Dokumenter/Arkiv/) | Arkiverte dokumenter |

### [Analyse/](Analyse/)
Analysearbeid og innsikt.

| Fil | Beskrivelse |
|-----|-----------|
| [_ANALYSE.md](Analyse/_ANALYSE.md) | Sammendrag og mappestruktur |
| [Innholdskartlegging.md](Analyse/Innholdskartlegging.md) | Kartlegging av eksisterende innhold |

| Mappe | Innhold |
|-------|---------|
| [Brukerinnsikt/](Analyse/Brukerinnsikt/) | GEO-analyse, toppoppgaver, brukerundersøkelser |
| [Brukerreiser/](Analyse/Brukerreiser/) | Kjerneflyt-ISRC, verdistrøm-ISRC |
| [Teknisk/](Analyse/Teknisk/) | Teknisk landskap, metadata, statistikk-visualisering |
| [Rådata/](Analyse/Rådata/) | Rådata og kildemateriale |
| [IA/](Analyse/IA/) | Informasjonsarkitektur |

### [Design/](Design/)
Designarbeid, prototyper og brief.

| Fil | Beskrivelse |
|-----|-----------|
| [Designbrief.md](Design/Designbrief.md) | Brief til designfasen |

| Mappe | Innhold |
|-------|---------|
| [Prototyper/](Design/Prototyper/) | 18 statistikk-konsepter (A-R) - se [README](Design/Prototyper/README.md) |

### [Innhold/](Innhold/)
Innhold for ny nettside (produksjonsfase).

### [_TOOLS/](_TOOLS/)
Verktøy og konfigurasjon.

| Mappe | Innhold |
|-------|---------|
| [Eval/](_TOOLS/Eval/) | Evaluering og review |
| [MCP/](_TOOLS/MCP/) | MCP-server konfigurasjon |

---

## Toppoppgaver

1. **Registrere utgivelse med ISRC-kode** - #1
2. **Få oversikt over utbetalinger**
3. **Registrere rettighetskrav**
4. **Finne veiledning/svar**

→ Se [Analyse/Kjerneflyt-ISRC.md](Analyse/Kjerneflyt-ISRC.md)

---

## Team og roller

### Internt (Gramo)

| Rolle | Person | Type |
|-------|--------|------|
| Innhold og prosjektkoordinator | Bastian Daae | Intern (ubegrensede timer) |
| Prosjekteier | Kim Skarning Andersen | Beslutningstaker |
| Kontaktperson | Rita H. Mamelund | Koordinering |

### Eksterne konsulenter (Kjernepar)

| Rolle | Person | Omfang |
|-------|--------|--------|
| Prosjektleder og strategi | Are Halland | 15 dager (Fase 1) + budsjett Fase 2-3 |
| Design og teknologi | Inge Fossland | 5 dager (Fase 1) + budsjett Fase 2-3 |
| Innholdsproduksjon | Torstein Norendal | Fra Fase 2 |

**Viktig:** Bastian driver daglig arbeid og kontekstarkitektur. Eksterne konsulenter bidrar innenfor tildelte dagsverk.

→ Se [Bakgrunn/Folk.md](Bakgrunn/Folk.md) for komplett oversikt.

---

## Eksterne system

- **Airtable:** `appo0g1sGfgBc6mHg`
- **Notion:** [Forprosjekt](https://www.notion.so/kjernepar/Gramo-forprosjekt-2b5e14309122807086c1cc0c062689e8)

---

*Sist oppdatert: 8. januar 2026*

