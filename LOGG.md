# LOGG - Gramo Redesign

> Kronologisk logg. Nyeste først.

---

## 20. januar 2026

### SpråkGPT-arbeidsmøte med Øystein
*Deltakere: Are, Rita, Bastian, Øystein, Kim | 09:00-11:30 | [Referat](Kommunikasjon/Møter/2026-01-20_SpråkGPT-arbeidsmøte.md)*

#### To-lags modellen for kommunikasjon etablert

**Arkitekturprinsipp: Sannhet + Dialog**
- **Lag 1 (Sannhet):** Juridiske fakta - uforanderlig, sentralisert, må være korrekt ALLTID
- **Lag 2 (Dialog):** Fleksibelt, personlig, tilpasset målgruppe/kanal

**Tre-nivå modell for språkbruk:**
| Nivå | Beskrivelse | Risiko | Eksempel |
|------|-------------|--------|----------|
| Nivå 1 | Hverdagsspråk, inngangsporter | Lav | "Få betalt for musikken din" |
| Nivå 2 | Forklarende, kontekstuelt | Middels | "Vederlag (betaling) for..." |
| Nivå 3 | Juridisk presist, formelt | Ingen | "Jf. åndsverkloven §21..." |

#### Øysteins JustGPT demonstrert
- Lukkede datasett (lovtekst, lovkommentarer, interne retningslinjer)
- Kan oppdateres umiddelbart ved lovendringer
- Kvalitetssikret output - brukt til arvesaker og TONO
- Modell-agnostisk - kan eksporteres til ulike AI-modeller

#### Oppgaver avtalt
- [ ] Begrepsoversikt - første utkast (Bastian + Are)
- [ ] Koble SpråkGPT til ISO 24495-1:2023 (Are)
- [ ] Demonstrere JustGPT-integrasjon (Øystein)
- [ ] Teste nivåmodellen på eksisterende tekster (Rita)

---

## 15. januar 2026

### Prioriteringsverksted dag 2 - Forankring med styringsgruppen
*Deltakere: Are, Rita, Bastian, Kim, Toril, Deb | 09:00-12:00 | [Referat](Kommunikasjon/Møter/2026-01-15_Prioriteringsverksted_Dag2_Referat.md)*

#### Begrepsavklaring etablert
| Begrep | Definisjon |
|--------|-----------|
| **Apollon** | Kjernesystemet (ERP-lignende) - brukes internt |
| **Webportal** | Innloggede sider for brukere (det som vender ut) |
| **Gramo.no** | Åpne nettsider (informasjon, ikke innlogget) |
| **Mitt Gramo** | Foreslått navn for "min side" |

#### To-spor-strategien bekreftet
- **Spor 1:** Omdømme og merkevare (eierskap: Kim/kommunikasjon)
- **Spor 2:** Effektivitet og kundetilfredshet (eierskap: Toril/medlem)
- **Felles suksesskriterium:** "Folk finner, forstår og får til"

#### Involvering av medlemsavdelingen
- Toril er premissleverandør for spor 2
- Prosjektet må forankre med henne før workshops
- Hele medlemsavdelingen må involveres, ikke bare enkeltpersoner

#### Spilletidsstatistikk - prototyper vist
- Ca. 20 prototyper demonstrert
- Strategisk verdi: "Hvis noen lurer på radiostatistikk i Norge, skal det være naturlig å kontakte Gramo"
- Samarbeidsmulighet med Tono nevnt (samme NRK-rapporter)

#### Beslutninger
1. Apollon = internt system, Webportal = innlogget brukerflate, Gramo.no = åpne sider
2. Toril er premissleverandør for spor 2
3. Språkprofil-arbeid pågår, møte med Øystein planlegges
4. Målinger skal forbedres med differensiering mellom åpne/innloggede sider

---

## 14. januar 2026

### Standardisering av navnekonvensjoner
*Ansvarlig: Bastian | Ettermiddag*

- ✅ **Endret `.claude/` til `.agent/`**: Gjør ferdigheter og workflows uavhengig av modellnavn.
- ✅ **Endret `CLAUDE.md` til `AGENT.md`**: Nytt hovedinngangspunkt for alle AI-agenter.
- ✅ **Oppdaterte referanser**: Alle interne dokumenter peker nå på `AGENT.md` og `.agent/`.
- ✅ **Bevarte systemstier**: `_TOOLS/MCP/install.js` beholder referanser til `Claude Desktop` (MacOS-applikasjon).
- ✅ **Dokumentert**: `AGENT.md` inneholder nå eksplisitte regler for navnsetting.



---

## 8. januar 2026

### Kontekstarkitektur-opprydding
*Ansvarlig: Are | Ettermiddag*

#### Gjennomført opprydding
- ✅ **README.md oppdatert** - Status endret til "Fase 1 fullført (30 dagsverk) | Fase 2 starter februar 2026"
- ✅ **Arkivering av duplikater:**
  - `Prosjektmandat_Redesign_gramo.md` → [Dokumenter/Arkiv/260108-Prosjektmandat_Redesign_gramo.md](Dokumenter/Arkiv/260108-Prosjektmandat_Redesign_gramo.md)
  - `Design/Prototype-statistikk.md` → [Dokumenter/Arkiv/260108-Prototype-statistikk.md](Dokumenter/Arkiv/260108-Prototype-statistikk.md)
- ✅ **Systemfiler slettet** - Alle .DS_Store-filer fjernet

#### Dokumentasjon opprettet/oppdatert
- ✅ **[CONTRIBUTING.md](CONTRIBUTING.md)** - Fullstendig omskriving fra nynorsk til bokmål
  - Daglig arbeidsflyt (pull/commit/push)
  - Commit-meldinger (gode/dårlige eksempler)
  - Arkiveringsstrategi (Git for daglig, manuell ved milepæler)
  - Konfliktløsning (rebase vs merge)
  - Rollefordeling (Bastian driver, Are støtter)

- ✅ **[Dokumenter/Kontekstarkitektur-Plan.md](Dokumenter/Kontekstarkitektur-Plan.md)** - Komplett plan (6,800+ ord)
  - Slått sammen Fase1-Opprydding-Plan.md og Kontekstarkitektur-Fase2-Plan.md
  - Dekker Fase 1 (ferdig) → Fase 2 (planlagt) → Fase 3 (selvstendighet)
  - Inneholder: Oppryddingsplan, Innhold/-struktur, Git-rutiner, MCP-integrasjon, EVAL-system, Suksesskriterier

#### MCP-integrasjon verifisert
- ✅ **Airtable:** `appo0g1sGfgBc6mHg` (26 tabeller tilgjengelige)
- ✅ **Notion:** Gramo forprosjekt-sider tilgjengelige
- ✅ **SSoT-strategi dokumentert:**
  - GitHub = Long-term storage (markdown)
  - Airtable = Working data (strukturert)
  - Notion = Collaboration space (deling med Kim/Rita)

#### Foreslått Innhold/-struktur
Basert på toppoppgaver:
- `ISRC/` (Toppoppgave #1, Fase 1)
- `Om_Gramo/` (Organisasjon, Fase 1)
- `Medlemskap/` (Toppoppgave #2, Fase 2)
- `Utbetalinger/` (Toppoppgave #3, Fase 2)
- `Rettighetskrav/` (Toppoppgave #4, Fase 2)

Hver mappe får `_README.md` med sammendrag.

#### Brukeridentifikasjon og Git-samarbeid
- ✅ **[KONTEKST.md](KONTEKST.md)** - Brukeridentifikasjon basert på working directory
  - Are, Bastian, Torstein identifiseres automatisk
  - Kommandoer rapporterer hvem som utfører dem
- ✅ **[CONTRIBUTING.md](CONTRIBUTING.md)** - Brukerbaserte Git-rutiner
  - Git-konfigurasjon per bruker
  - Brukerbaserte arbeidsstier
  - `/pull` og `/push` kommandoer med automatisk brukeridentifikasjon
- ✅ **Agenten skills opprettet:**
  - `.agent/skills/pull/SKILL.md` - Henter endringer fra GitHub
  - `.agent/skills/push/SKILL.md` - Committer og pusher med brukeridentifikasjon

#### Instruksjoner til Bastian
- ✅ **[TIL-BASTIAN.md](TIL-BASTIAN.md)** - Komplett oppstartsdokument opprettet
  - Forklarer alle endringer
  - Steg-for-steg setup-instruksjoner
  - Eksempler på bruk av `/pull` og `/push`
  - Oversikt over strukturendringer i prosjektet
  - Neste steg for uke 3

#### Neste steg for Bastian
- Sette opp Git-identitet (git config user.name/email)
- Legge inn sin sti i KONTEKST.md og CONTRIBUTING.md
- Teste `/pull` og `/push` kommandoer
- Planlegge ny Innhold/-struktur (uke 3) - TODO, ikke ferdig forslag
- Arkivere resterende utdaterte filer
- Opprette manglende _README.md-filer

### Prioriteringsverksted med Kim (del 1) - Strategisk gjennombrudd
*Deltakere: Kim, Are, Bastian, Rita | 09:00-12:30 | [Transkripsjon](Kommunikasjon/Transkripsjoner/2026-01-08_Prioriteringsverksted.md)*

#### To-spor-strategien for gramo.no etablert

**Overordnet målsetting:** Gramo.no skal være en "HUB for alt" - strategisk kommunikasjonsplattform som styrker merkevare, effektiviserer og øker inntekter.

**Spor 1: Innhold som styrker kjennskap, kunnskap og merkevare**
- Historiefortelling med data og statistikk
- Merkevareforankret visuelt redesign
- Styrke Gramos omdømme og posisjon som CMO
- Øke engasjement og synlighet
- Ekstern kommunikasjon og legitimitet

**Spor 2: Innhold som løser toppoppgaver**
- Fokus på brukeropplevelse og oppgaveløsning
- Forbedring av sentrale brukerreiser
- Redusere supportbelastning
- Øke oppgaveløsningsgrad

**Suksesskriterium felles for begge spor:** "Folk finner, forstår og får til"

#### Målbare effektmål definert

**Økt effektivisering:**
- Færre henvendelser om prioriterte toppoppgaver (baseline: Morten starter nå)
- Mindre tid brukt på kundeservice for rutineoppgaver
- **Færre henvendelser til 3. linje (Øystein/juridisk)** - nytt effektmål

**Økt kundetilfredshet:**
- Økt gjennomføringsgrad for toppoppgaver (måles via Skyra)
- Folk opplever at de finner, forstår og får til

**Styrke omdømme:**
- Økt trafikk på prioriterte sider
- Økt engasjement på datadrevet innhold
- Mer tid brukt på statistikk og insights

**Øke inntekt:**
- **Økt antall worldwide-medlemmer** (konkret inntektsmål)
- Økt inntekt fra utlandet (baseline: 7 mill. kr/år vs. Finland: 14 mill. kr/år)

#### Worldwide-medlemskap - strategisk gjennombrudd

Møtet identifiserte worldwide-medlemskap som det viktigste strategiske målet for å øke inntekt:

**Situasjon:**
- Medlemmer kan velge regionalt (kun Norge) eller worldwide-mandat
- Gramo har 7 mill. kr i inntekt fra utlandet
- Finland har 14 mill. kr (norsk musikk spilles mer internasjonalt!)
- Manglende worldwide-mandat = tapte inntekter

**Nettsiden kan bidra:**
- Synliggjøre verdien av worldwide-medlemskap (interaktivt kart, testimonials)
- Gjøre det enklere å velge worldwide ved medlemskap
- Konvertere eksisterende regionale medlemmer til worldwide
- Kommunisere hvorfor man skal velge Gramo framfor agenter/plateselskap

#### ISRC-registrering - nyansert diskusjon

Viktig innsikt fra møtet: **ISRC-registrering er toppoppgave for brukere, men ikke strategisk viktig for Gramo**.

**Realiteter:**
- 75% av repertoar som gir penger er allerede registrert via plateselskap/automatiske kilder
- Kun 25% av registrert repertoar gir faktisk penger
- Mye egenregistrering fra amatører som aldri blir spilt på radio

**Tilnærming:**
- Gjør det enkelt å sjekke om låt er registrert
- Gjør det enkelt å registrere hvis brukeren ønsker det
- Men: ikke bruk for mye ressurser på det
- Fokuser mer på worldwide-medlemskap og andre strategiske mål

#### Rollekoder - forenkles i mars

Rollekoder (ABC-system) skal forenkles i mars:
- Nytt system med faste prosenter
- Enklere forklaring direkte i skjema
- Prosjektet venter med å forklare rollekoder til nye systemet er klart

#### Juridisk innhold og 3. linje-effektivisering

Øystein (jurist) har utviklet GPT-modeller for å kvalitetssikre juridisk innhold:
- Mål: Redusere henvendelser til juridisk avdeling
- Øystein bruker mye tid på å lese lange e-postdialoger
- Han ønsker at datasett kvalitetssikres og at innhold blir pedagogisk og juridisk korrekt
- **Planlagt møte:** Øystein skal vise frem GPT-løsningene sine

#### Målgrupper prioritert

**Primære målgrupper (75% av nettsidebrukere):**
- Utøvere/artister (inkl. studiomusikere)
- Produsenter/egenprodusenter
- Både profesjonelle og amatører

**Sekundære målgrupper:**
- Agenter og management
- Plateselskap
- Musikklisensieringsselskap

**Andre:**
- Musikk-brukere (NRK, radio, markedskunder)
- Internasjonale søsterorganisasjoner

#### Kjerneinnhold for nettsiden

Nettsiden må adressere:
- **Om Gramo:** Forklare kollektiv forvaltning, verdikjeden (transparens, effektivitet, nøyaktighet)
- **Medlemskap:** Inkl. worldwide-valg (prioritert!)
- **ISRC/innspillingsregistrering:** Forenklet tilgang
- **Utbetalinger:** Transparent og forståelig
- **Kontaktinformasjon:** Mer synlig
- **Statistikk:** Datadrevet storytelling
- **Lovpålagt innhold:** CRM-krav, rettighetskrav (claim), åpenhetsrapport

#### Forankring i organisasjonen - kritisk diskusjon

Møtet diskuterte behov for bedre forankring:
- **Møte med styringsgruppen** (Deb og Torbjørn) for å presentere to-spor-strategien
- **Involvere medlemsavdelingen** (Toril, Morten, Julia) i arbeid med toppoppgaver
- Viktig: Prosjektet må ikke oppleves som "Are sitt prosjekt", men som organisasjonens prosjekt
- To-spor-modellen må kommuniseres tydelig: både merkevare OG toppoppgaver

#### Tone of voice

Viktig diskusjon om at tone of voice må defineres før innholdsproduksjon starter.

### Avgjørelser fra møtet

- ✅ To-spor-modellen er etablert som strategisk rammeverk
- ✅ Worldwide-medlemskap er prioritert inntektsmål
- ✅ "Folk finner, forstår og får til" er felles suksesskriterium
- ✅ Færre henvendelser til 3. linje (juridisk) er et effektmål
- ✅ Møte med styringsgruppe skal gjennomføres
- ✅ Møte med Øystein om juridisk innhold
- ✅ ISRC-registrering: viktig brukeroppgave, men begrenset strategisk verdi

### Neste steg

- [ ] Are setter opp møte med styringsgruppen (Deb, Torbjørn)
- [ ] Møte med Øystein om juridisk GPT-løsninger
- [ ] Definere tone of voice
- [ ] Prioriteringsverksted dag 2 (statistikk) - fredag 10. januar

---

## 7. januar 2026

### Siste uke av Fase 1 - Oppstart
**3 arbeidsdager igjen:** Tirsdag, torsdag, fredag (uke 2)

#### Status Fase 1 (30 dagsverk, 555 000 kr)
- **Are:** 15/15 dagsverk (5 nov + 10 des + **3 jan**)
- **Bastian:** 10/10 dagsverk (7 des + **3 jan**)
- **Inge:** 5/5 dagsverk (3 nov + 2 des) ✅

#### Fullført i desember 2025
- ✅ **Innholdsstrategi v2.0** (19.12.2025) - komplett strategi for gramo.no
- ✅ **17 prototyper** for statistikkvisning (konsept A-Q) - interaktive konsept
- ✅ **GEO-analyse** - ISRC bekreftet som #1 toppoppgave
- ✅ **Apollon-avklaring** - medlemsportal er separat prosjekt
- ✅ **Prosjektmandat revidert** (06.01.2026) - avgrenset mot Apollon
- ✅ **Tilbud oppdatert** (06.01.2026) - 3 faser, 100 dagsverk, 1,85M inkl. mva

#### Plan denne uken
**Tirsdag 7. januar (Are + Bastian):**
- Rydde opp i dokumentstruktur (konsolidere duplikater)
- IA og innholdsoversikt inn i Airtable (prioritert)
- Oppsett av GPT/Skills for kontekstarkitektur
- Rekruttere til brukerintervjuer (10-15 stasjoner/produsenter)

**Torsdag 9. januar:**
- Intern test-intervju med Julie
- Prioriteringsverksted med Kim (del 1)

**Fredag 10. januar:**
- Prioriteringsverksted med Kim (del 2)
- Diskutere prototyper med Inge og Kim
- Lande struktur for nettsider

#### Neste fase
**Februar 2026 - Fase 2 oppstart:**
- Torstein: Ett ukesverk (5 dagsverk) for innholdsproduksjon
- Team: Fase 2 produksjon (45 dagsverk, 832 500 kr)

---

## 9. desember 2025

### Statusmøte: Prosjektmandat, statistikk og nettsted
*Deltakere: Are, Bastian, Rita | 39 min | [Spellar-opptak](https://spellar.ai/account/meetings/6937edb63000002000d34c5d)*

#### Prosjektmandat og Apollon-avgrensing
- Ny versjon av prosjektmandatet er mer avgrenset mot Apollon
- Bekymring: Noen beslutninger kan være tatt uten full vurdering av design/brukerbehov
- **Avtalt:** Send hele prosjektmandatet i Word til Kim for gjennomgang

#### Statistikk: ACR Cloud vs offisiell statistikk
- ACR Cloud gir langt mer data og koblingsmuligheter enn offisielle register
- Skepsis fra medlemsansvarlig om å blande ACR-data med offisiell avregningsdata
- **Mulighet:** Kombinere datakilder med tydelig kildehenvisning
- Konkurrenter: topplista.no, Bimat
- Teknisk: Spotify API for metadata-berikelse

#### Nettside, innhold og medlemsportal
- Ønske om «Gramo-variant» - personlig årsrapport til medlemmer
- Claim-løsning for korrigering av data
- Automatisert innholdsproduksjon (autogenererte SoMe-poster)
- **17 prototyper klare** for presentasjon
- Verktøy: Metabase/Power BI for dataspørring

#### Styring og møteplan
- Behov for tydelig styringsgruppe og ansvarsfordeling
- Risiko for «lost in translation» i større møter
- Torsten nevnt som backup for leveranser

#### Brukerinnsikt og tester
- **Plan:** 10-15 korte brukersesjoner (1 time hver)
- Målgruppe: Stasjoner/produsenter (Kristoffer, Bjørn Dahlsson m.fl.)
- Metode: Doodle for å finne tidspunkt

### Avgjørelser
- ✅ Forberede og del hele prosjektmandatet (Word) med Kim
- ✅ Arrangere eget avklaringsmøte med Kim tidlig neste uke
- ✅ Gjennomføre korte brukersesjoner (10-15 stk)

### Neste steg
- [ ] Del prosjektmandatet i Word til Kim
- [ ] Sett opp avklaringsmøte med Kim (prosjektmandat, styringsgruppe, Apollon)
- [ ] Sett opp Doodle for brukersesjoner og rekrutter deltakere
- [ ] Definer styringsgruppens sammensetning
- [ ] Avklar bruk av datakilder (offisiell vs ACR Cloud)
- [ ] Forbered prototyper for presentasjon
- [ ] Følg opp kl. 13:00 (oppfølging med deltakerne)

---

## 5. desember 2025

### Apollon-dokumentasjon mottatt fra Rita/Kim
- **Medlemsportal-spec (BiConcepts):** Standardfunksjoner + 9 gap-løsninger
- **Internt prosjektmandat:** Fullstendig prosjektplan, organisering, budsjett

### Viktig avklaring fra Kim
> «Gramo.no-prosjektet skal IKKE bruke mer tid på Apollon/medlemsportal»

**Begrunnelse:**
- Standardløsning + avtalte gaps, ikke kravspesifisering
- Kun datamapping og UI-branding
- Ev. avklaringer kommer som «bestillinger» fra Apollon-prosjektet

### Apollon medlemsportal - nøkkelpunkter
| Funksjon | Beskrivelse |
|----------|------------|
| Mine innspillinger | Liste over innspillinger der medlem er i besetning |
| Min bruk | Spillinger gruppert på år/kanal/innspilling |
| Claiming (G.20) | Kreve rettigheter til innspillinger |
| Rapportering (G.21) | Laste opp repertoar via Excel-mal |
| Dashboard (G.24) | Årlig oppsummering med vederlag |

### Apollon-prosjektet - tidslinje
- **1. juni 2026:** Go-live kjernesystem + medlemsportal
- **1. des 2026:** Distribusjon og utbetaling
- **Budsjett:** ~29 MNOK inkl. buffer

### Konsekvens for gramo.no-prosjektet
- Vi fokuserer på **merkevare, statistikk, innhold** - ikke medlemsportal
- Statistikkvisning på gramo.no = *offentlig*, ikke innlogget brukerdata
- Potensielt: Hente aggregert data fra Apollon datavarehus / Power BI

### Echo-feltanalyse
- Analysert schema-uttrekk fra Ståle (153 tabeller, 1157 felt)
- Laget sjekkliste for dataavklaring: [Datafelt-statistikk.md](Analyse/Teknisk/Datafelt-statistikk.md)
- Briefing til Bastian: [Til-Bastian-dataavklaring.md](Analyse/Teknisk/Til-Bastian-dataavklaring.md)

### Møte onsdag - agenda (fra Rita)
1. Innholdsdesign for å styrke merkevaren/omdømme
2. Presentasjon av statistikk på nettsiden
3. Prosjektmandat
4. Budsjett/tilbud

### Neste steg
- [ ] Are: Se på tilbudet/budsjett
- [ ] Rita: Kalle inn til møte onsdag
- [ ] Bastian: Avklare spillingsdata med Ståle

---

## 4. desember 2025

### Prototyping av interaktive statistikk-konsept
- **17 konseptprototyper** laget i wireframe-stil (HTML/CSS)
- Konsept A-Q utforsker ulike innganger til statistikkdata
- **Live demo:** https://aregh.github.io/gramo-redesign-ny/Design/Prototype/Statistikk-2/
- **Første runde (A-G):** Storytelling, sammenligning, kanalprofiler, long tail + CTA, geografi, interaktiv toppliste-bygger, SoMe-vinklinger
- **Andre runde (H-Q):** Livestatistikk, dybdedykk låt (metadata), artistprofil 2.0, tidsmaskin, låtreisen, strømekoblinger, samarbeidsnettverk, kreditering, plateselskap, personlig statistikk
- **Viktig innsikt:** Google AI Overview bekrefter at det *ikke finnes noen offisiell oversikt over spilletid per artist på radio* - dette er en unik mulighet for Gramo

### Metadata-research for statistikkberriking
- Gjennomgang av API-er og databaser for å berike statistikken
- **ISRC** som universell nøkkel for kobling
- **Musicfetch API** – én ISRC gir lenker til Spotify, Apple Music, Tidal, YouTube, Deezer
- **MusicBrainz** – gratis ISRC-verifisering og relasjoner (samarbeid, credits)
- **ACRCloud/Chartmetric** – sanntidsdata for live-statistikk
- Dokumentert i Design/Prototype-statistikk.md med prioritetsmatrise

### Samtale med Inge om design og datavisualisering
- **Hovedinnsikt:** Koble spilledata med verifisert metadata for dypere innsikt
- **Interaktive filtre:** Norsk språk, kjønn, avdøde artister, geografi (bergensere etc.)
- **Metadata som styrke:** Gramo sitter på verifisert, matchet data fra flere kilder
- **Statistikken 2024:** Gjennomgått som utgangspunkt for konsept
  - «Josefin» (Delara) = 654 timer spilletid
  - 39,3% norsk musikk på radio
  - 5 av 10 mest spilte norske hovedartister er kvinner
- **30 visualiseringsideer** dokumentert i Analyse/Statistikk-visualisering.md
- **Neste steg:** Prototype for interaktive lister, møte Kim+Inge+Ståle for API-avklaring

### Møte med Kim
- Kim etablert som hovedkontakt for Apollon-avklaringer
- Layoutfase = mapping med begrenset designpåvirkning (logo, farger kan justeres)
- Kim skal sende Apollon prosjektplan/mandat
- Utrulling: Sveits → Norge → Danmark/Finland

### Oppfølgingsmøte Rita, Bastian, Are
- Planlagt interessentstyring: pre-wiring og intervju med Torill før workshop
- Nye muligheter: data som kontinuerlig innholdskilde (statistikk, visualisering)
- Ståle (intern utvikler) kan hjelpe med Metabase/API
- Inge hovedressurs for datakonsept

### Avgjørelser
- ✅ Kim er hovedkontakt
- ✅ Gjennomføre intervju med Torill før prioriteringsverksted
- ✅ Sette opp møte Kim + Inge (+ Ståle) for API/data-avklaring

### Neste steg
1. Book møte Kim + Inge (fredag/onsdag neste uke)
2. Intervju med Torill
3. Få Apollon-mandat fra Kim
4. Lag innholdskart for kjernesider

### Kontekstarkitektur
- Ny mappestruktur implementert
- Separat GitHub-repo: https://github.com/aregh/gramo-redesign-ny
- README.md klar for kundedeling

---

## 3. desember 2025

### Kontekstarkitektur-opprydding
- Oppdatert README.md med komplett katalogstruktur
- Oppdatert KONTEKST.md med manglende lenker
- Kim-møte i dag (3. desember)
- Lagt til nye filer: møter/EPOST-SVAR-KIM.md, møter/WORKSHOP-TEAMOPPSTART.md

### Dokumentasjon oppdatert
- SAMTALEPUNKTER-KIM.md ferdig for onsdag
- PROSJEKTMANDAT.md med grenselandsfunksjonalitet og alternativ A/B
- BAKGRUNN.md og KOMMUNIKASJON.md på hovednivå oppdatert med alle nye innsikter

### Status
- Arbeidsmøte med Kim i dag (onsdag 3. desember)
- Finland-muligheten dokumentert
- Grenselandsfunksjonalitet kartlagt

---

## 29. november 2025

### Kontekstarkitektur-review og opprydding
- Review mot 10 prinsipper: 6/8 oppfylt
- Ny katalogstruktur: 13 → 5 filer på rot
- Opprettet: prosjekt/, møter/, _eval/
- FOLK.md med komplett intel

### 2DOS strukturert etter tilbud
- Alle aktiviteter og leveranser fra tilbud lagt inn
- Ressursoversikt: 20 dagsverk totalt (15 Are, 5 Inge)
- Påminnelse: Formalisere tilbud med Rita mandag 2. des

---

## 28. november 2025

### Prosjektmandat ferdigstilt
- Scope-avgrensning: ikke blande oss inn i Apollon
- Grenselandsfunksjonalitet identifisert
- Risikomatrise fra pre-mortem

### Kommunikasjon med Kim
- Epost satte tydelige grenser
- Arbeidsmøte onsdag 4. desember
- Vår respons: informert, ikke involvert

### Finland-muligheten
- Finland vurderer å droppe BiConcept webportal
- Trengs: anbudsdokument fra Sari

---

## 27. november 2025

### GEO-analyse ferdigstilt
- ISRC = #1 toppoppgave (alle kilder)
- 3000+ visninger på ISRC-søk
- Repertoar-hypotese bekreftet

### Airtable-oppsett
- Tabeller: Folk, Brukeroppgaver, Innhold, Søkeord

---

## 25. november 2025

### Team-oppstart
- Are, Bastian, Rita
- Formell oppstart planlagt 28.11

---

## 18. november 2025

### Oppstartsworkshop
- Deltakere: Kim, Inge, Tommy, Thord, Torstein, Are, Bastian, Rita
- Sanity som innholdshub - konsensus
- ISRC som typisk toppoppgave

---

*Oppdateres fortløpende*
