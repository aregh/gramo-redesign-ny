# GitHub-migreringsplan

> Plan for å flytte Gramo-prosjektet frå Google Drive til GitHub

**Status:** Planlagt
**Dato:** 28. november 2025

---

## 1. Førebuingar

### 1.1 Opprette repository
```bash
# På GitHub
# 1. Gå til github.com/kjernekaren (eller anna org)
# 2. New repository → "gramo-redesign"
# 3. Private repository
# 4. Ikkje initialiser med README (vi har eigen)
```

### 1.2 Lokal setup
```bash
# Naviger til prosjektmappa
cd "/Users/arehalland/Library/CloudStorage/GoogleDrive-are@kjernekaren.no/Min disk/_KJERNEKAREN/Prosjekt/Gramo/Gramo_kontekstarkitektur"

# Initialiser git
git init

# Legg til remote
git remote add origin git@github.com:kjernekaren/gramo-redesign.git
```

---

## 2. .gitignore

Opprett `.gitignore` før første commit:

```gitignore
# OS-filer
.DS_Store
Thumbs.db

# IDE
.idea/
.vscode/
*.swp

# Sensitive filer
.env
.env.local
credentials.json
*-credentials.json

# MCP secrets
mcp-config/*.json
!mcp-config/mcp-servers.example.json

# Midlertidige filer
*.tmp
*.log
*.bak

# Store binærfiler (bruk LFS om nødvendig)
*.pdf
*.mp3
*.m4a
*.zip

# Node (om aktuelt)
node_modules/
```

---

## 3. Katalogstruktur (endeleg)

```
gramo-redesign/
├── README.md              # Prosjektintro
├── AGENT.md              # AI-kontekst
├── KONTEKST.md            # Prosjektoversikt
├── PROSJEKTPLAN.md        # Status og leveransar
├── ARBEIDSLOGG.md         # Dagleg logg
├── .gitignore
│
├── docs/                  # Statisk dokumentasjon
│   ├── STRATEGI.md
│   ├── TEKNISK.md
│   └── TEAM.md
│
├── analyse/               # Analysearbeid
│   ├── GEO-ANALYSE.md
│   ├── INNHALDSKARTLEGGING.md
│   └── TOPPOPPGAVER.md
│
├── design/                # Designarbeid
│   ├── BRIEF.md
│   ├── konsept/
│   └── assets/
│
├── innhald/               # Innhaldsproduksjon
│   └── README.md          # Peiker til Notion
│
├── mcp-config/            # MCP-oppsett
│   ├── README.md
│   └── mcp-servers.example.json
│
└── bakgrunn/              # Referansemateriale
    ├── KOMMUNIKASJON.md
    └── gsc/               # GSC-eksportar
```

---

## 4. Migreringsrekkefølge

### Steg 1: Grunnstruktur
```bash
# Opprett katalogstruktur
mkdir -p docs analyse design/konsept design/assets innhald mcp-config bakgrunn/gsc

# Flytt eksisterande filer
# (Allereie gjort i Gramo_kontekstarkitektur/)
```

### Steg 2: Opprydding
- [ ] Fjern duplikat-filer
- [ ] Oppdater referansar mellom filer
- [ ] Fjern sensitive data (API-keys, etc.)
- [ ] Sjekk at alle lenker fungerer

### Steg 3: Initial commit
```bash
git add .
git commit -m "Initial commit: Gramo redesign prosjektstruktur

- Prosjektkontekst og dokumentasjon
- GEO-analyse og innhaldskartlegging
- Designbrief (under utvikling)
- MCP-konfigurasjon for AI-verktøy"
```

### Steg 4: Push til GitHub
```bash
git push -u origin main
```

---

## 5. Arbeidsflyt etter migrering

### Dagleg arbeid
```bash
# Start arbeidsdag
git pull origin main

# Gjer endringar
# ... arbeid ...

# Commit og push
git add .
git commit -m "Arbeidslogg 28.11: GEO-analyse oppdatert"
git push
```

### Branching (om nødvendig)
```bash
# For større endringar
git checkout -b feature/designbrief
# ... arbeid ...
git checkout main
git merge feature/designbrief
```

---

## 6. Tilgang og samarbeid

### Inviter teammedlemmar
1. GitHub → Settings → Collaborators
2. Legg til:
   - bastian (Bastian Daae)
   - rita (Rita H. Mamelund)
   - inge (Inge Fossland)

### Gramo-tilgang
- Vurder om Gramo treng direkte tilgang
- Alternativ: Del via Notion/presentasjonar

---

## 7. MCP-oppsett i ny plassering

### Agenten
```bash
# Etter migrering, oppdater prosjektsti
cd ~/Projects/gramo-redesign  # eller anna lokal plassering
claude
```

### MCP-serverar
Airtable og Notion MCP fungerer uavhengig av filplassering.
Oppdater `mcp-config/mcp-servers.example.json` med riktige instruksjonar.

---

## 8. Sjekkliste før go-live

- [ ] Alle filer flytta til riktig katalog
- [ ] .gitignore på plass
- [ ] Ingen sensitive data i repo
- [ ] README.md oppdatert
- [ ] AGENT.md fungerer for AI
- [ ] Lenker mellom dokument fungerer
- [ ] Teammedlemmar invitert
- [ ] Lokal kopi på kvar maskin

---

## 9. Etter migrering

### Opprydding i Google Drive
- Behald Gramo_kontekstarkitektur som backup (ei veke)
- Flytt til arkiv-mappe
- Slett duplikat i Forprosjekt/ og Bakgrunn/

### Oppdater referansar
- Notion → Pek til GitHub
- Airtable → Oppdater lenker
- PAKKE-Gramo.md → Oppdater instruks

---

*Denne planen blir oppdatert etter behov.*
