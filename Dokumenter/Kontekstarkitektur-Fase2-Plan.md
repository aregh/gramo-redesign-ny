# Kontekstarkitektur - Plan for Fase 2

> Forbedringer av kontekstarkitektur for effektivt Bastian-Are samarbeid

**Opprettet:** 8. januar 2026
**Ansvarlig:** Bastian Daae (primær), Are Halland (konsulent/støtte)
**Basert på:** [2025-01-08-Ryddeprosjekt-Bastian-tråd.md](../2025-01-08-Ryddeprosjekt-Bastian-tråd.md)

---

## Viktig: Intern vs. ekstern

**Bastian Daae** = Intern ressurs hos Gramo (ubegrensede timer)
**Are Halland, Torstein Norendal, Inge Fossland** = Eksterne konsulenter (begrenset til 100 dagsverk totalt)

**Konsekvens:**
- **Bastian driver** kontekstarkitekturen (vedlikehold, EVAL, review)
- **Are støtter** som konsulent (oppsett, veiledning, kvalitetssikring)
- **Are skal jobbe seg ut av prosjektet** - Bastian må kunne drifte alene

---

## Bakgrunn

I Fase 1 ble det etablert en grunnleggende kontekstarkitektur for prosjektet. Analysen (8. januar 2026) identifiserte flere områder for forbedring, særlig med tanke på **samarbeid mellom Bastian (Gramo intern) og Are (ekstern konsulent)** gjennom Fase 2 og 3.

**Nøkkelinnsikt:**
> Kontekstarkitekturen er **Bastians system** - Are setter opp og veileder, men Bastian eier og driver det daglig.

---

## Hva fungerer godt i Fase 1

### ✅ Struktur og navigasjon
- [KONTEKST.md](../KONTEKST.md) fungerer som tydelig hub
- Sammendragsfiler (`_BAKGRUNN.md`, `_ANALYSE.md`) gir oversikt
- Hub-and-Spoke-prinsippet er implementert
- On-demand loading (AGENT.md er lett, kun 38 linjer)

### ✅ Dokumentasjon
- Språkpolicy (bokmål) er tydelig kommunisert
- Metodikk ligger i `/Bakgrunn/Pakker/` (ikke duplisert)
- Git brukes for versjonskontroll
- LOGG.md og 2DOS.md gir kronologisk og oppgaveorientert oversikt

### ✅ Fase 1-leveranser
- [Design/Prototyper/README.md](../Design/Prototyper/README.md) - 18 statistikk-konsepter dokumentert
- [Dokumenter/BESLUTNINGER.md](BESLUTNINGER.md) - viktige beslutninger fanget
- [Analyse/](../Analyse/) - ryddet med undermapper

---

## Forbedringsområder for Fase 2

### 1. Metadata og eierskap

**Problem:**
Bastian vet ikke alltid:
- Hvem eier hvilken fil?
- Når ble dokumentet sist oppdatert?
- Er dette ferdig eller pågående?
- Er dette relevant for meg?

**Løsning: YAML frontmatter**

**Implementering:**
```yaml
---
title: GEO-analyse
owner: Are Halland
last_updated: 2025-12-15
status: ferdig
relevant_for: Bastian (innholdsproduksjon)
fase: Fase 1
---
```

**Hvordan:**
1. Lag template for frontmatter
2. Script for å legge til frontmatter i eksisterende filer
3. Rutine: Alle nye filer skal ha frontmatter
4. Review: Månedlig sjekk at frontmatter er oppdatert

**Tidsestimat:** 2-3 timer (setup + batch-update)

---

### 2. Review-rutiner for Bastian (med Are-støtte)

**Problem:**
Uten faste rutiner kan kontekstarkitekturen forfalle eller bli utdatert.

**Løsning: Etabler faste review-punkter**

**Ukentlig (30 min) - Bastian driver:**
- Gjennomgang av [2DOS.md](../2DOS.md)
- Oppdatering av [LOGG.md](../LOGG.md)
- Avklaring av blokkere
- **Ansvarlig:** Bastian (Are deltar ved behov)

**Månedlig (1 time) - Bastian driver:**
- Gjennomgang av [KONTEKST.md](../KONTEKST.md)
- Evaluering av kontekstarkitektur: Fungerer den?
- Oppdatering av sammendragsfiler
- **Ansvarlig:** Bastian (Are QA ved behov)

**Ved fase-overgang - Bastian driver:**
- Fullstendig gjennomgang av alle nøkkeldokumenter
- Arkivering av viktige milepæler til [Arkiv/](../Arkiv/)
- **Ansvarlig:** Bastian (Are støtter i Fase 1→2, Bastian alene i Fase 2→3)

---

### 3. Rollefordeling og ansvar

**Problem:**
Uklart hvem som oppdaterer hva kan føre til duplikater eller utdatert informasjon.

**Løsning: Tydelig rollefordeling**

| Fil/område | Primært ansvar | Sekundært ansvar | Oppdateringsfrekvens |
|------------|----------------|------------------|----------------------|
| [KONTEKST.md](../KONTEKST.md) | **Bastian** | Are (støtte) | Ved endringer i struktur |
| [LOGG.md](../LOGG.md) | **Bastian** | Are (større hendelser) | Etter møter/milepæler |
| [2DOS.md](../2DOS.md) | **Bastian** | Are (prioritering) | Ukentlig |
| [BESLUTNINGER.md](BESLUTNINGER.md) | **Bastian** | Are (strategiske) | Etter viktige beslutninger |
| [Innhold/](../Innhold/) | **Bastian** | Torstein (fra Fase 2) | Løpende |
| [Design/](../Design/) | Inge (konsulent) | Are (konsept) | Per iterasjon |
| [Analyse/](../Analyse/) | **Bastian** | Are (nye analyser) | Ved nye innsikter |
| Kontekstarkitektur | **Bastian** | Are (oppsett/QA) | Kontinuerlig |

**Prinsipp:** Bastian eier alt daglig, eksterne konsulenter bidrar innenfor sine dagsverk.

**Implementering:**
- Dokumenter i `CONTRIBUTING.md` eller eget dokument
- Inkluder i onboarding for Torstein (februar)
- Tydeliggjør i frontmatter (`owner:`-felt)

---

### 4. Onboarding-dokument for nye teammedlemmer

**Problem:**
Når Torstein starter i Fase 2, hvordan kommer han raskt i gang?

**Løsning: Bastian lager onboarding-guide (med Are-støtte)**

**Innhold:**
1. **Start her:** Les [AGENT.md](../AGENT.md) og [KONTEKST.md](../KONTEKST.md)
2. **Forståelse:** Les [Dokumenter/Prosjektmandat.md](Prosjektmandat.md) og [BESLUTNINGER.md](BESLUTNINGER.md)
3. **Metodikk:** Last inn [Bakgrunn/Pakker/PAKKE-Kjernemodellen.md](../Bakgrunn/Pakker/PAKKE-Kjernemodellen.md)
4. **Aktive oppgaver:** Sjekk [2DOS.md](../2DOS.md)
5. **Ditt område:** For Torstein = [Innhold/](../Innhold/)
6. **Kommunikasjon:** Ukentlig sync, månedlig review

**Fil:** `Dokumenter/ONBOARDING.md`

**Ansvarlig:** Bastian (oppretter og vedlikeholder)
**Støtte:** Are (review og innspill)
**Tidsestimat:** 1-2 timer (Bastian)

---

### 5. Apollon-samling (single source of truth)

**Problem:**
Informasjon om Apollon er spredt i [LOGG.md](../LOGG.md), [2DOS.md](../2DOS.md), [Prosjektmandat.md](Prosjektmandat.md), og [Bakgrunn/Apollon/](../Bakgrunn/Apollon/).

**Løsning: Opprett `Bakgrunn/Apollon/_APOLLON.md`**

**Innhold:**
- Hva er Apollon?
- Prosjekttidslinje (go-live juni 2026)
- Medlemsportal-funksjoner
- Relevans for gramo.no-prosjektet
- **Viktig beslutning:** Gramo.no skal IKKE fokusere på Apollon (5. desember 2025)
- Lenker til andre dokumenter

**Konsistensregel:**
- Andre filer refererer til `_APOLLON.md` med lenker
- [LOGG.md](../LOGG.md) brukes kun for hendelser, ikke statisk info
- [BESLUTNINGER.md](BESLUTNINGER.md) dokumenterer beslutninger, ikke bakgrunn

**Tidsestimat:** 1 time

---

### 6. EVAL-system for kontinuerlig forbedring

**Problem:**
Hvordan sikre at kontekstarkitekturen forbedres basert på faktisk bruk i Fase 2?

**Løsning: Bastian driver EVAL-system (Are setter opp)**

**Konsept (fra [Bakgrunn/Pakker/PAKKE-Kontekstarkitektur.md](../Bakgrunn/Pakker/PAKKE-Kontekstarkitektur.md:559-714)):**

**Working Branch (Måndag-Fredag):**
- **Bastian** logger utfordringer/innsikter i `_EVAL/Kontekstarkitektur-EVAL.md`
- Append-only logg (ikke rediger tidligere innslag)

**Staging Branch (Fredag):**
- **Bastian** konsoliderer til `_EVAL/2026-W[UKE].md` (ukentlig rapport)
- Prioriter forbetringsforslag (🔥 PRI, ⭐ VIKTIG, 💡 NICE)

**Review (Fredag/Måndag):**
- **Bastian** gjennomgår, beslutter
- **Are** kan konsulteres ved behov (men ikke påkrevd)
- Mennesket bestemmer (human-in-the-loop)

**Merge (Måndag):**
- **Bastian** implementerer godkjente forbedringer
- Oppdater dokumentasjon
- Tøm EVAL-filer for ny uke

**Ansvarlig:** Bastian (driver), Are (setup + støtte ved behov)
**Tidsestimat:** 2 timer setup (Are bistår Bastian), 30 min/uke vedlikehold (Bastian)

---

### 7. Kommunikasjonsprotokoll

**Problem:**
Hvordan sikre god kommunikasjon mellom Are (konsulent) og Bastian (kunde) når Are ikke alltid er tilgjengelig?

**Løsning: Etabler tydelig kommunikasjonsprotokoll**

**Synkrone kanaler:**
- **Slack/Teams:** Daglige spørsmål og avklaringer
- **Møter:** Ukentlig sync (30 min) + månedlig review (1 time)
- **Prioriteringsverksted:** Ved behov (Fase 2-oppstart, milepæler)

**Asynkrone kanaler:**
- **[LOGG.md](../LOGG.md):** **Bastian** logger hendelser/beslutninger (Are ved større strategiske hendelser)
- **[2DOS.md](../2DOS.md):** **Bastian** legger til og prioriterer oppgaver (Are konsulteres ved behov)
- **[BESLUTNINGER.md](BESLUTNINGER.md):** **Bastian** dokumenterer beslutninger (Are ved strategiske valg)
- **Git commit-meldinger:** Tydelige beskrivelser av endringer

**Forventninger:**
- Are svarer på spørsmål innen 24-48 timer (når tilgjengelig innenfor dagsverk)
- Bastian driver daglig - ikke avhengig av Are-respons for fremdrift
- Kritiske blokkere eskaleres til Are umiddelbart

**Dokumenter i:** `CONTRIBUTING.md` eller `Dokumenter/KOMMUNIKASJON.md`

---

### 8. Selvstendighet-strategi (ikke handover!)

**Viktig korrigering:**
Dette er ikke "handover" - Bastian er **allerede** intern hos Gramo. Are jobber seg **ut**, ikke "over".

**Problem:**
Hvordan sikre at Bastian kan drifte alene når Are-timene tar slutt?

**Løsning: Bastian selvstendig fra dag 1 i Fase 2**

**Strategi:**
1. **Are setter opp:** Frontmatter, EVAL-system, templates (februar)
2. **Bastian driver:** Daglig vedlikehold, ukentlig review, månedlig evaluering
3. **Are støtter:** Ved behov (innenfor tildelte dagsverk)
4. **Reduserende avhengighet:** Are gradvis mindre involvert

**Konkret:**
- **Februar:** Are setter opp systemer, Bastian lærer
- **Mars:** Bastian driver selv, Are tilgjengelig ved behov
- **April-Juni:** Bastian selvstendig, Are kun ved kritiske spørsmål
- **Etter Fase 3:** Bastian driver alene (Are kan kjøpes inn på timebasis ved behov)

**Mål:** Bastian skal **ikke** være avhengig av Are for daglig drift.

---

## Prioritering for Fase 2-oppstart (februar)

### 🔴 Høy prioritet (implementer uke 1-2)

| # | Tiltak | Tid | Ansvarlig | Deadline |
|---|--------|-----|-----------|----------|
| 1 | Onboarding-dokument (for Torstein) | 1-2 timer | **Bastian** (Are review) | Før Torstein starter |
| 2 | Rollefordeling dokumentert | 1 time | **Bastian** (Are støtte) | Uke 1 |
| 3 | Review-rutiner etablert | 30 min | **Bastian** (Are veileder) | Uke 1 |
| 4 | Kommunikasjonsprotokoll | 1 time | **Bastian** (Are innspill) | Uke 1 |

### 🟡 Middels prioritet (implementer uke 3-4)

| # | Tiltak | Tid | Ansvarlig | Deadline |
|---|--------|-----|-----------|----------|
| 5 | Frontmatter i alle filer | 2-3 timer | Are (script), **Bastian** (vedlikehold) | Uke 3 |
| 6 | Apollon-samling (_APOLLON.md) | 1 time | **Bastian** (Are review) | Uke 3 |
| 7 | EVAL-system setup | 2 timer | Are (setup), **Bastian** (driver) | Uke 4 |

### 🟢 Lav prioritet (implementer ved behov)

| # | Tiltak | Tid | Ansvarlig | Når |
|---|--------|-----|-----------|-----|
| 8 | Selvstendighet-evaluering | 1 time | **Bastian** (Are støtte) | Mars (Fase 2 midt) |
| 9 | Avhengighetskart (visuelt) | 1-2 timer | **Bastian** | Ved behov |
| 10 | Automatisert EVAL-dashboard | 4+ timer | **Bastian**/Inge | Fase 3? |

---

## Suksesskriterier

**For Fase 2:**
- ✅ **Bastian driver** kontekstarkitekturen daglig (Are støtter ved behov)
- ✅ Torstein kommer raskt i gang (< 2 timer onboarding av **Bastian**)
- ✅ Alle filer har tydelig eierskap og status
- ✅ Ukentlig review fungerer (drevet av **Bastian**)
- ✅ EVAL-systemet gir kontinuerlige forbedringer (drevet av **Bastian**)

**For Fase 3:**
- ✅ **Bastian fullt selvstendig** - Are kun ved kritiske spørsmål
- ✅ Dokumentasjon er komplett og oppdatert
- ✅ Gramo kan drifte videre uten eksterne konsulenter (om ønskelig)

---

## Vedlikehold av denne planen

**Ansvarlig:** **Bastian Daae** (primær), Are Halland (støtte)

**Review:**
- **Uke 1 Fase 2:** Bastian og Are gjennomgår planen, justerer prioriteringer
- **Månedlig:** Bastian sjekker status på tiltak, oppdaterer planen
- **Ved fase-overgang:** Bastian evaluerer hva som fungerte, justerer for neste fase

**Oppdateringer:**
- Bastian dokumenterer avvik fra planen
- Bastian legger til nye tiltak basert på læring
- Feir suksesser! 🎉

---

## Lenker og ressurser

**Metodikk:**
- [Bakgrunn/Pakker/PAKKE-Kontekstarkitektur.md](../Bakgrunn/Pakker/PAKKE-Kontekstarkitektur.md) - komplett metodikk
- [AGENT.md](../AGENT.md) - rask onboarding for AI-assistenter

**Analyse:**
- [2025-01-08-Ryddeprosjekt-Bastian-tråd.md](../2025-01-08-Ryddeprosjekt-Bastian-tråd.md) - opprinnelig analyse

**Beslutninger:**
- [BESLUTNINGER.md](BESLUTNINGER.md) - viktige beslutninger dokumentert

**Prosjekt:**
- [KONTEKST.md](../KONTEKST.md) - prosjektets hub
- [2DOS.md](../2DOS.md) - aktive oppgaver
- [LOGG.md](../LOGG.md) - kronologisk historikk

---

*Opprettet: 8. januar 2026*
*Neste review: Ved Fase 2-oppstart (februar 2026)*
