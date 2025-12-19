# Gramo Redesign - Prosjektkontekst

> **Hub-fil** - Les denne først. Lenker til alle relevante dokument.

⚠️ **DELT KATALOG** - Denne katalogen deles med kunden (Gramo) via GitHub. Ikke legg inn sensitiv informasjon om prising, interne vurderinger eller salgsstrategier her. For internt materiale, bruk `/Prosjekt/Gramo/`.

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

## Arkivering av endrede filer

**ALLE filer som endres i prosjektet skal arkiveres før oppdatering.**

Praksis:
1. Før en fil endres, kopier gjeldende versjon til [Arkiv/](Arkiv/)
2. Gi arkivfilen prefiks: `ÅÅMMDD-<original filnavn>`
3. Eksempel: `Innholdsstrategi-gramo-no.md` → `Arkiv/251219-Innholdsstrategi-gramo-no.md`

Dette sikrer sporbarhet og mulighet til å gå tilbake til tidligere versjoner.

**Arkivmappe:** `/Prosjekt/Gramo/Gramo_kontekstarkitektur/Arkiv/`

---

## Prosjektsammendrag

| Egenskap | Verdi |
|----------|-------|
| Klient | Gramo (kollektiv forvaltning av nærstående rettigheter) |
| Prosjekt | Redesign av digitale kanaler |
| Fase | Forprosjekt (nov-des 2025) |
| Omfang | TBD |
| Team | Are, Bastian, Rita + Inge |

---

## Hurtiglenker

### Rot
- [2DOS.md](2DOS.md) - Aktive oppgåver
- [LOGG.md](LOGG.md) - Kronologisk logg

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
| [Prosjektplan.md](Dokumenter/Prosjektplan.md) | Faser og milepæler |
| [Revisjoner/](Dokumenter/Revisjoner/) | Tidligere versjoner |
| [Arkiv/](Dokumenter/Arkiv/) | Arkiverte dokumenter |

### [Analyse/](Analyse/)
Analysearbeid og innsikt.

| Fil | Beskrivelse |
|-----|-----------|
| [_ANALYSE.md](Analyse/_ANALYSE.md) | Sammendrag |
| [GEO-analyse.md](Analyse/GEO-analyse.md) | Søkeordsanalyse og GEO-strategi |
| [Kjerneflyt-ISRC.md](Analyse/Kjerneflyt-ISRC.md) | Brukerreise for ISRC (toppoppgave #1) |
| [Verdistrøm-ISRC.md](Analyse/Verdistrøm-ISRC.md) | Business case ISRC |
| [Innholdskartlegging.md](Analyse/Innholdskartlegging.md) | Kartlegging av eksisterende innhold |
| [Teknisk.md](Analyse/Teknisk.md) | Teknisk landskap |
| [Toppoppgaver.md](Analyse/Toppoppgaver.md) | Analyse av toppoppgaver |
| [Medlemsundersøkelse-2023-oppsummering.md](Analyse/Medlemsundersøkelse-2023-oppsummering.md) | Oppsummering av medlemsundersøkelse |
| [Statistikk-visualisering.md](Analyse/Statistikk-visualisering.md) | Statistikk-visualisering |
| [Metadata.md](Analyse/Metadata.md) | Metadatafelt for statistikkvisning |

| Mappe | Innhold |
|-------|---------|
| [Rådata/](Analyse/Rådata/) | Rådata og kildemateriale |
| [Teknisk/](Analyse/Teknisk/) | Teknisk dokumentasjon (Apollon kravspek m.m.) |

### [Design/](Design/)
Designarbeid og brief.

| Fil | Beskrivelse |
|-----|-----------|
| [Designbrief.md](Design/Designbrief.md) | Brief til designfasen |

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

## Team

| Rolle | Person |
|-------|--------|
| Prosjektleder | Are Halland |
| Innhold | Bastian Daae |
| Design | Inge Fossland |
| Kunde | Rita H. Mamelund |
| Beslutningstaker | Kim Skarning Andersen |

→ Se [Bakgrunn/Folk.md](Bakgrunn/Folk.md) for komplett oversikt.

---

## Eksterne system

- **Airtable:** `appo0g1sGfgBc6mHg`
- **Notion:** [Forprosjekt](https://www.notion.so/kjernepar/Gramo-forprosjekt-2b5e14309122807086c1cc0c062689e8)

---

*Sist oppdatert: 19. desember 2025*

