# Prosjektmandat: Gramo Redesign

**Dato:** 03.12.2025 **Status:** Utkast til diskusjon med Kim (onsdag 4. desember)

---

## **1. Prosjektets formål**

### Bakgrunn for prosjektet

Gramo skal gjennomføre et innholdsdrevet redesign av sine nettsider for å styrke omdømmet og øke intern effektivitet gjennom en bedre brukeropplevelse.

**Fra initiativ til prosjekt:** Arbeidet startet som kontinuerlig forbedring med mål om å øke gjennomføringsgraden på toppoppgaver samt ønsket om nytt innholdsdesign. Gjennom innsiktsarbeid (brukerundersøkelser, analyse av toppoppgaver, kartlegging av nåsituasjon) ble det tydelig at utfordringene er så omfattende at det kreves et strukturert prosjekt med mandat, dedikerte ressurser og tydelig organisering.

Dagens situasjon er preget av at innholdet eksisterer i tre separate systemer, noe som skaper en fragmentert brukeropplevelse og krever vedlikehold flere steder:

* **Webflow (gramo.no):** Statiske nettsider.
* **Intercom (hjelp.gramo.no):** Brukes som kunnskapsbase, men er dyrt og ikke et fullverdig CMS egnet for nettsider.
* **Min side:** Skal erstattes av Apollon webportal i 2026.

**Hovedutfordringer:**

* Fragmentert brukeropplevelse på tvers av systemene.
* Innhold må vedlikeholdes manuelt flere steder.
* Lav løsningsgrad på toppoppgaver (målt til 43%).
* Intercom begrenser mulighetene for god innholdsforvaltning.
* Brukere opplever at det er vanskelig å finne, forstå og bruke det de trenger.

### Ønsket situasjon

Den nye nettsiden skal være en moderne, brukervennlig og profesjonell plattform som:

* **Ivaretar målgruppenes behov:** Løsningen skal bygges på kjernemodellen, hvor målgrupper og deres kjerneoppgaver styrer innhold, struktur og design.
* **Effektiviserer driften:** Reduserer antall henvendelser til medlemsservice.
* **Kommuniserer tydelig:** Informerer godt om Gramos virksomhet, rettighetsområder og resultater.
* **Styrker merkevaren:** Bygger opp under Gramos posisjon og omdømme i tråd med vedtatt kommunikasjonsstrategi.
* **Overholder lovkrav:** Reflekterer kravene i CRM-loven for kollektive forvaltningsorganisasjoner.
* **Er fremtidsrettet:** Bygges på en skalerbar og fleksibel plattform med mulighet for integrasjon mot eksterne systemer i en senere fase.

---

## **2. Mål og omfang**

### Prosjektets omfang

Prosjektet skal produsere, strukturere og lage en plan for forvaltning av innhold som løser brukernes oppgaver og når strategiske mål gjennom uttak i flere kanaler.

**Prosjektet skal:**

* Levere et nytt nettsted optimalisert for brukeroppgaver (toppoppgaver) – også de som løses i Apollon webportal, gjennom gode overganger.
* Etablere en profesjonell visuell profil (digital stilguide og bildebank).
* Sikre innhold med konsistent og helhetlig kvalitet, særskilt med tanke på juridisk innhold.
* Vurdere hvordan vi kan utnytte statistikk og spilletidsdata for å lage gode interaktive opplevelser.
* Vurdere interaktiv versjon av års- og åpenhetsrapport.
* Vurdere andre grep som styrker Gramos omdømme og engasjement på nettsidene.
* Optimalisere for SEO og AI-søk (ChatGPT, Google AI Overview) gjennom godt strukturert innhold.
* Sørge for at nettsiden oppfyller WCAG 2.1 AA-standard (universell utforming).
* Dokumentere teknisk fleksibilitet for videreutvikling.
* Etablere rutiner for innholdsproduksjon og -forvaltning som sikrer at innholdet holdes oppdatert over tid.

**Målbilde for teknisk plattform:**

* Single source of truth - innhold redigeres ett sted og publiseres til flere kanaler
* Headless arkitektur som muliggjør fleksibel distribusjon (nettside, nyhetsbrev, SoMe)
* Fremtidsrettet arkitektur som kan integreres med Apollon når systemet er i stabil drift (2027)

---

### Avgrensning (Hva prosjektet IKKE omfatter)

* **Webportal/MinSide** – dette er Apollon-prosjektets ansvar.
* Prosjektet skal ikke blande seg inn i spesifikasjonsfasen av Apollon-prosjektet.
* Integrasjoner mot Apollon er først aktuelt når systemet er i stabil drift (2027).
* Utskiftning av Intercom som medlemskommunikasjonsløsning er utenfor scope og vurderes separat.

---

### Forholdet til Apollon-prosjektet

Prosjektene har separate scope, men brukerreisene går på tvers. Folk googler og lander på nettsidene før de går til webportalen – gramo.no er uansett en del av brukerreisen.

**For å lykkes med vårt prosjekt trenger vi:**

1. **God informasjon raskt** – grundig brief om funksjonalitet som er innenfor/utenfor webportalen
2. **Kontaktpersoner vi kan spørre** – avklart kontaktpunkt for løpende spørsmål
3. **Løpende oppdatering** – ved endringer i scope eller grensesnitt som påvirker nettsiden
4. **Tilgang til nøkkelpersoner** – for intervjuer, workshops og innholdsproduksjon
5. **Dokumentasjon** – av overganger mellom nettside og webportal (lenker, brukerflyt, FAQ-behov)

**Grenselandsfunksjonalitet - må avklares:** Følgende funksjonalitet ligger i dagens MinSide, men det er uklart om det skal inn i Apollon:

| Funksjon | I dag | I Apollon? | Hvis nei - hvem løser det? |
| :---- | :---- | :---- | :---- |
| Medlemsregistrering | MinSide (skjema) | ? | Nettsiden? |
| Enkel registrering (låter/artist) | MinSide (ikke koblet til Echo) | ? | Nettsiden? |
| ISRC-registrering | MinSide | ? | Nettsiden? |
| Registrantkode | MinSide | ? | Nettsiden? |
| Oversikt utbetalinger | MinSide | Ja (verifisert data) | - |
| Verifisert repertoar | MinSide | Ja | - |

**Hvorfor dette må avklares:**

- Hvis funksjonaliteten IKKE er i Apollon, må nettsiden løse det
- Hvis funksjonaliteten ER i Apollon, må vi vite hvordan det foregår for å forklare det på nettsiden
- For at den tekniske arkitekturen skal kunne ta høyde for senere tilpasning til Apollon
- Uansett må vi vite – enten for å bygge det eller for å forklare det

**Vi MÅ vite:**

* Hva inngår/inngår ikke i webportalen (enkel registrering, medlemsregistrering, registrantkode, ISRC) – dette er funksjonalitet nettsideprosjektet kanskje kan bidra til
* Hva er hoveddelene/funksjonene/prosessene i webportalen som nettsidene skal forklare og lenke til?
* Hva skjer etter lansering av webportalen (2027 og framover) og hvordan kan nettsidene og Sanity evt. kobles i senere faser?

**Selv om toppoppgavene løses i Apollon, må nettsiden:**

* Ha oppdaterte FAQ-er som matcher webportalen
* Ha riktige lenker til innlogging
* Forklare hvordan ting fungerer i webportalen (f.eks. "Slik ser du avregningen din")
* Gi en best mulig overgang/veksling fra nettside til webportal

**Mulighet for koordinering:** Når grensene er avklart, kan vi planlegge hvordan nettside og webportal skal henge sammen – ikke for å påvirke Apollon, men for å sikre en god brukeropplevelse på tvers og rigge for kontinuerlig, produktbasert videreutvikling.

---

### Effektmål

Suksess måles gjennom følgende indikatorer:

* **Redusert supportbelastning:** Reduksjon i antall henvendelser til medlemsservice.
* **Bedre oppgaveløsning:** Økt løsningsgrad på definerte kjerneoppgaver (målt gjennom brukertester og analyse).
* **Økt engasjement:** Økt trafikk og engasjement (målt gjennom Google Analytics eller tilsvarende).
* **Brukertilfredshet:** Brukerundersøkelser skal vise forbedret tilfredshet med brukervennlighet.

---

## **3. Prosjekteier og prosjektgruppe**

| Rolle | Navn | Ansvar |
| :---- | :---- | :---- |
| **Prosjekteier** | Kim | Eier av prosjektet, ansvarlig for gevinstrealisering. |
| **Prosjektleder** | Are | Daglig ledelse av prosjektet. |
| **Produktteam** | Are, Rita, Bastian, Inge | Kommunikasjon, UX, brukerinnsikt, innholdsdesign |
| **Nøkkelressurser medlemsavd.** | Toril, Kristoffer, Jonas, Henriette | Intervju, workshop, innholdsproduksjon, FAQ |

**Må avklares:**
- [ ] Behov for formell styringsgruppe?
- [ ] Hvordan medlemsavdelingen og andre ressurser kobles på uten å belaste dem unødig

---

## **4. Tidsplan**

**Overordnede milepæler:**

* **Forprosjekt:** Desember 2025 - [Dato]
* **Designfase:** [Avklares]
* **Teknisk utvikling:** [Avklares]
* **Innholdsproduksjon:** [Avklares]
* **Lansering:** [Avklares]

---

## **5. Budsjett**

* **Totalramme:** [Avklares]
* **Utgiftsmyndighet:** [Avklares]

---

## **6. Risiko**

**Risikovurdering basert på pre-mortem workshop (28.11.2025) og avklaringsmøte (02.12.2025):**

### Organisasjon og kapasitet

| Risiko | Sannsynlighet | Konsekvens | Tiltak |
| :---- | :---- | :---- | :---- |
| **Vi får ikke tilgang til nøkkelpersoner i medlemsavdelingen** | **Svært høy** | **Svært høy** | **Forankre tidlig hos ledelsen. Avklar hvem som kan bidra og i hvilket omfang.** |
| Medlemsavdelingen reserverer kontaktkanaler eller frigir ikke kapasitet | Høy | Høy | Avklar forventninger og arbeidsform tidlig. Minimer belastning. |
| Intern uenighet om ansvar/roller | Medium | Høy | Avklar og formaliser roller og ansvar. |

### Apollon-avhengighet

| Risiko | Sannsynlighet | Konsekvens | Tiltak |
| :---- | :---- | :---- | :---- |
| **Uklart hva som ligger innenfor/utenfor Apollon** | **Høy** | **Høy** | **Avklar scope i møte med prosjekteier. Sikre grundig brief.** |
| **Teknisk arkitektur ukjent** | **Høy** | **Høy** | **Etterspør dokumentasjon om integrasjonsflater og planlagte leveranser.** |
| Feilkobling – bygger funksjonalitet feil sted | Høy | Høy | Grundig brief om grensesnitt mellom nettside og webportal. |
| Mangler løpende oppdatering ved endringer | Medium | Høy | Etabler informasjonskanal og kontaktpunkt mot Apollon-prosjektet. |

### Strategi og retning

| Risiko | Sannsynlighet | Konsekvens | Tiltak |
| :---- | :---- | :---- | :---- |
| Jobber ikke mot felles mål | Medium | Høy | Etabler felles målbilde gjennom prioriteringsverksted. |
| Ingen tydelig innholdsstrategi | Medium | Høy | Etabler innholdsstrategi som del av forprosjekt. |

### Innhold og måling

| Risiko | Sannsynlighet | Konsekvens | Tiltak |
| :---- | :---- | :---- | :---- |
| Innholdet funker ikke - ikke brukertestet | Medium | Høy | Legg inn brukertesting som obligatorisk aktivitet. |
| Måling aldri etablert - kan ikke styre på data | Medium | Medium | Definer målbare KPI-er ved oppstart. Etabler baseline. |

### Teknisk og forvaltning

| Risiko | Sannsynlighet | Konsekvens | Tiltak |
| :---- | :---- | :---- | :---- |
| Forvaltning vanskelig når konsulenter forsvinner | Medium | Høy | Dokumenter løsningen. Etabler forvaltningsrutiner. Opplæring. |
| Teknisk kompleksitet gjør innholdsproduksjon vanskelig | Medium | Medium | Prioriter brukervennlig CMS. Test med faktiske brukere. |

---

## **7. Forutsetninger og avklaringer før oppstart**

Følgende må avklares **før** hovedprosjektet kan starte:

### Må-avklaringer

- [ ] **Grensesnitt mot Apollon:** Avklart hva som er innenfor/utenfor webportalen (medlemsregistrering, ISRC, integrasjoner).
- [ ] **Kontaktpunkt:** Navngitt kontaktperson for spørsmål om Apollon/webportal.
- [ ] **Kapasitet:** Navngitte personer med avsatt tid er bekreftet fra ledelsen.
- [ ] **Informasjonskanal:** Etablert måte å få løpende informasjon om Apollon-utviklingen.

### Bør-avklaringer

- [ ] **Teknisk arkitektur:** Oversikt over integrasjonsflater og planlagte leveranser fra Apollon.
- [ ] **Måling:** Baseline for dagens situasjon er etablert.
- [ ] **Innholdsstrategi:** Overordnet retning for innhold er skissert.

---

## **8. Spørsmål til avklaring med prosjekteier**

Følgende spørsmål må besvares i møte med Kim (4. desember 2025):

### Scope og grensesnitt
1. Hva ligger innenfor Apollon vs webportalen? (medlemsregistrering, ISRC, integrasjoner)
2. Hva er planlagt levert i webportalen før 2027?
3. Hvem er kontaktperson for spørsmål om webportalen?

### Ressurser og organisering
4. Hvem i medlemsavdelingen kan vi involvere, og i hvilket omfang?
5. Hvordan får vi løpende oppdateringer om Apollon-utviklingen?

---

*Tidligere versjoner: [revisjoner/PROSJEKTMANDAT-251202-16_00.md](revisjoner/PROSJEKTMANDAT-251202-16_00.md)*

*Sist oppdatert: 3. desember 2025*
