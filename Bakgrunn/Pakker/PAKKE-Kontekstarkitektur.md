# Kontekstarkitektur: Komplett kunnskapspakke

**Systematisk tilnærming til bærekraftig KI-implementering**

**Av Are Halland | Kjernekaren**

---

## Innholdsfortegnelse

1. [Introduksjon og bakgrunn](#1-introduksjon-og-bakgrunn)
2. [De 5 grunnkonsept (UPDATED 2025-11-09)](#2-de-5-grunnkonsept)
3. [Kjerneprinsipper for Kontekstarkitektur (UPDATED)](#3-kjerneprinsipper)
4. [Two-Layer Architecture (NY 2025-11-09)](#4-two-layer-architecture)
5. [EVAL-system: Kontinuerlig forbedring (NY)](#5-eval-system)
6. [De 8 stegene i Kontekstarkitektur](#6-de-8-stegene)
7. [Tre lag i kontekstarkitektur](#7-tre-lag)
8. [Kjernekontekstmodellen](#8-kjernekontekstmodellen)
9. [Praktisk implementering](#9-praktisk-implementering)
10. [Sammenligning med andre tilnærminger](#10-sammenligning)
11. [Workshop-metodikk](#11-workshop-metodikk)
12. [Case-studier og eksempler](#12-case-studier)
13. [Verktøy og ressurser](#13-verktøy-og-ressurser)

---

## 1. Introduksjon og bakgrunn

### 1.1 Problemet med tilfeldig KI-bruk

De fleste organisasjoner bruker KI tilfeldig:

**Symptomer:**
- Enkeltpersoner lager egne prompt-bibliotek
- Ingen felles retningslinjer eller kvalitetssikring
- Samme spørsmål blir stilt om og om igjen
- Resultater varierer enormt mellom brukere
- Ingen læring eller forbedring over tid
- Manglende kontroll over hva KI faktisk gjør

**Konsekvenser:**
- Ineffektiv ressursbruk
- Inkonsistente resultater
- Frustrerte medarbeidere
- Manglende ROI på KI-investeringer
- Risiko for feil og kvalitetsproblemer

### 1.2 Hva er Kontekstarkitektur?

**Definisjon:**
> Kontekstarkitektur er et systematisk rammeverk for å strukturere, organisere og vedlikeholde informasjon som gjør språkmodeller i stand til å fungere optimalt over tid, med konsistente og presise resultater på tvers av ulike oppgaver.

**Kjerneidé:**
I stedet for tilfeldig bruk → systematisk struktur som gir forutsigbare forbedringer.

**Opphav:**
Utviklet av Are Halland basert på:
- 25+ års erfaring med informasjonsarkitektur
- Skaperen av Kjernemodellen
- 1,5 år med praktisk utvikling av KI-kontekstsystemer
- Erfaringer fra Crayon Consulting og egne klienter

### 1.3 Hvorfor "arkitektur"?

**Informasjonsarkitektur møter AI:**
- **IA** (Information Architecture) = strukturere informasjon for mennesker
- **AI** (Artificial Intelligence) = maskinlæring og språkmodeller
- **Kontekstarkitektur** = strukturere informasjon for samarbeid mellom mennesker og AI

**"IA møter AI"** - broen mellom tradisjonell IA-praksis og moderne AI-utfordringer.

### 1.4 Relasjon til eksisterende konsepter

**Context Engineering (Philipp Schmid):**
> "Context Engineering is the discipline of designing and building dynamic systems that provides the right information and tools, in the right format, at the right time, to give a LLM everything it needs to accomplish a task."

**Fellestrekk:**
- Begge går utover tradisjonell prompt engineering
- Fokus på systemtenkning og struktur
- Vektlegging av rett informasjon til rett tid

**Distinksjoner:**
- **Kontekstarkitektur** fokuserer mer på:
  - Langtidsperspektiv og vedlikehold
  - Strukturerte lagringsnivåer
  - Portabilitet mellom LLM-leverandører
  - Systematisk informasjonsorganisering
  - Menneskelig kontroll over AI-systemer

---

## 2. De 5 grunnkonsept

**OPPDATERT:** 9. november 2025 basert på helgeprosjekt-læring

Kontekstarkitektur bygger på 5 fundamentale konsept som saman dannar eit heilskapleg system for KI-bruk:

### 2.1 PAKKER: Komprimert kunnskap (WHAT)

**Definisjon:**
> Pakker er strukturerte kunnskapseinheiter som kan lastast inn komplett i ein KI-modell - "I know kung fu"-effekten.

**Karakteristikk:**
- **Type:** Kunnskap (WHAT)
- **Innhald:** Etablert kunnskap (metodikkar, teoriar, frameworks)
- **Endringsrate:** Sjelden (berre når grunnkunnskap endrar seg)
- **Portabilitet:** Høg (fungerer på tvers av LLM-verktøy)

**Eksempel:**
- PAKKE - Kjernemodellen.md (1370 linjer)
- PAKKE - Toppoppgavemetodikk.md (1438 linjer)
- PAKKE - Kontekstarkitektur.md (denne filen)

**Bruk:**
```
Claude: Last inn PAKKE - Kjernemodellen.md
→ KI har no full forståing av metodikken
→ Kan bruke den i alle oppgåver utan å måtte forklare på nytt
```

### 2.2 ASSISTENTAR: Standardiserte prosessar (HOW)

**Definisjon:**
> Assistentar er instruksjonar for korleis ein spesifikk oppgave skal utførast - standardiserte arbeidsflytar.

**Karakteristikk:**
- **Type:** Prosess (HOW)
- **Innhald:** Instruksjonar, workflow, kvalitetskriterium
- **Endringsrate:** Ofte (lærer og forbetrast kontinuerleg)
- **Relasjon:** Brukar PAKKER, men ER IKKJE pakker

**Viktig distinksjon:**
```
PAKKE = Kunnskap (f.eks. Kjernemodellen)
ASSISTENT = Prosess som BRUKAR kunnskap (f.eks. Research-Kunder brukar Kjernemodellen)
```

**Eksempel:**
- Research-Kunder (søkjer Airtable/Notion/Drive → lagar leadsdokument)
- Research-Fag (søkjer faglitteratur → lagar forskingsnotat)
- Tilbod-Generator (brukar Kjernemodellen → lagar tilbod)

**Bruk:**
```
Claude: Research-Kunder DFØ
→ Assistent søkjer relevante kjelder
→ Brukar PAKKE - Kjernemodellen
→ Genererer leadsdokument i riktig format
```

### 2.3 TOOLS: Integrasjonar (WHERE)

**Definisjon:**
> Tools er eksterne datakjelder og integrasjonar som gir KI tilgang til live-data og systemer.

**Karakteristikk:**
- **Type:** Integrasjon (WHERE)
- **Innhald:** API-koblingar, databases, tredjeparts-tenester
- **Endringsrate:** Middels (når integrasjonar vert oppdatert)
- **Modellagnostisk:** Ja (same integrasjonar kan brukast på tvers)

**Eksempel:**
- Airtable (leads-database)
- Notion (møtenotat, research)
- Google Drive (dokument, presentasjonar)
- Gmail (e-post)
- ConvertKit (e-postlister)

**Bruk via MCP (Model Context Protocol):**
```
Research-Kunder DFØ
→ Søkjer Airtable: leads med "DFØ"
→ Søkjer Notion: møtenotat med "DFØ"
→ Søkjer Google Drive: presentasjonar med "DFØ"
→ Kombinerer data → leadsdokument
```

### 2.4 EVAL: Kontinuerleg forbetring (IMPROVE)

**Definisjon:**
> EVAL er feedback-loops som sikrar at systemet lærer og vert betre over tid.

**Karakteristikk:**
- **Type:** Feedback (IMPROVE)
- **Innhald:** Append-only logger med forbetringsforslag
- **Endringsrate:** Kontinuerleg (kvar gong assistent kjører)
- **Menneske-i-loop:** Ja (mennesket godkjenner forbetringar)

**Fork-Merge Workflow:**
```
1. WORKING BRANCH (Måndag-Fredag)
   Research-Kunder-EVAL.md (append-only ved kvar bruk)
   → Lokal kontekst ved assistenten

2. STAGING BRANCH (Fredag)
   /_EVAL/2025-W45.md (samla oversikt for veka)
   → Menneskeleg leseleg, prioriterbar

3. REVIEW (Fredag/Måndag)
   Are godkjenner, prioriterer, forkaster
   → Mennesket bestemmer

4. MERGE (Måndag)
   Research-Kunder v1.0 → v1.1
   Tøm lokale EVAL-filer
   → Tilbake til working branch
```

**Framtidig utvikling: LLM-as-Judge**
```
Assistent kjører → LLM-judge evaluerer automatisk → Genererer forbetringsforslag → Mennesket godkjenner
```

### 2.5 APPAR: Pakka løysingar (SHARE)

**Definisjon:**
> Appar er distribuerbare implementeringar av Kontekstarkitektur som andre kan bruke direkte.

**Karakteristikk:**
- **Type:** Distribution (SHARE)
- **Innhald:** Ferdigpakka system (templates, dashboards, repos)
- **Endringsrate:** Sjelden (berre ved større oppdateringar)
- **Formål:** Gjer Kontekstarkitektur tilgjengeleg for andre

**Eksempel:**
- GitHub-template repository (clone → tilpass → bruk)
- EVAL-dashboard (web-basert oversikt)
- Notion-templates (ferdigkonfigurert struktur)
- Online kurs (video-basert implementeringsguide)

**Bruk:**
```
Produktteam vil implementere Kontekstarkitektur
→ Klonar GitHub-template
→ Tilpassar til sitt domene
→ Implementerer på <2 timer
```

---

## 3. Kjerneprinsipper

**OPPDATERT:** 9. november 2025 - utvida frå 5 til 10 prinsipp basert på helgeprosjekt-læring

### 3.1 On-demand Loading

**Prinsipp:**
> Last kun den konteksten du treng for denne oppgåva. Alltid.

**Problem det løyser:**
"Context rot" - når kontekstvinduet vert fullt, vert output dårlegare.

**Praktisk:**
```
GAMMALT: 400+ linjer CLAUDE.md (alltid lasta)
NYTT: 120-170 linjer kjernekontekst + on-demand pakker/assistentar
```

**Gevinst:** 70% reduksjon i overhead = 15-20k tokens per sesjon

### 3.2 Hub-and-Spoke

**Prinsipp:**
> Sentral oversikt (hub) med lenker (spokes) til detaljert informasjon.

**Problem det løyser:**
Hindrar informasjonsduplisering og inkonsistens.

**Praktisk:**
```
/Salg/KONTEKST.md (hub)
├─ Peikar til: /Salg/_ASSISTENTAR/Research-Kunder/KONTEKST.md
├─ Peikar til: /Pakker/PAKKE-Kjernemodellen.md
└─ Peikar til: /.ai/assistants/salg/research-kunder.md
```

### 3.3 Lightweight Refs

**Prinsipp:**
> Bruk peikarar (lenker), ikkje duplikat av innhald.

**Problem det løyser:**
Vedlikehold - oppdater éin stad, ikkje ti.

**Praktisk:**
```
DÅRLEG: Kopier Kjernemodellen til kvar assistent
GOD: Kvar assistent refererer til /Pakker/PAKKE-Kjernemodellen.md
```

### 3.4 Session Briefs

**Prinsipp:**
> Bryt kontekstvinduet med samanfattingar når samtalen vert for lang.

**Problem det løyser:**
Lange samtaler → kontekstvindu fullt → dårlegare output.

**Praktisk:**
```
Når samtale nærmar seg token-limit:
1. Generer samandrag av konversasjon
2. Start ny sesjon med brief
3. Bevar viktig kontekst, kast overhead
```

### 3.5 Modellagnostisk (MEST KRITISK)

**Prinsipp:**
> Strukturen skal fungere uavhengig av kva LLM-verktøy du brukar.

**Problem det løyser:**
Vendor lock-in - ikkje bli låst til ChatGPT/Claude/Gemini.

**Praktisk:**
```
LAG 1: Konseptuelt (MODELLAGNOSTISK)
├─ /Pakker/ (kunnskap)
├─ /Fag/_ASSISTENTAR/ (prosess-instruksjonar)
└─ /Admin/_ASSISTENTAR/

LAG 2: Implementering (MODELSPESIFIKK)
├─ /.ai/assistants/ (Claude Code)
├─ /chatgpt/gpts/ (ChatGPT)
└─ /cursor/rules/ (Cursor)
```

**Test:**
> Kan du migrere til nytt verktøy på <2 timer? → JA = Modellagnostisk

### 3.6 Two-Layer Architecture

**Prinsipp:**
> Skill konseptuelt (kva/kvifor) frå implementering (korleis).

**Problem det løyser:**
Når verktøy skifter, mister du alt arbeid.

**Praktisk:**
- **Lag 1:** Kva skal gjerast + kvifor (varer evig)
- **Lag 2:** Korleis gjere det i spesifikt verktøy (kan skiftast ut)

### 3.7 Human-in-the-Loop

**Prinsipp:**
> KI foreslår, mennesket bestemmer. Alltid.

**Problem det løyser:**
KI kan gjere feil - menneskeleg oversikt sikrar kvalitet.

**Praktisk:**
```
EVAL-workflow:
1. KI genererer forbetringsforslag
2. Samlar i /_EVAL/2025-W45.md
3. Mennesket godkjenner/forkaster kvar fredag
4. Berre godkjente endringar vert implementert
```

### 3.8 Fork-Merge Workflow

**Prinsipp:**
> Bruk Git-filosofi (fork, branch, merge) utan Git-kompleksitet.

**Problem det løyser:**
Korleis teste forbetringar utan å øydelegge produksjon?

**Praktisk:**
```
WORKING BRANCH: Lokal EVAL (eksperimentell)
STAGING BRANCH: Veke-rapport (testbar)
REVIEW: Menneskeleg godkjenning (kvalitet)
MERGE: Oppdater assistent (produksjon)
```

### 3.9 Continuous Improvement

**Prinsipp:**
> Systemet skal lære og bli betre over tid, ikkje stagnere.

**Problem det løyser:**
Statiske system vert fort utdatert.

**Praktisk:**
```
EVAL-system (append-only):
- Kvar bruk av assistent → EVAL-logg
- Kvar fredag → Review og godkjenning
- Versjonsnummer stig: v1.0 → v1.1 → v1.2
```

### 3.10 Distributable Apps

**Prinsipp:**
> Pakk løysingar slik at andre kan implementere direkte.

**Problem det løyser:**
Korleis dele Kontekstarkitektur med andre utan å starte frå scratch?

**Praktisk:**
```
APPAR:
- GitHub-template (clone → bruk)
- EVAL-dashboard (installer → konfigurer)
- Notion-templates (dupliser → tilpass)
- Online kurs (følg → implementer)
```

---

## 4. Two-Layer Architecture

**NY SEKSJON:** 9. november 2025

### 4.1 Kvifor to lag?

**Problem:**
Når du bygger system i Claude Code, kva skjer når du vil bytte til Cursor? Eller til neste verktøy om 2 år?

**Tradisjonell tilnærming:**
```
EVERYTHING in /.claude/
→ Vendor lock-in
→ Kan ikkje migrere
→ Mister alt arbeid ved switch
```

**Kontekstarkitektur-tilnærming:**
```
LAG 1: Modellagnostisk (varer evig)
LAG 2: Modelspesifikk (kan skiftast ut)
```

### 4.2 Lag 1: Konseptuelt (Modellagnostisk)

**Kva høyrer til Lag 1:**
- **PAKKER:** Kunnskap (Kjernemodellen, Toppoppgaver, etc.)
- **ASSISTENTAR:** Prosess-instruksjonar (kva skal gjerast, kvifor)
- **FILOSOFI:** Prinsipp og metodikk
- **EVAL (konsept):** Kva skal evaluerast, kvifor

**Plassering:**
```
/_PAKKER/
/Fag/_ASSISTENTAR/
/Salg/_ASSISTENTAR/
/Admin/_ASSISTENTAR/
/Fag/Kontekstarkitektur/filosofi.md
```

**Karakteristikk:**
- ✅ Fungerer i **alle** verktøy (Claude, ChatGPT, Cursor, framtidige)
- ✅ Markdown-basert (opent format)
- ✅ Menneskeleg lesbart
- ✅ Varer lenger enn teknologien

**Eksempel:**
```markdown
# Research-Kunder (Lag 1 - Konseptuell dokumentasjon)

## Formål
Generer komplett leadsdokument basert på research frå multiple kjelder.

## Prosess
1. Søk Airtable for leads med [FIRMA]
2. Søk Notion for møtenotat med [FIRMA]
3. Søk Google Drive for relevante dokument
4. Søk web for offentleg tilgjengeleg info
5. Kombiner all data til strukturert leadsdokument

## Output
Leadsdokument i `/Salg/lead_[FIRMA].md` med:
- Hovudkontakt
- Møtehistorikk
- Økonomisk status
- Neste steg
```

### 4.3 Lag 2: Implementering (Modelspesifikk)

**Kva høyrer til Lag 2:**
- **Claude Code-spesifikk:** /.ai/assistants/, /.ai/.claude/
- **ChatGPT-spesifikk:** /chatgpt/gpts/
- **Cursor-spesifikk:** /cursor/rules/
- **EVAL (implementering):** Korleis køyre eval i spesifikt verktøy

**Plassering:**
```
/.ai/                         (Alt Claude Code-spesifikt)
├─ assistants/
│  ├─ salg/
│  │  └─ research-kunder.md   (Implementering for Claude Code)
│  └─ README.md
├─ .claude/
│  ├─ CLAUDE.md
│  └─ settings.local.json
└─ tools/
   └─ mcp-config.md
```

**Karakteristikk:**
- ⚠️ Fungerer **berre** i spesifikt verktøy
- ⚠️ Må skrivast om ved switch
- ✅ Optimalisert for verktøyet
- ✅ Enkel å erstatte (utan å miste Lag 1)

**Eksempel:**
```markdown
# Research-Kunder (Lag 2 - Claude Code Implementation)

**Implementert som:** Task agent med MCP-integrasjonar

## Claude Code-spesifikk setup:
\`\`\`
Trigger: "Research-Kunder: [FIRMA]"
Agent: general-purpose
Tools: mcp__airtable, mcp__notion, mcp__google-drive, WebSearch
\`\`\`

## Workflow (Claude Code):
1. Task agent startar
2. Søkjer parallelt: Airtable + Notion + Drive + Web
3. Konsoliderer resultat
4. Genererer leadsdokument via Write tool
5. Append til Research-Kunder-EVAL.md
```

### 4.4 Migrasjon mellom verktøy

**Scenario:** Du vil bytte frå Claude Code til Cursor

**Steg 1:** Lag 1 forblir uendra
```
✅ /_PAKKER/ (same)
✅ /Fag/_ASSISTENTAR/ (same)
✅ /Salg/_ASSISTENTAR/ (same)
```

**Steg 2:** Lag 2 vert erstatta
```
❌ /.ai/ (slett eller arkiver)
✅ /cursor/ (ny implementering)
   └─ rules/
      └─ research-kunder-cursor.md
```

**Steg 3:** Implementer Lag 1 i nytt verktøy
```
Les: /Salg/_ASSISTENTAR/Research-Kunder/KONTEKST.md
→ Forstå kva som skal gjerast (Lag 1)
→ Implementer i Cursor sin syntaks (Lag 2)
```

**Tidsbruk:** <2 timer (fordi Lag 1 allereie er dokumentert)

---

## 5. EVAL-system: Kontinuerleg forbetring

**NY SEKSJON:** 9. november 2025

### 5.1 Kvifor EVAL?

**Problem:**
Korleis sikre at KI-assistentar vert **betre** over tid, ikkje stagnerer?

**Tradisjonell tilnærming:**
```
Lag assistent → Bruk den → Same kvalitet alltid (eller dårlegare)
```

**Kontekstarkitektur-tilnærming:**
```
Lag assistent → Bruk med EVAL → Godkjenn forbetringar → Ny versjon → Bruk → EVAL → ...
```

### 5.2 Fork-Merge Workflow (Git-filosofi utan Git)

**Konsept:** Bruk same tenking som Git (branching, merging) utan teknisk kompleksitet.

#### Working Branch (Måndag-Fredag)
```
Research-Kunder-EVAL.md (lokal ved assistenten)

**Type:** Append-only logg
**Innhald:**
- Kva fungerte godt?
- Kva fungerte dårleg?
- Forbetringsforslag

**Eksempel:**
\`\`\`markdown
## 2025-11-08: DFØ-research

**Fungerte godt:**
- Fann alle møtenotat i Notion
- Web-research gav god kontekst

**Fungerte dårleg:**
- Airtable-søk fann ikkje kontaktperson Mona
- Tok 3 min (for lenge)

**Forbetringsforslag:**
- Utvid Airtable-søk til å inkludere "nettansvarlig"
- Parallel search (ikkje sekvensiell)
\`\`\`
```

#### Staging Branch (Fredag)
```
/_EVAL/2025-W45.md (samla vekerapport)

**Type:** Leseleg oversikt for menneskeleg review
**Innhald:** Konsolidert frå alle lokale EVAL-filer

**Struktur:**
\`\`\`markdown
# EVAL Veke 45 (2025-11-04 til 2025-11-08)

## Research-Kunder (v1.0)
**Bruksfrekvens:** 12 gonger denne veka
**Gjennomsnittleg tid:** 2.5 min

### Forbetringsforslag (prioritert):
1. 🔥 **PRI:** Parallel search (spar 1+ min per bruk)
2. ⭐ **VIKTIG:** Utvid Airtable-søk (finn fleire kontaktar)
3. 💡 **NICE:** Automatisk fakturering-sjekk (reduser manuell oppfølging)

## Research-Fag (v1.2)
...
\`\`\`
```

#### Review (Fredag/Måndag)
```
Are gjennomgår /_EVAL/2025-W45.md

**Godkjenn:**
- ✅ Parallel search (ja, implementer)
- ✅ Utvid Airtable-søk (ja, bra forslag)

**Forkast:**
- ❌ Automatisk fakturering-sjekk (for tidleg, vent)

**Prioriter:**
1. Parallel search (Research-Kunder v1.0 → v1.1)
2. Utvid Airtable-søk (Research-Kunder v1.1 → v1.2)
```

#### Merge (Måndag)
```
Oppdater Research-Kunder:
- v1.0 → v1.1 (parallel search)
- Arkiver: /x-Arkiv/2025-11-08/Research-Kunder-v1.0.md

Tøm EVAL-filer:
- Research-Kunder-EVAL.md → tom (klar for ny veke)

Neste veke:
- Bruk v1.1 med parallel search
- EVAL igjen → v1.1 → v1.2 (Airtable-søk)
```

### 5.3 EVAL-Dashboard (Oversikt)

**Formål:** Rask oversikt over alle assistentar og deira status

**Plassering:** `/_EVAL/OVERSIKT.md`

**Struktur:**
```markdown
# EVAL-Oversikt

**Sist oppdatert:** 9. november 2025

## 📊 Status

| Assistent | Versjon | Opne evals | Siste oppdatering | Neste milestone |
|-----------|---------|------------|-------------------|-----------------|
| Research-Kunder | v1.0 | 3 | 2025-11-08 | v1.1 (parallel search) |
| Research-Fag | v1.2 | 1 | 2025-11-01 | v1.3 (PDF-lesing) |
| Tilbod-Generator | v1.0 | 0 | 2025-10-15 | - |

## 📅 Vekerapportar

- [2025-W45](2025-W45.md) - Denne veka (9 evals, 2 godkjent)
- [2025-W44](2025-W44.md) - Førre veke (3 evals, 2 merged)
- [2025-W43](2025-W43.md) - For 2 veker sidan (5 evals, 4 merged)

## 🎯 Neste review: Fredag 15. november 2025
```

### 5.4 LLM-as-Judge (Framtidig utvikling)

**Visjon:** Automatiser deler av EVAL-prosessen

**Workflow:**
```
1. Assistent kjører (Research-Kunder DFØ)
2. LLM-judge evaluerer automatisk:
   - Komplettheit (alle seksjoner fylte?)
   - Kvalitet (research grundig nok?)
   - Format (riktig struktur?)
   - Tid (innafor target?)
3. Genererer forbetringsforslag automatisk
4. Mennesket godkjenner/forkaster (human-in-the-loop)
```

**Framtidige APPAR:**
- EVAL-dashboard (web-basert)
- Drill-down (sjå nøyaktig kva linjer som endra)
- Automatisk kategorisering (PRI/VIKTIG/NICE)

---

## 6. Kjernekonsepter (TIDLEGARE INNHALD)

### 2.1 Kontekstvinduet

**Hva er et kontekstvindu?**
Kontekstvinduet er mengden informasjon en språkmodell kan "huske" i en samtale.

**Praktiske begrensninger:**
- **Claude 3.5 Sonnet:** 200 000 tokens (~150 000 ord)
- **GPT-4:** 128 000 tokens (~96 000 ord)
- **Gemini 1.5 Pro:** 1 000 000 tokens (~750 000 ord)

**Implikasjoner:**
- Du kan ikke bare dumpe all informasjon inn
- Må prioritere hva som er viktigst
- Strukturering blir kritisk

### 2.2 Presist innhold

**Fra generisk til spesifikt:**

**Dårlig (generisk):**
> "Skriv en produktbeskrivelse"

**Godt (spesifikt):**
```
KONTEKST: Du skriver produktbeskrivelser for [Bedriftsnavn]
MÅLGRUPPE: B2B-kunder som evaluerer tekniske løsninger
STIL: Profesjonell, faktabasert, optimistisk
STRUKTUR: Overskrift, 3 hovedfordeler, tekniske spesifikasjoner, call-to-action
EKSEMPEL: [vedlegg eksempel på god produktbeskrivelse]
OPPGAVE: Skriv beskrivelse for [produktnavn] basert på disse dataene: [produktdata]
```

**Byggeklosser for godt innhold:**
1. **Rolle og kontekst** - Hvem er KI-en i denne situasjonen?
2. **Målgruppe og formål** - Hvem er sluttbrukeren?
3. **Stil og tone** - Formell eller uformell?
4. **Struktur og format** - Hvilke elementer må være med?
5. **Eksempler og referanser** - Vis heller enn fortell

### 2.3 Kunnskapspakker ("I know kung fu")

**Konsept:**
Strukturerte kunnskapsdokumenter som kan lastes inn ved behov.

**Fordeler:**
- Konsistent kunnskap hver gang
- Skalerbar metodikkformidling
- Portabel på tvers av plattformer
- Enkel å oppdatere og vedlikeholde

**Eksempel:**
- PAKKE - Kjernemodellen.md (1370 linjer)
- PAKKE - Toppoppgavemetodikk.md (1438 linjer)

### 2.4 Menneske + maskin = best resultat

**Feil tilnærming:**
"KI skal erstatte mennesker"

**Riktig tilnærming:**
"KI skal forsterke menneskelige ferdigheter"

**Arbeidsfordeling:**

**KI gjør det den er best på:**
- Prosessere store mengder informasjon
- Finne mønstre og sammenhenger
- Generere mange alternativer raskt
- Følge konsistente regler

**Mennesker gjør det de er best på:**
- Kreativ problemløsning
- Etiske vurderinger
- Kontekstuell forståelse
- Relasjonelle ferdigheter
- Strategiske beslutninger

---

## 3. De 8 stegene i Kontekstarkitektur

### Steg 1: Forstå din KI-"bruker"

**KI-modeller har unike egenskaper:**

**Claude (Anthropic):**
- ✅ Sterk på: Analyse, strukturert tenking, etiske vurderinger, lange kontekster
- ❌ Svak på: Sanntidsdata, matematikk, bildegenerering

**ChatGPT (OpenAI):**
- ✅ Sterk på: Kreativitet, konversasjon, bred kunnskap
- ❌ Svak på: Konsistens, faktasjekking, lange kontekster

**Copilot (Microsoft):**
- ✅ Sterk på: Koding, Office-integrasjon, bedriftsdata
- ❌ Svak på: Kreative oppgaver, strategisk tenking

**Praktisk øvelse:**
1. Hvilke KI-verktøy bruker organisasjonen?
2. Hva er de gode til? (test konkrete oppgaver)
3. Hva fungerer dårlig? (dokumenter feilene)
4. Hvor stort er kontekstvinduet?

### Steg 2: Definer konkrete oppgaver

**Fra "vi skal bruke AI" til spesifikke behov:**

**Dårlige mål:**
- "Vi skal implementere AI"
- "Vi skal bli mer effektive"
- "Vi må følge med i tiden"

**Gode mål:**
- "Redusere tid på kundeservice-svar med 50%"
- "Automatisere opprettelse av produktbeskrivelser"
- "Generere 10 relevante blogginnlegg per uke"

**Kartlegging:**
1. Hvilke oppgaver tar mest tid?
2. Hvilke oppgaver er mest repetitive?
3. Hvilke oppgaver krever kreativitet vs. struktur?
4. Hvor er kvaliteten mest kritisk?

**Prioritering:**
- Hvor mye tid kan spares
- Hvor lett er det å automatisere
- Hvor stor risiko er det ved feil

### Steg 3: Sett strategiske mål

**Koble KI-bruk til forretningsmål:**

**Eksempler:**
- **Kundeservice:** Øke kundetilfredshet fra 4.2 til 4.6
- **Markedsføring:** Doble antall kvalifiserte leads
- **Produktutvikling:** Redusere time-to-market med 30%
- **HR:** Halvere tid brukt på rutineoppgaver

**Definere suksess:**
1. Hva er dagens baseline? (tid, kvalitet, kostnader)
2. Hva er ønsket forbedring? (konkrete tall)
3. Hvordan måler vi fremgang? (KPI-er)
4. Når evaluerer vi resultatet? (tidspunkt)

### Steg 4: Kartlegg eksisterende ressurser

**Hva har dere allerede?**

**Dokumentasjon:**
- Stilguider og merkevareretningslinjer
- Prosessbeskrivelser og rutiner
- FAQ og kundeservice-historikk
- Rapporter og analyser
- E-post-templates og standardsvar

**Systemer:**
- CRM-data og kundehistorikk
- Produktkatalog og beskrivelser
- Tidligere markedsføringsmateriell
- Kompetansebaser og wikier

**Ressurskartlegging:**
1. Hvilken dokumentasjon finnes? (hvor, når sist oppdatert)
2. Hvilke datastørr

elser har dere? (strukturerte/ustrukturerte)
3. Hvor er informasjonen lagret? (tilgjengelighet)
4. Hvem eier/vedlikeholder hver ressurs?

**Kvalitet over kvantitet:**
Bedre med lite godt innhold enn mye dårlig.

### Steg 5: Design for samarbeid

**Designprinsipper:**

**For hver oppgave, definer:**
1. Hva gjør KI? (konkrete steg)
2. Hva gjør mennesket? (kontroll-punkter)
3. Hvordan kontrolleres kvalitet? (checkpoints)
4. Når eskaleseres til menneske? (grenseverdier)

**Eksempel: Kundeservice-svar**
1. **KI:** Analyserer kundehenvendelse, foreslår svar basert på FAQ
2. **Menneske:** Gjennomgår forslag, tilpasser tone, legger til personlig touch
3. **Kvalitetskontroll:** Sjekk mot merkevareretningslinjer, faktasjekk
4. **Eskalering:** Komplekse klager, juridiske spørsmål → menneske

### Steg 6: Lag presist innhold

**Se seksjon 2.2 for byggeklosser**

**Praktisk øvelse:**
Velg én oppgave og lag komplett mal med:
1. Rolleoppdeling (KI vs. menneske)
2. Kontekstbeskrivelse (hvem, hva, hvorfor)
3. Konkrete instruksjoner (steg-for-steg)
4. Kvalitetskontroll (hvordan sjekke resultatet)
5. Eksempler (god og dårlig output)

### Steg 7: Test og forbedre

**Sett opp testmiljø:**
1. Velg en avgrenset oppgave
2. Lag initial versjon av innhold/prompts
3. Test med ekte data
4. Dokumenter resultater (gode og dårlige)
5. Iterer basert på læring

**Måling:**

**Kvantitative mål:**
- Tid spart per oppgave
- Antall iterasjoner nødvendig
- Konsistens i output-kvalitet
- Reduksjon i manuelle korrigeringer

**Kvalitative mål:**
- Brukeropplevelse for medarbeidere
- Kvalitet vurdert av fageksperter
- Feedback fra sluttbrukere
- Alignment med merkevare/verdier

### Steg 8: Skaler systematisk

**Fra pilot til produksjon:**
1. Dokumenter prosessen grundig
2. Tren flere medarbeidere
3. Etabler kvalitetssikring
4. Opprett feedback-loops
5. Planlegg vedlikehold og oppdateringer

**Bygge en lærende organisasjon:**
- Dele gode eksempler på tvers
- Dokumentere hva som ikke fungerer
- Oppdatere innhold basert på endringer
- Evaluere nye KI-modeller og verktøy
- Kontinuerlig kompetanseheving

---

## 4. Tre lag i kontekstarkitektur

### 4.1 Agenthukommelse (RAM)

**Hva er det?**
Aktiv hukommelse for spesialiserte AI-agenter i løpende samtaler.

**Eksempler:**
- Claude Code Project-filer (CLAUDE.md)
- Custom instructions i ChatGPT
- System prompts i API-integrasjoner

**Karakteristikker:**
- Rask tilgang
- Begrenset størrelse
- Kontekstuelt relevant
- Lett å oppdatere

### 4.2 Fjernlager (Harddisk)

**Hva er det?**
Langtidslagring av strukturert informasjon som kan hentes ved behov.

**Eksempler:**
- Notion-databaser
- Confluence/wikier
- CRM-systemer
- Dokumentbibliotek

**Karakteristikker:**
- Stort lagringsvolum
- Søkbar og strukturert
- Vedlikeholdes over tid
- Krever henting/uthenting

### 4.3 Kunnskapspakker (Moduler)

**Hva er det?**
Komprimerte, spesialiserte kunnskapsenheter som kan lastes inn komplett.

**Eksempler:**
- PAKKE - Kjernemodellen.md
- PAKKE - Toppoppgavemetodikk.md
- PAKKE - Kontekstarkitektur.md (denne filen)

**Karakteristikker:**
- Selvforklarende og komplett
- Portable på tvers av plattformer
- Versjonshåndterbare
- Kan lastes inn umiddelbart

**"I know kung fu"-effekten:**
I stedet for å forklare metodikk hver gang → last inn komplett pakke.

---

## 5. Kjernekontekstmodellen

### 5.1 Fra Kjernemodellen til Kjernekontekstmodellen

**Kjernemodellens 6 elementer (for mennesker):**
- 🔺 Målgruppe
- 🟩 Brukeroppgaver
- 🔵 Mål
- 🟠 Veier inn
- 🟣 Veier videre
- 🟡 Kjerneinnhold

**Kjernekontekstmodellen (for AI):**
Bygger på Kjernemodellen, men legger til dimensjoner for AI-kontekst:

### 5.2 Kjernekontekstmodellens elementer

**1. Kjerne/Kontekst:**
- Hva er det essensielle?
- Hva må alltid være tilgjengelig?

**2. Bruker (utvidet):**
- Mennesker (sluttbrukere)
- AI-modeller (som "brukere" av kontekst)

**3. Mål:**
- Forretningsmål
- Brukermål
- AI-systemets mål

**4. Input:**
- Hva går inn i systemet?
- Hvilken kontekst er nødvendig?

**5. Output:**
- Hva skal produseres?
- Hvilken kvalitet kreves?

**6. Kontekstvindu:**
- Hvor mye kontekst kan håndteres?
- Hvordan prioriteres?

### 5.3 Anvendelse av Kjernekontekstmodellen

**For hver AI-oppgave:**
1. **Definer kjernen:** Hva er essensielt?
2. **Map brukerne:** Hvem er involvert? (mennesker + AI)
3. **Sett mål:** Hva skal oppnås?
4. **Kartlegg input:** Hvilken kontekst trengs?
5. **Design output:** Hva skal produseres?
6. **Vurder kontekstvindu:** Passer alt inn?

---

## 6. Praktisk implementering

### 6.1 Starter kit: Minimum Viable Context

**Steg 1: Velg én oppgave**
Start enkelt - ikke prøv å løse alt på en gang.

**Steg 2: Lag grunnleggende struktur**
```markdown
# [Oppgave-navn]

## Kontekst
[Hvem er KI-en? Hvilken rolle?]

## Målgruppe
[Hvem er sluttbrukeren?]

## Oppgave
[Hva skal gjøres?]

## Mål
[Hva er suksess?]

## Stil og tone
[Hvordan skal output være?]

## Eksempler
[Vis gode eksempler]

## Kvalitetskontroll
[Hvordan sjekke resultatet?]
```

**Steg 3: Test med ekte data**
Kjør 5-10 tester og dokumenter resultater.

**Steg 4: Iterer basert på læring**
Juster basert på hva som fungerte/ikke fungerte.

### 6.2 Organisering av kontekstfiler

**Mappestruktur (eksempel):**
```
/Kontekstarkitektur/
  /Kjerne/                 # Grunnleggende kontekst
    - CLAUDE.md            # Hovedinstruksjoner
    - Verdier.md           # Merkevare og verdier
    - Stil.md              # Språk og tone
  /Oppgaver/               # Oppgavespesifikk kontekst
    - Kundeservice.md
    - Produktbeskrivelser.md
    - Blogginnlegg.md
  /Pakker/                 # Kunnskapspakker
    - PAKKE-Kjernemodellen.md
    - PAKKE-Toppoppgaver.md
  /Ressurser/              # Bakgrunnsmateriale
    - FAQ.md
    - Prosedyrer.md
    - Eksempler.md
```

**Navnekonvensjoner:**
- Bruk beskrivende navn
- Konsistent formatering
- Versjonering ved behov

### 6.3 Vedlikehold og oppdatering

**Rutiner:**
- **Ukentlig:** Gjennomgå feedback og juster
- **Månedlig:** Evaluere ytelse mot mål
- **Kvartalsvis:** Stor gjennomgang og revidering
- **Årlig:** Strategisk evaluering og pivot ved behov

**Dokumentasjon:**
- Logg alle endringer
- Forklar hvorfor endringer gjøres
- Test før utrulling
- Kommuniser endringer til brukere

---

## 7. Sammenligning med andre tilnærminger

### 7.1 Prompt Engineering

**Tradisjonell Prompt Engineering:**
- Fokus på enkelt-prompts
- Kortsiktig optimalisering
- Ad-hoc tilnærming

**Kontekstarkitektur:**
- Fokus på systemer
- Langsiktig vedlikehold
- Systematisk tilnærming

### 7.2 Context Engineering (Philipp Schmid)

**Fellestrekk:**
- Begge går utover prompt engineering
- Systemtenkning
- Rett informasjon til rett tid

**Distinksjoner:**
- **Context Engineering:** Fokus på funksjonskall, verktøyintegrering
- **Kontekstarkitektur:** Fokus på strukturerte lagringsnivåer, portabilitet

### 7.3 RAG (Retrieval-Augmented Generation)

**RAG:**
- Teknisk tilnærming til å hente relevant informasjon
- Ofte automatisert
- Krever vektorisering og embedding

**Kontekstarkitektur:**
- Mer helhetlig tilnærming
- Inkluderer menneskelig kurasjon
- Fungerer med eller uten RAG

**Komplementære:**
RAG kan være en del av kontekstarkitektur-løsningen.

---

## 8. Workshop-metodikk

### 8.1 Kontekstarkitektur-workshop

**Formål:**
Utvikle systematisk kontekstarkitektur for en organisasjon.

**Deltakere (6-12 personer):**
- Ledelse (strategisk forankring)
- Fageksperter (domenekunnskap)
- Brukere av KI-systemene
- IT/teknisk representant
- Innholdsprodusenter

**Varighet:** 1 dag

### 8.2 Workshop-agenda

**Del 1: Kartlegging (2 timer)**
1. **Nåsituasjon:** Hvordan brukes KI i dag?
2. **Utfordringer:** Hva fungerer dårlig?
3. **Muligheter:** Hvor kan KI gi mest verdi?
4. **Ressurser:** Hva har vi allerede?

**Del 2: Prioritering (1,5 timer)**
1. **Oppgavekartlegging:** Hvilke oppgaver skal AI håndtere?
2. **Målsetting:** Hva er suksess for hver oppgave?
3. **Prioritering:** Hva gjør vi først?

**Lunsj (45 min)**

**Del 3: Design (2 timer)**
1. **Kontekstutvikling:** Hva trengs for prioriterte oppgaver?
2. **Arbeidsflyt:** Hvordan samarbeider menneske + maskin?
3. **Kvalitetssikring:** Hvordan kontrollere resultater?

**Del 4: Plan (1 time)**
1. **Implementeringsplan:** Hvem gjør hva når?
2. **Målepunkter:** Hvordan følge fremgang?
3. **Neste steg:** Konkrete handlinger

### 8.3 Tverrfaglig samarbeid

**Hvorfor tverrfaglig?**
- Ulike perspektiver gir bedre løsninger
- Fageksperter kjenner domenekunnskap
- Tekniske forstår begrensninger
- Brukere kjenner faktiske behov

**Metodikk:**
Bruk Kjernemodellen som rammeverk for workshopen - den fungerer like godt for KI-systemer som for mennesker!

---

## 9. Case-studier og eksempler

### 9.1 Case: Kjernekaren (Are Halland)

**Situasjon:**
Selvstendig konsulent som trenger AI-assistent med full forretningskontekst.

**Løsning:**
Utviklet omfattende kontekstarkitektur i Claude Code:
- Global CLAUDE.md (kjernekontekst)
- Mappestruktur for ulike prosjekt
- Kunnskapspakker for metodikk
- Navigasjonskommandoer (`/prosjekt`, `/pakker`)

**Resultater:**
- Konsistent kvalitet på AI-assistanse
- Skalerbar metodikkformidling
- Effektiv konteksthåndtering
- Portabel på tvers av plattformer

### 9.2 Case: Produktbeskrivelser (e-handel)

**Situasjon:**
E-handelsselskap med 10 000+ produkter, trenger konsistente beskrivelser.

**Løsning:**
1. Kartla eksisterende gode beskrivelser (eksempler)
2. Definerte merkevare-stil og tone
3. Strukturerte produktdata som input
4. Laget presise instruksjoner for hver produktkategori
5. Kvalitetssikring før publisering

**Resultater:**
- 80% tidsbesparelse på produktbeskrivelser
- Konsistent merkevare-tone
- Høyere konverteringsrate (bedre SEO)

### 9.3 Case: Kundeservice (SaaS-selskap)

**Situasjon:**
SaaS-selskap med stort volum kundehenvendelser, mange repetitive.

**Løsning:**
1. Analyserte 6 måneders kundeservice-data
2. Identifiserte toppoppgaver (20% av spørsmål = 80% av volum)
3. Laget strukturerte svar basert på FAQ og dokumentasjon
4. Implementerte menneske-i-løkken for kvalitetskontroll
5. Kontinuerlig læring fra nye henvendelser

**Resultater:**
- 50% reduksjon i responstid
- 30% reduksjon i kundeservice-kostnader
- Høyere kundetilfredshet
- Frigjorde tid til komplekse saker

---

## 10. Verktøy og ressurser

### 10.1 Plattformer for kontekstarkitektur

**Claude Code (Anthropic):**
- ✅ Store kontekstvinduer (200k tokens)
- ✅ Project-basert organisering
- ✅ Filstruktur for kontekst
- ❌ Begrenset til Claude-plattformen

**ChatGPT (OpenAI):**
- ✅ Custom GPTs med egne instruksjoner
- ✅ Utbredt bruk
- ❌ Mindre kontekstvinduer
- ❌ Mindre strukturert

**Notion AI:**
- ✅ Integrert med eksisterende dokumentasjon
- ✅ Teamsamarbeid
- ❌ Mindre kraftig AI
- ❌ Dyrere

**Egne API-integrasjoner:**
- ✅ Full kontroll
- ✅ Tilpassbar
- ❌ Krever teknisk kompetanse
- ❌ Vedlikeholdskrevende

### 10.2 Verktøy for testing og måling

**Evals (Evaluations):**
- Systematisk testing av AI-output
- Både tekniske og kvalitative mål
- Brukes under utvikling og i produksjon

**Syntetisk data:**
- Generere testdata for å validere systemer
- Sikre edge cases dekkes

**Dashboards:**
- Overvåke nøkkeltall i produksjon
- Kombinere evals med produktmetrikkr

### 10.3 Læringsressurser

**Bøker og artikler:**
- "Kjernemodellen" (Are Halland) - grunnlag for metodikken
- Philipp Schmid (Context Engineering-artikler)
- Anthropic's dokumentasjon (Prompt Engineering Guide)

**Kurs:**
- Model Context Experience (Peter Van Dijck)
- Anthropic's Prompt Engineering-kurs
- OpenAI's API-dokumentasjon

**Communities:**
- MCE Course Slack
- Anthropic Discord
- Reddit: r/ClaudeAI, r/PromptEngineering

---

## 11. Konklusjon

### 11.1 Nøkkelprinsipper

**Systematikk gir resultater:**
- Tilfeldig KI-bruk → tilfeldige resultater
- Systematisk KI-bruk → forutsigbare forbedringer

**Start enkelt, skaler gradvis:**
1. Velg én oppgave
2. Lag minimum viable context
3. Test og lær
4. Iterer og forbedre
5. Skaler til flere oppgaver

**Menneske + maskin:**
Design for samarbeid, ikke erstatning.

**Langsiktig tenkning:**
Kontekstarkitektur er ikke et prosjekt - det er en kontinuerlig praksis.

### 11.2 Veien videre

**Neste steg:**
1. Identifiser én oppgave å starte med
2. Gjennomfør Steg 1-8 systematisk
3. Dokumenter læring underveis
4. Del innsikt med teamet
5. Bygg videre på suksess

**Husk:**
> "KI er ikke magi - det er verktøy som fungerer best når vi forstår brukerne og designer systematisk for samarbeid."

---

## 12. Om forfatteren

**Are Halland** har over 25 års erfaring med brukersentrert design, informasjonsarkitektur og strategisk innholdsutvikling.

**Bakgrunn:**
- Skaperen av Kjernemodellen (internasjonalt anerkjent)
- Forfatter av "Kjernemodellen" (norsk + engelsk utgave)
- Rådgiver for Crayon Consulting og norske organisasjoner
- 1,5 års erfaring med praktisk utvikling av KI-kontekstsystemer

**Kontakt:**
- E-post: are@kjernekaren.no
- LinkedIn: /in/arehalland
- Web: kjernekaren.no

---

## 13. Vedlegg: Maler og sjekklister

### 13.1 Kontekstarkitektur-sjekkliste

**Steg 1: Forstå din KI-"bruker"**
- [ ] Kartlagt hvilke KI-modeller organisasjonen bruker
- [ ] Testet styrker og svakheter for hver modell
- [ ] Dokumentert kontekstvinduer og begrensninger
- [ ] Valgt riktig modell for hver oppgave

**Steg 2: Definer konkrete oppgaver**
- [ ] Kartlagt oppgaver som tar mest tid
- [ ] Identifisert repetitive oppgaver
- [ ] Prioritert oppgaver etter verdi og kompleksitet
- [ ] Definert spesifikke, målbare mål

**Steg 3: Sett strategiske mål**
- [ ] Koblet KI-bruk til forretningsmål
- [ ] Definert suksesskriterier (KPI-er)
- [ ] Etablert baseline-målinger
- [ ] Planlagt evaluerings-tidspunkter

**Steg 4: Kartlegg eksisterende ressurser**
- [ ] Inventert relevant dokumentasjon
- [ ] Kartlagt datastørrelse og -kvalitet
- [ ] Identifisert eiere og vedlikeholdere
- [ ] Prioritert kvalitet over kvantitet

**Steg 5: Design for samarbeid**
- [ ] Definert arbeidsfordeling (KI vs. menneske)
- [ ] Etablert kvalitetskontroll-punkter
- [ ] Laget eskaleringskriterier
- [ ] Designet arbeidsflyt

**Steg 6: Lag presist innhold**
- [ ] Definert rolle og kontekst
- [ ] Spesifisert målgruppe og formål
- [ ] Etablert stil og tone
- [ ] Strukturert format og elementer
- [ ] Inkludert eksempler

**Steg 7: Test og forbedre**
- [ ] Satt opp testmiljø
- [ ] Testet med ekte data
- [ ] Dokumentert resultater
- [ ] Iterert basert på læring
- [ ] Etablert målerutiner

**Steg 8: Skaler systematisk**
- [ ] Dokumentert prosessen
- [ ] Trent flere medarbeidere
- [ ] Etablert kvalitetssikring
- [ ] Opprettet feedback-loops
- [ ] Planlagt vedlikehold

### 13.2 Mal: Oppgavespesifikk kontekst

```markdown
# [Oppgave-navn]

## 1. Kontekst
**Rolle:** [Hvem er KI-en i denne situasjonen?]
**Organisasjon:** [Navn, bransje, særtrekk]
**Kontekst:** [Bakgrunnsinformasjon]

## 2. Målgruppe
**Primær:** [Hvem er hovedbrukeren?]
**Sekundær:** [Andre relevante brukere]
**Behov:** [Hva trenger de?]

## 3. Oppgave
**Hva:** [Konkret beskrivelse av oppgaven]
**Hvorfor:** [Formål og verdi]
**Når:** [Timing og frekvens]

## 4. Mål
**Forretningsmål:** [Hva skal organisasjonen oppnå?]
**Brukermål:** [Hva skal brukeren oppnå?]
**Suksesskriterier:** [Hvordan måle suksess?]

## 5. Input
**Påkrevd informasjon:**
- [Liste over nødvendig input]

**Valgfri informasjon:**
- [Liste over nyttig men ikke påkrevd input]

## 6. Stil og tone
**Formelt nivå:** [Formell / semi-formell / uformell]
**Tone:** [Profesjonell / vennlig / optimistisk / etc.]
**Språk:** [Norsk / engelsk / etc.]
**Særtrekk:** [Eventuelle spesifikke stilkrav]

## 7. Struktur og format
**Lengde:** [Målsetting for lengde]
**Elementer:** [Hvilke deler må være med?]
**Formatering:** [Markdown / HTML / plain text]

## 8. Eksempler
**Godt eksempel:**
[Vis konkret eksempel på ønsket resultat]

**Dårlig eksempel:**
[Vis hva som IKKE er ønsket]

## 9. Kvalitetskontroll
**Sjekkliste før publisering:**
- [ ] [Kriterium 1]
- [ ] [Kriterium 2]
- [ ] [Kriterium 3]

**Eskalering til menneske:**
- [Når skal oppgaven håndteres av menneske?]

## 10. Vedlikehold
**Ansvarlig:** [Navn]
**Sist oppdatert:** [Dato]
**Neste revidering:** [Dato]
```

---

**Sist oppdatert:** 9. november 2025
**Versjon:** 2.0 (Helgeprosjekt-oppdatering)

**Endringslogg v2.0:**
- ✅ Lagt til 5 grunnkonsept (PAKKER, ASSISTENTAR, TOOLS, EVAL, APPAR)
- ✅ Utvida prinsipp frå 5 til 10 (inkl. Modellagnostisk, Two-Layer, Human-in-the-Loop)
- ✅ Ny seksjon: Two-Layer Architecture (Lag 1 vs Lag 2)
- ✅ Ny seksjon: EVAL-system med Fork-Merge Workflow
- ✅ Klargjort distinksjon: Pakke (WHAT) vs Assistent (HOW)
- ✅ Lagt til LLM-as-Judge (framtidig utvikling)
- ✅ Lagt til EVAL-Dashboard konsept

---

*Kontekstarkitektur 2.0: IA møter AI - modellagnostisk struktur for menneske + maskin*
