# Innholdsgenerator V2 - Dashboard-konsept

**Dato:** 19. desember 2025
**Versjon:** 2.0 (konseptfase)
**Type:** Interaktivt webgrensesnitt

---

## Konseptbeskrivelse

V2 er en interaktiv webapp for å generere innholdsvarianter basert på **Core Context Model**. Den kombinerer kjernemodellen med AI-drevet innholdsproduksjon i et visuelt, intuitivt grensesnitt.

**Filosofi:**
> "Strukturen ER konteksten. Riktig info til riktig tid = innsikt."

---

## Core Context Model - Oversikt

Fra Kjernekaren sin kontekstarkitektur:

```
┌─────────────────────────────────────────────────┐
│           TOPP: MÅL + BRUKEROPPGAVE             │
│              + MÅLGRUPPE                        │
├──────────────┬──────────────────┬───────────────┤
│   INPUT      │   KJERNE/        │    OUTPUT     │
│   (Venstre)  │   KONTEKST       │   (Høyre)     │
│              │   (Senter)       │               │
│ • Tekster    │                  │ • Varianter   │
│ • Fakta      │   Prosessering   │ • S/M/L       │
│ • Prinsipper │   med AI         │ • Evaluer     │
│              │                  │ • Velg        │
├──────────────┴──────────────────┴───────────────┤
│         BUNN: KONTEKSTVINDU                     │
│         (Metadata og kontroll)                  │
└─────────────────────────────────────────────────┘
```

### Seks dimensjoner

1. **Kjerne/Kontekst**: Hva er kjerneinnholdet? Hvilken kontekst omgir det?
2. **Bruker**: Både menneske (målgruppe) og AI-modell (hvilket LLM)
3. **Mål**: Hva skal oppnås (bruker + organisasjon)
4. **Input**: Grunnlag, tekster, prinsipper
5. **Output**: Genererte varianter i ulike størrelser
6. **Kontekstvindu**: Metadata, versjonering, token-budsjett

---

## UI-skisse: Layout

```
┌────────────────────────────────────────────────────────────────┐
│  [Logo] Innholdsgenerator                    [Settings] [?]    │
├────────────────────────────────────────────────────────────────┤
│  TOPPLINJE - Kjernemodell (kompakt)                            │
│  ┌──────────────┬──────────────┬──────────────┬─────────────┐ │
│  │ 🔺 Målgruppe │ 🟩 Oppgave   │ 🔵 Mål       │ 🟠 CTA      │ │
│  │ Artister     │ Forstå Gramo │ Bygge tillit │ Bli medlem  │ │
│  └──────────────┴──────────────┴──────────────┴─────────────┘ │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┬─────────────────┬─────────────────────┐  │
│  │                 │                 │                     │  │
│  │  INPUT          │  PROSESS        │  OUTPUT             │  │
│  │  (Venstre)      │  (Senter)       │  (Høyre)            │  │
│  │                 │                 │                     │  │
│  │  📁 Last opp    │  ⚙️ Genererer  │  📄 Varianter       │  │
│  │  tekster        │                 │                     │  │
│  │                 │  [Progress bar] │  Variant 1: (S)     │  │
│  │  ✏️ Fakta       │                 │  [Innhold...]       │  │
│  │  (must-have)    │  Model: Claude  │  ⭐ Bruk dette      │  │
│  │                 │  Tokens: 5.2k   │                     │  │
│  │  🎨 Stil/tone   │                 │  Variant 2: (S)     │  │
│  │  Formalitet: ●  │  [Generate]     │  [Innhold...]       │  │
│  │  Perspektiv: ○  │  [Reset]        │  ⭐ Bruk dette      │  │
│  │                 │                 │                     │  │
│  │                 │                 │  Variant 3: (S)     │  │
│  │  📊 Output-spec │                 │  [Innhold...]       │  │
│  │  [S] [M] [L]    │                 │  ⭐ Bruk dette      │  │
│  │  Antall: 3      │                 │                     │  │
│  │                 │                 │  [↓ Vis alle]       │  │
│  └─────────────────┴─────────────────┴─────────────────────┘  │
│                                                                 │
├────────────────────────────────────────────────────────────────┤
│  KONTEKSTVINDU                                                  │
│  Session: #42 | Token-bruk: 15.8k/200k | Sist lagret: 10:34   │
│  [📁 Last session] [💾 Lagre] [📤 Eksporter] [🔄 Ny session]  │
└────────────────────────────────────────────────────────────────┘
```

---

## Komponenter i detalj

### 1. TOPPLINJE - Kjernemodell (quick input)

**Funksjon:** Rask definering av kontekst uten å fylle ut hele skjema.

**Felter:**
- 🔺 **Målgruppe** (autocomplete fra tidligere)
- 🟩 **Brukeroppgave** (dropdown med vanlige oppgaver)
- 🔵 **Mål** (både bruker og organisasjon)
- 🟠 **Handlingsdriver/CTA** (Call to Action)

**Interaksjon:**
- Klikk på felt → ekspanderer til detaljert redigering
- "Bruk tidligere" → laster inn fra session-historie
- "Bruk template" → starter fra forhåndslagret mal

---

### 2. INPUT-panel (venstre)

#### 2.1 Last opp tekster
```
┌──────────────────────────┐
│ 📁 Eksisterende tekster  │
├──────────────────────────┤
│ [+] Dra fil hit          │
│ [+] Lim inn tekst        │
│ [+] Hent fra URL         │
│                          │
│ Lastet opp (3):          │
│ ✓ Om-gramo.md            │
│ ✓ Pressemelding.txt      │
│ ✓ Årsrapport-utdrag.pdf  │
└──────────────────────────┘
```

**Funksjonalitet:**
- Drag-and-drop for filer
- Paste-område for tekst
- URL-fetch (hent fra nettside/Drive)
- Preview av innhold (klikk for å se)
- AI-analyse: "Oppsummer tekstene" (pre-prosessering)

#### 2.2 Fakta (must-have)
```
┌──────────────────────────┐
│ ✏️ Fakta som MÅ være med│
├──────────────────────────┤
│ [+] Legg til faktum      │
│                          │
│ ✓ Forvalter rettigheter  │
│ ✓ Medlemseid org         │
│ ✓ 52 000 medlemmer       │
│                          │
│ [Toggle] Nice-to-have    │
│ ○ Stiftet 1989           │
│ ○ 221,9 mill fordelt     │
└──────────────────────────┘
```

**Interaksjon:**
- Checkbox for must-have vs. nice-to-have
- AI foreslår fakta fra opplastede tekster
- Drag-to-reorder (prioritering)

#### 2.3 Stil og tone
```
┌──────────────────────────┐
│ 🎨 Stil og tone          │
├──────────────────────────┤
│ Formalitet:              │
│ Byråkratisk ●─────○ Uformell │
│                          │
│ Perspektiv:              │
│ ○ Institusjonell         │
│ ● Vi-perspektiv          │
│ ○ Du-perspektiv          │
│                          │
│ Budskap:                 │
│ ○ Funksjonsfokus         │
│ ● Verdifokus             │
│ ○ Brukerfokus            │
│                          │
│ [+] Legg til prinsipp    │
│ ✓ Bruk aktiv setningsform│
│ ✓ Forklar fagord         │
└──────────────────────────┘
```

**Interaksjon:**
- Sliders for kontinuerlige akser
- Radio buttons for kategoriske valg
- Dynamisk preview: "Slik blir tonen..."

#### 2.4 Output-spesifikasjon
```
┌──────────────────────────┐
│ 📊 Output               │
├──────────────────────────┤
│ Størrelse (velg én+):    │
│ [✓] S - 1 setning        │
│ [✓] M - 3-4 setninger    │
│ [✓] L - 3-4 avsnitt      │
│                          │
│ Antall varianter: [3] ▼  │
│                          │
│ Spesielle ønsker:        │
│ [Type her...]            │
└──────────────────────────┘
```

---

### 3. PROSESS-panel (senter)

#### Status under generering
```
┌─────────────────────────┐
│  ⚙️ Genererer varianter │
│                         │
│  ████████░░░░░░░ 60%   │
│                         │
│  Model: Claude Sonnet   │
│  Token-bruk: 5.2k       │
│  Estimert tid: 12s      │
│                         │
│  [⏸ Pause] [⏹ Stopp]   │
└─────────────────────────┘
```

#### Kontroller
```
┌─────────────────────────┐
│  [▶️ Generate]          │
│  [🔄 Regenerate last]   │
│  [🗑️ Reset all]         │
│                         │
│  Tidligere sessions:    │
│  [📁 Load session...]   │
└─────────────────────────┘
```

---

### 4. OUTPUT-panel (høyre)

#### Variant-kort (eksempel Small)
```
┌───────────────────────────────────────────┐
│ Variant 1: Verdifokusert                  │
│ Størrelse: S (156 tegn)                   │
├───────────────────────────────────────────┤
│                                           │
│ "Vi sørger for at artister, musikere     │
│ og produsenter får betalt når musikken   │
│ deres spilles offentlig – som en         │
│ medlemseid organisasjon godkjent av      │
│ Kulturdepartementet."                    │
│                                           │
├───────────────────────────────────────────┤
│ 💬 AI-analyse:                            │
│ • Tone: Profesjonell, tydelig verdi      │
│ • Mangler: Ingen konkrete tall           │
│ • Forslag: Vurder å nevne antall medlemmer│
├───────────────────────────────────────────┤
│ [⭐ Favoritt] [📋 Kopier] [✏️ Rediger]    │
│ [🔄 Regenerer] [💬 Feedback til AI]       │
└───────────────────────────────────────────┘
```

**Interaksjon:**
- Hover → vis AI-analyse
- ⭐ Favoritt → marker for eksport
- ✏️ Rediger → inline editing med live-preview
- 💬 Feedback → "For formell", "Mangler emosjon" → AI justerer

#### Sammenligning (side-by-side)
```
[Toggle: Sammenlign varianter]

┌─────────────┬─────────────┬─────────────┐
│ Variant 1   │ Variant 2   │ Variant 3   │
├─────────────┼─────────────┼─────────────┤
│ [Tekst...]  │ [Tekst...]  │ [Tekst...]  │
│             │             │             │
│ ⭐⭐⭐⭐☆  │ ⭐⭐⭐☆☆  │ ⭐⭐⭐⭐⭐ │
│             │             │             │
│ [Velg]      │ [Velg]      │ [Velg]      │
└─────────────┴─────────────┴─────────────┘
```

---

### 5. KONTEKSTVINDU (bunn)

**Metadata og kontroll:**
```
Session: #42 | Created: 19.12.2025 10:15
Token-bruk: 15.8k / 200k
Model: Claude Sonnet 4.5
Sist lagret: 10:34 (auto-lagret ✓)

[📁 Last session] [💾 Lagre som...] [📤 Eksporter]
[🔄 Ny session] [⚙️ Innstillinger] [📊 Historikk]
```

**Eksport-alternativer:**
```
┌─────────────────────────┐
│ Eksporter til:          │
│ ○ Markdown              │
│ ○ Google Docs           │
│ ○ Notion                │
│ ○ JSON (API)            │
│ ○ PDF (presentasjon)    │
│                         │
│ [✓] Inkluder metadata   │
│ [✓] Inkluder AI-analyse │
│                         │
│ [Eksporter]             │
└─────────────────────────┘
```

---

## Innovasjoner i V2

### 1. "Core Prompt" - AI hjelper AI
Før generering, kjører vi en **meta-analyse**:
```
AI: "Basert på din kontekst ser jeg at:
     - Målgruppen er usikre på hvorfor Gramo eksisterer
     - De trenger trygghet (medlemseid, godkjent)
     - Handling: Bli medlem

     Jeg foreslår å:
     1. Starte med 'hva vi gjør FOR deg'
     2. Legge til troverdighetssignal tidlig
     3. Avslutte med tydelig CTA

     Vil du at jeg genererer basert på dette?"
```

**Fordel:** LLM-en deltar i utformingen av sin egen kontekst.

### 2. Iterativ raffinering
**Flow:**
1. Generer 3 varianter (S)
2. Bruker velger favoritt
3. "Regenerer Medium basert på Variant 2"
4. AI ekspanderer konseptet fra S → M
5. Konsistent stil og vinkling

### 3. Tverrfaglig workshop-modus
**Feature:** Inviter andre til session
```
[👥 Del session]
→ Generer delelenke
→ Rita, Bastian får tilgang
→ De kan kommentere, stemme, foreslå endringer
→ Live oppdatering
```

### 4. A/B-testing integrert
```
[🧪 A/B-test]
→ Variant 1 vs. Variant 3
→ Generer testrapport
→ Del på SoMe/nettside
→ Samle data (klikk, konvertering)
→ AI analyserer resultater
```

---

## Teknisk arkitektur

### Stack-forslag

**Frontend:**
- **React** + TypeScript
- **Tailwind CSS** (styling)
- **Shadcn/ui** (komponenter)
- **Zustand** (state management)

**Backend/API:**
- **Next.js API routes** (full-stack)
- **Anthropic API** (Claude)
- **Supabase** (database + auth)

**Deployment:**
- **Vercel** (hosting)
- **PostgreSQL** (Supabase)

### Data-modell

```typescript
interface Session {
  id: string
  created_at: Date
  user_id: string

  // Kjernemodell
  context: {
    målgruppe: string
    brukeroppgave: string
    mål: {bruker: string, org: string}
    cta: string
  }

  // Input
  input: {
    tekster: File[]
    fakta_must: string[]
    fakta_nice: string[]
    stil: {
      formalitet: number // 0-100
      perspektiv: 'institusjonell' | 'vi' | 'du'
      budskap: 'funksjon' | 'verdi' | 'bruker'
    }
    prinsipper: string[]
  }

  // Output
  output: {
    størrelser: ('S' | 'M' | 'L')[]
    antall_varianter: number
    varianter: Variant[]
  }

  // Metadata
  meta: {
    model: string
    tokens_used: number
    sist_lagret: Date
  }
}

interface Variant {
  id: string
  størrelse: 'S' | 'M' | 'L'
  innhold: string
  lengde: number // tegn/ord

  // AI-analyse
  analyse: {
    tone: string
    styrker: string[]
    svakheter: string[]
    forslag: string[]
  }

  // Bruker-feedback
  favoritt: boolean
  rating: number // 1-5
  kommentarer: Comment[]
}
```

---

## Implementeringsplan

### Fase 1: MVP (Minimum Viable Product)
**Mål:** Grunnleggende funksjonalitet i 1 uke

**Leveranse:**
1. Enkel single-page app
2. Kjernemodell-input (topplinje)
3. Tekstopplasting (paste only)
4. Stil/tone (sliders + radio)
5. Generate-knapp → API-kall til Claude
6. Vis 3 varianter (S)
7. Kopier-funksjon

**Ikke i MVP:**
- Lagring/sessions
- Eksport
- Workshop-modus
- A/B-testing

### Fase 2: Session-management
**Mål:** Lagre og gjenbruke arbeid

**Leveranse:**
1. Supabase-integrasjon
2. Auto-lagring
3. Session-historikk
4. Last tidligere session
5. Template-system

### Fase 3: Samarbeid
**Mål:** Multi-bruker og deling

**Leveranse:**
1. Brukerautentisering
2. Del session (read-only lenke)
3. Kommentarer på varianter
4. Workshop-modus (live editing)

### Fase 4: Avanserte features
**Mål:** Forskningsverktøy

**Leveranse:**
1. A/B-testing framework
2. Eksport til alle formater
3. API for integrasjon
4. Analytics (hvilke parametere gir best resultat)

---

## Wireframes (ASCII)

### Mobil-versjon (responsiv)
```
┌──────────────────┐
│ [☰] Innholds-    │
│     generator    │
├──────────────────┤
│ [Tab: Kontekst]  │
│ [Tab: Input]     │
│ [Tab: Output] ←  │
├──────────────────┤
│                  │
│ Variant 1 (S)    │
│ ┌──────────────┐ │
│ │ [Tekst...]   │ │
│ │              │ │
│ └──────────────┘ │
│ [⭐] [📋] [✏️]   │
│                  │
│ Variant 2 (S)    │
│ ┌──────────────┐ │
│ │ [Tekst...]   │ │
│ │              │ │
│ └──────────────┘ │
│ [⭐] [📋] [✏️]   │
│                  │
│ [↓ Vis flere]    │
│                  │
├──────────────────┤
│ [Generate] [New] │
└──────────────────┘
```

---

## Brukertesting - Plan

### Testscenario 1: Første gangs bruker
**Persona:** Bastian (innholdsprodusent)
**Oppgave:** "Lag en kort Om-tekst for Gramo uten forhåndskunnskap"

**Måler:**
- Tid til første generering
- Antall justeringer
- Fornøydhet med resultat

### Testscenario 2: Erfaren bruker
**Persona:** Are (strateg)
**Oppgave:** "Lag 5 varianter (S, M, L) for testing"

**Måler:**
- Effektivitet (varianter per minutt)
- Gjenbruk av tidligere sessions
- Bruk av avanserte features

### Testscenario 3: Workshop
**Persona:** Rita + Bastian (team)
**Oppgave:** "Samarbeid om å lage innhold for ny seksjon"

**Måler:**
- Samarbeidskvalitet
- Konfliktløsning (uenighet om stil)
- Beslutningshastighet

---

## Neste steg

### 1. Bekreft konsept
- [ ] Review med Are
- [ ] Feedback fra team (Rita, Bastian)
- [ ] Prioriter features (MVP vs. Nice-to-have)

### 2. Prototype (rapid)
- [ ] Figma mockup (1 dag)
- [ ] Interaktiv prototype (2 dager)
- [ ] Brukertest med teamet

### 3. Utvikle MVP
- [ ] Setup: Next.js + Tailwind (0.5 dag)
- [ ] Kjernemodell-input (1 dag)
- [ ] Input-panel (1 dag)
- [ ] Claude API-integrasjon (1 dag)
- [ ] Output-panel (1 dag)
- [ ] Polish og testing (0.5 dag)

**Total tid MVP:** ~5 dager

### 4. Deploy og test
- [ ] Deploy til Vercel
- [ ] Intern testing (1 uke)
- [ ] Iterer basert på feedback

---

## Sammenligningstabell: V1 vs V2

| Feature | V1 (Prompt-basert) | V2 (Dashboard) |
|---------|-------------------|----------------|
| **Format** | Markdown template | Web-app |
| **Bruk** | Copy-paste til ChatGPT | Integrert grensesnitt |
| **Lagring** | Lokal fil | Database + cloud |
| **Samarbeid** | Delt fil | Live multi-bruker |
| **Iterasjon** | Manuell | AI-assistert |
| **Analyse** | Ingen | AI-feedback på varianter |
| **Eksport** | Copy-paste | Multi-format |
| **Learning curve** | Lav | Medium |
| **Fleksibilitet** | Høy (LLM-agnostisk) | Medium (krever app) |
| **Vedlikehold** | Minimalt | Kontinuerlig |

**Konklusjon:** V1 for rask ad-hoc bruk. V2 for systematisk, skalerbar innholdsproduksjon.

---

## Åpne spørsmål

1. **Brukerautentisering:** Nødvendig for MVP eller kan vente til Fase 2?
2. **LLM-valg:** Kun Claude, eller også OpenAI/Gemini?
3. **Hosting:** Intern (Gramo-server) eller ekstern (Vercel)?
4. **Prising:** Gratis intern tool eller kommersiell produkt?
5. **Datahåndtering:** Hvor lagres opplastede tekster? GDPR?

---

## Inspirasjon og referanser

### Lignende verktøy
- **Hemingway Editor** (klarspråk-analyse)
- **Grammarly** (tone-justering)
- **Copy.ai** (AI-generering)
- **Jasper** (innholdsmarketing)

### Innovasjon i V2
- **Kontekstarkitektur-basert** (unikt for Kjernekaren)
- **Kjernemodellen som ryggrad** (ikke bare templates)
- **Workshop-modus** (tverrfaglig samarbeid)
- **Core Prompt** (AI hjelper AI)

---

## Visjonen: Innholdsgenerator 3.0+

**Fremtidige features:**
- 🤖 **Multi-agent**: Ulike AI-agenter for ulike oppgaver (forsker, skriver, kritiker)
- 📊 **Analytics**: "Hvilke parametere gir best konvertering?"
- 🌐 **Oversettelse**: Samme kontekst → flere språk
- 🎨 **Design-integrering**: Genererer både tekst OG visuelle konsepter
- 🔗 **CMS-integrasjon**: Publiser direkte til Sanity/WordPress
- 📱 **App**: Mobil-app for on-the-go innholdsproduksjon

---

*Versjon 2.0 konsept - 19. desember 2025*
*Are Halland + Claude*
