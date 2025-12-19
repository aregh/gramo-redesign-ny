# Product Requirement Document (PRD): Innholdsgenerator V2
## Systematisk innholdsproduksjon basert på Kjernekontekst-modellen

**Versjon:** 1.0
**Dato:** 19. desember 2025
**Status:** Utkast til produktifisering
**Eier:** Kjernepar AS / Are Halland

---

## 1. Innledning og formål
Formålet med Innholdsgenerator V2 er å skape et profesjonelt verktøy for strategisk innholdsproduksjon. Verktøyet skal tvinge brukeren til å definere rammene (konteksten) før innhold genereres, for å sikre at AI-output er i tråd med metodikken fra **Kjernemodellen** og **Kontekstarkitektur**.

Dette dokumentet fungerer som teknisk og funksjonell kravspesifikasjon for utviklingen av verktøyet.

---

## 2. Målgrupper og behov

### 2.1 Bruker-persona
- **Innholds-Are (Strateg):** Trenger et verktøy for å raskt prototype tekstvarianter som følger hans egen metodikk.
- **Kommunikasjons-Rita (Produsent):** Trenger å transformere faglige notater til ferdig innhold for nett og sosiale medier, uten å miste kontroll over fakta eller tone.
- **Utvikler-Inge (Teknisk):** Trenger et system som kan integreres i eksisterende arbeidsflyt (Sanity, Notion).

### 2.2 User Stories
| ID | Bruker | Handling | Formål |
|----|--------|----------|---------|
| US.1 | Strateg | Jeg vil definere målgruppe, oppgave og mål sentralt | At alle genererte varianter er strategisk forankret. |
| US.2 | Produsent | Jeg vil laste opp kildedokumenter og skille mellom fakta som "må med" og "kjekt å ha" | At AI-en ikke dikter opp fakta, men prioriterer rett informasjon. |
| US.3 | Bruker | Jeg vil se 3-5 varianter (S, M, L) side-om-side | Å kunne velge og kombinere de beste delene fra ulike vinklinger. |
| US.4 | Bruker | Jeg vil se en AI-analyse av hver variant | Å forstå *hvorfor* AI-en valgte den tonen, og få tips til forbedringer. |
| US.5 | Team | Jeg vil lagre og dele sesjoner | Å kunne samarbeide med kolleger og iterere over tid. |

---

## 3. Funksjonelle krav (Functional Requirements)

### 3.1 Kontekst- og modellhåndtering (Core)
- **F.1:** Systemet skal ha inndatafelt for de fire kjerneelementene: **Målgruppe**, **Brukeroppgave**, **Mål** (Bruker/Org) og **CTA**.
- **F.2:** Systemet skal kunne laste inn "Kontekst-pakker" (metodebeskrivelser i Markdown) som systemprompt.
- **F.3:** Mulighet for å lagre og gjenbruke "Stil og tone"-profiler.

### 3.2 Inndata og kilder (Input)
- **F.4:** Støtte for drag-and-drop av filer (.txt, .md, .pdf, .docx).
- **F.5:** Tekstfelt for manuell innliming av grunnlagstekst.
- **F.6:** Funksjon for å trekke ut fakta fra opplastet tekst (AI-assistert ekstraksjon).
- **F.7:** Merking av fakta som *Obligatorisk* (Must-have) eller *Supplerende* (Nice-to-have).

### 3.3 Generering og iterering (Process)
- **F.8:** Generering av innhold i definerte størrelser: S (1-2 setninger), M (1 avsnitt), L (flere avsnitt).
- **F.9:** Støtte for iterativ raffinering: Bruker velger en variant og ber om "mer av dette" eller "skaler opp til L".
- **F.10:** Live-feedback loop: Be AI-en justere output basert på kommentarer (f.eks. "mindre formelt").

### 3.4 Eksport og samarbeid
- **F.11:** En-klikks kopiering av generert tekst.
- **F.12:** Eksport til Markdown, Google Docs og Notion.
- **F.13:** Deling av sesjoner via unik URL.

---

## 4. Ikke-funksjonelle krav (Non-functional Requirements)

### 4.1 Brukeropplevelse (UX/UI)
- **N.1:** Grensesnittet skal følge "Kjernekontekst-layouten" (Topp-Venstre-Senter-Høyre).
- **N.2:** Systemet skal gi visuell respons under hele genereringsprosessen (progress bars, status-meldinger).
- **N.3:** Responsivt design for bruk på laptop og nettbrett.

### 4.2 Ytelse og Integrasjon
- **N.4:** Responstid for generering (S) under 10 sekunder.
- **N.5:** Integrasjon mot Anthropic Claude API (Sonnet 3.5 som standard).
- **N.6:** Støtte for Model Context Protocol (MCP) for å hente data fra Google Drive/Airtable.

---

## 5. Tekniske rammer og begrensninger

### 5.1 Tech Stack
- **Frontend:** Next.js (React), Tailwind CSS, Shadcn UI.
- **Backend:** Supabase (Database, Auth, Storage).
- **AI Orchestration:** Vercel AI SDK eller LangChain.

### 5.2 Personvern og GDPR
- **C.1:** Brukerdata og opplastede dokumenter skal lagres sikkert i Supabase med RLS (Row Level Security).
- **C.2:** AI-kallene skal ikke lagre personopplysninger til trening (bruk av API-tier med "zero retention" der mulig).

---

## 6. Suksesskriterier (Metrics)
- **Kvalitet:** Brukere melder om minst 50% reduksjon i behovet for etterredigering sammenlignet med rå ChatGPT-bruk.
- **Effektivitet:** Tid brukt fra faktagrunnlag til 3 ferdige varianter er under 5 minutter.
- **Gjenbruk:** Brukere har i snitt 3+ lagrede stilprofiler.

---

## 7. Milepæler (Roadmap)
1. **Pilot (M1):** Fungerende dashboard med Next.js og Claude (Kun Tekst-input).
2. **Kilde-støtte (M2):** Filopplasting og web-scraping.
3. **Persistens (M3):** Brukerkontoer og lagring av sesjoner i Supabase.
4. **Økosystem (M4):** Eksport og MCP-integrasjon.

---
*Dokumentet er et levende dokument og vil oppdateres i takt med utviklingen.*
