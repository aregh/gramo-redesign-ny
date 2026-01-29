# GPT-prototyper v1

> SpråkGPT og JussGPT for Gramo – modelluavhengig kontekstarkitektur

---

## Kva er dette?

Prototype for to parallelle AI-assistentar:

| Assistent | Fokus | Fil |
| --- | --- | --- |
| **SpråkGPT** | Klarspråk, nivåtilpassing, konsistens | `KONTEKST-SpråkGPT.md` |
| **JussGPT** | Juridisk korrektheit, risikovurdering | `KONTEKST-JussGPT.md` |

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
Les Innhold/Prototyper/GPT/v1/KONTEKST-SpråkGPT.md og analyser denne teksten:
[lim inn tekst]
```

**JussGPT-vurdering:**
```
Les Innhold/Prototyper/GPT/v1/KONTEKST-JussGPT.md og vurder juridisk risiko:
[lim inn tekst]
```

**Kombinert:**
```
Les KONTEKST-SpråkGPT.md og KONTEKST-JussGPT.md i Innhold/Prototyper/GPT/v1/.
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

## Status

| Komponent | Status | Neste steg |
| --- | --- | --- |
| SpråkGPT kontekst | ✅ Ferdig | Testing |
| JussGPT kontekst | ✅ Ferdig | Utvid med Øystein sitt datasett |
| Testtekstar | ✅ Ferdig | Køyr testar |
| Sanity-integrasjon | ⏳ Planlagt | Etter validering |

---

## TODO

- [ ] Test SpråkGPT på testtekstar
- [ ] Test JussGPT på testtekstar
- [ ] Få tilgang til Øystein sitt "golden standard"-datasett
- [ ] Integrer med Sanity AI Assist
- [ ] Workshop med Kim/Øystein/Rita

---

*Versjon 1.0 – 22. januar 2026*
*Prosjekt: Gramo kontekstarkitektur*
