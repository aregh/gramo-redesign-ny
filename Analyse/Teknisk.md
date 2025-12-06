# Teknisk landskap - Gramo

> Komplett oversikt over Gramos tekniske systemer, integrasjoner og datakilder.

**Sist oppdatert:** 6. desember 2025

---

## Systemlandskap

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           BRUKERFLATER                                       │
├───────────────┬───────────────┬───────────────┬───────────────┬─────────────┤
│   gramo.no    │ hjelp.gramo.no│   Min Side    │  Nyhetsbrev   │   Apollon   │
│   (Webflow)   │  (Intercom)   │  (webportal)  │  (Mailchimp)  │  (2026)     │
└───────┬───────┴───────┬───────┴───────┬───────┴───────┬───────┴──────┬──────┘
        │               │               │               │              │
        └───────────────┴───────────────┴───────────────┴──────────────┘
                                        │
┌───────────────────────────────────────┼─────────────────────────────────────┐
│                           KJERNESYSTEMER                                     │
├───────────────────────────────────────┼─────────────────────────────────────┤
│                                       ▼                                      │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐   │
│  │    Echo     │    │    Ekko     │    │  Metabase   │    │   Azure     │   │
│  │ (PostgreSQL)│◄──►│  (distrib.) │    │ (analytics) │    │  (hosting)  │   │
│  └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘   │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
                                        │
┌───────────────────────────────────────┼─────────────────────────────────────┐
│                           EKSTERNE DATAKILDER                                │
├───────────────────────────────────────┼─────────────────────────────────────┤
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐   │
│  │  ACRCloud   │    │    VRDB     │    │  Phonofile  │    │ Kringkastere│   │
│  │ (monitoring)│    │ (utøverinfo)│    │  (utgivelser)│   │ (spilledata)│   │
│  └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## Nåværende systemer

### Webflow (gramo.no)

| Egenskap | Verdi |
|----------|-------|
| **Type** | CMS/nettside |
| **URL** | gramo.no |
| **Status** | I produksjon |
| **Begrensning** | Statisk, vanskelig å vedlikeholde, ikke headless |
| **Fremtid** | Skal erstattes med Sanity + Next.js |

### Intercom (hjelp.gramo.no)

| Egenskap | Verdi |
|----------|-------|
| **Type** | Hjelpesenter, chat, artikler |
| **URL** | hjelp.gramo.no |
| **Status** | I produksjon |
| **Innhold** | 61 artikler i 6 samlinger |
| **Begrensning** | Dyrt (~100k/år?), vurderes for kutt |
| **Fremtid** | Avgjørelse i 2026 |
| **API** | Finnes, men usikker fremtid |

**Samlinger:**
1. Om Gramo (13 artikler)
2. For musikere og plateselskap (22 artikler)
3. For bedrifter som bruker musikk (14 artikler)
4. Musikk i dine radiosendinger (4 artikler)
5. Produsenter (1 artikkel)
6. Ord og uttrykk (7 artikler)

### Min Side (medlemsportal)

| Egenskap | Verdi |
|----------|-------|
| **Type** | Webportal for medlemmer |
| **Status** | I produksjon |
| **Funksjoner** | Registrering, økonomi, profil |
| **Fremtid** | Erstattes av Apollon Min Side 2.0 |
| **Overgang** | Vår/sommer 2026 |

### Ekko (distribusjonssystem)

| Egenskap | Verdi |
|----------|-------|
| **Type** | Internt distribusjonssystem |
| **Status** | I produksjon |
| **Funksjon** | Beregner fordeling av vederlag |
| **Fremtid** | Funksjonalitet migreres til Apollon |

### Mailchimp

| Egenskap | Verdi |
|----------|-------|
| **Type** | Nyhetsbrev |
| **Status** | I produksjon |
| **Fremtid** | Beholdes, vurder Sanity-integrasjon |
| **API** | Finnes |

---

## Apollon (nytt kjernesystem)

### Generelt

| Egenskap | Verdi |
|----------|-------|
| **Leverandør** | BiConcepts (finsk) |
| **Type** | Ferdig SaaS-produkt for kollektiv forvaltning |
| **Brukere** | Gramex FI, Gramex DK, Swissperform, m.fl. |
| **Referanse** | My Gramex 2.0 (Finland) |
| **Vedtak** | Styret 18. juni 2025 |

### Arkitektur

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        APOLLON Technical Overview                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌──────────────┐     ┌──────────────────┐     ┌──────────────────┐     │
│  │   APOLLON    │     │  APOLLON Web     │     │ APOLLON Web      │     │
│  │   Clients    │     │  Portal (intern) │     │ Portal (ekstern) │     │
│  │  (Desktop)   │     │                  │     │ = Medlemsportal  │     │
│  └──────┬───────┘     └────────┬─────────┘     └────────┬─────────┘     │
│         │                      │                        │               │
│         │ Full API             │ WEB API                │ HTTPS         │
│         ▼                      ▼                        ▼               │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │              APOLLON Server (.NET Core)                         │    │
│  │         Business Logic, APIs for Client and Web Portal          │    │
│  └─────────────────────────────┬───────────────────────────────────┘    │
│                                │                                        │
│         ┌──────────────────────┼──────────────────────┐                 │
│         ▼                      ▼                      ▼                 │
│  ┌─────────────┐       ┌─────────────┐       ┌─────────────────┐       │
│  │ Database    │       │    Solr     │       │ MariaDB         │       │
│  │ IBM DB2     │       │  (Search)   │       │ (Web Portal DB) │       │
│  └─────────────┘       └─────────────┘       └─────────────────┘       │
│                                                                          │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │           APOLLON Reporting Server (optional)                    │    │
│  │                    Power BI / Data Warehouse                     │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                          │
│  Eksterne integrasjoner: IPD, VRDB2, RDx, Bank (SFTP), Visma NXT       │
└─────────────────────────────────────────────────────────────────────────┘
```

### Tidsplan (fra prosjektmandat)

| Fase | Start | Varighet | Beskrivelse |
|------|-------|----------|-------------|
| Spesifikasjon | Nov 2025 | 9 mnd | Kravspek og Gramo-spesifikke workflows |
| Fase 1: Base data | Nov 2025 | 9 mnd | Masterdata, Parties, ISRC, Recordings |
| Fase 2: Input & matching | Feb 2026 | 3 mnd | |
| Fase 3: Repertoire import | Feb 2026 | 5 mnd | |
| **Go-live (test system)** | **Apr 2026** | | |
| Fase 4: Distribution & payments | Apr 2026 | 3 mnd | |
| Fase 5: External APIs | Mai 2026 | 2 mnd | Spotify, bank, etc. |
| **Go-live (produksjon)** | **Jun 2026** | | Kjernesystem live |
| Fase 6: VRDB2 | Aug 2026 | 4 mnd | |
| Fase 7: DWH & reports | Sep 2026 | 4 mnd | Data warehouse, Power BI |
| Fase 8: SDEG, RDx | Okt 2026 | 3 mnd | |
| **Full drift** | **Des 2026** | | Alle moduler ferdig |

### Prosjektkostnader

| Post | Beløp (NOK) |
|------|-------------|
| Apollon-lisenser | 9 428 400 |
| Apollon-gaps (tilpasninger) | 7 197 120 |
| Prosjektgjennomføring | 715 000 |
| Migrering | 1 213 440 |
| Utvikling/bistand Skalar | 1 584 000 |
| Serverdrift | 72 000 |
| **Totalt eks. MVA** | **20 209 960** |
| MVA (25%) | 5 052 490 |
| **Totalt inkl. MVA** | **25 262 450** |
| Buffer (20%) | 4 041 992 |
| **Total inkl. buffer** | **29 304 442** |

*Valutakurs: EUR → NOK: 11,3*

### Årlige driftskostnader (etter go-live)

| Post | År 1 | År 2 | År 3 |
|------|------|------|------|
| Apollon-lisenser | 1 937 736 | 1 986 179 | 2 035 834 |
| Apollon-gaps | 231 408 | 237 193 | 243 123 |
| Serverdrift | 343 128 | 351 706 | 360 499 |
| Echo-data (DWH) | 192 458 | 197 269 | 202 201 |
| Power BI-lisenser | 24 000 | 24 600 | 25 215 |
| **Totalt eks. MVA** | **2 728 730** | **2 796 947** | **2 866 872** |
| **Totalt inkl. MVA** | **3 410 913** | **3 496 184** | **3 583 590** |

### Prosjektmål

**Resultatmål:**
- Nytt kjernesystem i produksjon innen 1. juni 2026
- Distribusjons- og utbetalingsmoduler i drift innen 1. desember 2026
- Ny medlemsportal med kjernefunksjoner innen 1. juni 2026
- Datavarehus og Power BI-rapporter etablert
- Årlige kostnader redusert med 4–6 mill kr fra 2027 (vs. Echo)

**Effektmål:**
- Høy datakvalitet og rettidig avregning
- 30% reduksjon i manuelle arbeidsprosesser innen 2028
- Forbedret brukeropplevelse og økt selvbetjening
- Tettere samarbeid med Gramex FI/DK og Swissperform

### Apollon Medlemsportal (Min Side 2.0)

Medlemsportalen driftes på separat server av sikkerhetshensyn. Data synkroniseres med Apollon-databasen i sanntid (få sekunder).

**Standardfunksjoner:**

| Funksjon | Beskrivelse |
|----------|-------------|
| **Registrering** | Selvregistrering med e-postverifisering. Gramo-ansatt må godkjenne før innlogging. |
| **Innlogging** | E-post + passord. Én e-post kan knyttes til flere utøvere/produsenter. |
| **Masterdata** | Vis/endre personopplysninger (konfigurerbart hvilke felt). |
| **Mine innspillinger** | Liste over alle innspillinger hvor medlem er i besetning. Filter, sortering, Excel/PDF-eksport. |
| **Min bruk** | Innspillinger med sendetid, gruppert på år/kanal/innspilling. |
| **Mine avspilte innspillinger** | Innspillinger med fordelingsbeløp. |
| **Mine oppgjør** | Alle transaksjoner (krediteringer/utbetalinger). Oppgjørsdokumenter for nedlasting. |
| **Rapportering av repertoar** | Registrere/endre innspillinger, besetning, produktinfo. Excel-opplasting. |
| **Agenter** | Agenter kan administrere medlemmer og se deres data. |

**Gramo-spesifikke tilpasninger (gaps):**

| ID | Funksjon | Beskrivelse |
|----|----------|-------------|
| G.20 | Claiming | Rettighetshavere kan kreve innspillinger og administrere uavstemt bruk |
| G.21 | Repertoar-opplasting | Excel-mal med validering, staging for Gramo-verifikasjon |
| G.22 | ID-innlogging + 2FA | Valgfritt: To ID-leverandører, Vonage for SMS |
| G.23 | Kontraktsignering | Signere kontrakt under registrering |
| G.24 | Årlig oppsummering | Dashboard med vederlag og kostnadsprosenter |
| G.25 | Varsler | Vise varsler fra Apollon på forsiden |
| G.26 | Manglende info | Vise manglende data (f.eks. bankkonto) på forsiden |
| G.27 | Selskapsregistrering | API-kall mot Brønnøysund for å verifisere selskapsdata |
| G.28 | Besetningsendring e-post | Send e-post til alle rettighetshavere ved endring |

**Tilpasningsmuligheter:**
- Visuell profil (design/farger)
- Språkvalg (alle språk kan konfigureres)
- RSS-feed integrasjon
- Ekstern autentisering (inkludert i tilbud)

### Integrasjoner (Apollon)

| System | Type | Status |
|--------|------|--------|
| **VRDB2** | Nordisk utøverregister | Inkludert (fase 6) |
| **IPD** | International Performers Database | Inkludert |
| **RDx** | Repertoire Data Exchange | Inkludert (fase 8) |
| **Bank (SFTP)** | Utbetalinger | Inkludert |
| **Visma NXT** | Regnskap (manuelle posteringer) | Inkludert |
| **Offentlige registre** | Brønnøysund m.m. | Ved behov |
| **Spotify/eksterne APIs** | Metadata | Fase 5 |

### Prosjektorganisering

| Rolle | Person | Ansvar |
|-------|--------|--------|
| **Prosjekteier** | Kim (CEO) | Måloppnåelse, budsjett, rapporterer til styret |
| **Systemeier** | Torill (Leder Medlem) | Eier av Apollon som fagsystem, gevinstmål |
| **Styringsgruppe** | Kim, Deb, Torill | Strategisk forankring, godkjenner milepæler |
| **Prosjektleder** | Morten (IT-sjef) | Operativt ansvar, koordinerer ressurser |
| **Prosjektgruppe** | Rikard, Kristoffer, Kristian, Ståle | Faglige bidragsytere |

### Begrensninger

| Begrensning | Konsekvens |
|-------------|------------|
| Ferdig produkt | Lite skreddersøm mulig |
| Felles prioritering | Endringer krever konsensus med andre Apollon-brukere |
| Låst funksjonalitet | Kan ikke legge til helt egne features |
| Hjelpetekster | Kan ikke tilpasses inne i Apollon |
| Design | Kun farger og logo kan endres |

### Risikovurdering

**Høy risiko:**
- Forsinkelser/kapasitet hos BiConcepts
- Manglende tilgjengelighet på interne ressurser
- Kapasitet og leveranser fra Skalar (migrering)

**Middels risiko:**
- Faglig uenighet i prosjektgruppen
- Tekniske utfordringer i datamigrering
- Endring av interne arbeidsprosesser

**Lav risiko:**
- Flytting til Kongens gate 12 (mai 2026)
- Overgang Visma Business → Visma NXT

### Mortens anbefaling

> "Ikke for høye forventninger til Apollon. Det er funksjonelt, ikke banebrytende. Nettsidene bør primært støtte overgangen."

### Dokumentasjon

- [Prosjektmandat-Apollon.pdf](../Dokumenter/Prosjektmandat-Apollon.pdf) – Internt prosjektmandat
- [Apollon medlemsportal.pdf](Teknisk/Apollon medlemsportal.pdf) – Spesifikasjon medlemsportal

---

## Databaseskjema

### Echo (nytt PostgreSQL-system)

Echo er det nye PostgreSQL-baserte systemet som erstatter det gamle DB2-baserte Apollon-systemet.

| Metrikk | Apollon (gammelt) | Echo (nytt) |
|---------|-------------------|-------------|
| Database | DB2 | PostgreSQL |
| Totalt felt | 994 | 1157 |
| Tabeller | 73 | 153 |
| Mappet mellom systemene | 143 felt (14%) | |

### Sentrale tabeller

| Tabell | Felt | Beskrivelse |
|--------|------|-------------|
| `recordings` | 24 | Innspillinger (ISRC, tittel, artist, spilletid) |
| `releases` | 8 | Utgivelser (album, singel) |
| `performers_and_producers` | 10 | Artister og produsenter |
| `performances` | 6 | Kobling artist → innspilling |
| `unidentified_playback_groups` | 20 | Spilledata fra kringkastere |
| `genres` | 3 | Sjangre |
| `gender` | 2 | Kjønnsdata |
| `iso3166` | 5 | Landkoder |
| `instruments` | 4 | Instrumenter |

### Dokumentasjon

- **[Teknisk/Echo-felter.xlsx](Teknisk/Echo-felter.xlsx)** – Komplett feltliste og mappinger
- **[Metadata.md](Metadata.md)** – Metadata for statistikkvisning

---

## Eksterne datakilder

### ACRCloud

| Egenskap | Verdi |
|----------|-------|
| **Type** | Audio Content Recognition |
| **Funksjon** | Radio-monitorering (100+ stasjoner) |
| **Data** | Sanntids spilledata |
| **Tilgang** | Kommersiell lisens |
| **Bruk** | Potensielt for live-statistikk |

### VRDB (Utøverregisteret)

| Egenskap | Verdi |
|----------|-------|
| **Type** | Nordisk utøverregister |
| **Funksjon** | Verifisert artistinformasjon |
| **Data** | Navn, instrumenter, medvirkninger |
| **Tilgang** | Via import til Echo |

### Phonofile

| Egenskap | Verdi |
|----------|-------|
| **Type** | Utgivelsesdatabase |
| **Funksjon** | Informasjon om norske utgivelser |
| **Data** | Album, ISRC, plateselskap |
| **Tilgang** | Samarbeid |

### Kringkastere

| Kringkaster | Data | Format |
|-------------|------|--------|
| NRK | Spillelister | Periodiske rapporter |
| Bauer Media | Spillelister | Periodiske rapporter |
| P4 | Spillelister | Periodiske rapporter |

---

## Analyseinfrastruktur

### Metabase

| Egenskap | Verdi |
|----------|-------|
| **Type** | Business intelligence |
| **Funksjon** | Dashboards og rapporter |
| **Tilgang** | Intern (Ståle kan hjelpe) |
| **Bruk** | Statistikk, analyse |

### Azure

| Egenskap | Verdi |
|----------|-------|
| **Type** | Cloud-plattform |
| **Funksjon** | Hosting, databaser |
| **Verktøy** | Power BI (potensielt) |

---

## Målbilde: Sanity som innholdshub

### Arkitektur

```
                    ┌─────────────────┐
                    │   Sanity CMS    │
                    │ (content lake)  │
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│   Nettside    │   │  Nyhetsbrev   │   │   Apollon     │
│   (Next.js)   │   │  (Mailchimp)  │   │  (hjelpetekst)│
└───────────────┘   └───────────────┘   └───────────────┘
```

### Fordeler

| Fordel | Beskrivelse |
|--------|-------------|
| **Single source of truth** | Ett sted for alt innhold |
| **Multikanal** | Publiser til nettside, nyhetsbrev, app |
| **Strukturert** | Schema.org, GEO-optimalisering |
| **Fleksibelt** | Kan tilpasses over tid |
| **Headless** | Innhold separert fra presentasjon |

### Kim sin forståelse

> "Når noe endres i hub, skal det automatisk oppdateres på alle kanaler."

---

## Integrasjoner

### Prioriterte

| Integrasjon | Prioritet | Status | Avhengighet |
|-------------|-----------|--------|-------------|
| Sanity → Nettside | Høy | Planlagt | - |
| Sanity → Apollon (hjelpetekst) | Medium | Uavklart | API fra Via Concept |
| Sanity → Mailchimp | Lav | Planlagt | Mailchimp API |
| Echo → Statistikkvisning | Medium | Uavklart | Metabase/API |

### API-status

| System | API | Status |
|--------|-----|--------|
| Apollon | ? | Må avklares med Via Concept/Finland |
| Intercom | Ja | Finnes, men fremtid usikker |
| Mailchimp | Ja | Tilgjengelig |
| Metabase | ? | Må avklares med Ståle |
| Echo/PostgreSQL | ? | Må avklares |
| ACRCloud | Ja | Kommersiell lisens kreves |

---

## Anbefalt teknisk stack (hovedprosjekt)

| Komponent | Teknologi | Ansvar | Merknad |
|-----------|-----------|--------|---------|
| CMS | Sanity | Inge | Content lake |
| Frontend | Next.js / Astro | Inge | SSG/SSR |
| Hosting | Vercel / Netlify | Inge | Edge deployment |
| Analytics | GA4 / Plausible | Are | GDPR-vennlig |
| Søk | Algolia / Sanity | Inge | Strukturert søk |
| Visualisering | Flourish → D3.js | Inge | Prototype → produksjon |

---

## Tekniske spørsmål (uavklart)

### Prioritet 1 (blokkerer)

1. **Apollon API:** Hva kan hentes ut/integreres?
2. **Min Side hjelpetekster:** Hvordan løse når Apollon ikke støtter det?

### Prioritet 2 (viktig)

3. **Intercom-avgjørelse:** Kutte eller beholde?
4. **Finland-erfaring:** Hva har de gjort med My Gramex 2.0?
5. **Metabase-tilgang:** Kan vi få API eller dashboard-tilgang?

### Prioritet 3 (statistikk)

6. **ACRCloud:** Lisens og tilgang for live-statistikk?
7. **Kanaltabell:** Hvor ligger mapping broadcaster_id → kanalnavn?
8. **Sjangerkobling:** Hvordan kobles genres til recordings?

---

## Nøkkelpersoner (teknisk)

| Person | Rolle | Ansvar |
|--------|-------|--------|
| **Morten Tørmoen** | IT-sjef (CIO) | Apollon, overordnet arkitektur |
| **Ståle** | Intern utvikler | Metabase, API, database-spørringer |
| **Inge Fossland** | Ekstern (Kjernekaren) | Sanity, frontend, design |

---

## Relaterte dokumenter

- [Metadata.md](Metadata.md) – Metadatafelt for statistikkvisning
- [Statistikk-visualisering.md](Statistikk-visualisering.md) – Visualiseringsideer
- [Teknisk/Echo-felter.xlsx](Teknisk/Echo-felter.xlsx) – Komplett feltliste
- [Teknisk/Datafelt-statistikk.md](Teknisk/Datafelt-statistikk.md) – Sjekkliste til Ståle

---

*Basert på innsiktsmøte med Morten T. (nov 2025), oppstartsmøte 18.11.2025, og løpende analyse.*
