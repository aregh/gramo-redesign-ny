# Statistikk-prototyper

> Oversikt over prototyper for statistikkvisning på gramo.no

---

## Status

**Sist oppdatert:** 8. januar 2026
**Ansvarlig:** Inge Fossland (design), Are Halland (konsept)
**Fase:** Fase 1 (konseptutvikling) ✅
**Neste:** Presentasjon for Kim (10. januar) + diskusjon med Inge

---

## Bakgrunn

I løpet av Fase 1 (desember 2025) ble det utviklet **18 interaktive konsepter (A-R)** for å utforske mulighetene i statistikkvisning basert på Gramos spilledata.

**Formål:**
- Utforske ulike vinklinger og målgrupper for statistikk
- Teste interaktive filtre og visualiseringer
- Identifisere hva som gir mest verdi for brukerne
- Inspirere til prioritering i Fase 2

**Datagrunnlag:**
- Spillingsdata fra norske radiostasjoner
- Metadata (artist, tittel, sjanger, nasjonalitet, osv.)
- Tidsserier (2020-2024)

---

## Konseptoversikt

### Statistikk-2 (hovedversjon - 18 konsepter)

| Konsept | Tittel | Vinkling | Status | Beslutning |
|---------|--------|----------|--------|------------|
| **A** | [Storytelling](Statistikk/Statistikk-2/konsept-a-storytelling.html) | Narrativ tilnærming med tall som historier | ✅ Prototype | Avventer feedback |
| **B** | [Sammenligning](Statistikk/Statistikk-2/konsept-b-samanlikning.html) | Norge vs. verden, kjønn, tidsperioder | ✅ Prototype | Avventer feedback |
| **C** | [Kanal](Statistikk/Statistikk-2/konsept-c-kanal.html) | Kanalprofiler (P1 vs P3 vs Radio Norge) | ✅ Prototype | Avventer feedback |
| **D** | [Long tail + CTA](Statistikk/Statistikk-2/konsept-d-long-tail-cta.html) | Fokus på mindre artister + bli medlem-oppfordring | ✅ Prototype | Avventer feedback |
| **E** | [Geografi + tid](Statistikk/Statistikk-2/konsept-e-geografi-tid.html) | Geografisk fordeling over tid | ✅ Prototype | Avventer feedback |
| **F** | [Bygg toppliste](Statistikk/Statistikk-2/konsept-f-bygg-toppliste.html) | Interaktiv filtrering (kjønn, språk, etc.) | ✅ Prototype | Avventer feedback |
| **G** | [SoMe-vinklinger](Statistikk/Statistikk-2/konsept-g-some-vinklinger.html) | Innhold optimalisert for deling | ✅ Prototype | Avventer feedback |
| **H** | [Live](Statistikk/Statistikk-2/konsept-h-live.html) | Sanntidsdata og nå-lytting | ✅ Prototype | Avventer feedback |
| **I** | [Dybdedykk](Statistikk/Statistikk-2/konsept-i-djupdykk.html) | Detaljert analyse av enkeltlåt | ✅ Prototype | Avventer feedback |
| **J** | [Artistprofil](Statistikk/Statistikk-2/konsept-j-artistprofil.html) | Dedikert artistside med statistikk | ✅ Prototype | Avventer feedback |
| **K** | [Tidsmaskin](Statistikk/Statistikk-2/konsept-k-tidsmaskin.html) | Utforsk historiske trender | ✅ Prototype | Avventer feedback |
| **L** | [Låtreise](Statistikk/Statistikk-2/konsept-l-latreise.html) | Følg en låts reise gjennom radio-Norge | ✅ Prototype | Avventer feedback |
| **M** | [Streaming](Statistikk/Statistikk-2/konsept-m-streaming.html) | Radio vs. streaming-sammenligning | ✅ Prototype | Avventer feedback |
| **N** | [Samarbeid](Statistikk/Statistikk-2/konsept-n-samarbeid.html) | Visualisere musikalske samarbeid | ✅ Prototype | Avventer feedback |
| **O** | [Kreditering](Statistikk/Statistikk-2/konsept-o-kreditering.html) | Fremheve produsenter, låtskrivere, musikere | ✅ Prototype | Avventer feedback |
| **P** | [Plateselskap](Statistikk/Statistikk-2/konsept-p-plateselskap.html) | Oversikt per plateselskap/label | ✅ Prototype | Avventer feedback |
| **Q** | [Minradio](Statistikk/Statistikk-2/konsept-q-minradio.html) | Personalisert statistikk for brukere | ✅ Prototype | Avventer feedback |
| **R** | [Årsberetning](Statistikk/Statistikk-2/konsept-r-aarsberetning.html) | Årsrapport-format med høydepunkter | ✅ Prototype | Avventer feedback |

### Andre versjoner

| Fil | Beskrivelse | Status |
|-----|-------------|--------|
| [index.html](Statistikk/Statistikk-2/index.html) | Oversikt over alle konsepter | ✅ |
| [v2-komplett.html](Statistikk/Statistikk-2/v2-komplett.html) | Komplett visning med alle elementer | ✅ |
| [v2-spilleliste-filter.html](Statistikk/Statistikk-2/v2-spilleliste-filter.html) | Interaktiv spilleliste med filtre | ✅ |

### Statistikk-1 (tidlig versjon)

Tidligere iterasjoner, primært brukt for intern utforsking. Se [Statistikk/Statistikk-1/](Statistikk/Statistikk-1/).

---

## Målgrupper

**Primært:**
- **Medlemmer** - se hvordan deres musikk brukes
- **Potensielle medlemmer** - vise verdien av Gramo
- **Musikknæringen** - innsikt i radiobruk
- **Allmennheten** - interesse for musikkstatistikk

**Sekundært:**
- **Media** - historier og data
- **Forskere** - tilgang til aggregert data

---

## Tekniske avklaringer (kritisk for Fase 2)

### Datakilder

**Avklares med Ståle:**
- [ ] Finnes det API for spillingsdata?
- [ ] Hva aggregeringsnivå er tilgjengelig? (per låt/artist/kanal/dag)
- [ ] Hvor langt tilbake går data?
- [ ] Oppdateringsfrekvens? (daglig/ukentlig/ved fordeling)
- [ ] Kan vi få testbruker i Echo?

**Metadataberikelse:**
- [ ] Artistbilder - kilde? (Spotify API, manuell kurasjon?)
- [ ] Cover art - kilde?
- [ ] Kjønn, nasjonalitet - hvordan verifisere?

Se [Analyse/Metadata.md](../../Analyse/Metadata.md) for detaljer.

### Implementering

**Beslutninger for Fase 2:**
- Frontend-teknologi (Next.js, Sanity visuals, etc.)
- API-arkitektur (Apollon, Metabase, Azure?)
- Caching-strategi (for ytelse)
- Real-time vs. statisk data

---

## Neste steg

### Uke 2, 2026 (Fase 1-avslutning)

**Fredag 10. januar:**
- [ ] **Presentasjon for Kim** - vise konseptene
- [ ] **Diskusjon med Inge** - teknisk gjennomførbarhet
- [ ] **Prioritering** - hvilke konsepter går videre til Fase 2?

### Fase 2 (februar-mars 2026)

**Basert på prioritering:**
1. Velg 2-3 konsepter for videre utvikling
2. Detaljert design (Inge)
3. Teknisk implementering
4. Brukertesting
5. Iterasjon

**Omfangsavklaring (fra tilbud):**
> "Statistikkvisning har et stort muligheitsrom. Vi legger opp til å lansere funksjonell og brukartestet visning av basis-statistikk innenfor rammene av prosjektet."

---

## Dokumentasjon

**Relaterte dokumenter:**
- [Analyse/Statistikk-visualisering.md](../../Analyse/Statistikk-visualisering.md) - idébank
- [Analyse/Metadata.md](../../Analyse/Metadata.md) - metadatafelt
- [2DOS.md](../../2DOS.md) - aktive oppgaver
- [LOGG.md](../../LOGG.md) - historikk

**Beslutninger:**
- Se [Dokumenter/BESLUTNINGER.md](../../Dokumenter/BESLUTNINGER.md) for viktige valg rundt statistikk

---

*Sist oppdatert: 8. januar 2026*
