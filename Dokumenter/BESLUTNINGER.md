# Beslutningslogg - Gramo Redesign

> Oversikt over viktige beslutninger i prosjektet

**Formål:** Dokumentere strategiske og viktige beslutninger slik at både Are og Bastian kan forstå rasjonale og kontekst når de jobber videre.

---

## Format

Hver beslutning dokumenteres med:
- **Dato** - når beslutningen ble tatt
- **Besluttet av** - hvem tok beslutningen
- **Kontekst** - hva var situasjonen
- **Beslutning** - hva ble besluttet
- **Rasjonale** - hvorfor ble dette valgt
- **Konsekvens** - hvordan påvirker dette prosjektet
- **Lenker** - referanse til LOGG.md eller andre dokumenter

---

## Fase 1 - Analyse og konsept (Q4 2025)

### [5. desember 2025] - Gramo.no skal IKKE fokusere på Apollon

**Besluttet av:** Kim Skarning Andersen (prosjekteier)

**Kontekst:**
I oppstartsfasen var det usikkerhet om hvor mye Gramo.no-prosjektet skulle involvere seg i Apollon-medlemsportalen. Are hadde begynt å analysere kravspesifikasjonen for medlemsportalen.

**Beslutning:**
> "Gramo.no-prosjektet skal IKKE bruke mer tid på Apollon/medlemsportal"

**Rasjonale:**
- Apollon er en standardløsning med avtalte gaps
- Apollon-prosjektet trenger kun datamapping og UI-branding fra Gramo.no-teamet
- Eventuelle avklaringer kommer som "bestillinger" fra Apollon-prosjektet
- Gramo.no skal fokusere på **merkevare, statistikk og innhold** - ikke medlemsportal-funksjonalitet

**Konsekvens:**
- Prosjektmandatet ble revidert for å avgrense mot Apollon (6. januar 2026)
- Fokus ble flyttet til gramo.no som publikumskanal
- Medlemsportal-funksjonalitet (registrering, innspillinger, utbetalinger) håndteres i Apollon

**Lenker:**
- [LOGG.md](../LOGG.md) (5. desember 2025)
- [2DOS.md](../2DOS.md) (Apollon-bakgrunn)
- [Prosjektmandat.md](Prosjektmandat.md) (revidert 6. januar)

---

### [4. desember 2025] - ISRC-registrering er toppoppgave #1

**Besluttet av:** Are Halland (basert på GEO-analyse)

**Kontekst:**
Analyse av søkeord, brukerreiser og forretningsverdi viste at ISRC-registrering er den mest kritiske brukeroppgaven for Gramo.

**Beslutning:**
ISRC-registrering prioriteres som **toppoppgave #1** for gramo.no redesign.

**Rasjonale:**
- **Høyt søkevolum:** "ISRC-kode" er et av de mest søkte begrepene
- **Forretningskritisk:** Uten ISRC kan ikke artister få utbetalinger
- **Kompleks brukerreise:** Dagens løsning er tungvint og fører til frustrasjon
- **Differensiator:** Forbedret ISRC-registrering kan redusere supporthenvendelser og øke medlemstilfredshet

**Konsekvens:**
- Kjerneflyt-ISRC.md ble utviklet (detaljert brukerreise)
- Verdistrøm-ISRC.md ble utviklet (business case)
- Informasjonsarkitektur skal optimaliseres for ISRC-registrering
- Innholdsproduksjon skal prioritere ISRC-veiledning

**Lenker:**
- [Analyse/GEO-analyse.md](../Analyse/GEO-analyse.md)
- [Analyse/Kjerneflyt-ISRC.md](../Analyse/Kjerneflyt-ISRC.md)
- [Analyse/Verdistrøm-ISRC.md](../Analyse/Verdistrøm-ISRC.md)
- [Analyse/Toppoppgaver.md](../Analyse/Toppoppgaver.md)

---

### [9. desember 2025] - Statistikk: Vurder både ACR Cloud og offisiell data

**Besluttet av:** Diskusjon (Are, Bastian, Rita) - ikke endelig besluttet

**Kontekst:**
ACR Cloud gir langt mer detaljerte data og koblingsmuligheter (artistbilder, metadata, etc.) enn Gramos offisielle avregningsdata. Det var bekymring fra medlemsansvarlig om å blande ACR-data med offisiell avregningsdata.

**Beslutning (foreløpig):**
Mulig å kombinere datakilder med **tydelig kildehenvisning**.

**Rasjonale:**
- ACR Cloud gir bedre brukeropplevelse (bilder, sjanger, etc.)
- Offisiell data er det Gramo faktisk betaler ut etter
- Transparens om datakilde kan bygge tillit
- Konkurrenter (topplista.no, Bimat) bruker også ACR-data

**Konsekvens:**
- Må avklares videre med Kim og Ståle i Fase 2
- Teknisk arkitektur må støtte flere datakilder
- Må defineres klart hva som er "offisiell statistikk" vs. "innsikt"

**Status:** ⚠️ Ikke endelig besluttet - krever videre avklaring

**Lenker:**
- [LOGG.md](../LOGG.md) (9. desember 2025)
- [Analyse/Statistikk-visualisering.md](../Analyse/Statistikk-visualisering.md)

---

### [6. januar 2026] - Prosjektmandat avgrenset mot Apollon

**Besluttet av:** Are Halland (basert på Kim sin avklaring 5. desember)

**Kontekst:**
Første versjon av prosjektmandatet hadde for bred tolkning av gramo.no sin rolle i forhold til Apollon-prosjektet.

**Beslutning:**
Prosjektmandatet ble revidert for å tydeligere avgrense mot Apollon.

**Rasjonale:**
- Unngå dobbeltarbeid mellom prosjektene
- Klargjøre ansvar og roller
- Sikre at Gramo.no fokuserer på publikumskanal, ikke medlemsportal

**Konsekvens:**
- Mandatet er nå tydeligere på hva som er innenfor/utenfor scope
- Letter prioritering i Fase 2
- Klargjør forventninger til leveranser

**Lenker:**
- [Prosjektmandat.md](Prosjektmandat.md)
- [Prosjektmandat-2026-01-06-Are.md](Prosjektmandat-2026-01-06-Are.md) (revidert versjon)

---

### [6. januar 2026] - Tilbud oppdatert: 3 faser, 100 dagsverk

**Besluttet av:** Are Halland, godkjent av Kim Skarning Andersen

**Kontekst:**
Opprinnelig tilbud trengte justering basert på faktisk scope og Apollon-avgrensning.

**Beslutning:**
Nytt tilbud med:
- **Fase 1:** 30 dagsverk (Q4 2025) - Analyse og konsept
- **Fase 2:** 45 dagsverk (Q1 2026) - Produksjon og utvikling
- **Fase 3:** 25 dagsverk (Q2 2026) - Ferdigstilling og lansering
- **Totalt:** 100 dagsverk, 1,85M inkl. mva

**Rasjonale:**
- Realistisk estimat basert på faktisk scope
- Faseinndeling gir beslutningspunkter for Kim
- Statistikkvisning har "atterhald om omfang" (scope creep-risiko)

**Konsekvens:**
- Fase 1 avsluttes uke 2, 2026
- Fase 2 starter februar 2026
- Team utvides med Torstein (innholdsproduksjon)

**Lenker:**
- [2026-01-07-Tilbod.md](2026-01-07-Tilbod.md)

---

### [8. januar 2026] - To-spor-strategien etablert

**Besluttet av:** Kim Skarning Andersen, Are Halland (prioriteringsverksted)

**Kontekst:**
Første prioriteringsverksted avdekket at Gramo.no må balansere to ulike behov: merkevarebygging/kommunikasjon og brukeroppgaveløsning.

**Beslutning:**
Gramo.no skal bygges etter en **to-spor-strategi**:

**Spor 1:** Innhold som styrker kjennskap, kunnskap og merkevare
- Historiefortelling med data og statistikk
- Merkevareforankret visuelt redesign
- Øke engasjement og synlighet

**Spor 2:** Innhold som løser toppoppgaver
- Forbedring av sentrale brukerreiser
- Redusere supportbelastning
- Øke oppgaveløsningsgrad

**Rasjonale:**
- Begge sporene er like viktige for Gramos suksess
- Spor 1 eies primært av Kim/kommunikasjon
- Spor 2 eies primært av medlemsavdeling
- Må balansere ressurser mellom begge sporene

**Konsekvens:**
- Prosjektmandatet må oppdateres med to-spor-modellen
- Innholdsarkitektur må støtte begge sporene
- Forankring må skje både i kommunikasjon og medlemsavdeling

**Status:** ✅ Endelig

**Lenker:**
- [LOGG.md](../LOGG.md) (8. januar 2026)
- [Miro-board: Strategisk rammeverk](https://miro.com/app/board/...)

---

### [8. januar 2026] - Worldwide-medlemskap prioritert som inntektsmål

**Besluttet av:** Kim Skarning Andersen (prioriteringsverksted)

**Kontekst:**
Gramo har kun 7 mill. kr i inntekt fra utlandet, mens Finland har 14 mill. kr. Norsk musikk spilles sannsynligvis mer internasjonalt enn finsk musikk. Gramo mister inntekter fordi medlemmer ikke gir worldwide-mandat.

**Beslutning:**
**Økt antall worldwide-medlemmer** er det viktigste strategiske målet for å øke inntekt.

**Rasjonale:**
- Konkret, målbart inntektsmål
- Gramo.no kan faktisk påvirke dette gjennom kommunikasjon og design
- Potensiell dobling av utenlandsinntekt (7 mill. → 14 mill. kr/år)
- Finland-eksemplet viser at det er realistisk

**Konsekvens:**
- Medlemskap-flow må gjøre det enkelt å velge worldwide
- Dedikert innhold som forklarer verdien av worldwide
- Interaktivt kart over internasjonale avtaler
- Testimonials fra worldwide-medlemmer
- Tydelig kommunikasjon om hvorfor man skal velge Gramo vs. plateselskap/agenter

**Status:** ✅ Endelig

**Målbart effektmål:**
- Baseline: Antall worldwide-medlemmer per januar 2026
- Målsetting: X% økning innen desember 2026
- Sekundært mål: Økt inntekt fra utlandet (fra 7 mill. kr)

**Lenker:**
- [LOGG.md](../LOGG.md) (8. januar 2026)

---

### [8. januar 2026] - Suksesskriterium: "Folk finner, forstår og får til"

**Besluttet av:** Kim Skarning Andersen, Are Halland (prioriteringsverksted)

**Kontekst:**
Behov for et enkelt, felles suksesskriterium som gjelder for både Spor 1 og Spor 2.

**Beslutning:**
Gramo.no skal lykkes når **"Folk finner, forstår og får til"**

**Rasjonale:**
- **Finner:** Informasjonsarkitektur, navigasjon, SEO
- **Forstår:** Språk, visualisering, pedagogikk
- **Får til:** Brukerreiser, oppgaveløsning, selvbetjening

Dekker både transparens/klarhet (Spor 1) og effektivitet (Spor 2).

**Konsekvens:**
- Kvalitativ evaluering: Brukertester
- Kvantitativ måling: Oppgaveløsningsgrad (Skyra), trafikk, henvendelser

**Status:** ✅ Endelig

**Lenker:**
- [LOGG.md](../LOGG.md) (8. januar 2026)

---

### [8. januar 2026] - Færre henvendelser til 3. linje (juridisk) som effektmål

**Besluttet av:** Kim Skarning Andersen (prioriteringsverksted)

**Kontekst:**
Øystein (jurist) bruker mye tid på å lese lange e-postdialoger og svare på juridiske spørsmål som kunne vært løst med bedre innhold på nettsiden.

**Beslutning:**
**Færre henvendelser til 3. linje (juridisk)** er et målbart effektmål.

**Rasjonale:**
- Øystein har utviklet GPT-modeller for juridisk kvalitetssikring
- Innhold må være både juridisk korrekt OG pedagogisk forståelig
- Reduserer belastning på dyrt juristarbeid
- Frigjør Øystein til strategisk juridisk arbeid

**Konsekvens:**
- Baseline: Måle antall henvendelser til Øystein per måned
- Møte med Øystein for å se GPT-løsningene
- Juridisk innhold må kvalitetssikres før publisering
- FAQ-er må dekke vanlige juridiske spørsmål

**Status:** ✅ Endelig

**Målbart effektmål:**
- Baseline: X henvendelser/måned til juridisk (Øystein)
- Målsetting: Y% reduksjon innen desember 2026

**Lenker:**
- [LOGG.md](../LOGG.md) (8. januar 2026)

---

### [8. januar 2026] - ISRC-registrering: viktig brukeroppgave, begrenset strategisk verdi

**Besluttet av:** Kim Skarning Andersen (prioriteringsverksted)

**Kontekst:**
GEO-analyse viser ISRC som toppoppgave #1, men møtet avdekket at 75% av repertoar som gir penger allerede er registrert via plateselskap/automatiske kilder.

**Beslutning:**
ISRC-registrering er en **viktig brukeroppgave**, men har **begrenset strategisk verdi** for Gramo.

**Rasjonale:**
- Brukere forventer å kunne registrere ISRC
- Men: 75% av repertoar som genererer inntekt er allerede registrert
- Kun 25% av registrert repertoar gir faktisk penger
- Claim-funksjonalitet har redusert behovet for egenregistrering

**Konsekvens:**
- Gjør det enkelt å sjekke om låt er registrert
- Gjør det enkelt å registrere hvis brukeren ønsker det
- Men: ikke bruk for mye ressurser på det
- Fokuser mer på worldwide-medlemskap og andre strategiske mål
- Vurder løsningen i mars når rollekode-systemet er forenklet

**Status:** ✅ Endelig

**Lenker:**
- [LOGG.md](../LOGG.md) (8. januar 2026)
- [Analyse/Brukerreiser/Kjerneflyt-ISRC.md](../Analyse/Brukerreiser/Kjerneflyt-ISRC.md)

---

## Template for nye beslutninger

```markdown
### [DATO] - Tittel på beslutning

**Besluttet av:** Navn

**Kontekst:**
[Hva var situasjonen?]

**Beslutning:**
[Hva ble besluttet?]

**Rasjonale:**
- [Hvorfor ble dette valgt?]

**Konsekvens:**
- [Hvordan påvirker dette prosjektet?]

**Status:** ✅ Endelig / ⚠️ Foreløpig / 🔄 Under vurdering

**Lenker:**
- [Relevante dokumenter]
```

---

## Bruk av beslutningsloggen

**For Are:**
- Dokumenter viktige beslutninger umiddelbart etter møter med Kim
- Oppdater status på foreløpige beslutninger

**For Bastian:**
- Les denne før viktige oppgaver for å forstå kontekst
- Referer til denne når du er usikker på retning
- Legg til nye beslutninger etter møter eller diskusjoner

**For teamet:**
- Bruk denne i prioriteringsverksteder
- Sjekk mot denne ved usikkerhet om scope
- Oppdater når beslutninger endres eller presiseres

---

*Sist oppdatert: 8. januar 2026*
