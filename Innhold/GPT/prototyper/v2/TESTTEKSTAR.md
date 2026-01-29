# Testtekstar for SpråkGPT og JussGPT

> Tekstar på nivå 1 og 2 for testing av prototype

---

## TEST 1: Forside (nivå 1)

### Versjon A – Godkjent

```
En kilde til et rikt musikkliv

Gramo sørger for at du får betalt når innspillingene dine brukes offentlig.

Skrev du låta? Da er det TONO du skal til. →

[Slik fungerer det]   [Logg inn]
```

### Versjon B – Med problem

```
Gramo - for deg som lager musikk

Få penger når sangen din spilles på radio!

Alle artister har rett til vederlag fra Gramo.

[Sjekk hva du har til gode]
```

**Forventa funn:**
- "lager musikk" → TONO-forveksling
- "sangen din" → peikar mot verk, ikkje opptak
- "Alle artister har rett" → absolutt påstand, juridisk feil

---

## TEST 2: Om Gramo (nivå 2)

### Versjon A – Godkjent

```markdown
# Slik fungerer Gramo

Gramo samler inn og fordeler vederlag til utøvende kunstnere og produsenter
når innspilt musikk (lydopptak) brukes offentlig.

## Hvem får vederlag?

Du kan ha rett til vederlag hvis du:
- Er utøvende kunstner – synger, spiller eller dirigerer på innspillingen
- Er produsent – har finansiert og tilrettelagt innspillingen

**Merk:** Retten følger av åndsverkloven § 21. Du trenger ikke være medlem,
men må registrere deg og innspillingene dine.
```

### Versjon B – Med problem

```markdown
# Om Gramo

Gramo betaler royalties til alle musikere i Norge.

Hvis du har laget en låt og den spilles på radio, får du automatisk penger.

Vi håndterer copyright for musikken din.

Registrer deg i dag og vi sender pengene!
```

**Forventa funn:**
- "royalties" → skal vere "vederlag"
- "laget en låt" → TONO-forveksling
- "copyright" → feil term
- "automatisk penger" → juridisk feil, krev registrering
- "alle musikere" → absolutt påstand

---

## TEST 3: ISRC-guide (nivå 2)

### Versjon A – Godkjent

```markdown
# Kva er ISRC?

ISRC (International Standard Recording Code) er ein unik ID-kode for kvart
lydopptak. Tenk på det som eit personnummer for innspelinga di.

## Kvifor treng Gramo ISRC?

Når radio og strømetenester rapporterer kva musikk som er spelt, brukar dei
ISRC-koden. Utan denne kan vi ikkje identifisere innspelinga – og du får
ikkje vederlag.

## Kvar finn eg ISRC?

- **Frå distributor:** Spotify for Artists, DistroKid, TuneCore osv.
- **Frå plateselskap:** Spør A&R eller admin
- **Sjølvtildelt:** Søk hos ISRC Norge

## Viktig å vite

- Éin ISRC per innspeling (ikkje per låt)
- Ein remix får ny ISRC
- Ein live-versjon får ny ISRC
- Ei masterering endrar ikkje ISRC (same opptak)
```

### Versjon B – Med problem

```markdown
# ISRC

Alle sanger må ha ISRC for å få penger.

ISRC er musikkens personnummer. Du får det fra Spotify.

Har du ikke ISRC? Da får du dessverre ikke vederlag fra Gramo.
```

**Forventa funn:**
- "sanger" → skal vere "innspelingar/lydopptak"
- "Du får det fra Spotify" → upresist, det er distributor
- "Da får du dessverre ikke" → for absolutt

---

## Slik testar du

### SpråkGPT-test

```
Les KONTEKST-SpråkGPT.md og analyser denne teksten:

[lim inn tekst]
```

### JussGPT-test

```
Les KONTEKST-JussGPT.md og vurder juridisk risiko for denne teksten:

[lim inn tekst]
```

### Kombinert test

```
Les KONTEKST-SpråkGPT.md og KONTEKST-JussGPT.md.

1. SpråkGPT: Analyser språk og nivå
2. JussGPT: Vurder juridisk risiko
3. Kombiner til endeleg tilråding

Tekst:
[lim inn tekst]
```

---

*Testtekstar – 22. januar 2026*
