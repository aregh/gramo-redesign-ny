# Endringslogg: JussGPT v1 → v2

**Dato:** 29. januar 2026
**Utført av:** Bastian (med Claude Code)
**Bakgrunn:** Testing av v1 avdekket at JussGPT "diktet" juridiske påstander og blandet juridisk rett med operative krav. v2 gjør systemet strengere og mer sporbart.

---

## 📋 Oversikt over endringer

### 1. **Nytt juridisk datagrunnlag: ****`Datasett_Juss-GPT.md`**

**Hva:** Opprettet et komplett juridisk faktagrunnlag som JussGPT skal bruke.

**Innhold:**
- Gramos historie og hjemmelsgrunnlag (fra Prop. 53 L 2020-2021)
- Definisjoner av "utøvende kunstner" (§ 1) og "produsent" (Høyesterett HR-2023-2282-A)
- Gramo vs. Tono (hvem krever opp for hva)
- Vederlag vs. avgift (vernede vs. ikke-vernede lydopptak)
- Innsigelsesprosessen
- **NY:** Seksjon 1.2 om "Juridisk rett vs. praktisk utbetaling" (kritisk distinksjon)

**Hvorfor:** v1 hadde ikke et eksplisitt datagrunnlag. JussGPT baserte seg på generell kunnskap og risikerte å dikte.

---

### 2. **Lokale lovtekster lagt til**

**Hva:** Lagt inn fullstendige lovtekster i `Bakgrunn/Juridisk/`:
1. Åndsverkloven
2. Fondsloven (ny!)
3. CRM-loven (kollektiv forvaltning)
4. Forskrifter til åndsverkloven og CRM-loven
5. Høyesterettsdom om produsent

**Hvorfor:** JussGPT kan ikke lese eksterne Lovdata-lenker. Nå kan den verifisere påstander mot faktiske lovtekster.

---

### 3. **Strengere regler i ****`KONTEKST-JussGPT.md`**

#### **Nye "ALDRI"-regler:**
```markdown
❌ ALDRI legg til operative/praktiske krav (registrering, rapportering, prosedyrer)
   med mindre det står eksplisitt i kildene
❌ ALDRI anta hva som kreves for utbetaling - skill mellom juridisk rett og praktisk utbetaling
```

#### **Ny regel om å skille juridisk rett og praktisk utbetaling:**
```markdown
✅ Skill tydelig mellom:
  - Juridisk rett (lovbestemt, oppstår automatisk ved bruk)
  - Praktisk utbetaling (operative krav - si "Informasjon om praktisk utbetaling
    finnes ikke i datagrunnlaget")
```

**Hvorfor:** v1-test viste at JussGPT blandet juridisk rett ("har rett til vederlag") med operative krav ("må være registrert"). Dette er juridisk feil.

---

### 4. **Tvunget kildehenvisning i output-format**

**Endring i output-format:**

**v1:**
```markdown
| Problem | Sitat | Lovhjemmel | Forslag |
|---------|-------|------------|---------|
| [type] | "[tekst]" | [§ ref] | "[ny tekst]" |
```

**v2:**
```markdown
| Problem | Sitat | Kilde (Datasett pkt.) | Forslag |
|---------|-------|----------------------|---------|
| [type] | "[tekst]" | [Datasett pkt. X.X eller § ref] | "[ny tekst]" |

### Kilder brukt i vurderingen
- Datasett_Juss-GPT.md pkt. [X.X, Y.Y]
- [Eventuelt: Åndsverkloven § Z]
```

**Ny regel:**
> Hver påstand i vurderingen MÅ kunne spores tilbake til en konkret kilde (Datasett pkt. eller §). Hvis du ikke kan finne kilden, inkluder IKKE påstanden.

**Hvorfor:** Tvinger JussGPT til å dokumentere hvor informasjonen kommer fra. Gjør det lettere å oppdage når den dikter.

---

### 5. **Oppdatert eksempel med strengere krav**

**v1-eksempel:**
- Viste absolutte påstander
- Blandet inn registrering og rapportering
- Ingen kildehenvisninger

**v2-eksempel:**
- Alle funn har nå `Kilde (Datasett pkt.)`
- Begrunnelse har eksplisitte referanser
- Ny seksjon: "Kilder brukt i vurderingen"
- Fokuserer på juridisk rett, ikke operative krav
- Bruker korrekt distinksjon: "rett til vederlag" vs. "får penger"

---

### 6. **Ny terminologiseksjon i ****`KONTEKST-JussGPT.md`**

**Hva:** Lagt til komplett oversikt over:
- ✅ Alltid bruk: vederlag, avgift, innehar rettigheter, osv.
- ❌ Aldri bruk: eier rettigheter, blande Tono/Gramo, kalle produsent "musikkprodusent"
- Regler for juridisk struktur og henvisning
- Saksbehandling ved innsigelser
- Hovedregelen om betalingsplikt

**Kilde:** Fra Gramos jurister (Øystein)

**Hvorfor:** v1 hadde ikke eksplisitte terminologiregler. v2 sikrer konsistent og juridisk korrekt språkbruk.

---

## 🧪 Testresultat: v1 vs. v2

### Testspørsmål:
> "Får penger fra Gramo hvis man eier masteren til en innspilling som er blitt spilt på radio?"

### v1-svar (simulert):
> "Ja, men innspillingen må være registrert hos Gramo og lydopptaket må være vernet"

**Problem:** Diktet krav om registrering (ikke i datagrunnlaget). Blandet juridisk rett med operative krav.

### v2-svar (forventet):
> "Produsenten av et vernett lydopptak har rett til vederlag når lydopptaket brukes iht. § 21. Informasjon om praktiske krav for utbetaling finnes ikke i datagrunnlaget."

**Forbedring:** Kun juridisk rett. Sier fra når operative detaljer mangler.

---

## 📊 Oppsummering

| Område | v1 | v2 |
| --- | --- | --- |
| **Datagrunnlag** | Implisitt (generell kunnskap) | Eksplisitt (`Datasett_Juss-GPT.md`) |
| **Lovtekster** | Kun eksterne lenker | Lokale filer i `Bakgrunn/Juridisk/` |
| **Kildehenvisning** | Nei | Ja, tvunget i output |
| **Juridisk rett vs. utbetaling** | Blandet | Tydelig skilt (ny seksjon 1.2) |
| **Terminologi** | Uformell | Strengt definert (fra jurister) |
| **Risiko for dikting** | Høy | Betydelig redusert |
| **Sporbarhet** | Lav | Høy (alle påstander må ha kilde) |

---

## ✅ Anbefalinger videre

1. **Test v2 grundig** med flere eksempler før produksjon
2. **Utvid ****`Datasett_Juss-GPT.md`** med:
  - Vedtekter
  - Fordelingsreglement
  - Flere rettspraksis-eksempler
3. **Workshop** med Kim/Øystein/Rita for validering
4. **Integrer med Sanity AI Assist** etter validering

---

*Rapport utarbeidet av Bastian Daae, 29. januar 2026*
