# Klarspråk-test med LIX

> Verktøy for SpråkGPT til å måle lesbarhet

---

## Hva er LIX?

LIX (Läsbarhetsindex) måler hvor lett en tekst er å lese. Formelen:

```
LIX = (antall ord / antall setninger) + (lange ord × 100 / antall ord)
```

**Langt ord** = ord med mer enn 6 bokstaver

---

## LIX-skala

| LIX | Vurdering | Passer for |
| --- | --- | --- |
| < 25 | Svært lettlest | Barn, enkel info |
| 25-34 | Lettlest | **Nivå 1** – forside, kampanje |
| 35-44 | Middels | **Nivå 2** – artikkel, FAQ |
| 45-54 | Vanskelig | **Nivå 3** – vedtekter, avtaler |
| > 55 | Svært vanskelig | Akademisk, juridisk fagspråk |

---

## Måltall for Gramo

| Teksttype | Mål-LIX | Akseptabelt |
| --- | --- | --- |
| Forside/kampanje | 25-30 | < 35 |
| Om Gramo / FAQ | 30-40 | < 45 |
| Vedtekter | 40-50 | < 55 |

---

## Hvordan regne LIX

### Steg 1: Tell setninger
En setning slutter med `.` `!` `?` `:` (kolon før liste)

### Steg 2: Tell ord
Et ord = sammenhengende bokstaver/tall mellom mellomrom

### Steg 3: Tell lange ord
Lange ord = ord med **mer enn 6 bokstaver**

### Steg 4: Regn ut
```
Gjennomsnittlig setningslengde = antall ord / antall setninger
Prosent lange ord = (lange ord / antall ord) × 100
LIX = setningslengde + prosent lange ord
```

---

## Eksempel

**Tekst:**
> "Gramo sørger for at du kan få vederlag når innspillingene dine blir brukt på radio."

**Analyse:**
- Ord: 14
- Setninger: 1
- Lange ord (>6 bokstaver): "sørger"(6=nei), "vederlag"(8=ja), "innspillingene"(13=ja)
  - Lange ord: 2
- Setningslengde: 14/1 = 14
- Prosent lange: 2/14 × 100 = 14.3

**LIX = 14 + 14.3 = 28.3** ✅ Lettlest (nivå 1)

---

## Hurtigsjekk uten kalkulering

Bruk disse tommelfingerreglene:

| Tegn | Problem |
| --- | --- |
| Setning > 25 ord | For lang – del opp |
| Flere komma i én setning | Trolig for kompleks |
| Ord > 12 bokstaver | Vurder enklere alternativ |
| Passiv ("det blir", "det vurderes") | Skriv om til aktiv |

---

## Automatisk LIX-analyse

Når du analyserer tekst, inkluder:

```markdown
### LIX-analyse
- **Antall ord:** X
- **Antall setninger:** X
- **Lange ord (>6):** X
- **LIX-verdi:** X.X
- **Vurdering:** [Lettlest / Middels / Vanskelig]
- **Passer nivå:** [1 / 2 / 3]
```

---

## Typiske LIX-problemer og løsninger

| Problem | LIX-effekt | Løsning |
| --- | --- | --- |
| Lange setninger | +setningslengde | Del ved "og", "men", "fordi" |
| Fagord | +lange ord | Bruk hverdagsord eller forklar |
| Nominaliseringer | +lange ord | Verb foran substantiv |
| Innkapslede leddsetninger | +setningslengde | Flytt til egen setning |

### Eksempel på forenkling

| Før (LIX ~50) | Etter (LIX ~30) |
| --- | --- |
| "Vederlaget som utbetales til rettighetshaverne fordeles i henhold til fordelingsreglementet" | "Vi fordeler pengene etter reglementet" |
| "Registreringsprosessen fullføres ved innsending av nødvendig dokumentasjon" | "Send inn papirene, så registrerer vi deg" |

---

## Integrasjon med SpråkGPT

Når SpråkGPT analyserer tekst:

1. **Regn ut LIX** for hele teksten
2. **Sammenlign med målnivå** (1/2/3)
3. **Flagg avvik** dersom LIX er for høyt for nivået
4. **Foreslå forenklinger** for setninger/ord som drar opp LIX

---

## Referanser

- [Språkrådet om lesbarhetsindeks](https://www.sprakradet.no/)
- ISO 24495-1:2023 Klarspråk

---

*Versjon 1.0 – 22. januar 2026*
*Kontekstarkitektur: Gramo*
