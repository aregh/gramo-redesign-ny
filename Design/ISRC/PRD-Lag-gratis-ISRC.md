# PRD: Lag gratis ISRC

**Versjon:** 1.0  
**Eier:** Gramo Redesign Team  
**Status:** Utkast til prototype  
**Dato:** 19. desember 2025  

---

## 1. Bakgrunn og mål
ISRC-registrering er identifisert som **toppoppgave #1** for rettighetshavere. Dagens prosess er fragmentert, ofte manuell og tidkrevende for både brukere og Gramo. 

### Overordnet mål
Lage en selvbetjent, intuitiv og rask tjeneste for å generere ISRC-koder "on-the-fly", som reduserer henvendelser til kundeservice og øker datakvaliteten i Gramos kjernesystemer (Apollon).

### Suksesskriterier
- 80% av alle ISRC-henvendelser kan løses selvbetjent.
- Brukertilfredshet (CSAT) > 4.5/5 for flyten.
- Reduksjon i behandlingstid fra dager til sekunder.

---

## 2. Målgruppe & Persona
**Hovedmålgruppe:** Uavhengige artister, små plateselskap og selvpubliserende musikere.

**Persona: Moa (24)**
- **Behov:** Skal gi ut sin første låt via en digital distributør (f.eks. DistroKid). Distributøren krever ISRC.
- **Problem:** Vet ikke hva ISRC er, hvor man får det, eller at man må være medlem i Gramo for å "eie" koden.
- **Motivasjon:** Vil bare ha koden raskt så hun kan laste opp musikken sin.

---

## 3. Brukerreise (User Flow)

### 1. Inngang (Discovery)
- Moa søker på "ISRC Norge" eller "Hvordan få ISRC".
- Hun lander på en dedikert landingsside på `gramo.no/isrc`.

### 2. Kvalifisering & Info
- Enkel forklaring: "ISRC er personnummeret til låten din."
- Sjekk: Har du koden allerede? (Søkeskjema).
- Knapp: **"Lag gratis ISRC"**.

### 3. Wizard-flyten (Steg-for-steg)
1. **"Hva heter låta?"**: Oppslag mot eksisterende repertoar for å unngå duplikater.
2. **"Hvem er produsent/utgiver?"**: 
   - Hvis innlogget: Hent fra profil.
   - Hvis ikke innlogget: Søk etter registrantkode/plateselskap.
3. **Mangler du registrantkode?**: Integrert søknadsprosess i flyten. "Det ser ut som du ikke har en kode. Vi ordner det for deg nå."
   - **Viktig læringspoeng:** Brukeren tildeles en *Registrantkode* (3 tegn, f.eks. XYZ), som de så bruker til å generere sine egne ISRC-koder. Systemet gjør dette automatisk for dem i flyten.
4. **Oppsummering**: "Vi lager nå en ISRC for 'Gary Speed 2' med din registrantkode NO-XXX."

### 4. Resultat (Instant gratification)
- **"Gratulerer! Her er din nye ISRC: NO-K67-25-00001"**.
- **Pedagogisk visning:** Bryt ned koden visuelt: `NO` (Land) - `K67` (Din kode) - `25` (År) - `00001` (Løpenummer).
- Mulighet for å kopiere koden.
- Mulighet for å laste ned bekreftelse.
- Info om at låten nå er forhåndsregistrert hos Gramo.

---

## 4. Funksjonelle Krav (Prototype)

| ID | Navn | Beskrivelse | Prioritet |
|:---|:---|:---|:---|
| F1 | ISRC-Generator | Logikk for å generere koden korrekt (Land + Registrant + År + Løpenummer). | High |
| F2 | Registrantkode-sjekk | Slå opp om brukeren/selskapet har en gyldig NO-kode. | High |
| F3 | Søknadskjema | Integrert flyt for å søke om ny registrantkode hvis man mangler. | High |
| F4 | Repertoar-søk | Enkelt søk for å sjekke om låten allerede har en kode. | Medium |
| F5 | Sanity Integrasjon | Hente veiledningstekster og FAQ dynamisk fra Sanity. | Medium |
| F6 | "Min Side"-kobling | Lagre genererte koder på brukerens profil. | Medium |

---

## 5. Design & Opplevelse
Designet skal føles "premium" og "wow" for å bygge tillit hos unge artister.

- **Vibrant & Modern**: Bruk av Gramos blåfarge kombinert med moderne gradienter og glassmorphism.
- **Micro-animations**: Progress-indikatorer som føles organiske, subtile overganger mellom stegene.
- **On-the-fly validering**: Tydelig tilbakemelding hvis info mangler, uten å måtte laste siden på nytt.
- **Mobil-først**: Hele flyten må fungere perfekt på en iPhone.

---

## 6. Teknisk Arkitektur (Pointers)

- **Frontend**: Next.js (Vercel) for raske lastetider og SEO.
- **CMS**: Sanity for alt innhold (veiledning, hjelpetekster).
- **Backend/API**: Integrasjon mot **Apollon** for tildeling av offisielle koder og validering av medlemskap.
- **Sikkerhet**: BankID-integrasjon for verifisering av nye registrantkode-søknader (hvis nødvendig).

---

## 7. Måling av suksess (KPIer)
- **Konverteringsrate**: Antall som starter flyten vs. antall som får en ISRC.
- **KS-reduksjon**: Antall henvendelser med "ISRC" i emnefeltet.
- **Datakvalitet**: Antall ISRC-koder som matcher 100% i avregningssystemet.

---

*Utarbeidet av Antigravity for Gramo - 2025*
