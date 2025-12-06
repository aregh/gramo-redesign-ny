# Teknisk landskap - Gramo

## Nåværende systemer

### Webflow (gramo.no)
- **Type:** CMS/nettside
- **Status:** I produksjon
- **Begrensning:** Veldig statisk, vanskelig å vedlikeholde
- **Fremtid:** Skal erstattes

### Intercom (hjelp.gramo.no)
- **Type:** Hjelpesenter, chat, artikler
- **Status:** I produksjon
- **Begrensning:** Dyrt, vurderes for kutt
- **Fremtid:** Avgjørelse i 2026
- **Innhold:** 61 artikler i 6 samlinger

### Min Side
- **Type:** Medlemsportal (webportal)
- **Status:** I produksjon
- **Fremtid:** Blir erstattet av Apollon

### Ekko
- **Type:** Sikler (distribusjonssystem)
- **Status:** I produksjon
- **Fremtid:** Går til Apollon

### Mailchimp
- **Type:** Nyhetsbrev
- **Status:** I produksjon
- **Fremtid:** Beholdes, men vurder integrasjon

---

## Apollon (nytt kjernesystem)

### Generelt
- **Leverandør:** Via Concept
- **Type:** Ferdig produkt for kollektiv forvaltning
- **Brukere:** 12 land (Finland, Danmark, Sveits, m.fl.)

### Tidsplan
| Milepæl | Dato |
|---------|------|
| Formell oppstart | 1. oktober 2025 |
| Grunninstallasjon | Juni 2026 |
| Full produksjon | August 2026 |
| Min Side 2.0 | Vår/sommer 2026 |

### Kostnad
- **Historisk:** 92 mill (nordisk samarbeid)
- **Gramos del:** 29 mill (+ 20% risikopåslag)
- **Årlig drift:** 3,5 mill

### Funksjonalitet
- Registrering av utgivelser
- ISRC-tildeling
- Økonomioversikt
- Medlemsportal (Min Side)

### Begrensninger
- Ferdig produkt, lite skreddersøm
- Design/farger kan tilpasses
- Funksjonalitet er låst
- Hjelpetekster kan ikke tilpasses inne i Apollon
- Endringer prioriteres av 12 land sammen

### Mortens anbefaling
> "Ikke for høye forventninger til Apollon. Det er funksjonelt, ikke banebrytende. Nettsidene bør primært støtte overgangen."

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
- **Single source of truth** - Ett sted for innhold
- **Multikanal** - Publiser til flere flater
- **Strukturert** - Schema.org, GEO-optimalisering
- **Fleksibelt** - Kan tilpasses over tid

### Kim sin forståelse
> "Når noe endres i hub, skal det automatisk oppdateres på alle kanaler."

---

## Integrasjoner

### Prioriterte
| Integrasjon | Prioritet | Status |
|-------------|-----------|--------|
| Sanity → Nettside | Høy | Planlagt |
| Sanity → Apollon (hjelpetekst) | Medium | Avhenger av API |
| Sanity → Mailchimp | Lav | Planlagt |

### API-tilgang
- **Apollon:** Må avklares med Via Concept/Finland
- **Intercom:** API finnes, men fremtid usikker
- **Webflow:** Ikke relevant (blir erstattet)

---

## Tekniske spørsmål (uavklart)

1. **Apollon API:** Hva kan hentes ut/integreres?
2. **Intercom-avgjørelse:** Kutte eller beholde?
3. **Min Side hjelpetekster:** Hvordan løse når Apollon ikke støtter det?
4. **Finland-erfaring:** Hva har de gjort med My Gramex 2.0?

---

## Databaseskjema (Echo)

Echo er det nye PostgreSQL-baserte systemet som erstatter det gamle DB2-baserte Apollon.

### Nøkkeltall

| Metrikk | Apollon (gammelt) | Echo (nytt) |
|---------|-------------------|-------------|
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

### Dokumentasjon

- **[Teknisk/Echo-felter.xlsx](Teknisk/Echo-felter.xlsx)** – Komplett feltliste og mappinger
- **[Metadata.md](Metadata.md)** – Metadata for statistikkvisning

---

## Anbefalt teknisk stack (hovedprosjekt)

| Komponent | Teknologi | Ansvar |
|-----------|-----------|--------|
| CMS | Sanity | Inge |
| Frontend | Next.js / Astro | Inge |
| Hosting | Vercel / Netlify | Inge |
| Analytics | GA4 / Plausible | Are |
| Søk | Algolia / Sanity | Inge |

---

*Basert på innsiktsmøte med Morten T. og oppstartsmøte 18.11.2025*
