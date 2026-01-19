# Disclaimer-forslag for gramo.no

> Konkrete tekstforslag til workshop – velg variant basert på plassering og kontekst

---

## Hovedforslag: Footer-disclaimer

### Variant A – Kort og nøytral
> Informasjonen på gramo.no er veiledende. Se [vedtektene] og [fordelingsreglementet] for fullstendige vilkår.

### Variant B – Med kontaktoppfordring
> Informasjonen på gramo.no er veiledende. Ved spørsmål om dine rettigheter, se [vedtektene] og [fordelingsreglementet], eller [kontakt oss].

### Variant C – Juridisk tydelig
> Innholdet på gramo.no er veiledende informasjon og utgjør ikke juridisk rådgivning. Ved motstrid gjelder [vedtektene], [fordelingsreglementet] og [medlemsavtalen].

**Anbefaling:** Variant B balanserer juridisk tydelighet med brukervennlighet.

---

## Kontekstspesifikke disclaimere

### For sider om vederlag og fordeling (nivå 2)

> **Merk:** Fordelingen av vederlag følger [fordelingsreglementet]. Eksemplene på denne siden er forenklede illustrasjoner.

### For sider om vernetid og tilknytning (nivå 2)

> **Merk:** Reglene om vernetid og internasjonal tilknytning er komplekse. Kontakt oss hvis du er usikker på om din innspilling er vernet.

### For kalkulatorer og estimater (hvis aktuelt)

> Beløpet er et estimat basert på tidligere fordelinger. Faktisk utbetaling kan avvike. Se [fordelingsreglementet] for hvordan vederlag beregnes.

---

## Inline-presiseringer

For bruk i løpende tekst der hverdagsspråk møter fagbegreper:

| Hverdagsspråk | Inline-presisering |
|---------------|-------------------|
| musikk | musikk (innspillinger) |
| penger | penger (vederlag) |
| få betalt | få utbetalt vederlag |
| plateselskap | plateselskap (produsent) |

**Bruk:** Første gang begrepet forekommer på en side.

---

## Plassering og synlighet

### Footer (alle sider)
- Fast disclaimer-tekst
- Lenker til vedtekter, fordelingsreglement, medlemsavtale
- Synlig, men ikke dominerende

### Kontekst-disclaimer (utvalgte sider)
- Plasseres øverst eller nederst i hovedinnholdet
- Kun på sider med medium/høy juridisk risiko
- Visuelt markert (info-boks, annen bakgrunnsfarge)

### Inline-presiseringer
- I løpende tekst, første forekomst
- Parentes eller lenke til ordliste

---

## Implementering i Sanity

### Forslag til struktur

```
Footer-komponent:
├── disclaimer_text (rich text)
├── disclaimer_links[]
│   ├── label
│   └── url
└── show_disclaimer (boolean, default: true)

Side-skjema:
├── context_disclaimer (rich text, valgfritt)
└── risk_level (select: lav/medium/høy)
```

### Automatisering
- Sider med `risk_level: høy` får automatisk kontekst-disclaimer
- Redaktør kan overstyre eller tilpasse teksten

---

## Til diskusjon i workshop

1. **Hvilken footer-variant foretrekker vi?**
2. **Skal kontekst-disclaimer være obligatorisk for nivå 2-sider?**
3. **Hvem godkjenner disclaimer-tekst ved endringer?**
4. **Skal disclaimer oversettes til engelsk 1:1?**

---

*Utkast: 16. januar 2026*
*Til workshop-diskusjon*
