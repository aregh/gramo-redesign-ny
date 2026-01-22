# Innholdsgenerator

**Versjon:** 1.0
**Dato:** 19. desember 2025
**Formål:** Systematisk verktøy for å generere innholdsvarianter basert på kontekstarkitektur-prinsipper

---

## Hva er dette?

Innholdsgenerator er et verktøy for å lage strukturert, variert innhold basert på:
1. **Kjernemodellen** - Definerer kontekst og brukeroppgave
2. **Stil og tone-prinsipper** - Styrer hvordan innholdet formuleres
3. **Eksisterende grunnlag** - Fakta og tekster som basis

Verktøyet genererer **flere varianter** i **ulike størrelser** (S, M, L) og **ulike stiler** som du kan teste og velge mellom.

---

## Hvordan fungerer det?

### 1. Fylle ut template
Bruk [template.md](template.md) som utgangspunkt. Fyll ut:
- **Kontekst** (hvem, hva, hvorfor)
- **Stil og tone** (formalitet, perspektiv, prinsipper)
- **Grunnlag** (eksisterende tekster, fakta)
- **Output-spec** (størrelse, antall varianter)

### 2. Generer innhold
Kopier hele den utfylte templaten og bruk med:
- **Claude** (Claude.ai eller API)
- **ChatGPT** (ChatGPT.com eller API)
- **Cursor/Claude Code** (lokal AI-assistent)
- **Annen LLM** (Gemini, Perplexity, etc.)

Bruk sammen med [prompt-system.md](prompt-system.md) som systemprompt.

### 3. Evaluer og velg
Modellen genererer flere varianter. Du velger de som fungerer best.

---

## Mappestruktur

```
Innholdsgenerator/
├── README.md                    # Dette dokumentet
├── template.md                  # Template for å fylle ut
├── prompt-system.md             # Systemprompt for AI
└── eksempler/
    └── om-gramo.md              # Eksempel: "Om Gramo"-tekster
```

---

## Når brukes dette?

**Godt egnet for:**
- Korte introduksjonstekster
- Om-tekster for ulike kontekster
- Varianter for A/B-testing
- Tilpasning til ulike målgrupper
- Oversettelse av tone/stil

**Mindre egnet for:**
- Lange, narrative tekster
- Komplekse tekniske beskrivelser
- Helt nytt innhold uten grunnlag

---

## Størrelser

| Størrelse | Lengde | Bruksområde |
|-----------|--------|-------------|
| **S (Small)** | 1 setning, maks 160 tegn | Tagline, meta-beskrivelse, kort intro |
| **M (Medium)** | 3-4 setninger, 50-80 ord | Sidebar, kort presentasjon, email |
| **L (Large)** | 3-4 avsnitt, 150-250 ord | Om-side, presentasjon, formell tekst |

---

## Stil-akser

### 1. Formalitet
- **Byråkratisk/formell** → Juridisk presis, objektiv, distansert
- **Profesjonell/nøytral** → Tydelig, balansert (baseline)
- **Vennlig/uformell** → Personlig, tilgjengelig, relaterbar

### 2. Perspektiv
- **Institusjonell** → "Gramo er...", tredjeperson
- **Vi-perspektiv** → "Vi er...", førsteperson
- **Du-perspektiv** → "For deg som...", brukerfokus

### 3. Budskap
- **Funksjonsfokus** → Hva gjør vi?
- **Verdifokus** → Hvorfor er vi viktige?
- **Brukerfokus** → Hva får du/de?

---

## Tips for god bruk

1. **Vær spesifikk** - Jo mer detaljer i kontekst, desto bedre output
2. **Test flere varianter** - Generer minst 3 varianter og sammenlign
3. **Kombiner** - Bland elementer fra ulike varianter
4. **Brukerteste** - Test med ekte brukere før endelig valg
5. **Iterer** - Juster input basert på output

---

## Eksempler

Se [eksempler/](eksempler/) for konkrete eksempler på bruk.

---

## Vedlikehold

**Eier:** Innholdsteamet
**Oppdateres:** Ved behov
**Feedback:** Del erfaringer og forbedringsforslag

---

## Videre utvikling

Mulige forbedringer:
- [ ] Interaktiv web-app
- [ ] API-integrasjon
- [ ] Automatisk A/B-testing
- [ ] Lagring av favoritter
- [ ] Versjonskontroll av varianter

---

*Sist oppdatert: 19. desember 2025*
