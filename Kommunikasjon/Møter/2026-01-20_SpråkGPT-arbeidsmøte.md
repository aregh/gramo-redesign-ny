# Arbeidsmøte - SpråkGPT og juridisk presisjon

**Dato:** 20. januar 2026
**Deltakere:** Are Halland, Rita H. Mamelund, Bastian Daae, Øystein (juridisk rådgiver), Kim Skarning Andersen
**Transkripsjon:** [2026-01-20-SpråkGPT-ufullstendig.md](./../Transkripsjoner/2026-01-20-SpråkGPT-ufullstendig.md)

---

## Sammendrag

Møtet handlet om hvordan Gramo skal balansere **juridisk presisjon** med **brukervennlig kommunikasjon** - og hvordan AI/GPT kan hjelpe med dette. Øystein presenterte sin tilnærming til "JustGPT" (juridisk GPT) og demonstrerte hvordan han har bygget opp et system med læringsdokumenter og kontrollerte datakilder.

**Hovedkonklusjon:** Det finnes en "sannhet" (juridisk grunnlag) som må ivaretas, og kommunikasjon må bygges på denne i ulike lag tilpasset ulike målgrupper og kanaler.

---

## 1. Øysteins juridiske rammeverk

### Gramos juridiske forpliktelser
Øystein redegjorde for det juridiske grunnlaget som styrer Gramos virksomhet:

| Kilde | Betydning |
| --- | --- |
| **Åndsverkloven §21** | Kjerneforpliktelsen - fordeling av vederlag |
| **CRM-loven** | Lov om kollektiv forvaltning (EU-direktiv) |
| **Forvaltningsloven** | Innsyn og opplysningsplikt |
| **Vedtekter** | Formål og rammer |
| **Utvekslingsavtaler** | Internasjonale forpliktelser |
| **Styrevedtatt strategi** | Operasjonelle føringer |

**Nøkkelpoeng:** Alt Gramo kommuniserer må forankres i dette rammeverket. Feil kommunikasjon kan føre til klagesaker, prosessrisiko, og i verste fall tap av godkjennelse.

### Forskjellen mellom Gramo og TONO
- **TONO:** Forvalter rettigheter (opphavsrett) - trenger medlemmer for forvaltningskontrakt
- **Gramo:** Ren pengeparagraf - "spilt = penger, utbetalt = ingen krav"
- Gramo har ikke "rettigheter" på samme måte - det er en fordelingsmekanisme

---

## 2. To-lags modellen for kommunikasjon

### Arkitekturprinsipp: Sannhet + Dialog

```
┌─────────────────────────────────────┐
│  LAG 2: DIALOG                      │
│  - Fleksibelt, personlig            │
│  - Tilpasset målgruppe/kanal        │
│  - Kreativitet innenfor ramme       │
├─────────────────────────────────────┤
│  LAG 1: SANNHET (Grunnstandard)     │
│  - Juridiske fakta                  │
│  - Uforanderlig, sentralisert       │
│  - Må være korrekt ALLTID           │
└─────────────────────────────────────┘
```

**Fire-stegs oppskrift (fra Øysteins AI-genererte presentasjon):**
1. **Identifiser** - Hvilken grunnstandard gjelder?
2. **Analyser** - Hvem snakker vi med? Hva trenger de?
3. **Form dialogen** - Velg tone, ord, kanal
4. **Verifiser** - Er det i tråd med sannheten?

---

## 3. Utfordringen: Presisjon vs. forståelse

### Konkret problemstilling
- Folk bruker ikke juridiske termer ("vederlag", "lydopptak", "utøvende kunstner")
- Men upresise termer ("sang", "musikk", "penger") kan skape prosessrisiko
- Eksempel: Hvis GPT bruker feil kapittel i åndsverkloven, kan det brukes mot Gramo i en klagesak

### Ritas kommunikasjonsmål (vedtatt)
1. Kjenne til Gramo og forstå hva vi gjør
2. Oppleve at det er lett å finne, forstå og bruke
3. Velge Gramo fordi de ser verdien
4. Forstå hvorfor det er viktig å bruke musikk lovlig

### ISO-standard for klarspråk
- **NS-ISO 24495-1:2023** - Klarspråk er tekst leseren kan "finne, forstå og bruke"
- Skal velge ord som er kjente for leseren
- Men må også være juridisk presist

---

## 4. Løsningsforslag: Tre nivåer

| Nivå | Beskrivelse | Risiko | Eksempel |
| --- | --- | --- | --- |
| **Nivå 1** | Hverdagsspråk, inngangsporter | Lav | "Få betalt for musikken din" |
| **Nivå 2** | Forklarende, kontekstuelt | Middels | "Vederlag (betaling) for..." |
| **Nivå 3** | Juridisk presist, formelt | Ingen | "Jf. åndsverkloven §21..." |

**Kreative løsninger for nivå 1-2:**
- Mouseover/tooltip for vanskelige begreper
- Faktabokser med juridisk presisjon
- Eksempler og case-historier
- Disclaimer hvor nødvendig
- Fotnoter med kilder
- "Hva som kalles X på fagspråk"

---

## 5. Øysteins GPT-løsning

### Teknisk tilnærming
- Lukkede datasett (ikke åpent internett)
- Læringsdokumenter: Lovtekst, lovkommentarer, interne retningslinjer
- Kan oppdateres umiddelbart ved lovendringer
- Kvalitetssikret output

### Demonstrert brukscase: Arvesaker
- Tidligere brukte saksbehandlere mye tid på å forstå skifteattest-krav
- GPT kan nå håndtere disse sakene med korrekt juridisk grunnlag
- Genererer kommunikasjon som er både korrekt og forståelig

### TONO-eksempel
- Øystein har hjulpet TONO med lignende løsning
- 3 e-poster generert av AI → sak løst
- Ansatte kunne bruke tid på neste sak

---

## 6. Begrepsutfordringer

### Problematiske termer
| Juridisk term | Folkelig term | Problem |
| --- | --- | --- |
| Lydopptak | Sang, musikk | Upresist - hva med podcast? |
| Vederlag | Betaling, penger | Upresist - ikke inntekt |
| Utøvende kunstner | Artist, musiker | Inkluderer dirigenter, studiomusikere |
| Produsent | Plateselskap, label | Ulike kategorier forvirrer |

### Behov for begrepsoversikt
- Må definere hvilke termer som er "go" på ulike nivåer
- Noen termer kan ALDRI brukes (for upresise)
- Andre kan brukes med forklaring

---

## 7. Teknisk implementering

### Øysteins arkitektur
- Datasett (filer) ligger lokalt - full kontroll
- Prompter lagret separat fra modell
- Kan eksporteres til ulike AI-modeller (modell-agnostisk)
- Python-integrasjon for automatisering

### Are: Kontekstarkitektur
- Samme prinsipp: Kontroll på kontekst
- Datasett + Prompter = Portabelt system
- Kan kobles til Claude, GPT, Gemini etc.

### Neste steg: Kobling
- SpråkGPT (kommunikasjon) + JustGPT (juridisk) må snakke sammen
- Begge må validere mot felles grunnstandard
- Teknisk løsning må utredes

---

## 8. Beslutninger og neste steg

### Enighet
- [x] To-lags modellen er riktig tilnærming
- [x] Øystein har kontroll på juridisk GPT
- [x] SpråkGPT må bygges på samme prinsipp
- [x] Vi må lage en begrepsoversikt (nivå 1-2-3)

### Oppgaver

| Oppgave | Ansvarlig | Frist |
| --- | --- | --- |
| Begrepsoversikt - første utkast | Bastian + Are | TBD |
| Koble SpråkGPT til ISO-standard | Are | TBD |
| Demonstrere JustGPT-integrasjon | Øystein | TBD |
| Teste nivåmodellen på eksisterende tekster | Rita | TBD |

### Åpne spørsmål
- Hvordan implementere teknisk kobling mellom språk- og jus-GPT?
- Hvilke ord er absolutt forbudt på nivå 1-2?
- Hvordan håndtere målgrupper som profesjonelle agenter vs. nye artister?

---

## 9. Sitater fra møtet

> "Hvis du forenkler noe som alle andre sier er komplisert, så er det der utfordringen ligger." - Øystein

> "Det er like viktig at folk forstår det som at det er korrekt." - Øystein

> "Vi har sannheten, og vi tar oss av kommunikasjonen." - Kim

> "Kreativitet handler om å jobbe innenfor rammer - har du en ramme, er det mye enklere å være kreativ." - Are

> "Folk sier ikke vederlag. Det er ingen sluttbrukere som sier det. Så hvis vi ikke bruker begrepene folk søker på, vil de aldri finne informasjon." - Deltaker

---

*Referent: Claude (basert på transkripsjon)*
*Godkjent: [Ikke godkjent]*
