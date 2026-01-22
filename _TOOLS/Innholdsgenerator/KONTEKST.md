# Innholdsgenerator

> AI-assistert tekstproduksjon med kontekstsensitiv kvalitetskontroll

## Status

**Fase:** Konseptutvikling (jan 2026)
**Tidligere versjoner:** Arkivert i `_ARKIV/2026-01-21/`

---

## Visjon

Et grensesnitt for tekstarbeid der:
- **Venstre:** Tekstinput og redigering (Nimbalyst-lignende)
- **Høyre:** Chat/kommandoer for justering, korrigering, omskriving

### Integrerte verktøy
- **SpråkGPT** - Språkkvalitet, klarspråk, tone
- **JusGPT** - Juridisk presisjon, ansvar, forbehold

---

## Designprinsipper

1. **Teksten i fokus** - Ikke dashboard, men arbeidsflate
2. **Iterativ forbedring** - Juster, ikke generer på nytt
3. **Kontekstsensitiv** - Kjenner målgruppe, oppgave, stil
4. **Transparent** - Viser hva AI endret og hvorfor

---

## Kjernemodellen som struktur

Input-kontekst bygges rundt de 6 elementene:

| Element | Rolle i verktøyet |
| --- | --- |
| **Målgruppe** | Hvem skal lese dette? |
| **Oppgave** | Hva prøver leseren å gjøre? |
| **Innhold** | Selve teksten som bearbeides |
| **Lenker** | Kilder, referanser, fakta |
| **CTA** | Ønsket handling etter lesing |
| **Mål** | Hva skal teksten oppnå for avsender? |

---

## Åpne spørsmål

- [ ] Bygge på Nimbalyst, eller eget grensesnitt?
- [ ] SpråkGPT/JusGPT som innebygde "modi" eller separate verktøy?
- [ ] Hvordan visualisere endringer (diff, highlight, annotasjoner)?
- [ ] Skal tidligere versjoner (V1-V3) gjenbrukes?

---

## Neste steg

1. Definer MVP-funksjonalitet
2. Skisser grensesnitt (mockup)
3. Velg teknisk tilnærming

---

## Arkiv

Tidligere prototyper ligger i `_ARKIV/2026-01-21/`:
- V1: Markdown-template (copy-paste)
- V2: Web-dashboard konsept + prototype
- V3: Moderne dark-mode prototype + PRD
