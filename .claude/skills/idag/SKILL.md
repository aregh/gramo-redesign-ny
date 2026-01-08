---
name: idag
description: Viser dagens dato i norsk format med ukenummer. Bruk når du trenger å vite gjeldende dato, uke, eller fase i prosjektet.
allowed-tools: Bash(date:*)
---

# I dag - Gjeldende dato

## Hva denne skill gjør

Viser dagens dato i norsk format med ukenummer og prosjektfase.

## Når skal du bruke denne

Bruk denne skill når:
- Brukeren spør "hva er datoen?"
- Du trenger å vite hvilken uke vi er i
- Du skal oppdatere dokumenter med "sist oppdatert"
- Du skal sjekke hvilken prosjektfase vi er i
- Du skal generere commit-melding basert på endringer

## Instruksjoner

1. **Hent rådata:**
   ```bash
   date +"%d %m %Y %V"
   ```
   Dette gir: `DAG MÅNED ÅR UKE` (f.eks. "08 01 2026 02")

2. **Konverter til norsk format:**
   - Fjern ledende null fra dag og uke
   - Konverter månedsnummer til norsk månedsnavn:
     * 01 = januar, 02 = februar, 03 = mars, 04 = april
     * 05 = mai, 06 = juni, 07 = juli, 08 = august
     * 09 = september, 10 = oktober, 11 = november, 12 = desember

3. **Identifiser prosjektfase:**
   - Uke 1-2 (2026): Fase 1 (avslutning)
   - Februar-mars 2026: Fase 2
   - April-juni 2026: Fase 3

4. **Rapporter resultat:**
   ```
   📅 I dag: [dag]. [måned] [år]
   📆 Uke: [uke]
   🎯 Fase: [fase]
   ```

## Best practices

- Bruk norske månedsnavn (januar, februar, mars, etc.)
- Vis alltid både dato og uke
- Inkluder prosjektfase når relevant
- Formater tall uten ledende null (8. januar, ikke 08. januar)

## Eksempel på bruk

```
Bruker: "Hva er datoen i dag?"
Claude:
📅 I dag: 8. januar 2026
📆 Uke: 2
🎯 Fase: Fase 1 (siste uke)
```

## Månedsnavn på norsk

- 01 = januar
- 02 = februar
- 03 = mars
- 04 = april
- 05 = mai
- 06 = juni
- 07 = juli
- 08 = august
- 09 = september
- 10 = oktober
- 11 = november
- 12 = desember

## Generere commit-meldinger

Når du skal lage commit-melding:

1. **Kjør git status og git diff for å se endringer**

2. **Analyser endringene:**
   - Hvilke filer er endret/lagt til/slettet?
   - Hva er hovedformålet med endringene?
   - Finnes det et felles tema?

3. **Generer melding i dette formatet:**
   ```
   [Verb] [hva] [hvor] ([Bruker])
   ```

4. **Verb-eksempler (bruk alltid norsk):**
   - Legg til (for nye filer/funksjonalitet)
   - Oppdater (for endringer i eksisterende filer)
   - Fjern (for slettede filer)
   - Arkiver (for flytting til arkiv)
   - Rydd (for reorganisering)
   - Fiks (for bugfiks)

5. **Eksempler på gode commit-meldinger:**
   - "Legg til /idag skill og oppdater KONTEKST.md (Are Halland)"
   - "Oppdater LOGG.md med møtereferat fra 8. januar (Bastian Daae)"
   - "Arkiver gamle prosjektmandater til Dokumenter/Arkiv/ (Are Halland)"
   - "Rydd opp i Analyse/-struktur med undermapper (Bastian Daae)"

6. **Best practices:**
   - Maks 50 tegn i første linje (ekskl. brukernavn)
   - Bruk imperativ form (Legg til, ikke Legger til)
   - Vær spesifikk men konsis
   - Inkluder alltid brukerens navn i parentes
   - Bruk bokmål
