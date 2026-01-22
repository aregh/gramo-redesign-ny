# GPT-prototyper for Gramo

> Oversikt over prototype-katalogen og hvordan den brukes

---

## Formål

Denne katalogen inneholder **modelluavhengige kontekstfiler** for språk- og juridisk kvalitetssikring av innhold til gramo.no. Filene er designet etter kontekstarkitektur-prinsippene – de kan brukes med hvilken som helst AI-modell.

---

## Katalogstruktur

```
/Innhold/GPT/prototyper/
├── KONTEKST.md          ← Du er her
└── v1/                  ← Prototype versjon 1
    ├── KONTEKST.md      ← Versjonsoversikt
    ├── KONTEKST-SpråkGPT.md   ← Språkassistent
    ├── KONTEKST-JussGPT.md    ← Juridisk assistent
    ├── stilogtone.md    ← Stil- og toneguide
    ├── klarsprak-lix.md ← LIX-test for lesbarhet
    ├── TESTTEKSTAR.md   ← Eksempeltekster
    ├── om_gramo_draft.md      ← Testtekst: Om Gramo
    └── isrc_draft.md    ← Testtekst: ISRC-guide
```

---

## De to GPT-ene

### SpråkGPT
Sikrer at tekst fra Gramo:
- Bruker riktig nivå (1/2/3)
- Er konsistent med begrepsoversikten
- Følger klarspråkprinsippene (ISO 24495-1)
- Skiller tydelig mellom Gramo og TONO

**Kildefiler:** stilogtone.md, klarsprak-lix.md

### JussGPT
Sikrer at tekst fra Gramo:
- Ikke gir uriktige løfter
- Bruker korrekte juridiske avgrensninger
- Skiller mellom Gramo (lydopptak) og TONO (musikkverk)
- Refererer korrekt til åndsverkloven

**Kildefiler:** Juridisk rammeverk i KONTEKST-JussGPT.md

---

## Tre-nivåmodellen

All tekst fra Gramo hører til ett av tre nivåer:

| Nivå | Kontekst | Språk | LIX-mål |
|------|----------|-------|---------|
| **1** | Forside, kampanje, SoMe | Hverdagsspråk | 25-35 |
| **2** | Artikkel, FAQ, Om Gramo | Forklart fagspråk | 35-45 |
| **3** | Vedtekter, avtaler, reglement | Juridisk presist | 45-55 |

---

## Arbeidsflyt

1. **Skriv tekst** i en draft-fil (f.eks. `om_gramo_draft.md`)
2. **Be om analyse** fra SpråkGPT og/eller JussGPT
3. **Vurder forslag** – aksepter, forkast eller kommenter
4. **Gjenta** til teksten er godkjent

### Eksempel på kommando
```
Kjør SpråkGPT og JussGPT på om_gramo_draft.md
```

---

## Språk i prototype

**Viktig:** Alle filer i prototypen skal være på **bokmål**, da dette er målformen Gramo bruker i sine publikasjoner.

---

## Versjonering

- **v1/** – Første prototype (januar 2026)
- Fremtidige versjoner får egne mapper (v2/, v3/, osv.)
- Hver versjon har sin egen KONTEKST.md med endringslogg

---

## Neste steg (TODO)

- [ ] Integrere Øysteins "golden standard" datasett i JussGPT
- [ ] Vurdere Sanity-integrasjon for direktepublisering
- [ ] Lage flere testtekster på alle tre nivåer
- [ ] Evaluere og iterere basert på testing

---

*Versjon 1.0 – 22. januar 2026*
*Kontekstarkitektur: Gramo*
