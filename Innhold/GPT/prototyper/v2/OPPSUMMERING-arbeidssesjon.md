# Oppsummering av arbeidssesjon – GPT v2 kontekstfiler

**Dato:** 2. februar 2026
**Formål:** Dokumentere arbeidet med å forbedre v2-kontekstfilene basert på test av musikkkontoret-tekst

---

## Hva vi har oppnådd

Vi har jobbet med å forbedre v2-kontekstfilene for GPT-ene (SpråkGPT og JussGPT) basert på en grundig gjennomgang av en testtekst for musikkkontorets nettsider.

---

## Viktige innsikter vi har kartlagt

### 1. Produsent-begrepet

**Juridisk definisjon (Høyesterett HR-2023-2282-A):**
> "Den som forestår, i betydningen tilrettelegger og bærer omkostningene med, produksjonen av opptakene"

**Folkelig forklaring:**
- "Den som har masterrettighetene" (kan brukes som supplement, ikke alene)
- "Plateselskap eller den som gir ut egen musikk" (nivå 1)

**Vanlig misforståelse:**
Folk tror "produsent" = musikkprodusent/studioprodusent (kreativ rolle)

**Viktig:**
- Man "innehar rettigheter", man "eier" dem ikke (immaterielt vs. fysisk)
- Unngå "mastereier" (man eier ikke immaterielle rettigheter)

---

### 2. To rettighetstyper (ikke to grupper)

**50/50-deling:**
- 50% produsentrettigheter (til den som tilrettela/bekostet)
- 50% utøvende kunstner-rettigheter (til de som spilte/sang/dirigerte)

**Viktig:**
Samme person kan ha begge rettighetstyper samtidig.

**Eksempel (Moa):**
Moa tilrettelegger og bærer omkostningene med produksjonen av opptaket (produsent) og synger (utøvende kunstner). Hun får vederlag for begge rettighetstyper.

---

### 3. Rollekoder for utøvende kunstnere

**Rollekode A:**
- Solist eller soloartist
- Featured artist
- Fast medlem i et band

**Rollekode B:**
- Musiker som ikke er fast medlem i bandet
- Orkestermedlem
- Kormedlem
- Remixer

**Rollekode C:**
- Dirigent
- Musikalsk leder

**Viktig:**
En musikkprodusent/studioprodusent som kun jobber kreativt (mixing, arrangementer) UTEN å spille/synge/dirigere har IKKE rettigheter som utøvende kunstner via Gramo – med mindre de også var musikalsk leder (Rolle C).

---

### 4. Strømming – to ulike misforståelser

**A) Juridisk/operasjonell: "Hva dekker Gramo?"**
- Gramo dekker: Radio, TV, butikker, kaféer, treningssentre (lineær overføring + offentlig fremføring)
- Gramo dekker IKKE: Spotify, Tidal, Apple Music (on-demand)

**B) Rettighetshaver-perspektiv: "Får jeg penger fra Gramo for Spotify?"**
- NEI fra Gramo
- JA fra andre: TONO (hvis du skrev musikken), plateselskap/distributør (hvis du er artist)

**Viktig:**
Alltid lede videre til TONO når vi forklarer at Gramo ikke dekker Spotify: "Men TONO betaler for strømming hvis du skrev musikken."

---

### 5. Kollektiv forvaltning

**Essensen:**
I stedet for at brukere må finne og betale hver enkelt rettighetshaver, betaler de til Gramo. Vi fordeler så pengene.

**Viktig:**
Ikke bruk "avtale" om Gramos oppkrevingsmetode. Gramo bruker lovhjemmel, ikke privatrettslige avtaler.

**Riktig formulering:**
> "Gramo gjør det enkelt: I stedet for at butikker og radiostasjoner må finne og betale hver enkelt artist og plateselskap, betaler de til Gramo. Vi fordeler så pengene."

**Feil formulering:**
> ❌ "Gramo inngår avtaler på vegne av rettighetshavere"
> ❌ "Slik at de slipper å inngå avtale" (kan misforstås som at Gramo driver med avtaleklarering)

---

### 6. Eksempler på offentlig bruk

**Primære (bruk alltid):**
- Butikker
- Kaféer
- Treningssentre

**Sekundære (bruk kun ved behov for flere):**
- Hoteller
- Restauranter

**Ikke dokumentert:**
- Festivaler (var en hallusinering – ikke bruk uten verifisering)

---

### 7. Ordvalg og SEO

**"Vederlag" = "penger" i praksis:**
- Nivå 1: Prioriter "penger", "betalt", "Gramo-penger" (SEO)
- Nivå 2: "Vederlag (penger)" eller bare "vederlag" MÅ forklares
- Nivå 3: "Vederlag" uten forklaring

**"Produsent" alltid med kontekst:**
- Nivå 1: "Plateselskap" eller "den som gir ut egen musikk"
- Nivå 2: "Produsent (den som tilrettelegger og bærer omkostningene med produksjonen av opptaket)" ELLER "Produsent (den som har masterrettighetene)"
- Nivå 3: "Produsent av lydopptak iht. § 20" + HR-definisjon

---

## Filer som er opprettet/oppdatert

### ✅ Fullført

**1. `Innhold/GPT/Begreper_og_definisjoner.md`** (flyttet + oppdatert)
- Flyttet fra `Innhold/` til `Innhold/GPT/`
- Ny seksjon: To rettighetstyper (linje 43-57)
- Oppdatert produsent-definisjon (linje 59-75)
- Oppdatert strømming-seksjon med to misforståelser (linje 124-144)
- Primære/sekundære eksempler på offentlig bruk (linje 107-108)
- Moa-eksempel (linje 73)

**2. `Innhold/GPT/Datasett_Fordeling.md`** (ny fil)
Inneholder:
- To rettighetstyper + 50/50-deling
- Rollekoder A/B/C med definisjoner
- Poengsystem (placeholder - skal fylles av Gramo)
- Vanlige misforståelser om fordeling
- Moa-eksempel

**3. `Innhold/GPT/prototyper/v2/Forklaringsstrategier.md`** (ny fil)
Inneholder detaljerte strategier for:
- Hvordan forklare "produsent" på nivå 1/2/3
- Hvordan forklare "to rettighetstyper" (når og hvordan)
- Hvordan forklare "kollektiv forvaltning" (med varianter)
- Hvordan forklare strømming (to misforståelser + nivåtilpassing)

### ❌ Ikke rørt (som avtalt)

- `Datasett_Juss-GPT.md` – Kun juristen skal oppdatere denne
- `stilogtone.md` – Ikke oppdatert (reversert)
- `KONTEKST-SpråkGPT.md` – Ikke oppdatert (reversert)
- `KONTEKST-JussGPT.md` – Ikke oppdatert (reversert)

---

## Hvor vi skal fortsette

### Neste steg (når du er klar)

**1. Gjennomgå de nye filene:**
- [ ] Er `Begreper_og_definisjoner.md` korrekt oppdatert?
- [ ] Er `Datasett_Fordeling.md` korrekt?
- [ ] Er `Forklaringsstrategier.md` korrekt?

**2. Bestemme hva som skal oppdateres i eksisterende filer:**
- [ ] Hva skal inn i `stilogtone.md`? (hvis noe)
- [ ] Hva skal inn i `KONTEKST-SpråkGPT.md`?
- [ ] Hva skal inn i `KONTEKST-JussGPT.md`?

**3. Teste GPT-ene:**
- [ ] Kjøre en ny test med musikkkontoret-teksten for å se om GPT-ene nå gir bedre analyse
- [ ] Verifisere at GPT-ene bruker de nye referansefilene korrekt

---

## Åpne spørsmål

- Skal "masterrettigheter" brukes mer aktivt, eller kun som supplement?
- Skal vi alltid forklare "to rettighetstyper" når vi bruker "produsent"?
- Trenger `stilogtone.md` oppdateringer, eller holder det med de nye støttefilene?
- Skal `KONTEKST-SpråkGPT.md` og `KONTEKST-JussGPT.md` oppdateres med referanser til de nye filene?

---

## Viktig læring fra denne økten

**Hva som fungerte:**
- Grundig gjennomgang av hver misforståelse
- Konkrete eksempler (Moa-eksemplet)
- Skille mellom juridisk fakta og kommunikasjonsstrategi

**Hva som ikke fungerte:**
- Gikk for langt uten å sjekke med deg først
- Oppdaterte filer uten godkjenning av struktur først
- Ikke nok tydelig skille mellom "hva vi er enige om" og "hva som er forslag"

**Prinsipper for videre arbeid:**
- **Strukturer først:** Bli enige om filstrukturen før skriving begynner
- **Ikke anta:** Sjekk alltid før endring av eksisterende filer
- **Juridisk vs. kommunikasjon:** `Datasett_Juss-GPT.md` er kun for jurist - alt annet går i støttefiler
- **Ett steg av gangen:** Fullfør og bekreft før neste steg

---

## Filstruktur etter denne økten

```
Innhold/GPT/
├── Datasett_Juss-GPT.md (IKKE RØRT - kun jurist)
├── Begreper_og_definisjoner.md (FLYTTET + OPPDATERT)
├── Datasett_Fordeling.md (NY)
├── prototyper/v2/
│   ├── stilogtone.md (IKKE OPPDATERT)
│   ├── Forklaringsstrategier.md (NY)
│   ├── KONTEKST-SpråkGPT.md (IKKE OPPDATERT)
│   ├── KONTEKST-JussGPT.md (IKKE OPPDATERT)
│   ├── klarsprak-lix.md (UENDRET)
│   └── OPPSUMMERING-arbeidssesjon.md (DENNE FILEN)
```

---

**Når du fortsetter:** Start med å gjennomgå de tre nye/oppdaterte filene (`Begreper_og_definisjoner.md`, `Datasett_Fordeling.md`, `Forklaringsstrategier.md`), så tar vi det derfra.

---

*Versjon 1.0 – 2. februar 2026*
*Arbeidssesjon: GPT v2 kontekstfiler*
