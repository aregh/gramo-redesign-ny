# LOGG - Gramo Redesign

> Kronologisk logg. Nyaste først.

---

## 9. desember 2025

### Statusmøte: Prosjektmandat, statistikk og nettstad
*Deltakarar: Are, Bastian, Rita | 39 min | [Spellar-opptak](https://spellar.ai/account/meetings/6937edb63000002000d34c5d)*

#### Prosjektmandat og Apollon-avgrensning
- Ny versjon av prosjektmandatet er meir avgrenset mot Apollon
- Bekymring: Nokre beslutningar kan vere tatt utan full vurdering av design/brukarbehov
- **Avtalt:** Send heile prosjektmandatet i Word til Kim for gjennomgang

#### Statistikk: ACR Cloud vs offisiell statistikk
- ACR Cloud gir langt meir data og koblingsmoglegheiter enn offisielle register
- Skepsis frå medlemsansvarleg om å blande ACR-data med offisiell avregningsdata
- **Moglegheit:** Kombinere datakjelder med tydeleg kjeldehenvisning
- Konkurrentar: topplista.no, Bimat
- Teknisk: Spotify API for metadata-berikelse

#### Nettside, innhald og medlemsportal
- Ønskje om «Gramo-variant» - personleg årsrapport til medlemmer
- Claim-løysing for korrigering av data
- Automatisert innhaldsproduksjon (autogenererte SoMe-postar)
- **17 prototypar klare** for presentasjon
- Verktøy: Metabase/Power BI for dataspørring

#### Styring og møteplan
- Behov for tydeleg styringsgruppe og ansvarsfordeling
- Risiko for «lost in translation» i større møter
- Torsten nemnt som backup for leveransar

#### Brukarinnsikt og testar
- **Plan:** 10-15 korte brukarsesjoner (1 time kvar)
- Målgruppe: Stasjonar/produsentar (Kristoffer, Bjørn Dahlsson m.fl.)
- Metode: Doodle for å finne tidspunkt

### Avgjerder
- ✅ Førebu og del heile prosjektmandatet (Word) med Kim
- ✅ Arrangere eige avklaringsmøte med Kim tidleg neste veke
- ✅ Gjennomføre korte brukarsesjoner (10-15 stk)

### Neste steg
- [ ] Del prosjektmandatet i Word til Kim
- [ ] Sett opp avklaringsmøte med Kim (prosjektmandat, styringsgruppe, Apollon)
- [ ] Sett opp Doodle for brukarsesjoner og rekrutter deltakarar
- [ ] Definer styringsgruppens sammensetning
- [ ] Avklar bruk av datakjelder (offisiell vs ACR Cloud)
- [ ] Førebu prototypar for presentasjon
- [ ] Følg opp kl. 13:00 (oppfølging med deltakarane)

---

## 5. desember 2025

### Apollon-dokumentasjon motteke frå Rita/Kim
- **Medlemsportal-spec (BiConcepts):** Standardfunksjonar + 9 gap-løysingar
- **Internt prosjektmandat:** Fullstendig prosjektplan, organisering, budsjett

### Viktig avklaring frå Kim
> «Gramo.no-prosjektet skal IKKJE bruke meir tid på Apollon/medlemsportal»

**Grunngjeving:**
- Standardløysing + avtalte gaps, ikkje kravspesifisering
- Kun datamapping og UI-branding
- Ev. avklaringar kjem som «bestillingar» frå Apollon-prosjektet

### Apollon medlemsportal - nøkkelpunkt
| Funksjon | Beskriving |
|----------|------------|
| Mine innspelingar | Liste over innspelingar der medlem er i besetning |
| Min bruk | Spelingar gruppert på år/kanal/innspeling |
| Claiming (G.20) | Krevje rettar til innspelingar |
| Rapportering (G.21) | Laste opp repertoar via Excel-mal |
| Dashboard (G.24) | Årleg oppsummering med vederlag |

### Apollon-prosjektet - tidslinje
- **1. juni 2026:** Go-live kjernesystem + medlemsportal
- **1. des 2026:** Distribusjon og utbetaling
- **Budsjett:** ~29 MNOK inkl. buffer

### Konsekvens for gramo.no-prosjektet
- Vi fokuserer på **merkevare, statistikk, innhald** - ikkje medlemsportal
- Statistikkvisning på gramo.no = *offentleg*, ikkje innlogga brukardata
- Potensielt: Hente aggregert data frå Apollon datavarehus / Power BI

### Echo-feltanalyse
- Analysert schema-uttrekk frå Ståle (153 tabellar, 1157 felt)
- Laga sjekkliste for dataavklaring: [Datafelt-statistikk.md](Analyse/Teknisk/Datafelt-statistikk.md)
- Briefing til Bastian: [Til-Bastian-dataavklaring.md](Analyse/Teknisk/Til-Bastian-dataavklaring.md)

### Møte onsdag - agenda (frå Rita)
1. Innhaldsdesign for å styrke merkevaren/omdømme
2. Presentasjon av statistikk på nettsida
3. Prosjektmandat
4. Budsjett/tilbod

### Neste steg
- [ ] Are: Sjå på tilbodet/budsjett
- [ ] Rita: Kalle inn til møte onsdag
- [ ] Bastian: Avklare spelingsdata med Ståle

---

## 4. desember 2025

### Prototyping av interaktive statistikk-konsept
- **17 konseptprototypar** laga i wireframe-stil (HTML/CSS)
- Konsept A-Q utforskar ulike inngangar til statistikkdata
- **Live demo:** https://aregh.github.io/gramo-redesign-ny/Design/Prototype/Statistikk-2/
- **Første runde (A-G):** Storytelling, samanlikning, kanalprofiler, long tail + CTA, geografi, interaktiv toppliste-byggar, SoMe-vinklingar
- **Andre runde (H-Q):** Livestatistikk, djupdykk låt (metadata), artistprofil 2.0, tidsmaskin, låtreisa, strøymekoplingar, samarbeidsnettverk, kreditering, plateselskap, personleg statistikk
- **Viktig innsikt:** Google AI Overview stadfestar at det *ikkje finst nokon offisiell oversikt over spilletid per artist på radio* - dette er ein unik moglegheit for Gramo

### Metadata-research for statistikkberriking
- Gjennomgang av API-ar og databasar for å berike statistikken
- **ISRC** som universell nøkkel for kopling
- **Musicfetch API** – éin ISRC gir lenker til Spotify, Apple Music, Tidal, YouTube, Deezer
- **MusicBrainz** – gratis ISRC-verifisering og relasjonar (samarbeid, credits)
- **ACRCloud/Chartmetric** – sanntidsdata for live-statistikk
- Dokumentert i Design/Prototype-statistikk.md med prioritetsmatrise

### Samtale med Inge om design og datavisualisering
- **Hovudinnsikt:** Koble spilledata med verifisert metadata for dypare innsikt
- **Interaktive filtre:** Norsk språk, kjønn, avdøde artistar, geografi (bergensere etc.)
- **Metadata som styrke:** Gramo sit på verifisert, matcha data frå fleire kjelder
- **Statistikken 2024:** Gjennomgått som utgangspunkt for konsept
  - «Josefin» (Delara) = 654 timer spilletid
  - 39,3% norsk musikk på radio
  - 5 av 10 mest spilte norske hovudartister er kvinner
- **30 visualiseringsidear** dokumentert i Analyse/Statistikk-visualisering.md
- **Neste steg:** Prototype for interaktive lister, møte Kim+Inge+Ståle for API-avklaring

### Møte med Kim
- Kim etablert som hovudkontakt for Apollon-avklaringar
- Layoutfase = mapping med avgrensa designpåverknad (logo, fargar kan justerast)
- Kim skal sende Apollon prosjektplan/mandat
- Utrulling: Sveits → Noreg → Danmark/Finland

### Oppfølgingsmøte Rita, Bastian, Are
- Planlagt interessentstyring: pre-wiring og intervju med Torill før workshop
- Nye moglegheiter: data som kontinuerleg innhaldskjelde (statistikk, visualisering)
- Ståle (intern utviklar) kan hjelpe med Metabase/API
- Inge hovudressurs for datakonsept

### Avgjerder
- ✅ Kim er hovudkontakt
- ✅ Gjennomføre intervju med Torill før prioriteringsverkstad
- ✅ Sette opp møte Kim + Inge (+ Ståle) for API/data-avklaring

### Neste steg
1. Book møte Kim + Inge (fredag/onsdag neste veke)
2. Intervju med Torill
3. Få Apollon-mandat frå Kim
4. Lag innhaldskart for kjernesider

### Kontekstarkitektur
- Ny mappestruktur implementert
- Separat GitHub-repo: https://github.com/aregh/gramo-redesign-ny
- README.md klar for kundedeling

---

## 3. desember 2025

### Kontekstarkitektur-opprydding
- Oppdatert README.md med komplett katalogstruktur
- Oppdatert KONTEKST.md med manglande lenker
- Kim-møte i dag (3. desember)
- Lagt til nye filer: møter/EPOST-SVAR-KIM.md, møter/WORKSHOP-TEAMOPPSTART.md

### Dokumentasjon oppdatert
- SAMTALEPUNKTER-KIM.md ferdig for onsdag
- PROSJEKTMANDAT.md med grenselandsfunksjonalitet og alternativ A/B
- BAKGRUNN.md og KOMMUNIKASJON.md på hovudnivå oppdatert med alle nye innsikter

### Status
- Arbeidsmøte med Kim i dag (onsdag 3. desember)
- Finland-moglegheita dokumentert
- Grenselandsfunksjonalitet kartlagt

---

## 29. november 2025

### Kontekstarkitektur-review og opprydding
- Review mot 10 prinsipp: 6/8 oppfylt
- Ny katalogstruktur: 13 → 5 filer på rot
- Oppretta: prosjekt/, møter/, _eval/
- FOLK.md med komplett intel

### 2DOS strukturert etter tilbod
- Alle aktivitetar og leveransar frå tilbod lagt inn
- Ressursoversikt: 20 dagsverk totalt (15 Are, 5 Inge)
- Påminning: Formalisere tilbod med Rita måndag 2. des

---

## 28. november 2025

### Prosjektmandat ferdigstilt
- Scope-avgrensning: ikkje blande oss inn i Apollon
- Grenselandsfunksjonalitet identifisert
- Risikomatrise frå pre-mortem

### Kommunikasjon med Kim
- Epost sette tydelege grenser
- Arbeidsmøte onsdag 4. desember
- Vår respons: informert, ikkje involvert

### Finland-moglegheita
- Finland vurderer å droppe BiConcept webportal
- Trengst: anbudsdokument frå Sari

---

## 27. november 2025

### GEO-analyse ferdigstilt
- ISRC = #1 toppoppgåve (alle kjelder)
- 3000+ visningar på ISRC-søk
- Repertoar-hypotese bekrefta

### Airtable-oppsett
- Tabellar: Folk, Brukeroppgaver, Innhold, Søkeord

---

## 25. november 2025

### Team-oppstart
- Are, Bastian, Rita
- Formell oppstart planlagt 28.11

---

## 18. november 2025

### Oppstartsworkshop
- Deltakarar: Kim, Inge, Tommy, Thord, Torstein, Are, Bastian, Rita
- Sanity som innhaldshub - konsensus
- ISRC som typisk toppoppgåve

---

*Oppdaterast fortløpande*
