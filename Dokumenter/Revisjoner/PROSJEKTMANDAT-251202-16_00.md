# Prosjektmandat: Gramo Redesign

**Dato:** 02.12.2025 **Status:** ARKIVERT (erstattet 03.12.2025)

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

* Levere et nytt nettsted optimalisert for brukeroppgaver (toppoppgaver).
* Etablere en profesjonell visuell profil (digital stilguide og bildebank).
* Sikre innhold med konsistent og helhetlig kvalitet, særskilt med tanke på juridisk innhold.
* Optimalisere for SEO og AI-søk (ChatGPT, Google AI Overview) gjennom godt strukturert innhold
* Sørge for at nettsiden oppfyller WCAG 2.1 AA-standard (universell utforming).
* Dokumentere teknisk fleksibilitet for videreutvikling.
* Etablere rutiner for innholdsproduksjon og -forvaltning som sikrer at innholdet holdes oppdatert over tid.

**Målbilde for teknisk plattform:**

* Single source of truth - innhold redigeres ett sted og publiseres til flere kanaler
* Headless arkitektur som muliggjør fleksibel distribusjon (nettside, nyhetsbrev, SoMe)
* Fremtidsrettet arkitektur som kan integreres med Apollon når systemet er i stabil drift (2027)

### Strategiske alternativer for forholdet til Apollon/Webportal

Usikkerhet om hva som ligger innenfor Apollon-prosjektet og hva som skal leveres av webportalen, gjør at prosjektet må ta stilling til to alternativer.

**Felles forutsetninger for begge alternativer:**
- Avklart kontaktpunkt og samarbeidsform mellom prosjektene
- Tilgang til teknisk arkitekturdokumentasjon

#### Alternativ A: Holde seg utenfor spesifikasjonsfasen, men med løpende informasjon

**Omfang:** Prosjektet holder seg til gramo.no og deltar ikke i spesifikasjonsarbeidet for webportalen.

**Krav til Apollon-prosjektet:**
- Grundig brief om funksjonalitet som er innenfor/utenfor webportalen
- Løpende oppdateringer ved endringer i scope eller grensesnitt
- Dokumentasjon av overganger mellom nettside og webportal (lenker, brukerflyt, FAQ-behov)

**Risiko:**
- Webportalen spesifiseres uten vår brukerinnsikt og innholdskompetanse
- Brukerinnsikten fra toppoppgaveundersøkelsen blir ikke utnyttet
- Svakere brukeropplevelse på tvers av nettside og webportal

#### Alternativ B: Delta i spesifikasjonsfasen (anbefalt)

**Omfang:** Prosjektet bidrar aktivt i spesifikasjonsfasen av webportal-prosjektet, med mål om å styrke brukeropplevelsen uten å påvirke fremdriften.

**Vårt bidrag:**
- Spisskompetanse på brukeropplevelse og innholdsdesign
- Unik brukerinnsikt fra toppoppgaveundersøkelsen (som ingen andre Gramex-organisasjoner eller Byteconcept har)
- Sikre god sammenheng mellom nettside og webportal

**Forutsetninger:**
- Formelt mandat og kapasitet til å delta
- Gramo-ressurser frigjøres for å bidra (omfang avklares)
- Rådgivende rolle i spesifikasjonsarbeidet

**Gevinster:**
- Styrket brukeropplevelse i webportalen basert på reell brukerinnsikt
- Bedre utgangspunkt for å tilpasse nettsidene til portalen
- Redusert risiko for feilkobling og dobbeltarbeid
- Grunnlag for god brukeropplevelse på tvers når Apollon er i stabil drift (2027)

**Anbefaling:** Prosjektgruppen anbefaler alternativ B. Endelig valg må gjøres av prosjekteier.

---

### Avgrensning (Hva prosjektet IKKE omfatter)

* Teknisk utvikling av webportal – dette er Apollon-prosjektets ansvar.
* Integrasjoner mot Apollon er først aktuelt når systemet er i stabil drift (2027).
* Utskiftning av Intercom som medlemskommunikasjonsløsning er utenfor scope og vurderes separat.

**Grenselandsfunksjonalitet - må avklares:** Følgende funksjonalitet ligger i dagens MinSide, men det er uklart om det skal inn i Apollon:

| Funksjon | I dag | I Apollon? | Hvis nei - hvem løser det? |
| :---- | :---- | :---- | :---- |
| Medlemsregistrering | MinSide (skjema) | ? | Nettsiden? |
| Enkel registrering (låter/artist) | MinSide (ikke koblet til Echo) | ? | Nettsiden? |
| ISRC-registrering | MinSide | ? | Nettsiden? |
| Oversikt utbetalinger | MinSide | Ja (verifisert data) | - |
| Verifisert repertoar | MinSide | Ja | - |

**Hvorfor dette må avklares:**

- Hvis funksjonaliteten IKKE er i Apollon, må nettsiden løse det
- Hvis funksjonaliteten ER i Apollon, må vi vite hvordan det foregår for å forklare det på nettsiden
- For at den tekniske arkitekturen skal kunne ta høyde for senere tilpasning til Apollon
- Uansett må vi vite - enten for å bygge det eller for å forklare det

**Forholdet til Apollon-prosjektet:** Prosjektene har separate scope, men brukerreisene går på tvers. Folk googler og lander på nettsidene før de går til webportalen - gramo.no er uansett en del av brukerreisen.

**Selv om toppoppgavene løses i Apollon, må nettsiden:**

* Ha oppdaterte FAQ-er som matcher webportalen
* Ha riktige lenker til innlogging
* Forklare hvordan ting fungerer i webportalen (f.eks. "Slik ser du avregningen din")
* Gi en best mulig overgang/veksling fra nettside til webportal

*For å kunne gjøre dette trenger vi å vite:*

* Hvilke lenker skal være på nettsiden?
* Hvilke FAQ-er trengs?
* Hvordan foregår prosessene i webportalen? (for å forklare dem)
* Hvilken retning går utviklingen mot 2027?

**Mulighet for samarbeid:** Når grensene er avklart, kan vi planlegge hvordan nettside og webportal skal henge sammen - ikke for å påvirke Apollon, men for å sikre en god brukeropplevelse på tvers.

Vi vet at Finland har gått langt i å vurdere alternativer til webportalen og er i anbudsrunde med flere leverandører for potensielt å erstatte hele eller deler av Biconcepts Web Portal 2.0.

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
| **Prosjekteier** | Kim | Eier av prosjektet, ansvarlig for gevinstrealisering og valg av strategisk alternativ. |
| **Prosjektleder** | Are | Daglig ledelse av prosjektet. |
| **Produktteam** | Are, Rita, Bastian, Inge | Kommunikasjon, UX, brukerinnsikt, innholdsdesign |
| **Nøkkelressurser medlemsavd.** | Toril, Kristoffer, Jonas, Henriette | Intervju, workshop, innholdsproduksjon, FAQ |

**Må avklares:**
- [ ] Behov for formell styringsgruppe?
- [ ] Hvordan medlemsavdelingen og andre ressurser kobles på uten å belaste dem unødig
- [ ] Etablering av en formalisert rolle som eier av UX og innhold på tvers av kanaler

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
| Uklart hvem som eier brukeropplevelse og innhold på tvers | Høy | Høy | Avklar ansvar som del av valg mellom alternativ A/B. |
| Intern uenighet om ansvar/roller | Medium | Høy | Avklar og formaliser roller og ansvar. |

### Apollon-avhengighet

| Risiko | Sannsynlighet | Konsekvens | Tiltak |
| :---- | :---- | :---- | :---- |
| **Uklart hva som ligger innenfor/utenfor Apollon** | **Høy** | **Høy** | **Avklar scope i møte med prosjekteier. Velg mellom alternativ A/B.** |
| **Teknisk arkitektur ukjent** | **Høy** | **Høy** | **Etterspør dokumentasjon om integrasjonsflater og planlagte leveranser.** |
| Feilkobling – bygger funksjonalitet feil sted | Høy | Høy | Grundig brief om grensesnitt mellom nettside og webportal. |
| Toppoppgavene løses (ikke) i Apollon | Høy | Høy | Bidra med brukerinnsikt i spesifikasjonsfasen (alternativ B). |

### Strategi og retning

| Risiko | Sannsynlighet | Konsekvens | Tiltak |
| :---- | :---- | :---- | :---- |
| Jobber ikke mot felles mål | Medium | Høy | Etabler felles målbilde gjennom prioriteringsverksted. |
| Strategiske valg ikke avklart | Høy | Høy | Avklar alternativ A/B før detaljarbeid starter. |
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

- [ ] **Strategisk alternativ:** Valg mellom alternativ A og B er gjort av prosjekteier.
- [ ] **Grensesnitt mot Apollon:** Avklart hva som er innenfor/utenfor webportalen (medlemsregistrering, ISRC, integrasjoner).
- [ ] **Teknisk arkitektur:** Oversikt over integrasjonsflater og planlagte leveranser fra Apollon.
- [ ] **Kapasitet:** Navngitte personer med avsatt tid er bekreftet fra ledelsen.
- [ ] **Ansvar for brukeropplevelse:** Avklart om det skal formaliseres en rolle som eier av UX/innhold på tvers.
- [ ] **Informasjonskanal:** Etablert måte å få løpende informasjon om Apollon-utviklingen.

### Bør-avklaringer

- [ ] **Måling:** Baseline for dagens situasjon er etablert.
- [ ] **Innholdsstrategi:** Overordnet retning for innhold er skissert.

---

## **8. Spørsmål til avklaring med prosjekteier**

Følgende spørsmål må besvares i møte med Kim (4. desember 2025):

### Scope og grensesnitt
1. Hva ligger innenfor Apollon vs webportalen? (medlemsregistrering, ISRC, integrasjoner)
2. Hva er planlagt levert i webportalen før 2027?
3. Kan vi få oversikt over teknisk arkitektur og integrasjonsflater?

### Deltakelse og mandat
4. Kan/skal vi delta i spesifikasjonsfasen av webportal-prosjektet?
5. Hvem eier brukeropplevelse og innhold på tvers av kanaler?

### Ressurser og organisering
6. Hvem i medlemsavdelingen kan vi involvere, og i hvilket omfang?


---

*Tidligere versjoner: [revisjoner/PROSJEKTMANDAT_2025-11-28.md](revisjoner/PROSJEKTMANDAT_2025-11-28.md)*

*Sist oppdatert: 2. desember 2025*
