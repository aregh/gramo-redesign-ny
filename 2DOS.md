# 2DOS - Gramo Redesign

> Aktive oppgåver og neste steg.

---

## Status forprosjekt

| Ressurs | November | Desember | Totalt |
|---------|----------|----------|--------|
| Are | 5 dagar ✅ | 10 dagar | 15 |
| Inge | 3 dagar | +2 dagar | 5 |
| **Sum** | 8 | 12 | **20** |

---

## Neste steg

### Møte onsdag (Rita kallar inn)
Agenda:
- [ ] Innhaldsdesign for å styrke merkevaren/omdømme
- [ ] Presentasjon av statistikk på nettsida
- [ ] Prosjektmandat
- [ ] Budsjett/tilbod (Are ser på)

### Høgste prioritet
- [x] **Få Apollon-mandat frå Kim** - ✅ Motteke 5. des
- [ ] **Intervju med Toril** - 1 time, før prioriteringsverkstad
- [ ] **Budsjett til Kim** - Are ser på tilbodet

### Innhald og data
- [ ] **Lag innhaldskart** - Map til prioriterte kjernesider (ISRC, registrering, FAQ)
- [ ] **Kartlegg tilgjengelege metadata-felt** – Kva har Gramo i dag? Kva kjem via Apollon?

### Planlegging
- [ ] **Forbered mandatutkast** - Samanlikn med Apollon-malen
- [ ] **Planlegg prioriteringsverksted** - Deltakarliste, pre-wiring, agenda

---

## Viktig avklaring frå Kim (5. des)

> «Gramo.no-prosjektet skal IKKJE bruke meir tid på Apollon/medlemsportal»

**Grunngjeving:**
- Apollon = standardløysing + avtalte gaps, ikkje kravspesifisering
- Kun datamapping og UI-branding
- Ev. avklaringar kjem som «bestillingar» frå Apollon-prosjektet

**Konsekvens for oss:** Vi fokuserer på gramo.no (merkevare, statistikk, innhald) - ikkje på medlemsportalen.

---

## Apollon-prosjektet (bakgrunn)

**Tidslinje:**
- Go-live kjernesystem: 1. juni 2026
- Medlemsportal: 1. juni 2026
- Distribusjon/utbetaling: 1. des 2026

**Medlemsportal-funksjonar (frå BiConcepts):**
| Funksjon | Beskriving |
|----------|------------|
| Mine innspelingar | Liste over innspelingar der medlem er i besetning |
| Min bruk | Spelingar gruppert på år/kanal/innspeling |
| Mine avspelte innspelingar | Innspelingar med fordelingsbeløp |
| Mine oppgjer | Transaksjonshistorikk |
| Rapportering av repertoar | Laste opp/endre innspelingar |
| Claiming | Krevje rettar til innspelingar |

**Relevans for statistikkvisning:**
- «Min bruk» i Apollon = spelingsdata per brukar
- Vi kan potensielt hente aggregert data via Power BI / datavarehus
- Men: gramo.no skal ikkje duplisere medlemsportal-funksjonar

**Prosjektorganisering:**
| Rolle | Person |
|-------|--------|
| Prosjekteigar | Kim |
| Systemeigar | Toril |
| Prosjektleiar | Morten |
| Migrering/BI | Ståle |
| Rettigheitskrav | Kristoffer |

---

## Tidlegare avklaringar (4. des)

| Tema | Status |
|------|--------|
| Kim er hovudkontakt | ✅ |
| Apollon-mandat motteke | ✅ |
| Layoutfase = mapping | ✅ |
| gramo.no uavhengig av Apollon | ✅ |

**Apollon utrulling:** Sveits → Noreg → Danmark/Finland

---

## Aktivitetar (frå tilbod)

- [ ] Innhaldskartlegging og -analyse
- [ ] Datainnsamling (web, SEO, GEO, etc)
- [x] Kartlegging av interne nøkkelpersonar
- [ ] Merkevareanalyse
- [ ] Teknologisk analyse
- [ ] Prioriteringsverksted
- [ ] Arbeidsmøte merkevare/design
- [ ] Konseptutvikling for merkevare/design

---

## Leveransar (frå tilbod)

### Hovudleveransar
- [ ] Presentasjon av forprosjekt
- [ ] Detaljert plan for hovedprosjekt
- [ ] Konseptretning for merkevare/design

### Påbegynte leveransar
- [ ] Sanity-installasjon
- [x] Arbeidsdokumenter i Airtable, Miro og Notion
- [x] Kjerneflyt i Miro
- [x] GEO-/SEO-analyse
- [ ] Informasjonsarkitektur
- [ ] Interne og eksterne intervjuer
- [ ] Dashboards pr kjerne

---

## Interessentar å involvere

| Person | Rolle | Tilnærming |
|--------|-------|------------|
| **Toril** | Medlemsavd. | Intervju først (pre-wiring) |
| **Julia** | ? | Inviter til prioriteringsverksted |
| **Kristoffer** | Medlemsavd. | Vurder til verksted |
| **Ståle** | Intern utviklar | Metabase, API-spørjingar |

---

## Data og visualisering (nye moglegheiter)

### Frå samtale med Inge (4. des)
- **Koble spilledata + metadata** for dypare innsikt
- **Interaktive filtre:** norsk språk, kjønn, avdøde artistar, geografi
- **Verifisert metadata** som Gramo-styrke (matcha frå fleire kjelder)

### Konkrete idear (prioritert)
1. **«654 timer med Josefin»** - Tidslinje mest spilte låt
2. **«Hvem får spilletid?»** - Kjønnsbalanse-visualisering
3. **«Norge vs. verden»** - Nasjonsfordeling (35% NO, 35% US, 18% UK)
4. **«Bygg din egen toppliste»** - Interaktiv filtrering
5. **Kanalprofiler** - P1 vs P3 vs Radio Norge

### Datakjelder (Statistikken 2024)
- Mest spilte låt (topp 100)
- Mest spilte norske låt (topp 100)
- Mest spilte låt norsk på norsk (topp 50)
- Mest spilte per kanal (NRK P1/P3/Jazz/Sápmi etc.)
- Mest spilte hovudartist (topp 100)
- Mest spilte norske utøvar (topp 100)
- Norskandel per kanal (2020-2024)
- Nasjonsfordeling

### Nye oppgåver
- [x] **Prototype interaktive lister** - ✅ 17 konsept (A-Q) laga
- [ ] **Kartlegg metadata-kjelder** - Dokumenter verifiseringsprosess
- [ ] **API-avklaring med Ståle** - Apollon, Metabase, Azure

### Spelingsdata-avklaring (kritisk for statistikkvisning) ⭐

**Kontekst:** Vi har fått schema-uttrekk frå Ståle (Echo-felter.xlsx) som viser 153 tabellar. Men vi veit ikkje kva som er *tilgjengeleg* via API.

**Må avklarast med Ståle:**

| Spørsmål | Kvifor viktig |
|----------|---------------|
| Finst det eit API for spelingsdata? | Kan vi bygge dynamisk statistikk? |
| Kva aggregeringsnivå finst? | Per låt? Per artist? Per kanal? Per dag/veke/år? |
| Kor langt tilbake går data? | Kan vi vise trender over tid? |
| Kor ofte oppdatert? | Dagleg, vekentleg, eller berre ved fordeling? |
| Kan vi få testbrukar i Echo? | For å sjå kva "Mi side" faktisk returnerer |

**Spelingsdata vi treng (for statistikkvisninga):**
- Antal spelingar per innspeling
- Kanal/kringkastar
- Dato (for tidslinje)
- Medium (radio/TV)
- Varigheit/spilletid

**Metadata vi treng (for å berike visning):**
| Felt | Har vi? | Kjelde |
|------|---------|--------|
| ISRC | Ja | Echo |
| Tittel + artist | Ja | Echo |
| Varigheit | Ja | Echo |
| Produksjonsår | Ja | Echo |
| Plateselskap | ? | Echo (record_label felt finst) |
| Nasjonalitet | ? | Truleg via person-data |
| Kjønn | ? | Truleg via person-data |
| Artistbilde/cover | Nei | Må berikast eksternt |

**Teknisk:** Azure, Power BI, Metabase - må avklarast med Kim/Ståle

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
| H2 | Repertoar som omdømmebygger | ✅ Bekrefta |
| H3 | Verdistrøm-analyse for org | ⏳ Ikkje starta |
| H4 | Direkte sangregistrering | 🔄 Under utforsking |
| H5 | Data som kontinuerleg innhaldskjelde | ✅ Bekrefta (samtale Inge) |

---

*Sist oppdatert: 5. desember 2025*
