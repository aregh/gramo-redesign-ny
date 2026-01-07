# LOGG - Gramo Redesign

> Kronologisk logg. Nyeste først.

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
