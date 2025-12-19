# Prosjektmandat: Gramo Redesign

**Dato:** 28.11.2025 **Status:** Utkast til diskusjon med Kim (onsdag 4\. desember)

---

## **1\. Prosjektets formål**

### Bakgrunn for prosjektet

Gramo skal gjennomføre et innholdsdrevet redesign av sine nettsider for å styrke omdømmet og øke intern effektivitet gjennom en bedre brukeropplevelse.

**Fra initiativ til prosjekt:** Arbeidet startet som kontinuerlig forbedring med mål om å øke gjennomføringsgraden på toppoppgaver samt ønsket om nytt innholdsdesign. Gjennom innsiktsarbeid (brukerundersøkelser, analyse av toppoppgaver, kartlegging av nåsituasjon) ble det tydelig at utfordringene er så omfattende at det kreves et strukturert prosjekt med mandat, dedikerte ressurser og tydelig organisering.

Dagens situasjon er preget av at innholdet eksisterer i tre separate systemer, noe som skaper en fragmentert brukeropplevelse og krever vedlikehold flere steder:

* **Webflow (gramo.no):** Statiske nettsider.  
* **Intercom (hjelp.gramo.no):** Brukes som kunnskapsbase, men er dyrt og ikke et fullverdig CMS egnet for nettsider.  
* **Min side:** Skal erstattes av Apollon webportal i 2026\.

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

## **2\. Mål og omfang**

### Prosjektets omfang

Prosjektet skal produsere, strukturere og lage en plan for forvaltning av innhold som løser brukernes oppgaver og når strategiske mål gjennom uttak i flere kanaler.

**Prosjektet skal:**

* Levere et nytt nettsted optimalisert for brukeroppgaver (toppoppgaver).  
* Etablere en profesjonell visuell profil (digital stilguide og bildebank).  
* Sikre innhold med konsistent og helhetlig kvalitet, særskilt med tanke på juridisk innhold.  
* Optimalisere for SEO og AI-søk (ChatGPT, Google AI Overview) gjennom godt strukturert innhold  
* Sørge for at nettsiden oppfyller WCAG 2.1 AA-standard (universell utforming).  
* Dokumentere teknisk fleksibilitet for videreutvikling.  
* Etablere rutiner for innholdsproduksjon og \-forvaltning som sikrer at innholdet holdes oppdatert over tid.

**Målbilde for teknisk plattform:**

* Single source of truth \- innhold redigeres ett sted og publiseres til flere kanaler  
* Headless arkitektur som muliggjør fleksibel distribusjon (nettside, nyhetsbrev, SoMe)  
* Fremtidsrettet arkitektur som kan integreres med Apollon når systemet er i stabil drift (2027)

**Avgrensning (Hva prosjektet IKKE omfatter):**

* Webportal/MinSide \- dette er Apollon-prosjektets ansvar.  
* Prosjektet skal ikke blande seg inn i Apollon-prosjektet.  
* Integrasjoner mot Apollon er først aktuelt når systemet er i stabil drift (2027).  
* Utskiftning av Intercom som medlemskommunikasjonsløsning er utenfor scope og vurderes separat.

**Grenselandsfunksjonalitet \- må avklares:** Følgende funksjonalitet ligger i dagens MinSide, men det er uklart om det skal inn i Apollon:

| Funksjon | I dag | I Apollon? | Hvis nei \- hvem løser det? |
| :---- | :---- | :---- | :---- |
| Medlemsregistrering | MinSide (skjema) | ? | Nettsiden? |
| Enkel registrering (låter/artist) | MinSide (ikke koblet til Echo) | ? | Nettsiden? |
| ISRC-registrering | MinSide | ? | Nettsiden? |
| Oversikt utbetalinger | MinSide | Ja (verifisert data) | \- |
| Verifisert repertoar | MinSide | Ja | \- |

**Hvorfor dette må avklares:**

- Hvis funksjonaliteten IKKE er i Apollon, må nettsiden løse det  
- Hvis funksjonaliteten ER i Apollon, må vi vite hvordan det foregår for å forklare det på nettsiden  
- For at den tekniske arkitekturen skal kunne ta høyde for senere tilpasning til Apollon  
- Uansett må vi vite \- enten for å bygge det eller for å forklare det

**Forholdet til Apollon-prosjektet:** Prosjektene har separate scope, men brukerreisene går på tvers. Folk googler og lander på nettsidene før de går til webportalen \- gramo.no er uansett en del av brukerreisen.![][image1]

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

**Mulighet for samarbeid:** Når grensene er avklart, kan vi planlegge hvordan nettside og webportal skal henge sammen \- ikke for å påvirke Apollon, men for å sikre en god brukeropplevelse på tvers.

Vi vet at Finland har gått langt i vurdere alternativer til web-portalen og er i anbudsrunde med flere leverandører for potensielt å erstatte hele eller deler av Biconcepts Web Portal 2.0.

Koordinering skjer gjennom erfaringsutveksling med Finland/Danmark.

**Optimalt scenario**  
Vi kan bidra inn i spesifikasjonsfasen av Web portal-prosjektet med spisskompetanse på kommunikasjon, brukeropplevelse, brukerinnsikt og innholdsdesign. Potensielt kan vi styrke brukeropplevelsen betraktelig gjennom å prioritere og forenkle de viktigste delene av grensesnittet innenfor rammene av spesifikasjonsfasen. 

Dette vil også gi oss et mye bedre utgangspunkt for å tilpasse nettsidene til portalen og legge grunnlag for teknisk arkitektur og brukeropplevelse når Apollon er i stabil drift (2027)

### Effektmål

Suksess måles gjennom følgende indikatorer:

* **Redusert supportbelastning:** Reduksjon i antall henvendelser til medlemsservice.  
* **Bedre oppgaveløsning:** Økt løsningsgrad på definerte kjerneoppgaver (målt gjennom brukertester og analyse).  
* **Økt engasjement:** Økt trafikk og engasjement (målt gjennom Google Analytics eller tilsvarende).  
* **Brukertilfredshet:** Brukerundersøkelser skal vise forbedret tilfredshet med brukervennlighet.

---

## **3\. Prosjekteier og prosjektgruppe**

| Rolle | Navn | Ansvar |
| :---- | :---- | :---- |
| **Prosjekteier** | Kim  | Eier av prosjektet, ansvarlig for gevinstrealisering. |
| **Prosjektleder** | Are/Torstein | Daglig ledelse av prosjektet. |
| **Produktteam** | Are Rita Bastian Inge (Medlemsservice) |  |
| **Nøkkelressurser** | Medlemsservice, juridisk, virksomhetsstyring, IT, fordeling og utbetaling | Intervjuer Worskshop Innholdsproduksjon  |

---

## **4\. Tidsplan**

**Overordnede milepæler:**

* **Forprosjekt:** Desember 2025 \- \[Dato\]  
* **Designfase:** \[Avklares\]  
* **Teknisk utvikling:** \[Avklares\]  
* **Innholdsproduksjon:** \[Avklares\]  
* **Lansering:** \[Avklares\]

---

## **5\. Budsjett**

* **Totalramme:** \[Avklares\]  
* **Utgiftsmyndighet:** \[Avklares\]

---

## **6\. Risiko**

**Risikovurdering basert på pre-mortem workshop (28.11.2025):**

### Organisasjon og kapasitet

| Risiko | Sannsynlighet | Konsekvens | Tiltak |
| :---- | :---- | :---- | :---- |
| **Vi får ikke tilgang til sentrale nøkkelpersoner i organisasjonen**  | **Svært høy** | **Svært høy** | **Forankre hos ledelsen. Frigjør kapasitet.** |
| Intern uenighet om ansvar/roller | Medium | Høy | Etabler tydelig RACI-matrise i forprosjekt. |
| Rollen som ansvarlig ikke formalisert | Høy | Høy | Definer tydelig ansvar i mandat. Oppdaterte stillingsintrukser som del av kontinuerlig forbedring etter prosjektet. |

### Apollon-avhengighet

| Risiko | Sannsynlighet | Konsekvens | Tiltak |
| :---- | :---- | :---- | :---- |
| **Vi vet ikke hva som er mulig i Apollon** | **Høy** | **Høy** | **Aktiv koordinering med Apollon-prosjektet, særlig i spesifikasjonsfasen.**  |
| Uklart hva som skal løses i nettside vs webportal | Høy | Høy | Avklar grenser \- hva er "MinSide"? |
| Toppoppgavene løses (ikke) i Apollon | Høy | Høy | Vi bidrar med vår innsikt og kompetanse i Apollon-prosjektet. |
| Kan ikke planlegge fremtidsrettet uten å vite retning | Høy | Høy | Etabler informasjonskanal mot Apollon-prosjektet. |

### Strategi og retning

| Risiko | Sannsynlighet | Konsekvens | Tiltak |
| :---- | :---- | :---- | :---- |
| Jobber ikke mot felles mål | Medium | Høy | Etabler felles målbilde. Skap eierskap gjennom involvering. |
| Strategiske valg ikke avklart | Høy | Høy | Gjennomfør prioriteringsverksted før detaljarbeid starter. |
| Ingen tydelig innholdsstrategi | Medium | Høy | Etabler innholdsstrategi som del av forprosjekt. |

### Innhold og måling

| Risiko | Sannsynlighet | Konsekvens | Tiltak |
| :---- | :---- | :---- | :---- |
| Innholdet funker ikke \- ikke brukertestet | Medium | Høy | Legg inn brukertesting som obligatorisk aktivitet. |
| Måling aldri etablert \- kan ikke styre på data | Medium | Medium | Definer målbare KPI-er ved oppstart. Etabler baseline. |

### Teknisk og forvaltning

| Risiko | Sannsynlighet | Konsekvens | Tiltak |
| :---- | :---- | :---- | :---- |
| Forvaltning vanskelig når konsulenter forsvinner | Medium | Høy | Dokumenter løsningen. Etabler forvaltningsrutiner. Opplæring. |
| Teknisk kompleksitet gjør innholdsproduksjon vanskelig | Medium | Medium | Prioriter brukervennlig CMS. Test med faktiske brukere. |

---

## **7\. Forutsetninger og avklaringer før oppstart**

Følgende må avklares **før** hovedprosjektet kan starte:

### Må-avklaringer

- [ ] **Grensesnitt mot Apollon:** Avklart hva som er innenfor/utenfor MinSide.  
- [ ] **Kapasitet:** Navngitte personer med avsatt tid er bekreftet fra ledelsen.

### Bør-avklaringer

- [x] **Finland/Danmark:** Erfaringsutveksling gjennomført (november 2025).  
- [ ] **Måling:** Baseline for dagens situasjon er etablert.  
- [ ] **Innholdsstrategi:** Overordnet retning for innhold er skissert.  
- [ ] **Informasjonskanal:** Etablert måte å få informasjon om Apollon-retning for 2027\.