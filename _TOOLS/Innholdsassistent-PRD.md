# PRD: Innholdsassistent-system for gramo.no

**Versjon:** 1.0
**Dato:** 8. januar 2026
**Eier:** Are Halland (konsept/implementering), Bastian Daae (innhold), Øystein (juridisk)
**Status:** 📝 Planlegging

---

## Problembeskrivelse

### Nåsituasjon
Gramo mottar mange henvendelser til kundeservice, inkludert juridisk 3. linje (Øystein), fordi:
- Juridisk innhold er vanskelig å forstå
- Informasjon mangler eller er uklar
- Brukere finner ikke svar på nettsiden

### Spenning mellom kvalitetskrav
- 🏛️ **Juridisk presisjon**: Innhold må være juridisk korrekt (Øysteins fokus)
- 💬 **Klarspråk**: Innhold må være forståelig for brukere (kommunikasjonsmål)
- ⚖️ **Balanse**: Disse to kan være i konflikt

### Konsekvens
- Tid brukt på support som kunne vært unngått
- Frustrerte brukere som ikke forstår sine rettigheter
- Ineffektiv innholdsproduksjon (mange runder med Øystein)

---

## Visjon

> **"Juridisk korrekt innhold som folk faktisk forstår - slik at de slipper å kontakte oss"**

### Målsetninger
1. **Redusere support-henvendelser** med 30% innen 12 måneder
2. **Redusere tid til Øystein** (3. linje) med 50% innen 12 måneder
3. **Øke selvbetjeningsgrad** for toppoppgaver med 40% innen 12 måneder
4. **Raskere innholdsproduksjon** - halvere tid fra utkast til publisering

---

## Løsningskonsept

### To assistenter, sekvensielt workflow

```
1. INNHOLDSPRODUSENT (Bastian/Torstein)
   Skriver utkast i naturlig språk
   ↓
2. KLARSPRÅK-ASSISTENT
   ✓ Sjekker forståelighet
   ✓ Identifiserer juridisk innhold
   ✓ Foreslår klarere formuleringer
   ↓
3. JURIDISK-ASSISTENT
   ✓ Sjekker juridisk korrekthet
   ✓ Legger til nødvendige presiseringer
   ✓ Markerer konflikter med klarspråk
   ✓ Foreslår balansert formulering
   ↓
4. ØYSTEIN
   Godkjenner/justerer juridisk innhold
   ↓
5. DATABASE
   Godkjente formuleringer lagres for gjenbruk
   ↓
6. PUBLISERING
```

### Nøkkelinnsikt
- **Klarspråk først** (brukerperspektiv)
- **Juridisk presisjon deretter** (sikkerhet)
- **Læring over tid** (EVAL + database)
- **Menneske har siste ord** (Øystein godkjenner alltid)

---

## Funksjonelle krav

### 1. Klarspråk-assistent

#### Input
- Utkast til innhold (Markdown, HTML, eller plain text)
- Målgruppe (medlem, potensiell medlem, rettighetshaver)
- Kontekst (toppoppgave, veiledning, juridisk, statistikk)

#### Prosess
1. **Identifisere målgruppe og kontekst**
2. **Sjekke språk:**
   - Bokmål (ikke nynorsk)
   - Korte setninger (max 20-25 ord)
   - Aktivt språk (ikke passiv)
   - Forståelig (lesescore 8. klasse-nivå)
3. **Identifisere juridisk innhold:**
   - Markører: "rett", "plikt", "krav", "må", "skal"
   - Lovverkreferanser
   - Beskrivelser av rettigheter/forpliktelser
4. **Vurdere tone:**
   - Toppoppgave → Veiledende, trygg
   - Juridisk → Presis, ansvarlig
   - Merkevare → Engasjerende, stolt
5. **Sjekke terminologi:**
   - Konsistent bruk av etablerte termer
   - Forklare faguttrykk ved første bruk

#### Output
```markdown
## Klarspråk-rapport: [Tittel]

**Status:** ✅ Godkjent / ⚠️ Justeringer anbefalt / ❌ Krever revisjon

### Språksjekk
- [x] Bokmål
- [x] Korte setninger
- [ ] Noen fagtermer ikke forklart
- [x] Aktivt språk

### Juridisk innhold oppdaget
🏛️ Linje 23-45: Beskrivelse av rettigheter til vederlag
🏛️ Linje 67-78: Registreringskrav

### Forbetringsforslag

**Linje 23:**
Nåværende: "Medlemmer tildeles vederlag ved spillinger"
Forslag: "Som medlem får du vederlag når musikken din spilles på radio og TV"
Hvorfor: Mer direkte, brukerorientert språk

**Linje 34:**
⚠️ JURIDISK INNHOLD - må sjekkes av Juridisk-assistent

### Tone
✅ Tone matcher målgruppe (veiledende for toppoppgave)
```

---

### 2. Juridisk-assistent

#### Input
- Utkast (etter Klarspråk-assistent)
- Klarspråk-rapport (identifisert juridisk innhold)
- Database med tidligere godkjente formuleringer

#### Prosess
1. **Klassifisere juridisk innhold:**
   - 🔴 KRITISK: Direkte juridiske konsekvenser
   - 🟡 VIKTIG: Beskriver rettigheter/plikter
   - 🟢 INFORMATIVT: Generell kontekst
2. **Sjekke juridisk presisjon:**
   - Er formuleringen juridisk korrekt?
   - Mangler viktige forbehold/unntak?
   - Er lov-/avtalereferanser korrekte?
   - Kan formuleringen misforstås juridisk?
3. **Sjekke mot database:**
   - Finnes godkjent formulering for samme tema?
   - Kan vi gjenbruke godkjent språk?
4. **Vurdere klarspråk vs. presisjon:**
   - Er klarspråk-forslaget juridisk akseptabelt?
   - Hvis nei: foreslå balansert formulering
5. **Identifisere konflikter:**
   - Markere hvor klarspråk og juridisk presisjon kolliderer

#### Output
```markdown
## Juridisk rapport: [Tittel]

**Status:** ✅ Juridisk OK / ⚠️ Krever justering / 🔴 Må godkjennes av Øystein

### Juridisk innhold

**Linje 23-28: Rettigheter til vederlag** 🔴 KRITISK

**Klarspråk-forslag:**
"Som medlem får du vederlag når musikken din spilles på radio og TV"

**Juridisk analyse:**
⚠️ Mangler viktige forutsetninger:
- Innspillingen må være registrert
- Geografisk avgrenset til Norge (eller worldwide)
- Gjelder kun nærstående rettigheter

**Balansert formulering:**
"Som medlem har du rett til vederlag når musikken din spilles på radio og TV i Norge. For å motta vederlag må innspillingen være registrert med ISRC-kode i vårt system."

**Lovhjemmel:** Åndsverkloven §45

**Sjekk database:** Lignende formulering godkjent 2025-12-15 (se Juridisk-database/vederlag-rettigheter.md)

---

**Linje 67-71: Registreringskrav** 🟡 VIKTIG

**Klarspråk-forslag:**
"Du må registrere ISRC-kode"

**Juridisk analyse:**
✅ Korrekt, men kan presiseres:
"Du må registrere ISRC-kode for å motta vederlag"

---

### Må godkjennes av Øystein
- Linje 23-28 (ny formulering av rettigheter)
- Linje 45-50 (claiming-prosedyre)

### Kan publiseres
- Linje 67-71 (standardformulering, tidligere godkjent)
```

---

### 3. Database: Godkjente juridiske formuleringer

#### Struktur
```markdown
## [Tema]: [Kort beskrivelse]

**ID:** [TEMA-001]
**Godkjent av:** Øystein
**Dato:** ÅÅÅÅ-MM-DD
**Lovhjemmel:** [Referanse]
**Status:** ✅ Aktiv / 🔄 Under revisjon / ❌ Utgått

### Formulering
[Godkjent tekst]

### Bruksområde
[Når kan denne brukes]

### Varianter
[Alternative godkjente formuleringer]

### Eksempler på bruk
- [Side/artikkel hvor denne er brukt]

### Relaterte formuleringer
- [TEMA-002]: [Relatert tema]
```

#### Eksempel
```markdown
## Vederlag: Rett til vederlag ved spillinger

**ID:** VED-001
**Godkjent av:** Øystein
**Dato:** 2025-12-15
**Lovhjemmel:** Åndsverkloven §45
**Status:** ✅ Aktiv

### Formulering
"Som medlem har du rett til vederlag når musikken din spilles på radio og TV i Norge. For å motta vederlag må innspillingen være registrert med ISRC-kode i vårt system."

### Bruksområde
- Toppoppgaver om vederlag
- Forklaring av medlemsfordeler
- FAQ om rettigheter

### Varianter
**Kort versjon:**
"Du får vederlag når musikken din spilles på radio og TV (forutsatt registrering og medlemskap)"

**Utvidet versjon (worldwide):**
"Som medlem har du rett til vederlag når musikken din spilles på radio og TV i Norge. Med worldwide-medlemskap får du også vederlag fra spillinger i utlandet, gjennom våre partnerorganisasjoner. For å motta vederlag må innspillingen være registrert med ISRC-kode."

### Eksempler på bruk
- /toppoppgaver/registrere-isrc.md (linje 12-14)
- /medlemskap/fordeler.md (linje 34-36)

### Relaterte formuleringer
- VED-002: Vederlag for worldwide-medlemskap
- REG-001: Registreringskrav for ISRC
```

---

## Ikke-funksjonelle krav

### Ytelse
- Klarspråk-assistent: < 30 sekunder per side
- Juridisk-assistent: < 60 sekunder per side
- Database-oppslag: < 5 sekunder

### Brukervennlighet
- Rapporter skal være letleselige (ikke teknisk sjargong)
- Forslag skal være konkrete og handlingsrettede
- Konflikter skal forklares tydelig

### Vedlikehold
- Database skal oppdateres ved endringer i lovverk
- EVAL-system skal logge forbedringer kontinuerlig
- Ukentlig review av nye formuleringer

### Sikkerhet
- Øystein må godkjenne ALT juridisk innhold før publisering
- Database med godkjente formuleringer skal være kildebasert
- Logg hvem som har godkjent hver formulering

---

## Arkitektur

### To-lags-arkitektur (kontekstarkitektur-prinsipp)

#### Lag 1: Konseptuelt (modellagnostisk)
**Plassering:** `/Innhold/_ASSISTENTAR/`

**Filer:**
```
/Innhold/_ASSISTENTAR/
├── README.md                           # Oversikt
├── Klarspråk-assistent.md             # Lag 1: Konseptuell dokumentasjon
├── Juridisk-assistent.md              # Lag 1: Konseptuell dokumentasjon
├── Klarspråk-assistent-EVAL.md        # Append-only logg
├── Juridisk-assistent-EVAL.md         # Append-only logg
└── Juridisk-database/                 # Godkjente formuleringer
    ├── README.md
    ├── VED-001-vederlag-rettigheter.md
    ├── REG-001-registreringskrav.md
    └── ...
```

**Karakteristikk:**
- ✅ Fungerer i alle verktøy (Claude, ChatGPT, Cursor, fremtidige)
- ✅ Markdown-basert (åpent format)
- ✅ Menneskelesbart
- ✅ Varer lenger enn teknologien

#### Lag 2: Implementering (modelspesifikk)
**Plassering:** `.claude/skills/` eller `chatgpt/gpts/`

**Claude Code Skills:**
```
/.claude/skills/
├── klarsprak/
│   └── skill.md                       # Claude Code Skill implementering
└── juridisk/
    └── skill.md                       # Claude Code Skill implementering
```

**Custom GPT:**
```
/chatgpt/gpts/
├── klarsprak-assistent.md             # GPT-konfigurasjon
└── juridisk-assistent.md              # GPT-konfigurasjon
```

**Karakteristikk:**
- ⚠️ Fungerer bare i spesifikt verktøy
- ⚠️ Må skrives om ved verktøyskifte
- ✅ Optimalisert for verktøyet
- ✅ Enkel å erstatte (uten å miste Lag 1)

---

## Implementeringsplan

### Fase 1: Konseptuell dokumentasjon (uke 2, januar 2026)
**Mål:** Lag 1 ferdig, presentasjon for Øystein

**Oppgaver:**
- [x] PRD/plan opprettet (_TOOLS/Innholdsassistent-PRD.md)
- [ ] Klarspråk-assistent konseptuell dokumentasjon (Lag 1)
- [ ] Juridisk-assistent konseptuell dokumentasjon (Lag 1)
- [ ] Database-struktur for godkjente formuleringer
- [ ] EVAL-system satt opp
- [ ] Presentasjonsdokument for Øystein-møte

**Leveranse:**
- Komplett Lag 1 (konseptuell dokumentasjon)
- Presentasjon for Øystein
- Samlet feedback og justeringer

**Tidsestimat:** 8 timer (Are)

---

### Fase 2a: Tone of voice-workshop (februar 2026)
**Mål:** Definere tone-retningslinjer

**Deltakere:**
- Kommunikasjonsavdeling (Kim?)
- Bastian Daae
- Torstein Norendal
- Øystein (juridisk perspektiv)
- Are Halland (fasilitering)

**Agenda:**
1. **Gjennomgang av nåsituasjon** (30 min)
   - Eksempler på godt/dårlig innhold
   - Analyse av henvendelser (hva misforstår folk?)
2. **Definere tone-prinsipper** (60 min)
   - Grunnleggende tonefall (veiledende, tydelig, inkluderende)
   - Kontekstuelle variasjoner (toppoppgave vs. juridisk vs. merkevare)
3. **Terminologi-ordbok** (45 min)
   - Foretrukne termer
   - Termer som må forklares
   - Termer som skal unngås
4. **Eksempelbank** (45 min)
   - Gode formuleringer
   - Dårlige formuleringer
   - Før/etter-eksempler

**Leveranse:**
- Tone of voice-retningslinjer (dokument)
- Terminologi-ordbok (database)
- Eksempelbank (database)

**Tidsestimat:** 3 timer workshop + 4 timer dokumentasjon = 7 timer

---

### Fase 2b: Kartlegge juridiske henvendelser (februar 2026)
**Mål:** Forstå hva brukere misforstår

**Samarbeid med Øystein:**
1. **Kategorisere juridiske henvendelser** (siste 6-12 måneder)
   - Tema (vederlag, registrering, claiming, etc.)
   - Årsak (uklart innhold, manglende info, misforståelse)
2. **Identifisere top 10 juridiske misforståelser**
3. **Finne mønstre:**
   - Hvilke formuleringer skaper forvirring?
   - Hvilken informasjon mangler?
4. **Prioritere innhold** som kan redusere henvendelser

**Leveranse:**
- Rapport: Juridiske henvendelser og misforståelser
- Prioritert liste: Innhold som må lages/forbedres
- Baseline-måling for effektvurdering

**Tidsestimat:** 8 timer (Øystein + Are/Bastian)

---

### Fase 2c: Implementering Lag 2 (mars 2026)
**Mål:** Fungerende assistenter i Claude Code og/eller GPT

**Oppgaver:**

**Alt A: Claude Code Skills**
- [ ] Implementere Klarspråk-assistent som skill
- [ ] Implementere Juridisk-assistent som skill
- [ ] Integrere med MCP (hvis relevant)
- [ ] Teste workflow: utkast → klarspråk → juridisk → rapport

**Alt B: Custom GPT**
- [ ] Bygge Klarspråk-assistent GPT
- [ ] Bygge Juridisk-assistent GPT
- [ ] Lage instruksjoner basert på Lag 1
- [ ] Teste workflow

**Alt C: Begge deler** ⭐ ANBEFALES
- Claude Code Skills for Bastian (integrert i arbeidsprosess)
- Custom GPT for Torstein (enkel tilgang)

**Leveranse:**
- Fungerende Lag 2-implementering
- Brukerdokumentasjon
- Testrapport (5-10 innholdssider)

**Tidsestimat:** 16 timer implementering + 8 timer testing = 24 timer

---

### Fase 2d: Testing og iterasjon (mars 2026)
**Mål:** Validere at assistentene fungerer i praksis

**Testopplegg:**
1. **Velg 10 innholdssider:**
   - 3 juridiske (høy prioritet)
   - 4 toppoppgaver
   - 3 veiledninger
2. **Kjør gjennom workflow:**
   - Skriv/hent utkast
   - Klarspråk-assistent
   - Juridisk-assistent
   - Øystein-godkjenning (for juridisk)
3. **Logg læring i EVAL-filer**
4. **Ukentlig review:**
   - Hva fungerte godt?
   - Hva fungerte dårlig?
   - Forbetringsforslag
5. **Iterer:**
   - Oppdater Lag 1 (konseptuell dokumentasjon)
   - Oppdater Lag 2 (implementering)
   - Bygg database med godkjente formuleringer

**Leveranse:**
- 10 kvalitetssikrede innholdssider
- Database med 5-10 godkjente juridiske formuleringer
- EVAL-rapport med læring
- Oppdaterte assistenter (v1.1)

**Tidsestimat:**
- 16 timer testing (Bastian/Torstein)
- 8 timer iterasjon (Are)
- 8 timer Øystein-godkjenning
- Totalt: 32 timer

---

### Fase 3: Sanity-integrasjon (april-juni 2026)
**Mål:** Automatisert kvalitetssjekk i CMS

**Forutsetninger:**
- Sanity CMS er satt opp og i bruk
- API-tilgang til Sanity
- Assistenter er testet og fungerer (Fase 2 ferdig)

**Oppgaver:**
- [ ] API-integrasjon mellom Sanity og assistentsystem
- [ ] Real-time forslag i Sanity-editor
- [ ] Automatisk markering av juridisk innhold
- [ ] Workflow for Øystein-godkjenning i Sanity
- [ ] Dashboard for innholdskvalitet

**Leveranse:**
- Sanity-plugin / API-integrasjon
- Real-time assistanse under skriving
- Dashboard for kvalitetsoversikt

**Tidsestimat:** 40 timer (estimeres nærmere i Fase 2)

---

## Suksesskriterier

### Kvantitative mål

| Mål | Baseline | 3 mnd | 6 mnd | 12 mnd |
|-----|----------|-------|-------|--------|
| **Support-henvendelser** | 100% | -10% | -20% | -30% |
| **Tid til Øystein (3. linje)** | 100% | -20% | -35% | -50% |
| **Selvbetjeningsgrad (toppoppgaver)** | XX% | +10% | +25% | +40% |
| **Tid fra utkast til publisering** | XX timer | -25% | -40% | -50% |
| **Juridiske feil i publisert innhold** | XX | -50% | -75% | -90% |

### Kvalitative mål

**Etter 3 måneder:**
- ✅ Bastian og Torstein bruker assistentene aktivt
- ✅ Øystein opplever færre henvendelser
- ✅ Database har 10+ godkjente juridiske formuleringer

**Etter 6 måneder:**
- ✅ Alle juridiske sider er kvalitetssikret
- ✅ Database har 25+ godkjente formuleringer
- ✅ Assistentene har blitt bedre gjennom EVAL (v1.3+)

**Etter 12 måneder:**
- ✅ Merkbar reduksjon i support-henvendelser
- ✅ Øystein bruker assistenten selv (proaktivt)
- ✅ Sanity-integrasjon er i produksjon

---

## Risiko og mitigering

### Risiko 1: Øystein ser ikke verdien
**Sannsynlighet:** Middels
**Konsekvens:** Høy (blokkerer implementering)

**Mitigering:**
- Vis konkrete før/etter-eksempler i møte
- Presenter data om juridiske henvendelser
- Felles mål: "Færre henvendelser til deg = bedre innhold"
- La Øystein teste med egne tekster

---

### Risiko 2: Assistentene gir dårlige råd
**Sannsynlighet:** Middels
**Konsekvens:** Høy (svekker tillit)

**Mitigering:**
- Menneske-i-loop: Øystein godkjenner alltid juridisk innhold
- EVAL-system: Kontinuerlig læring og forbedring
- Testing i Fase 2 før produksjon
- Klare eskalerings-rutiner

---

### Risiko 3: For komplekst å bruke
**Sannsynlighet:** Lav
**Konsekvens:** Middels (lav adopsjon)

**Mitigering:**
- Start enkelt (Claude Code Skill / GPT)
- Grundig testing i Fase 2
- Brukerdokumentasjon og opplæring
- Iterere basert på feedback

---

### Risiko 4: Teknologi-skifte (Claude Code → noe annet)
**Sannsynlighet:** Middels (langsiktig)
**Konsekvens:** Lav (takket være to-lags-arkitektur)

**Mitigering:**
- To-lags-arkitektur: Lag 1 er modellagnostisk
- Ved skifte: Behold Lag 1, implementer nytt Lag 2
- Migrering tar <2 dager (ikke måneder)

---

## Avhengigheter

### Internt (Gramo)
- **Øystein:** Må delta i møte, workshop, og godkjenningsprosess
- **Bastian:** Daglig bruker, testing, feedback
- **Torstein:** Innholdsproduksjon (Fase 2+)
- **Kim:** Eventuelt tone of voice-workshop

### Eksternt
- **Are Halland:** Konseptuell design og implementering
- **Claude Code / ChatGPT:** Teknisk plattform

### Teknisk
- **Sanity CMS:** Fase 3 er avhengig av Sanity-oppsett
- **MCP (Model Context Protocol):** Eventuell integrasjon med Gramo-systemer

---

## Vedlegg

### A. Eksempel: Før/etter

#### Før (juridisk korrekt, men uforståelig)
```
"Rettighetshavere tildeles vederlag i henhold til åndsverkloven §45
ved offentlig fremføring av opptak på kringkastingsmedium, forutsatt
registrering i Echo-systemet og aktivt medlemskap."
```

**Problemer:**
- Passiv formulering ("tildeles")
- Juridisk sjargong ("kringkastingsmedium", "Echo-systemet")
- Lang, kompleks setning
- Ikke brukerorientert

---

#### Etter (juridisk korrekt + forståelig)
```
"Som medlem har du rett til vederlag når musikken din spilles på
radio og TV i Norge. For å motta vederlag må innspillingen være
registrert med ISRC-kode i vårt system.

Dette følger av åndsverkloven §45."
```

**Forbedringer:**
- ✅ Direkte tiltale ("du")
- ✅ Enkelt språk ("radio og TV" i stedet for "kringkastingsmedium")
- ✅ Korte setninger
- ✅ Fortsatt juridisk korrekt (lovhenvisning bevart)

---

### B. Terminologi-ordbok (foreløpig)

| Foretrekkes | Unngå | Forklaring |
|-------------|-------|------------|
| **Innspilling** | Recording, låt | Korrekt juridisk term |
| **Utgivelse** | Release | Norsk term |
| **Rettighetshaver** | Rightsholder | Norsk term |
| **Medlem** | Bruker (i medlemskontekst) | Spesifikt for Gramo |
| **Du** | Man, en | Direkte tiltale |
| **Radio og TV** | Kringkastingsmedium | Forståelig språk |
| **Vederlag** | Penger, betaling | Korrekt juridisk term (men kan forklares) |

**Må forklares ved første bruk:**
- ISRC → "International Standard Recording Code – en unik kode for innspillinger"
- Nærstående rettigheter → "Rettigheter for utøvende kunstnere og produsenter"
- Claiming → "Registrere at du har rettigheter til en innspilling"
- Worldwide-medlemskap → "Medlemskap som gir deg vederlag fra hele verden"

---

### C. EVAL-workflow

```
WORKING BRANCH (mandag-fredag)
├─ Bruk Klarspråk-assistent
├─ Logg læring: Klarspråk-assistent-EVAL.md (append-only)
├─ Bruk Juridisk-assistent
└─ Logg læring: Juridisk-assistent-EVAL.md (append-only)

STAGING BRANCH (fredag)
└─ Samle alle EVAL-logger i: /_EVAL/2026-W[uke].md

REVIEW (fredag/mandag)
├─ Bastian/Are gjennomgår ukesrapport
├─ Godkjenn/forkast forbetringsforslag
└─ Prioriter implementering

MERGE (mandag)
├─ Implementer godkjente forbedringer
├─ Oppdater versjonsnummer (v1.0 → v1.1)
├─ Tøm lokale EVAL-filer (klar for ny uke)
└─ Arkiver gammel versjon: /Arkiv/ÅÅÅÅ-MM-DD/
```

---

## Kontaktpersoner

**Prosjekteier:** Bastian Daae (bastian@gramo.no)
**Juridisk ansvarlig:** Øystein
**Konseptuell design:** Are Halland (are@kjernekaren.no)
**Innholdsproduksjon:** Torstein Norendal (fra Fase 2)

---

## Endringslogg

| Versjon | Dato | Endringer | Av |
|---------|------|-----------|-----|
| 1.0 | 2026-01-08 | Initial PRD opprettet | Are Halland |

---

*Sist oppdatert: 8. januar 2026*
