# 2DOS - Gramo Redesign

> Aktive oppgaver og neste steg.

---

## Status Fase 1 - Forprosjekt

**Budsjett:** 30 dagsverk (555 000 kr)

| Ressurs | November | Desember | Januar (uke 2) | Totalt |
|---------|----------|----------|----------------|--------|
| Are | 5 dager ✅ | 10 dager ✅ | **3 dager** | 15/15 |
| Bastian | - | 7 dager ✅ | **3 dager** | 10/10 |
| Inge | 3 dager ✅ | 2 dager ✅ | - | 5/5 |
| **Sum** | 8 ✅ | 19 ✅ | **6** | **30** |

**Status:** Siste 3 arbeidsdager av Fase 1 (tirsdag, torsdag, fredag i uke 2)

---

## Denne uken (uke 2, 2026) - FASE 1 FERDIGSTILLELSE

### ✅ Fullført i desember
- [x] Innholdsstrategi v2.0 (19.12.2025)
- [x] 17 prototyper for statistikkvisning (konsept A-Q)
- [x] GEO-analyse med ISRC som #1 toppoppgave
- [x] Apollon-avklaring med Kim
- [x] Prosjektmandat revidert (06.01.2026)
- [x] Tilbud oppdatert (06.01.2026) - 3 faser, 100 dagsverk

### ✅ Tirsdag 7. januar (Are + Bastian)
- [x] Oppdatere KONTEKST.md og git commit/push
- [x] **Rydde opp i /Gramo_kontekstarkitektur/** ✅ Fullført 8. januar
  - README.md oppdatert med Fase 1 status
  - Arkivert duplikater (Prosjektmandat, Prototype-statistikk)
  - Slettet .DS_Store-filer
  - CONTRIBUTING.md omskrevet til bokmål med Git-rutiner per bruker
  - Kontekstarkitektur-Plan.md opprettet (sammenslagning av Fase 1+2 planer)
  - MCP-integrasjon verifisert (Airtable + Notion)
  - **Brukeridentifikasjon implementert** (KONTEKST.md)
  - **Claude Code skills opprettet** (`/pull` og `/push`)
- [ ] **IA og innholdsoversikt inn i Airtable** - prioritert og strukturert
- [x] **Oppsett av GPT/Skills** - for kontekstarkitektur ✅ `/pull` og `/push` skills
- [ ] **Rekruttere til brukerintervjuer** - 10-15 stasjoner/produsenter (Doodle)

### ✅ Bastians første steg - FULLFØRT (12. januar)

**📄 Se [TIL-BASTIAN.md](TIL-BASTIAN.md) for fullstendig guide**

- [x] **Les [TIL-BASTIAN.md](TIL-BASTIAN.md)** - Komplett oversikt over alle endringer
- [x] **Git-identitet verifisert** - `Bastian` / `bastian.daae@gramo.no`
- [x] **Sti lagt inn** i KONTEKST.md og CONTRIBUTING.md
- [x] ~~Test `/pull` og `/push` kommandoer~~ - Ikke nødvendig for Antigravity

### ✅ Torsdag 8. januar (DAG 1)
- [x] **Prioriteringsverksted med Kim (del 1)** - FULLFØRT
  - To-spor-strategien etablert
  - Worldwide-medlemskap som inntektsmål
  - Målgrupper prioritert
  - Målbare effektmål definert

### 🔄 Fredag 10. januar (DAG 2 - Inge deltar)
- [ ] **Prioriteringsverksted med Kim (del 2)** - statistikk og prototyper
- [ ] **Diskutere prototyper** med Inge og Kim
- [ ] **Finne landingsstruktur** for nye nettsider

---

## Nye oppgaver fra prioriteringsverksted (8. januar)

### 🔴 Kritiske oppgaver
- [ ] **Møte med styringsgruppen** (Are setter opp)
  - Deltakere: Deb, Torbjørn (+ Kim, Rita, Are)
  - Agenda: Presentere to-spor-strategien, mandat, forankring
  - Formål: Sikre forankring i ledergruppen

- [ ] **Møte med Øystein** (juridisk innhold)
  - Vise frem GPT-løsninger for kvalitetssikring
  - Diskutere hvordan nettsiden kan redusere 3. linje-henvendelser
  - Avklare juridisk korrekt innhold

- [ ] **Definere tone of voice**
  - Må på plass før innholdsproduksjon starter
  - Workshop med kommunikasjonsavdeling?

### 🟡 Viktige oppgaver
- [ ] **Baseline-målinger** (Morten)
  - Kategorisere henvendelser etter toppoppgaver
  - Måle tid brukt på ulike henvendelsestyper
  - Spesielt: Henvendelser til Øystein (3. linje)

- [ ] **Worldwide-medlemskap: Konsept og innhold**
  - Interaktivt kart over internasjonale avtaler
  - Testimonials fra worldwide-medlemmer
  - Forklarende innhold om verdi vs. plateselskap/agenter

- [ ] **Involvere medlemsavdelingen**
  - Workshop med Toril, Morten, Julia
  - Gå gjennom toppoppgaver fra deres perspektiv
  - Identifisere "quick wins" for nettsiden

---

## Viktig avklaring fra Kim (5. des)

> «Gramo.no-prosjektet skal IKKE bruke mer tid på Apollon/medlemsportal»

**Begrunnelse:**
- Apollon = standardløsning + avtalte gaps, ikke kravspesifisering
- Kun datamapping og UI-branding
- Ev. avklaringer kommer som «bestillinger» fra Apollon-prosjektet

**Konsekvens for oss:** Vi fokuserer på gramo.no (merkevare, statistikk, innhold) - ikke på medlemsportalen.

---

## Apollon-prosjektet (bakgrunn)

**Tidslinje:**
- Go-live kjernesystem: 1. juni 2026
- Medlemsportal: 1. juni 2026
- Distribusjon/utbetaling: 1. des 2026

**Medlemsportal-funksjoner (fra BiConcepts):**
| Funksjon | Beskrivelse |
|----------|------------|
| Mine innspillinger | Liste over innspillinger der medlem er i besetning |
| Min bruk | Spillinger gruppert på år/kanal/innspilling |
| Mine avspilte innspillinger | Innspillinger med fordelingsbeløp |
| Mine oppgjør | Transaksjonshistorikk |
| Rapportering av repertoar | Laste opp/endre innspillinger |
| Claiming | Kreve rettigheter til innspillinger |

**Relevans for statistikkvisning:**
- «Min bruk» i Apollon = spillingsdata per bruker
- Vi kan potensielt hente aggregert data via Power BI / datavarehus
- Men: gramo.no skal ikke duplisere medlemsportal-funksjoner

**Prosjektorganisering:**
| Rolle | Person |
|-------|--------|
| Prosjekteier | Kim |
| Systemeier | Torill |
| Prosjektleder | Morten |
| Migrering/BI | Ståle |
| Rettighetskrav | Kristoffer |

---

## Tidligere avklaringer (4. des)

| Tema | Status |
|------|--------|
| Kim er hovedkontakt | ✅ |
| Apollon-mandat mottatt | ✅ |
| Layoutfase = mapping | ✅ |
| gramo.no uavhengig av Apollon | ✅ |

**Apollon utrulling:** Sveits → Norge → Danmark/Finland

---

## Aktiviteter (fra tilbud)

- [ ] Innholdskartlegging og -analyse
- [ ] Datainnsamling (web, SEO, GEO, etc)
- [x] Kartlegging av interne nøkkelpersoner
- [ ] Merkevareanalyse
- [ ] Teknologisk analyse
- [ ] Prioriteringsverksted
- [ ] Arbeidsmøte merkevare/design
- [ ] Konseptutvikling for merkevare/design

---

## Leveranser (fra tilbud)

### Hovedleveranser
- [ ] Presentasjon av forprosjekt
- [ ] Detaljert plan for hovedprosjekt
- [ ] Konseptretning for merkevare/design

### Påbegynte leveranser
- [ ] Sanity-installasjon
- [x] Arbeidsdokumenter i Airtable, Miro og Notion
- [x] Kjerneflyt i Miro
- [x] GEO-/SEO-analyse
- [ ] Informasjonsarkitektur
- [ ] Interne og eksterne intervjuer
- [ ] Dashboards pr kjerne

---

## Interessenter å involvere

| Person | Rolle | Tilnærming |
|--------|-------|------------|
| **Torill** | Medlemsavd. | Intervju først (pre-wiring) |
| **Julia** | ? | Inviter til prioriteringsverksted |
| **Kristoffer** | Medlemsavd. | Vurder til verksted |
| **Ståle** | Intern utvikler | Metabase, API-spørringer |

---

## Data og visualisering (nye muligheter)

### Fra samtale med Inge (4. des)
- **Koble spilledata + metadata** for dypere innsikt
- **Interaktive filtre:** norsk språk, kjønn, avdøde artister, geografi
- **Verifisert metadata** som Gramo-styrke (matchet fra flere kilder)

### Konkrete ideer (prioritert)
1. **«654 timer med Josefin»** - Tidslinje mest spilte låt
2. **«Hvem får spilletid?»** - Kjønnsbalanse-visualisering
3. **«Norge vs. verden»** - Nasjonsfordeling (35% NO, 35% US, 18% UK)
4. **«Bygg din egen toppliste»** - Interaktiv filtrering
5. **Kanalprofiler** - P1 vs P3 vs Radio Norge

### Datakilder (Statistikken 2024)
- Mest spilte låt (topp 100)
- Mest spilte norske låt (topp 100)
- Mest spilte låt norsk på norsk (topp 50)
- Mest spilte per kanal (NRK P1/P3/Jazz/Sápmi etc.)
- Mest spilte hovedartist (topp 100)
- Mest spilte norske utøver (topp 100)
- Norskandel per kanal (2020-2024)
- Nasjonsfordeling

### Nye oppgaver
- [x] **Prototype interaktive lister** - ✅ 17 konsept (A-Q) laget
- [ ] **Kartlegg metadata-kilder** - Dokumenter verifiseringsprosess
- [ ] **API-avklaring med Ståle** - Apollon, Metabase, Azure

### Spillingsdata-avklaring (kritisk for statistikkvisning) ⭐

**Kontekst:** Vi har fått schema-uttrekk fra Ståle (Echo-felter.xlsx) som viser 153 tabeller. Men vi vet ikke hva som er *tilgjengelig* via API.

**Må avklares med Ståle:**

| Spørsmål | Hvorfor viktig |
|----------|---------------|
| Finnes det et API for spillingsdata? | Kan vi bygge dynamisk statistikk? |
| Hva aggregeringsnivå finnes? | Per låt? Per artist? Per kanal? Per dag/uke/år? |
| Hvor langt tilbake går data? | Kan vi vise trender over tid? |
| Hvor ofte oppdatert? | Daglig, ukentlig, eller bare ved fordeling? |
| Kan vi få testbruker i Echo? | For å se hva "Min side" faktisk returnerer |

**Spillingsdata vi trenger (for statistikkvisningen):**
- Antall spillinger per innspilling
- Kanal/kringkaster
- Dato (for tidslinje)
- Medium (radio/TV)
- Varighet/spilletid

**Metadata vi trenger (for å berike visning):**
| Felt | Har vi? | Kilde |
|------|---------|--------|
| ISRC | Ja | Echo |
| Tittel + artist | Ja | Echo |
| Varighet | Ja | Echo |
| Produksjonsår | Ja | Echo |
| Plateselskap | ? | Echo (record_label felt finnes) |
| Nasjonalitet | ? | Trolig via person-data |
| Kjønn | ? | Trolig via person-data |
| Artistbilde/cover | Nei | Må berikes eksternt |

**Teknisk:** Azure, Power BI, Metabase - må avklares med Kim/Ståle

---

## Finland

- [ ] Få anbudsdokument fra Sari (Rita purrer)
- [ ] Oversette og analysere kravspesifikasjonen
- [ ] Vurdere relevans for Gramo (desember)

---

## Hypoteser

| # | Hypotese | Status |
|---|----------|--------|
| H1 | ISRC on-the-fly registrering | 🔄 Under utforsking |
| H2 | Repertoar som omdømmebygger | ✅ Bekreftet |
| H3 | Verdistrøm-analyse for org | ⏳ Ikke startet |
| H4 | Direkte sangregistrering | 🔄 Under utforsking |
| H5 | Data som kontinuerlig innholdskilde | ✅ Bekreftet (samtale Inge) |

---

*Sist oppdatert: 7. januar 2026*
