# Internt prosjektmandat: Gramo.no Redesign

**Versjon:** 2.0
**Dato:** 5. desember 2025
**Status:** Utkast basert på Apollon-prosjektmandatet

---

## 1. Bakgrunn

Gramo skal gjennomføre et innholdsdrevet redesign av gramo.no for å styrke omdømmet og øke intern effektivitet gjennom bedre brukeropplevelse.

**Dagens situasjon:**
- Innhold eksisterer i tre separate systemer (Webflow, Intercom, Min side)
- Fragmentert brukeropplevelse på tvers av systemene
- Lav løsningsgrad på toppoppgaver (målt til 43%)
- Brukere opplever at det er vanskelig å finne, forstå og bruke det de trenger
- Min side skal erstattes av Apollon webportal i 2026

**Ønsket situasjon:**
Den nye nettsiden skal være en moderne, brukervennlig og profesjonell plattform som:
- Ivaretar målgruppenes behov gjennom innhold bygget på kjernemodellen
- Effektiviserer driften ved å redusere henvendelser til medlemsservice
- Kommuniserer tydelig om Gramos virksomhet og resultater
- Styrker merkevaren i tråd med kommunikasjonsstrategi
- Overholder lovkrav (CRM-loven for kollektive forvaltningsorganisasjoner)
- Er fremtidsrettet med skalerbar og fleksibel plattform

---

## 2. Formål

### Resultatmål
- Nytt nettsted optimalisert for brukeroppgaver (toppoppgaver)
- Profesjonell visuell profil (digital stilguide)
- Innhold med konsistent og helhetlig kvalitet
- Statistikkpresentasjon som omdømmebygger
- SEO og AI-optimalisering (ChatGPT, Google AI Overview)
- Universell utforming (WCAG 2.1 AA)

### Effektmål
- Redusert supportbelastning på medlemsservice
- Økt løsningsgrad på definerte kjerneoppgaver
- Økt trafikk og engasjement
- Forbedret brukertilfredshet

---

## 3. Omfang og avgrensning

### Prosjektet omfatter

**Innhold og merkevare:**
- Innholdskartlegging og -analyse
- Merkevareanalyse og konseptretning
- Informasjonsarkitektur
- Innholdsproduksjon for kjernesider

**Data og visualisering:**
- Statistikkpresentasjon på nettsiden (offentlige, aggregerte data)
- Interaktive topplister og visualiseringer

**Teknisk plattform:**
- Single source of truth (Sanity som innholdshub)
- Headless arkitektur for fleksibel distribusjon
- SEO og AI-optimalisering
- Dokumentert fleksibilitet for videreutvikling

**Grensesnitt mot Apollon webportal:**
- FAQ-er som matcher webportalens funksjonalitet
- Lenker til innlogging og selvbetjeningsfunksjoner
- Hjelpetekster som forklarer hvordan ting fungerer i webportalen
- God overgang/veksling fra nettside til webportal

### Prosjektet omfatter IKKE

- Apollon medlemsportal (eget prosjekt med BiConcepts)
- Teknisk utvikling av webportal
- Integrasjoner mot Apollon (først aktuelt når systemet er i stabil drift, 2027)
- Utskifting av Intercom som medlemskommunikasjonsløsning

**Avgrensning mot Apollon:**
- gramo.no = offentlig nettsted (merkevare, statistikk, informasjon)
- Apollon = innlogget medlemsportal (mine data, registrering, utbetaling)
- Eventuelle behov for UI-branding, lenker eller hjelpetekster koordineres via prosjekteier

---

## 4. Organisering

### Prosjektorganisering

| Rolle | Navn | Ansvar |
|-------|------|--------|
| Prosjekteier | Kim Skarning Andersen | Overordnet ansvar for måloppnåelse og ressursallokering. Godkjenner vesentlige endringer. |
| Prosjektleder | Are Halland | Daglig ledelse, koordinering og prosjektledelse. |
| Produktteam | Are, Rita, Bastian, Inge | Kommunikasjon, UX, innhold, design, data |

**Eksterne leverandører:** Bastian (innhold) og Inge (design) fakturerer separat. Are har overordnet ansvar for koordinering og prosjektledelse.

### Forholdet til Apollon-prosjektet

Prosjektene har separate scope, men felles prosjekteier sikrer koordinering.

| Apollon-prosjektet | Gramo.no-prosjektet |
|--------------------|---------------------|
| Prosjekteier: Kim | Prosjekteier: Kim |
| Systemeier: Toril | Prosjektleder: Are |
| Prosjektleder: Morten | |

**Samordning:** Når Apollon-prosjektet har behov for UI-branding, lenker eller hjelpetekster på gramo.no, kommer dette som konkrete bestillinger til gramo.no-prosjektet.

---

## 5. Tidsplan og milepæler

### Forprosjekt (november-desember 2025)

**Ressursramme:** 20 dagsverk (15 Are + 5 Inge)

**Leveranser:**
- Presentasjon av forprosjekt
- Detaljert plan for hovedprosjekt
- Konseptretning for merkevare/design
- Budsjettforslag

**Aktiviteter:**
- Innholdskartlegging og -analyse
- Interne og eksterne intervjuer
- Prioriteringsverksted
- Merkevareanalyse
- Teknologisk analyse

### Hovedprosjekt

| Fase | Periode | Ressurs | Hovedaktiviteter |
|------|---------|---------|------------------|
| Fase 1: Analyse | Q4 2025 | 30 dagsverk | Brukerbehov, kartlegging, teknologi, merkevare, utforskning av konseptretning, stil og tone, informasjonsarkitektur, GEO/SEO-analyse, toppoppgaver, kjerneflyt, prototyping. **Leveranse:** Detaljert plan for fase 2 og 3. |
| Fase 2: Utvikling | Q1 2026 | 45 dagsverk | Detaljert design, teknisk utvikling, innholdsproduksjon, brukertesting, kjerneverksted, GPT-utvikling |
| Fase 3: Lansering | Q2 2026 | 25 dagsverk (estimat) | Innholdsproduksjon, ferdigstilling av innhold, brukertesting, driftsavtale, lansering (juni 2026) |

**Ressursramme totalt:** 100 dagsverk

Overskridelser av rammene skal avtales med prosjekteier. Eventuelle utvidelser (f.eks. statistikkprosjektet) avklares eksplisitt med prosjekteier i god tid.

**Leveranseområder:**

1. **Kjerneinnhold på nettsidene**
   - Om Gramo og bli medlem
   - Utbetalingskalkulator

2. **Hjelpesider og toppoppgaver**
   - FAQ og lenker til Apollon
   - Landingssider for toppoppgaver (ISRC, registrering, etc.)

3. **Statistikkvisning**
   - Interaktiv statistikkvisning
   - *Merk: Omfanget må avklares med prosjekteier. Statistikkvisning kan potensielt utvides utover prosjektrammen eller skilles ut som eget prosjekt.*

---

## 6. Budsjett

Se eget tilbud for detaljer.

---

## 7. Risiko

| Risikonivå | Risiko | Tiltak |
|------------|--------|--------|
| **Middels** | Manglende tilgang til data for statistikkvisning | Avklare med Ståle hva som er tilgjengelig via datavarehus/Power BI |
| **Middels** | Kapasitet fra medlemsavdeling | Avklare tidlig, minimere belastning |
| **Middels** | Koordinering med Apollon-prosjektet | Felles prosjekteier, tydelig avgrensning |
| **Lav** | Teknisk kompleksitet | Sanity er etablert teknologi med god erfaring |

---

## 8. Forutsetninger

Følgende forutsetninger ligger til grunn:

- Apollon-prosjektet og gramo.no-prosjektet har separate scope
- Koordinering skjer via felles prosjekteier
- Eventuelle bestillinger fra Apollon-prosjektet (UI-branding, lenker, hjelpetekster) kommer som definerte oppgaver
- Tilgang til nødvendige ressurser fra medlemsavdeling avklares

---

## 9. Godkjenning

| Rolle | Navn | Signatur | Dato |
|-------|------|----------|------|
| Prosjekteier | Kim Skarning Andersen | | |
| Prosjektleder | Are Halland | | |

---

*Sist oppdatert: 5. desember 2025*
