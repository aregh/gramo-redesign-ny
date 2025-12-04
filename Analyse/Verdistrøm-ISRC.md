# Verdistrømanalyse: ISRC-registrering

**Formål:** Dokumentere verdikjeden for ISRC-registrering og hvorfor dette er #1 prioritet for redesign
**Status:** Arbeidsdokument
**Sist oppdatert:** 28. november 2025

---

## Sammendrag

ISRC-registrering er bekreftet som **toppoppgave #1** fra alle kilder:
- GEO-analyse: 3000+ søkevisninger, svak posisjon
- Workshop: Identifisert som typisk førstegangsoppgave
- Kundeservice: Høyt volum av henvendelser

**Hovedargument:** Investering i ISRC-prosessen gir:
1. **Direkte verdiskaping** → Flere registrerte rettigheter → mer innkrevingsgrunnlag
2. **Kostnadsreduksjon** → Automatisering → færre henvendelser til medlemsservice
3. **Datakvalitet** → Bedre matching → høyere utbetalingspresisjon (96% → 99%+)

---

## Verdistrøm: Fra utgivelse til utbetaling

### Referanse: Utbetalingsverdistrøm (eksisterende)

```
🎵 Låt spilles → Spilletidsrapport → Echo → Matching → Avregning → 💰 Utbetaling
                                              ↑
                                    ISRC er nøkkelen til matching!
```

**Kritisk punkt:** Matching-prosessen (96% kvalitet) avhenger av:
- ISRC-kode knyttet til opptak
- Korrekt registrerte rettighetshavere
- Data fra plateselskap/digital distributør

**Uten ISRC:** Manuelt identifiseringsarbeid → kostnader, forsinkelser, feilutbetalinger

---

## Verdistrøm: ISRC-registrering

### Nåværende prosess (AS-IS)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ RETTIGHETSHAVER                                                                 │
├─────────────┬───────────────┬───────────────┬───────────────┬──────────────────┤
│ Trenger ISRC│ Søker info    │ Finner løsning│ Registrerer   │ Får ISRC         │
│             │               │               │               │                  │
│ ⏱️ Trigger  │ ⏱️ 10-60 min  │ ⏱️ 5-30 min   │ ⏱️ 15-45 min  │ ⏱️ Umiddelbart   │
│             │               │               │               │ (eller 1-3 dager)│
└─────────────┴───────────────┴───────────────┴───────────────┴──────────────────┘
                    │                 │                 │
                    ▼                 ▼                 ▼
              ┌─────────────────────────────────────────────────────────────────┐
              │ KANALER (dagens situasjon - fragmentert)                        │
              ├─────────────────────────────────────────────────────────────────┤
              │ • gramo.no (Webflow) - overfladisk info                        │
              │ • Intercom - "Alt om ISRC"-artikkel                            │
              │ • Min Side - registreringsskjema                               │
              │ • Medlemsservice (e-post/telefon) - manuell hjelp              │
              └─────────────────────────────────────────────────────────────────┘
                                        │
                                        ▼
              ┌─────────────────────────────────────────────────────────────────┐
              │ GRAMO (intern prosess)                                          │
              ├───────────────┬───────────────┬───────────────┬────────────────┤
              │ Mottar        │ Validerer     │ Tildeler ISRC │ Bekrefter      │
              │ forespørsel   │ data          │               │                │
              │               │               │               │                │
              │ ⏱️ Varierer   │ ⏱️ Manuelt?   │ ⏱️ Auto/manu? │ ⏱️ E-post      │
              └───────────────┴───────────────┴───────────────┴────────────────┘
```

### Identifiserte problemer

| Problem | Konsekvens | Kostnad |
|---------|------------|---------|
| **Fragmentert info** | Brukere finner ikke svar | +henvendelser til KS |
| **Flere systemer** | Forvirring om hvor man registrerer | +dropout, +feil |
| **Manuell prosess** | Lav kapasitet, lang behandlingstid | +kostnad per registrering |
| **Ingen selvbetjening** | Avhengig av KS for enkle oppgaver | +ventetid, -tilfredshet |
| **Manglende on-the-fly** | Må vite om ISRC på forhånd | -registreringer |

### Målbilde (TO-BE)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ RETTIGHETSHAVER                                                                 │
├─────────────┬───────────────┬───────────────┬──────────────────────────────────┤
│ Trenger ISRC│ Finner guide  │ Registrerer   │ Får ISRC umiddelbart             │
│             │               │ selvbetjent   │                                  │
│ ⏱️ Trigger  │ ⏱️ 2-5 min    │ ⏱️ 5-10 min   │ ⏱️ Sekunder                      │
│             │ (GEO-optimert)│ (guidet flyt) │ (automatisk)                     │
└─────────────┴───────────────┴───────────────┴──────────────────────────────────┘
                    │                 │                 │
                    ▼                 ▼                 ▼
              ┌─────────────────────────────────────────────────────────────────┐
              │ SANITY INNHOLDSHUB (samlet)                                     │
              ├─────────────────────────────────────────────────────────────────┤
              │ • ISRC-landingsside med komplett guide                         │
              │ • FAQ med schema.org (GEO-optimert)                            │
              │ • Steg-for-steg-wizard                                         │
              │ • Direkte lenke til Apollon-registrering                       │
              │ • On-the-fly ISRC-generering i flyten                          │
              └─────────────────────────────────────────────────────────────────┘
                                        │
                                        ▼
              ┌─────────────────────────────────────────────────────────────────┐
              │ APOLLON (automatisert)                                          │
              ├───────────────┬───────────────┬────────────────────────────────┤
              │ Mottar data   │ Validerer     │ Tildeler + bekrefter           │
              │ (strukturert) │ automatisk    │ umiddelbart                    │
              │               │               │                                │
              │ ⏱️ Real-time  │ ⏱️ Sekunder   │ ⏱️ Sekunder                    │
              └───────────────┴───────────────┴────────────────────────────────┘
```

---

## Verdiberegning

### Volumestimater (hypoteser - må verifiseres)

| Metrikk | Anslag | Kilde |
|---------|--------|-------|
| ISRC-registreringer per år | ~5000-10000? | Må hentes fra Gramo |
| Henvendelser til KS om ISRC | ~20-30% av alle? | Må verifiseres |
| Gjennomsnittlig behandlingstid per henvendelse | 15-30 min? | Må måles |
| Kostnad per KS-henvendelse | 200-400 kr? | Må beregnes |

### Verdimodell

```
NÅVÆRENDE KOSTNAD (årlig, estimat)
──────────────────────────────────
Henvendelser om ISRC:     2000 stk/år (hypotese)
× Behandlingstid:         20 min/stk
× Timekostnad:            500 kr/time
= KS-kostnad ISRC:        333.000 kr/år

+ Tapt innkreving pga manglende ISRC:     ? (ukjent)
+ Manuell matching:                        ? (ukjent)
────────────────────────────────────────────────────
Total årlig kostnad ISRC-problemer:        500.000+ kr/år (konservativt)


INVESTERING I FORBEDRING
────────────────────────
GEO-optimert ISRC-guide:          30.000 kr
Selvbetjeningsflyt design:        50.000 kr
Apollon-integrasjon:              ?
────────────────────────────────────────────
Total investering:                ~100.000 kr + Apollon


FORVENTET GEVINST (årlig)
─────────────────────────
Reduksjon KS-henvendelser:        -50% = 166.500 kr/år
Økt registreringsvolum:           +20% = ? kr/år (mer innkrevingsgrunnlag)
Bedre matching:                   +3% = ? kr/år (færre feilutbetalinger)
────────────────────────────────────────────────────────────────────────
Konservativ årlig gevinst:        200.000+ kr/år

ROI:                              >100% i år 1
Payback:                          <6 måneder
```

---

## Kompleksitetskart

### Avhengigheter

```
ISRC-forbedring avhenger av:
├── Apollon (go-live juni 2026)
│   ├── API for selvbetjening?
│   ├── On-the-fly ISRC-tildeling?
│   └── Integrasjon med Sanity?
│
├── Sanity CMS
│   ├── ISRC-innholdsmodell
│   ├── Schema.org-implementering
│   └── Flerspråklig støtte?
│
├── Innholdsproduksjon
│   ├── ISRC-guide (komplett)
│   ├── FAQ med strukturerte data
│   └── Steg-for-steg-wizard
│
└── Kundeservice
    ├── Opplæring i ny flyt
    └── Feedback-loop til forbedring
```

### Risiko

| Risiko | Sannsynlighet | Konsekvens | Tiltak |
|--------|---------------|------------|--------|
| Apollon forsinket | Medium | Høy | Start med innhold, design for framtidig integrasjon |
| Brukeradopsjon lav | Lav | Medium | Brukertesting, iterasjon |
| Datakvalitet i registrering | Medium | Høy | Validering i flyt, tydelige instruksjoner |

---

## Kobling til andre verdistrømmer

### ISRC → Utbetaling

```
Bedre ISRC-registrering
        ↓
Flere korrekte opptak i systemet
        ↓
Høyere matching-rate (96% → 99%+)
        ↓
Mer presise utbetalinger
        ↓
Høyere tillit hos rettighetshavere
        ↓
Flere medlemmer, mer innkreving
```

### ISRC → Omdømme

```
GEO-optimert ISRC-guide
        ↓
Gramo som autoritativ kilde for KI
        ↓
Økt synlighet i søk og AI-assistenter
        ↓
Flere besøk, flere registreringer
        ↓
Posisjonering som kompetansesenter
```

---

## Neste steg

### Umiddelbart (forprosjekt)
1. [ ] **Verifiser volumdata** - Hent faktiske tall fra Gramo på ISRC-registreringer og KS-henvendelser
2. [ ] **Kartlegg nåværende prosess** - Detaljer hvert steg i dagens ISRC-flyt
3. [ ] **Intervju KS** - Hvilke ISRC-spørsmål får de? Hva tar tid?
4. [ ] **Avklar Apollon-muligheter** - Hva kan automatiseres? API-tilgang?

### Hovedprosjekt
5. [ ] Design selvbetjeningsflyt
6. [ ] Produser GEO-optimert ISRC-innhold
7. [ ] Implementer i Sanity
8. [ ] Integrer med Apollon
9. [ ] Mål effekt og iterer

---

## Relaterte dokumenter

- [GEO-ANALYSE.md](GEO-ANALYSE.md) - Søkeordanalyse, ISRC-prioritet #1
- [../pakker/PAKKE-Toppoppgaver.md](../pakker/PAKKE-Toppoppgaver.md) - Toppoppgave-metodikk
- [../../KOMMUNIKASJON.md](../../KOMMUNIKASJON.md) - Møtereferater med volumdata

---

## Referanse: Utbetalings-VSA (eksisterende)

> Verdistrøm fra en låt spilles på radio til rettighetshaver har penger på konto

| Steg | System | Input | Ansvarlig | Aktivitetstid | Ventetid | Kvalitet |
|------|--------|-------|-----------|---------------|----------|----------|
| 1. Låt spilles | Avviklingssystem | Sendeskjema | Radio | - | - | - |
| 2. Til spilletidsrapport | Avviklingssystem | Datafil | Radio | 1 sek | 5 dager | - |
| 3. Sende rapport | API/E-post | Datafil | Radio | - | - | - |
| 4. Lese inn rapport | Echo/Excel | Datafil | Rikard | - | - | - |
| 5. **Matching** | Echo | Repertoar fra: plateselskap, distributør, Min Side, andre CMO | Medlemsservice | - | - | **96%** |
| 6. Duplikatsjekk | Echo | - | - | - | - | - |
| 7. Finne manglende | Echo | - | - | - | - | - |
| 8. Klargjøre avregning | Echo | Matchet repertoar | - | - | - | - |
| 9. Beregne utbetalingssats | - | - | - | - | - | - |
| 10. Oppdatere saldo | - | Beløp | - | - | - | - |
| 11. Sende til bank | - | Kontonummer fra Min Side | Rikard? | - | - | - |
| 12. Retur feilede | - | - | - | - | - | - |
| 13. Kontakte RH | E-post | - | - | - | - | - |
| 14. Penger på konto | - | - | Rettighetshaver | - | - | - |

**Kritisk innsikt:** 96% matching-kvalitet betyr at 4% av utbetalingene krever manuell håndtering. Bedre ISRC-registrering forbedrer dette direkte.

---

*Arbeidsdokument - oppdateres kontinuerlig gjennom forprosjektet*
