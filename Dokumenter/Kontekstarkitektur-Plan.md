# Kontekstarkitektur - Helhetlig plan Fase 1→2→3

> Operativ plan for kontekstarkitektur og samarbeid gjennom hele prosjektet

**Opprettet:** 8. januar 2026
**Ansvarlig:** Bastian Daae (driver), Are Halland (støtte)
**Gjelder:** Fase 1-opprydding + Fase 2-forbedringer + Fase 3-selvstendighet

---

## Viktig: Intern vs. ekstern

**Bastian Daae** = Intern ressurs hos Gramo (ubegrensede timer)
**Are Halland, Torstein Norendal, Inge Fossland** = Eksterne konsulenter (begrenset til 100 dagsverk totalt)

**Konsekvens:**
- **Bastian driver** kontekstarkitekturen (vedlikehold, EVAL, review)
- **Are støtter** som konsulent (oppsett, veiledning, kvalitetssikring)
- **Are skal jobbe seg ut av prosjektet** - Bastian må kunne drifte alene

---

## Innhold

1. [Fase 1-opprydding (umiddelbart)](#fase-1-opprydding)
2. [Fase 2-forbedringer (februar-mars)](#fase-2-forbedringer)
3. [Fase 3-selvstendighet (april-juni)](#fase-3-selvstendighet)
4. [Git-rutiner](#git-rutiner)
5. [MCP-integrasjon](#mcp-integrasjon)
6. [EVAL-system](#eval-system)
7. [Suksesskriterier](#suksesskriterier)

---

## Fase 1-opprydding

### Status: ✅ Gjennomført 8. januar 2026

| # | Tiltak | Status |
|---|--------|--------|
| 1 | Oppdatert README.md til Fase 1-status | ✅ |
| 2 | Arkivert Prosjektmandat_Redesign_gramo.md | ✅ |
| 3 | Arkivert Design/Prototype-statistikk.md | ✅ |
| 4 | Slettet .DS_Store-filer | ✅ |
| 5 | Konvertert CONTRIBUTING.md til bokmål | ✅ |
| 6 | Opprettet Design/Prototyper/README.md | ✅ |
| 7 | Opprettet Dokumenter/BESLUTNINGER.md | ✅ |
| 8 | Reorganisert Analyse/ med undermapper | ✅ |

### Gjenstående (Bastian, uke 3)

| # | Tiltak | Estimat |
|---|--------|---------|
| 9 | Konverter Analyse/Innhaldskartlegging 2.md til bokmål | 30 min |
| 10 | Rydd Innhold/-mappestrukturen (se seksjon nedenfor) | 2 timer |

---

## Innhold/-mappestruktur

### Nåværende struktur (problematisk)

```
Innhold/
├── _INNHOLD.md
├── Språkguide.md
├── Begreper_og_definisjoner.md
├── Innholdsstrategi-gramo-no.md
├── FAQ.md
├── Om_Gramo_innholdsvarianter.md  ← Burde vært i Om_Gramo/
├── Juridisk_pålagt_innhold.md
├── ISRC/
│   ├── isrc_draft.md              ← Arkivere?
│   └── isrc_innholdsspesifikasjon.md
└── Om_Gramo/
    ├── Diverse tekster om Gramo.md
    ├── Innholdsverksted-Om-Gramo.md
    ├── Hva_er_Gramo_enkelt_forklart-Rita.md
    ├── om_gramo_draft.md          ← Arkivere?
    ├── om_gramo_innholdsspesifikasjon.md
    ├── om_gramo_sanity.json
    └── unggramo.md
```

### Foreslått struktur

```
Innhold/
├── _INNHOLD.md                    ← Oppdatert sammendrag
├── Språkguide.md
├── Begreper_og_definisjoner.md
├── Innholdsstrategi-gramo-no.md
├── FAQ.md
├── Juridisk_pålagt_innhold.md
│
├── ISRC/                          ← Toppoppgave #1
│   ├── _README.md                 ← Sammendrag (ny)
│   ├── Hva_er_ISRC.md
│   ├── Trenger_jeg_ISRC.md
│   └── [Arkiv]/
│       ├── isrc_draft.md
│       └── isrc_innholdsspesifikasjon.md
│
├── Om_Gramo/                      ← Organisasjon
│   ├── _README.md                 ← Sammendrag (ny)
│   ├── Hva_er_Gramo.md
│   ├── Om_Gramo_innholdsvarianter.md  ← Flyttet fra rot
│   ├── UngGramo.md
│   └── [Arkiv]/
│       ├── om_gramo_draft.md
│       ├── om_gramo_innholdsspesifikasjon.md
│       ├── Diverse tekster om Gramo.md
│       └── Innholdsverksted-Om-Gramo.md
│
├── Medlemskap/                    ← Toppoppgave #2 (Fase 2)
├── Utbetalinger/                  ← Toppoppgave #3 (Fase 2)
└── Rettighetskrav/                ← Toppoppgave #4 (Fase 2)
```

**Prinsipp:** Mappestruktur = Toppoppgaver. Hver mappe får `_README.md` med sammendrag.

---

## Fase 2-forbedringer

### 1. Metadata og eierskap (uke 5-6) 🟡

**Problem:** Bastian vet ikke alltid hvem eier hvilken fil, status, relevans.

**Løsning: YAML frontmatter**

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

**Implementering:**
1. Are lager template for frontmatter
2. Are lager script for batch-update av eksisterende filer
3. Bastian vedlikeholder fremover
4. Månedlig review at frontmatter er oppdatert

**Tidsestimat:** 2-3 timer (Are setup, Bastian vedlikehold)

---

### 2. Review-rutiner (starter uke 5) 🔴

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

### 3. Rollefordeling (dokumentert i CONTRIBUTING.md) ✅

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

---

### 4. Onboarding for Torstein (før Fase 2-start) 🔴

**Bastian lager onboarding-guide (med Are-støtte)**

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

### 5. EVAL-system for kontinuerlig forbedring (uke 7+) 🟢

**Problem:** Hvordan sikre at kontekstarkitekturen forbedres basert på faktisk bruk?

**Løsning: Bastian driver EVAL-system (Are setter opp)**

**Konsept (fra [PAKKE-Kontekstarkitektur.md](../Bakgrunn/Pakker/PAKKE-Kontekstarkitektur.md)):**

**Working Branch (Mandag-Fredag):**
- **Bastian** logger utfordringer/innsikter i `_EVAL/Kontekstarkitektur-EVAL.md`
- Append-only logg (ikke rediger tidligere innslag)

**Staging Branch (Fredag):**
- **Bastian** konsoliderer til `_EVAL/2026-W[UKE].md` (ukentlig rapport)
- Prioriter forbedringsforslag (🔥 PRI, ⭐ VIKTIG, 💡 NICE)

**Review (Fredag/Mandag):**
- **Bastian** gjennomgår, beslutter
- **Are** kan konsulteres ved behov (men ikke påkrevd)
- Mennesket bestemmer (human-in-the-loop)

**Merge (Mandag):**
- **Bastian** implementerer godkjente forbedringer
- Oppdater dokumentasjon
- Tøm EVAL-filer for ny uke

**Ansvarlig:** Bastian (driver), Are (setup + støtte ved behov)
**Tidsestimat:** 2 timer setup (Are bistår Bastian), 30 min/uke vedlikehold (Bastian)

---

## Git-rutiner

### Daglig arbeidsflyt

**Før du starter:**
```bash
cd "/Users/arehalland/Library/CloudStorage/GoogleDrive-are@kjernekaren.no/Min disk/_KJERNEKAREN/Prosjekt/Gramo/Gramo_kontekstarkitektur"
git pull origin main              # Hent siste endringer
```

**Etter endringer:**
```bash
git add -A                         # Legg til alle endringer
git status                         # Sjekk hva som er endret
git commit -m "Beskrivelse"        # Commit (bruk bokmål!)
git push origin main               # Push til GitHub
```

### Commit-meldinger

✅ **Gode eksempler:**
```
Oppdater KONTEKST.md med Fase 2-status
Arkiver gamle prosjektmandater til Arkiv/
Legg til Design/Prototyper/README.md
Rydd opp i Innhold/-mappestrukturen
```

❌ **Dårlige eksempler:**
```
oppdatert              ← Hva ble oppdatert?
fix                    ← Hva ble fikset?
changes                ← Hvilke endringer?
```

**Prinsipp:**
- Start med verb (Oppdater, Legg til, Fjern, Arkiver, Rydd)
- Beskriv **hva** og **hvor**
- Bruk **bokmål** (ikke nynorsk)
- Maks 50 tegn i tittellinje

### Arkiveringsstrategi

**Git for løpende arbeid:**
- Alt daglig arbeid spores i Git-historikk
- **IKKE arkiver** hver liten endring manuelt

**Manuell arkivering kun ved milepæler:**
- Fase 1-levering (januar 2026) ✅
- Fase 2-levering (mars 2026)
- Fase 3-levering (juni 2026)

**Navnekonvensjon:**
```
Arkiv/ÅÅMMDD-<original filnavn>

Eksempel:
Innholdsstrategi-gramo-no.md → Arkiv/251219-Innholdsstrategi-gramo-no.md
```

### Konfliktløsning

**Hvis `git push` feiler:**

**Alternativ 1: Rebase (anbefalt for små endringer)**
```bash
git pull --rebase origin main     # Hent og flette inn
# Løs eventuelle konflikter i filene
git add -A
git rebase --continue
git push origin main
```

**Alternativ 2: Merge (for større endringer)**
```bash
git pull origin main              # Hent og merge
# Løs eventuelle konflikter i filene
git add -A
git commit -m "Merge main"
git push origin main
```

**Unngå konflikter:**
- **Pull før du starter** hver arbeidsdag
- **Koordiner** hvis dere jobber på samme fil
- **Push ofte** (minst 1x per dag)

---

## MCP-integrasjon

### Status MCP-servere ✅

- **Airtable:** `appo0g1sGfgBc6mHg` - 26 tabeller tilgjengelige
- **Notion:** Gramo forprosjekt-side og relaterte sider

### Airtable-tabeller (relevante for prosjektet)

| Tabell | Innhold | Bruk i prosjektet |
|--------|---------|-------------------|
| **Folk** | Nøkkelpersoner, intervjuer | Backup til Bakgrunn/Folk.md |
| **Toppoppgaver** | Prioriterte brukeroppgaver | Backup til Analyse/Toppoppgaver.md |
| **Brukeroppgaver** | Detaljerte oppgaver fra undersøkelser | Analyse/brukerinnsikt |
| **Søkeord** | GEO/SEO-data | Backup til Analyse/GEO-analyse.md |
| **Eksisterende innhold** | Kartlegging av nåværende innhold | Backup til Analyse/Innholdskartlegging.md |
| **Nytt struktur** | Foreslått IA for nye sider | Input til IA-arbeid |
| **Intercom Henvendelser** | Supporthenvendelser | Identifisere pain points |
| **Medlemsundersøkelse** | Brukerinnsikt fra 2023 | Analyse |

### Single Source of Truth (SSoT)-strategi

| Type innhold | SSoT (master) | Synkroniseres til |
|-------------|---------------|-------------------|
| **Prosjektdokumenter** | GitHub (kontekstarkitektur) | Notion (referanse) |
| **Brukerinnsikt** | Airtable (strukturert data) → GitHub (markdown-sammendrag) | - |
| **Innholdskartlegging** | Airtable (rådata) → GitHub (analyse) | - |
| **Møtenotater** | GitHub ([Kommunikasjon/Møter/](../Kommunikasjon/Møter/)) | Notion (kan referere) |
| **Toppoppgaver** | GitHub ([Analyse/Toppoppgaver.md](../Analyse/Toppoppgaver.md)) | Airtable (kan ha detaljer) |

**Prinsipp:**
- **GitHub = long-term storage** (markdown, versjonert)
- **Airtable = working data** (strukturert, filtrerbar)
- **Notion = collaboration space** (deling med Kim/Rita)

### Praktisk bruk i Fase 2

**For Agent:**

1. **Hente brukerinnsikt fra Airtable:**
   ```
   Hent topp 10 brukeroppgaver fra Airtable (tabell: Brukeroppgaver)
   ```

2. **Søke i eksisterende innhold:**
   ```
   Søk i Airtable-tabellen "Eksisterende innhold" etter sider om ISRC
   ```

3. **Oppdatere Notion med fremdrift:**
   ```
   Oppdater Notion-siden "Gramo forprosjekt" med status fra LOGG.md
   ```

**Ansvarlig:** Are setter opp, Bastian bruker

---

## Fase 3-selvstendighet

### Mål: Bastian selvstendig, Are kun ved kritiske spørsmål

**Strategi:**
1. **Februar:** Are setter opp systemer, Bastian lærer
2. **Mars:** Bastian driver selv, Are tilgjengelig ved behov
3. **April-Juni:** Bastian selvstendig, Are kun ved kritiske spørsmål
4. **Etter Fase 3:** Bastian driver alene (Are kan kjøpes inn på timebasis ved behov)

**Selvstendighet-sjekkliste:**

| # | Kompetanseområde | Bastian kan | Status |
|---|------------------|-------------|--------|
| 1 | Git (pull, commit, push) | Daglig | 🟢 |
| 2 | Git (konfliktløsning) | Når nødvendig | 🟡 |
| 3 | Oppdatere LOGG.md, 2DOS.md, KONTEKST.md | Ukentlig | 🟢 |
| 4 | Arkivere ved milepæler | Ved fase-overgang | 🟡 |
| 5 | MCP (hente data fra Airtable/Notion) | Ved behov | 🟡 |
| 6 | EVAL-system (logger og forbedrer) | Ukentlig | 🔴 |
| 7 | Onboarding (nye teammedlemmer) | Ved behov | 🔴 |

**Evaluering:** Mars 2026 (Fase 2 midt)

---

## Suksesskriterier

### ✅ Fase 1-opprydding vellykket når:

1. **Ingen utdaterte filer** i rot-nivået ✅
2. **CONTRIBUTING.md på bokmål** med tydelige Git-rutiner ✅
3. **Innhold/-mappen** har logisk struktur basert på toppoppgaver (delvis)
4. **MCP-integrasjon** fungerer og er dokumentert ✅
5. **Bastian kan jobbe selvstendig** med Git og kontekstarkitektur 🟡

### ✅ Fase 2-rutiner fungerer når:

1. **Daglig pull/push** skjer uten konflikter
2. **Commit-meldinger** er beskrivende og på bokmål
3. **Arkivering** skjer kun ved milepæler
4. **MCP brukes aktivt** for å hente data fra Airtable/Notion
5. **Synkronisering** mellom systemer skjer jevnlig
6. **Ukentlig review** av 2DOS.md og LOGG.md
7. **Månedlig review** av KONTEKST.md
8. **EVAL-system** gir kontinuerlige forbedringer

### ✅ Fase 3-selvstendighet oppnådd når:

1. **Bastian driver daglig** uten Are-støtte
2. **Are kun kontaktes** ved kritiske spørsmål
3. **Dokumentasjon** er komplett og oppdatert
4. **Gramo kan drifte** uten eksterne konsulenter (om ønskelig)

---

## Vedlikehold av denne planen

**Ansvarlig:** Bastian (oppdaterer), Are (reviewer)

**Review:**
- **Uke 2 (jan 2026):** Bastian og Are gjennomgår planen ✅
- **Fase 2-start (feb 2026):** Evaluere hva som fungerte/ikke fungerte
- **Månedlig:** Sjekk status på tiltak

**Oppdateringer:**
- Bastian dokumenterer avvik fra planen i [LOGG.md](../LOGG.md)
- Are gir innspill ved behov

---

## Lenker og referanser

### Dokumentasjon
- [KONTEKST.md](../KONTEKST.md) - Hub
- [2DOS.md](../2DOS.md) - Aktive oppgaver
- [LOGG.md](../LOGG.md) - Historikk
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Git-rutiner

### Metodikk
- [Bakgrunn/Pakker/PAKKE-Kontekstarkitektur.md](../Bakgrunn/Pakker/PAKKE-Kontekstarkitektur.md) - Kontekstarkitektur-metodikk
- [Bakgrunn/Pakker/PAKKE-Kjernemodellen.md](../Bakgrunn/Pakker/PAKKE-Kjernemodellen.md) - Kjernemodellen

### Verktøy
- [_TOOLS/MCP/README.md](../_TOOLS/MCP/README.md) - MCP-konfigurasjon

---

*Sist oppdatert: 8. januar 2026*
