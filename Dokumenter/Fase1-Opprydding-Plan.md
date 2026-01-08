# Oppryddingsplan - Fase 1 til Fase 2

> Helhetlig plan for opprydding, Git-rutiner, Innhold-reorganisering og MCP-integrasjon

**Opprettet:** 8. januar 2026
**Ansvarlig:** Bastian (driver), Are (støtte)
**Deadline:** Før Fase 2-oppstart (1. februar 2026)

---

## Bakgrunn

Før oppstart av Fase 2 (februar 2026) må kontekstarkitekturen ryddes og optimaliseres for effektivt Bastian-Are samarbeid. Dette dokumentet dekker fire områder:

1. **Utdaterte filer** - Identifisere og arkivere/slette
2. **Innhold/-mappestruktur** - Rydde og strukturere
3. **Git-rutiner** - Beskrive samarbeidsrutiner
4. **MCP-integrasjon** - Koble Airtable og Notion til kontekstarkitekturen

---

## 1. Utdaterte filer - Rydd nå! 🔴

### 1.1. Filer som skal oppdateres

| Fil | Problem | Løsning | Ansvarlig | Status |
|-----|---------|---------|-----------|--------|
| [README.md](../README.md) | Nevner "Forprosjekt (20 dagsverk)" - utdatert | Oppdater til Fase 1 (30 dagsverk) + ny status | **Bastian** | ⏳ |
| [CONTRIBUTING.md](../CONTRIBUTING.md) | Nynorsk, mangler arkiveringsrutiner | Konverter til bokmål, utvid med Git-rutiner (se seksjon 3) | **Bastian** | ⏳ |
| [Analyse/Innhaldskartlegging 2.md](../Analyse/Innhaldskartlegging 2.md) | Nynorsk, mulig duplikat | Sammenlign med Innholdskartlegging.md, konverter til bokmål | **Bastian** | ⏳ |

### 1.2. Filer som skal arkiveres

| Fil | Hvorfor arkivere | Ny plassering | Ansvarlig | Status |
|-----|-----------------|---------------|-----------|--------|
| [Prosjektmandat_Redesign_gramo.md](../Prosjektmandat_Redesign_gramo.md) | Duplikat av Dokumenter/Prosjektmandat-2026-01-06-Are.md | Arkiv/260108-Prosjektmandat_Redesign_gramo.md | **Bastian** | ⏳ |
| [Design/Prototype-statistikk.md](../Design/Prototype-statistikk.md) | Erstattet av Design/Prototyper/README.md | Arkiv/260108-Prototype-statistikk.md | **Bastian** | ⏳ |

### 1.3. Filer som skal slettes (trygt)

| Fil | Hvorfor slette | Backup? | Ansvarlig | Status |
|-----|---------------|---------|-----------|--------|
| `.DS_Store`-filer | MacOS systemfiler (ikke relevant) | Git-historikk | **Bastian** | ⏳ |

**Kommando for å finne og slette .DS_Store:**
```bash
find . -name ".DS_Store" -delete
```

---

## 2. Innhold/-mappestruktur - Rydd og strukturer 🟡

### 2.1. Nåværende struktur (problematisk)

```
Innhold/
├── _INNHOLD.md
├── Språkguide.md
├── Begreper_og_definisjoner.md
├── Innholdsstrategi-gramo-no.md
├── FAQ.md
├── Om_Gramo_innholdsvarianter.md  ← Burde vært i Om_Gramo/?
├── Juridisk_pålagt_innhold.md
├── ISRC/
│   ├── isrc_draft.md              ← Er dette i bruk?
│   └── isrc_innholdsspesifikasjon.md
└── Om_Gramo/
    ├── Diverse tekster om Gramo.md
    ├── Innholdsverksted-Om-Gramo.md
    ├── Hva_er_Gramo_enkelt_forklart-Rita.md
    ├── om_gramo_draft.md          ← Er dette i bruk?
    ├── om_gramo_innholdsspesifikasjon.md
    ├── om_gramo_sanity.json
    └── unggramo.md
```

### 2.2. Foreslått struktur (bedre)

```
Innhold/
├── _INNHOLD.md                    ← Oppdatert sammendrag
├── Språkguide.md
├── Begreper_og_definisjoner.md
├── Innholdsstrategi-gramo-no.md
├── FAQ.md                         ← Generell FAQ
├── Juridisk_pålagt_innhold.md
│
├── ISRC/                          ← Toppoppgave #1
│   ├── _README.md                 ← Sammendrag
│   ├── Hva_er_ISRC.md
│   ├── Trenger_jeg_ISRC.md
│   ├── Slik_får_du_registrantkode.md
│   ├── Slik_lager_du_ISRC.md
│   ├── Registrer_innspilling.md
│   └── [Arkiv]/
│       ├── isrc_draft.md
│       └── isrc_innholdsspesifikasjon.md
│
├── Om_Gramo/                      ← Organisasjon
│   ├── _README.md                 ← Sammendrag
│   ├── Hva_er_Gramo.md
│   ├── Om_Gramo_innholdsvarianter.md  ← Flyttet fra rot
│   ├── UngGramo.md
│   └── [Arkiv]/
│       ├── om_gramo_draft.md
│       ├── om_gramo_innholdsspesifikasjon.md
│       ├── Diverse tekster om Gramo.md
│       ├── Innholdsverksted-Om-Gramo.md
│       └── Hva_er_Gramo_enkelt_forklart-Rita.md
│
├── Medlemskap/                    ← Toppoppgave #2 (ny mappe)
│   ├── _README.md
│   ├── Bli_medlem.md
│   ├── Fordeler_ved_medlemskap.md
│   └── Rettigheter_og_plikter.md
│
├── Utbetalinger/                  ← Toppoppgave #3 (ny mappe)
│   ├── _README.md
│   ├── Slik_får_du_utbetaling.md
│   ├── Utbetalingskalender.md
│   └── Forstå_utregningen_din.md
│
└── Rettighetskrav/                ← Toppoppgave #4 (ny mappe)
    ├── _README.md
    └── Slik_krever_du_rettigheter.md
```

### 2.3. Konkrete tiltak

| # | Tiltak | Ansvarlig | Tidspunkt |
|---|--------|-----------|-----------|
| 1 | Opprett `ISRC/_README.md` med sammendrag | **Bastian** | Uke 3 |
| 2 | Opprett `Om_Gramo/_README.md` med sammendrag | **Bastian** | Uke 3 |
| 3 | Flytt `Om_Gramo_innholdsvarianter.md` til `Om_Gramo/` | **Bastian** | Uke 3 |
| 4 | Arkiver `*_draft.md` og `*_innholdsspesifikasjon.md` til `[Arkiv]/` | **Bastian** | Uke 3 |
| 5 | Opprett mapper for Medlemskap/, Utbetalinger/, Rettighetskrav/ | **Bastian** | Fase 2 (når innhold produseres) |
| 6 | Oppdater `_INNHOLD.md` med ny struktur | **Bastian** | Etter rydding |

### 2.4. Prinsipp for fremtidig innhold

**Mappestruktur = Toppoppgaver**
- Hver toppoppgave får egen mappe
- Hver mappe får `_README.md` med sammendrag
- Arkiver gamle versjoner til `[Arkiv]/` (ikke slett)

---

## 3. Git-rutiner for Are/Bastian-samarbeid 🟢

### 3.1. Daglig arbeidsflyt

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

### 3.2. Commit-meldinger (viktig!)

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

### 3.3. Arkiveringsstrategi

**Git for løpende arbeid:**
- Alt daglig arbeid spores i Git-historikk
- **IKKE arkiver** hver liten endring manuelt

**Manuell arkivering kun ved milepæler:**
- Fase 1-levering (januar 2026)
- Fase 2-levering (mars 2026)
- Fase 3-levering (juni 2026)

**Navnekonvensjon for arkivfiler:**
```
Arkiv/ÅÅMMDD-<original filnavn>

Eksempel:
Innholdsstrategi-gramo-no.md → Arkiv/251219-Innholdsstrategi-gramo-no.md
```

### 3.4. Konfliktløsning

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

### 3.5. Rollefordeling (Git)

| Oppgave | Ansvarlig | Frekvens |
|---------|-----------|----------|
| Oppdatere [LOGG.md](../LOGG.md) | **Bastian** (primært), Are (store hendelser) | Etter møter |
| Oppdatere [2DOS.md](../2DOS.md) | **Bastian** (primært), Are (prioritering) | Ukentlig |
| Oppdatere [KONTEKST.md](../KONTEKST.md) | **Bastian** (primært), Are (stor endring) | Ved behov |
| Oppdatere [BESLUTNINGER.md](BESLUTNINGER.md) | **Bastian** (primært), Are (strategiske) | Etter viktige beslutninger |
| Arkivere til [Arkiv/](Arkiv/) | **Bastian** | Ved fase-overgang |

---

## 4. MCP-integrasjon - Koble Airtable og Notion 🟡

### 4.1. Status MCP-servere

✅ **Fungerende:**
- **Airtable:** `appo0g1sGfgBc6mHg` - 26 tabeller tilgjengelige
- **Notion:** Gramo forprosjekt-side og relaterte sider

### 4.2. Airtable-tabeller (relevante for prosjektet)

| Tabell | Innhold | Bruk i prosjektet |
|--------|---------|-------------------|
| **Folk** | Nøkkelpersoner, intervjuer | Backup til Bakgrunn/Folk.md |
| **Toppoppgaver** | Prioriterte brukeroppgaver | Backup til Analyse/Toppoppgaver.md |
| **Brukeroppgaver** | Detaljerte oppgaver fra brukerundersøkelser | Analyse/brukerinnsikt |
| **Søkeord** | GEO/SEO-data | Backup til Analyse/GEO-analyse.md |
| **Eksisterende innhold** | Kartlegging av nåværende innhold | Backup til Analyse/Innholdskartlegging.md |
| **Nytt struktur** | Foreslått IA for nye sider | Input til IA-arbeid |
| **Intercom Henvendelser** | Supporthenvendelser | Identifisere pain points |
| **Medlemsundersøkelse** | Brukerinnsikt fra 2023 | Backup til Analyse/Medlemsundersøkelse-2023-oppsummering.md |

### 4.3. Notion-sider (relevante)

| Side | ID | Innhold |
|------|-----|---------|
| **Gramo forprosjekt** | `2b5e1430-9122-8070-86c1-cc0c062689e8` | Hovedside for forprosjektet |
| **Gramo redesign** | `2a1e1430-9122-805d-845e-f587fd29ca2b` | Overordnet prosjektside |

### 4.4. Synkroniseringsstrategi

**Problem:** Innhold finnes både i Airtable, Notion OG kontekstarkitekturen. Hvordan holde synkronisert?

**Løsning: Single Source of Truth (SSoT)**

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

### 4.5. Konkrete MCP-bruksområder

**For Claude i Fase 2:**

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

4. **Hente kontaktinfo fra Airtable:**
   ```
   Hent kontaktinfo for Ståle fra Airtable (tabell: Folk)
   ```

### 4.6. Plan for MCP-bruk i Fase 2

| Fase | Bruksområde | Airtable | Notion |
|------|------------|----------|--------|
| **Uke 1-2** | Setup og onboarding | Hente brukerinnsikt | Dele plan med Kim |
| **Uke 3-6** | Innholdsproduksjon | Hente innholdskartlegging | Dele utkast |
| **Uke 7-12** | Iterasjon og testing | Hente søkeord (GEO) | Status-oppdateringer |

**Ansvarlig:** Are setter opp, Bastian bruker

---

## 5. Prioritering og tidslinje

### 5.1. Umiddelbare tiltak (uke 2, 2026) 🔴

| # | Tiltak | Ansvarlig | Estimat |
|---|--------|-----------|---------|
| 1 | Oppdater README.md til Fase 1-status | **Bastian** | 10 min |
| 2 | Arkiver Prosjektmandat_Redesign_gramo.md | **Bastian** | 5 min |
| 3 | Arkiver Design/Prototype-statistikk.md | **Bastian** | 5 min |
| 4 | Slett .DS_Store-filer | **Bastian** | 2 min |
| 5 | Commit og push endringene | **Bastian** | 5 min |

**Total tid:** ~30 minutter

### 5.2. Fase 2-oppstart (uke 5-6, 2026) 🟡

| # | Tiltak | Ansvarlig | Estimat |
|---|--------|-----------|---------|
| 6 | Konverter CONTRIBUTING.md til bokmål + utvid | **Bastian** | 1 time |
| 7 | Rydd Innhold/-mappestrukturen | **Bastian** | 2 timer |
| 8 | Konverter Analyse/Innhaldskartlegging 2.md til bokmål | **Bastian** | 30 min |
| 9 | Test MCP-integrasjon med Claude | **Bastian** | 1 time |

**Total tid:** ~4,5 timer

### 5.3. Løpende i Fase 2 (februar-mars 2026) 🟢

| # | Tiltak | Ansvarlig | Frekvens |
|---|--------|-----------|----------|
| 10 | Synkronisere Airtable → GitHub (sammendrag) | **Bastian** | Ved behov |
| 11 | Oppdatere Notion med fremdrift | **Bastian** | Ukentlig |
| 12 | Review av kontekstarkitektur | **Bastian** (Are QA) | Månedlig |

---

## 6. Suksesskriterier

✅ **Fase 1-opprydding er vellykket når:**

1. **Ingen utdaterte filer** i rot-nivået
2. **CONTRIBUTING.md på bokmål** med tydelige Git-rutiner
3. **Innhold/-mappen** har logisk struktur basert på toppoppgaver
4. **MCP-integrasjon** fungerer og er dokumentert
5. **Bastian kan jobbe selvstendig** med Git og kontekstarkitektur
6. **Are kan finne frem** uten å måtte spørre Bastian

✅ **Fase 2-rutiner fungerer når:**

1. **Daglig pull/push** skjer uten konflikter
2. **Commit-meldinger** er beskrivende og på bokmål
3. **Arkivering** skjer kun ved milepæler
4. **MCP brukes aktivt** for å hente data fra Airtable/Notion
5. **Synkronisering** mellom systemer skjer jevnlig

---

## 7. Vedlikehold av denne planen

**Ansvarlig:** Bastian (oppdaterer), Are (reviewer)

**Review:**
- **Uke 2 (jan 2026):** Bastian og Are gjennomgår planen
- **Fase 2-start (feb 2026):** Evaluere hva som fungerte/ikke fungerte
- **Månedlig:** Sjekk status på tiltak

**Oppdateringer:**
- Bastian dokumenterer avvik fra planen i [LOGG.md](../LOGG.md)
- Are gir innspill ved behov

---

## 8. Lenker og referanser

### Dokumentasjon
- [KONTEKST.md](../KONTEKST.md) - Hub
- [2DOS.md](../2DOS.md) - Aktive oppgaver
- [LOGG.md](../LOGG.md) - Historikk
- [Kontekstarkitektur-Fase2-Plan.md](Kontekstarkitektur-Fase2-Plan.md) - Overordnet Fase 2-plan

### Metodikk
- [Bakgrunn/Pakker/PAKKE-Kontekstarkitektur.md](../Bakgrunn/Pakker/PAKKE-Kontekstarkitektur.md) - Kontekstarkitektur-metodikk

### Verktøy
- [_TOOLS/MCP/README.md](../_TOOLS/MCP/README.md) - MCP-konfigurasjon

---

*Sist oppdatert: 8. januar 2026*
