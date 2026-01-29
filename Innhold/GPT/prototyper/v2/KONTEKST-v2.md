# GPT-prototyper v2

> SpråkGPT og JussGPT for Gramo – modelluavhengig kontekstarkitektur

---

## Kva er dette?

Prototype for to parallelle AI-assistentar:

| Assistent | Fokus | Fil |
| --- | --- | --- |
| **SpråkGPT** | Klarspråk, nivåtilpassing, konsistens | `KONTEKST-SpråkGPT.md` |
| **JussGPT v2** | Juridisk korrektheit med eksplisitt datagrunnlag og kildehenvisninger | `KONTEKST-JussGPT.md` |

---

## Arkitektur

```
┌─────────────────────────────────────────────────────────┐
│                    KONTEKSTARKIV                        │
│  (Modelluavhengig - Markdown-filer i Git)              │
├─────────────────────────────────────────────────────────┤
│  📄 KONTEKST-SpråkGPT.md                               │
│  📄 KONTEKST-JussGPT.md                                │
│  📄 TESTTEKSTAR.md                                     │
└─────────────────────────────────────────────────────────┘
           │                              │
           ▼                              ▼
┌──────────────────────┐    ┌──────────────────────┐
│      SpråkGPT        │    │       JussGPT        │
│                      │    │                      │
│ • Nivåtilpassing     │    │ • Juridisk presisjon │
│ • Begrepskonsistens  │    │ • Risikovurdering    │
│ • Klarspråk-sjekk    │    │ • Lovhenvisning      │
│ • TONO-avgrensing    │    │ • Ja/nei-dom         │
└──────────────────────┘    └──────────────────────┘
```

---

## Slik brukar du prototypen

### I Claude Code / Nimbalyst

**SpråkGPT-analyse:**
```
Les Innhold/GPT/prototyper/v2/KONTEKST-SpråkGPT.md og analyser denne teksten:
[lim inn tekst]
```

**JussGPT v2-vurdering:**
```
Les Innhold/GPT/prototyper/v2/KONTEKST-JussGPT.md og vurder juridisk risiko:
[lim inn tekst]
```

**Kombinert:**
```
Les KONTEKST-SpråkGPT.md og KONTEKST-JussGPT.md i Innhold/GPT/prototyper/v2/.
Analyser denne teksten med begge perspektiv:
[lim inn tekst]
```

---

## Testtekstar

Sjå `TESTTEKSTAR.md` for:
- Forside (nivå 1) – god og dårleg versjon
- Om Gramo (nivå 2) – god og dårleg versjon
- ISRC-guide (nivå 2) – god og dårleg versjon

---

## Kjelder

Prototypen byggjer på:
- `Dokumenter/Stil og tone/Begrepsoversikt-Gramo.md`
- `Dokumenter/Stil og tone/Strategi-klarspråk-vs-presisjon.md`
- `Innhold/NS-ISO-24495-1-2023-Klarspråk.md`
- Øystein si "Sannhetens arkitektur" (JussGPT-inspirasjon)

---

## Nytt i v2

1. **Eksplisitt juridisk datagrunnlag** (`Datasett_Juss-GPT.md`)
2. **Lokale lovtekster** i `Bakgrunn/Juridisk/`
3. **Tvunget kildehenvisning** i alle juridiske vurderinger
4. **Strengere regler** mot å "dikte" juridisk informasjon
5. **Tydelig skille** mellom juridisk rett og praktisk utbetaling
6. **Komplett terminologiseksjon** fra jurister

Se `ENDRINGSLOGG_v1_til_v2.md` for detaljer.

---

## Status

| Komponent | Status | Neste steg |
| --- | --- | --- |
| SpråkGPT kontekst | ✅ Ferdig | Testing |
| JussGPT v2 kontekst | ✅ Ferdig | Grundig testing |
| Datasett_Juss-GPT.md | ✅ Ferdig | Utvid med vedtekter/fordelingsreglement |
| Testtekstar | ✅ Ferdig | Køyr testar |
| Sanity-integrasjon | ⏳ Planlagt | Etter validering |

---

## TODO

- [ ] Test JussGPT v2 på testtekstar
- [ ] Sammenlign v1 vs v2 resultater
- [ ] Utvid Datasett med vedtekter og fordelingsreglement
- [ ] Integrer med Sanity AI Assist
- [ ] Workshop med Kim/Øystein/Rita

---

*Versjon 2.0 – 29. januar 2026*
*Prosjekt: Gramo kontekstarkitektur*
