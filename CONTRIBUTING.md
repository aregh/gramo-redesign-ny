# Samarbeid i dette repositoriet

> Retningslinjer for Are og Bastian (og Torstein fra Fase 2)

**Sist oppdatert:** 8. januar 2026

---

## Viktig: Språk

**All dokumentasjon skal skrives på bokmål.** Dette gjelder commit-meldinger, logger, dialoger og all kommunikasjon.

---

## Git-konfigurasjon per bruker

**Viktig:** Hver bruker må sette opp sin Git-identitet én gang for å sikre riktig sporbarhet.

### Are Halland
```bash
cd "/Users/arehalland/Library/CloudStorage/GoogleDrive-are@kjernekaren.no/Min disk/_KJERNEKAREN/Prosjekt/Gramo/Gramo_kontekstarkitektur"
git config user.name "Are Halland"
git config user.email "are@kjernekaren.no"
```

### Bastian Daae
```bash
cd "[BASTIAN: erstatt med din faktiske sti til Gramo_kontekstarkitektur-mappen]"
git config user.name "Bastian Daae"
git config user.email "bastian@gramo.no"
```

### Torstein Norendal (fra Fase 2)
```bash
cd "[TORSTEIN: erstatt med din faktiske sti til Gramo_kontekstarkitektur-mappen]"
git config user.name "Torstein Norendal"
git config user.email "torstein@kjernekaren.no"
```

**Sjekk konfigurasjon:**
```bash
git config user.name    # Skal vise ditt navn
git config user.email   # Skal vise din e-post
```

---

## Daglig arbeidsflyt

### Før du starter

**Are:**
```bash
cd "/Users/arehalland/Library/CloudStorage/GoogleDrive-are@kjernekaren.no/Min disk/_KJERNEKAREN/Prosjekt/Gramo/Gramo_kontekstarkitektur"
git pull origin main              # Hent siste endringer
```

**Bastian:**
```bash
cd "[DIN STI HER]"
git pull origin main              # Hent siste endringer
```

**Torstein:**
```bash
cd "[DIN STI HER]"
git pull origin main              # Hent siste endringer
```

**Tips:** Hvis du bruker Claude Code, kan du også bruke `/pull` og `/push` kommandoer som automatisk identifiserer deg og håndterer git-operasjoner.

### Etter endringer
```bash
git add -A                         # Legg til alle endringer
git status                         # Sjekk hva som er endret
git commit -m "Beskrivelse"        # Commit (bruk bokmål!)
git push origin main               # Push til GitHub
```

**Claude Code kommandoer:**
- `/pull` - Henter siste endringer fra GitHub (identifiserer bruker automatisk)
- `/push` - Committer og pusher til GitHub med automatisk brukeridentifikasjon

---

## Commit-meldinger

### ✅ Gode eksempler
```
Oppdater KONTEKST.md med Fase 2-status
Arkiver gamle prosjektmandater til Arkiv/
Legg til Design/Prototyper/README.md
Rydd opp i Innhold/-mappestrukturen
Konverter CONTRIBUTING.md til bokmål
```

### ❌ Dårlige eksempler
```
oppdatert              ← Hva ble oppdatert?
fix                    ← Hva ble fikset?
changes                ← Hvilke endringer?
diverse                ← Hvilke diverse?
```

### Retningslinjer
- Start med verb: **Oppdater**, **Legg til**, **Fjern**, **Arkiver**, **Rydd**, **Konverter**
- Beskriv **hva** og **hvor**
- Bruk **bokmål** (ikke nynorsk)
- Maks 50 tegn i tittellinje
- Hvis commit trenger mer forklaring, bruk blank linje + lengre beskrivelse

**Eksempel med lengre beskrivelse:**
```bash
git commit -m "Legg til Design/Prototyper/README.md

Dokumenterer 18 statistikk-konsepter (A-R) før presentasjon
for Kim fredag. Inkluderer tekniske avklaringer og målgrupper."
```

---

## Filnavnkonvensjoner

| Type | Format | Eksempel |
|------|--------|----------|
| Møtereferat | `YYYY-MM-DD_Tittel.md` | `2025-12-04_Oppfølging-Rita-Bastian.md` |
| Analysefiler | `Deskriptivt-navn.md` | `GEO-analyse.md` |
| Sammendragsfiler | `_MAPPENAVN.md` | `_BAKGRUNN.md`, `_ANALYSE.md` |
| Arkivfiler | `YYMMDD-<original filnavn>` | `Arkiv/251219-Innholdsstrategi-gramo-no.md` |

---

## Mappestruktur

```
Gramo_kontekstarkitektur/
├── Bakgrunn/         # Ikke endre ofte (referansemateriale)
├── Kommunikasjon/    # Møtereferat, intervju
├── Dokumenter/       # Formelle dokumenter
├── Analyse/          # Analysearbeid
├── Design/           # Designfiler
├── Innhold/          # Innhold for ny nettside
└── _TOOLS/           # Verktøy (ikke rør uten Are)
```

---

## Arkiveringsstrategi

### Git-historikk for daglig arbeid
- **IKKE arkiver** hver liten endring manuelt
- Git-historikk er tilstrekkelig for løpende arbeid

### Manuell arkivering kun ved milepæler
- Fase 1-levering (januar 2026)
- Fase 2-levering (mars 2026)
- Fase 3-levering (juni 2026)

### Navnekonvensjon for arkivfiler
```
Arkiv/ÅÅMMDD-<original filnavn>

Eksempel:
Innholdsstrategi-gramo-no.md → Arkiv/251219-Innholdsstrategi-gramo-no.md
Prosjektmandat.md → Arkiv/260106-Prosjektmandat.md
```

### Hva skal arkiveres?
- **Prosjektdokumenter** som oppdateres betydelig (f.eks. prosjektmandat)
- **Strategidokumenter** ved ny versjon (f.eks. innholdsstrategi)
- **Viktige leveranser** ved fase-overgang

### Hva skal IKKE arkiveres?
- Logger (LOGG.md) - Git-historikk er nok
- Møtereferat - allerede datostemplet
- Småjusteringer - Git-historikk er nok

---

## Konfliktløsning

### Hvis `git push` feiler

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

### Unngå konflikter
1. **Pull før du starter** hver arbeidsdag
2. **Koordiner** hvis dere jobber på samme fil
3. **Push ofte** (minst 1x per dag)
4. **Kommun iser** via Slack/Teams om større endringer

---

## Hub-filer (oppdater ved behov)

| Fil | Hva | Oppdateringsfrekvens | Primært ansvarlig |
|-----|-----|----------------------|-------------------|
| [KONTEKST.md](KONTEKST.md) | Hovedoversikt | Ved nye filer/strukturendringer | **Bastian** |
| [2DOS.md](2DOS.md) | Oppgaveliste | Ukentlig (minimum) | **Bastian** |
| [LOGG.md](LOGG.md) | Kronologisk logg | Etter møter/milepæler | **Bastian** |
| [Dokumenter/BESLUTNINGER.md](Dokumenter/BESLUTNINGER.md) | Viktige beslutninger | Ved viktige beslutninger | **Bastian** |

---

## Rollefordeling

### Internt (Gramo)
| Rolle | Person | Git-ansvar |
|-------|--------|------------|
| Innhold og prosjektkoordinator | **Bastian Daae** | Driver daglig Git-arbeid |
| Prosjekteier | Kim Skarning Andersen | - |
| Kontaktperson | Rita H. Mamelund | - |

### Eksterne konsulenter (Kjernepar)
| Rolle | Person | Git-ansvar |
|-------|--------|------------|
| Prosjektleder og strategi | Are Halland | Støtter Bastian, større endringer |
| Design og teknologi | Inge Fossland | Sporadiske bidrag |
| Innholdsproduksjon | Torstein Norendal | Fra Fase 2 |

**Prinsipp:** Bastian driver, eksterne konsulenter bidrar innenfor dagsverk.

---

## Tips for godt samarbeid

### Koordinering
- **Avtal kven som jobber med kva** før du starter
- **Unngå å redigere samme fil samtidig**
- **Kommun iser større endringer** via Slack/Teams

### Git-praksis
- **Pull før du starter** - unngå konflikter
- **Små commits** - lettere å spore endringer
- **Push ofte** - hold andre oppdatert
- **Beskrivende meldinger** - fremtidig deg vil være takknemlig

### Dokumentasjon
- **Oppdater LOGG.md** etter møter
- **Oppdater 2DOS.md** ukentlig
- **Dokumenter beslutninger** i BESLUTNINGER.md
- **Hold KONTEKST.md** synkronisert med endringer

---

## Kontakt

- **Are:** Prosjektledelse, strategi, analyse, Git-support
- **Bastian:** Innhold, intern koordinering, daglig Git-drift
- **Inge:** Design, teknologi
- **Torstein:** Innholdsproduksjon (fra Fase 2)

### Spørsmål?
- **Git/GitHub:** Spør Are
- **Innhold:** Spør Bastian eller Torstein
- **Design:** Spør Inge

---

## Relaterte dokumenter

- [Dokumenter/Fase1-Opprydding-Plan.md](Dokumenter/Fase1-Opprydding-Plan.md) - Oppryddingsplan
- [Dokumenter/Kontekstarkitektur-Fase2-Plan.md](Dokumenter/Kontekstarkitektur-Fase2-Plan.md) - Fase 2-plan
- [_TOOLS/MCP/README.md](_TOOLS/MCP/README.md) - MCP-konfigurasjon

---

*Sist oppdatert: 8. januar 2026*
