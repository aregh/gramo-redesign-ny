# Designbrief - Gramo Redesign

> 🚧 **UNDER UTVIKLING** - Denne briefen blir oppdatert gjennom forprosjektet

**Status:** Utkast
**Sist oppdatert:** 28. november 2025
**Ansvar:** Inge Fossland (design), Are Halland (innhald)

---

## 1. Prosjektsamandrag

### Kva skal lagast?
Ny nettside for Gramo med fokus på:
- Toppoppgåve-løysing (ISRC, utbetaling, registrering)
- GEO-optimalisering for KI-assistentar
- Styrka merkevare og omdømme
- Innhaldshub (Sanity) for krysskanal-publisering

### Kven er det for?
**Primær:** Utøvande artistar og produsentar (frå "Ola på 21 år" til Universal Music)
**Sekundær:** Bedrifter som bruker musikk
**Tertiær:** Media, bransjeaktørar, myndigheiter

---

## 2. Strategisk kontekst

### Gramo sin posisjon
- Monopolsituasjon i Noreg på nærstående rettar
- 250 mill NOK i årleg innkrevjing
- 20 tilsette i omfattande endringsprosess
- Strategi 2025-2027: "Bli best i Norden"

### Kommunikasjonsmål
1. **Kjenne** - Gramo si rolle og eksistens
2. **Forstå** - Korleis vederlag fungerer
3. **Gjere** - Registrere, søkje, sjekke
4. **Velje** - Gramo som føretrekt partner

### Omdømmemål
> "Gramo som spesialist på juss, teknologi og økonomi i musikkbransjen"

---

## 3. Toppoppgåver

Frå brukarundersøking og GSC-analyse:

| Prioritet | Oppgåve | Designimplikasjon |
|-----------|---------|-------------------|
| 🔴 #1 | Registrere ISRC-kode | Tydeleg CTA, enkel flyt, steg-for-steg |
| 🔴 #2 | Få oversikt utbetalingar | Dashboard-element, kalender |
| 🟡 #3 | Registrere rettigheitskrav | Skjema, veiledning |
| 🟡 #4 | Finne veiledning/svar | Søk, FAQ, innhaldshierarki |
| 🟡 #5 | Forstå TONO vs Gramo | Samanlikningstabell, forklaring |

---

## 4. Designprinsipp

### 4.1 Klarheit
- Enkel navigasjon basert på brukaroppgåver
- Tydeleg hierarki og informasjonsarkitektur
- Ingen unødvendig kompleksitet

### 4.2 Tillit
- Profesjonelt uttrykk som reflekterer monopol-posisjonen
- Juridisk presisjon i innhald
- WCAG 2.1 AA (universell utforming)

### 4.3 Effektivitet
- Rask veg til toppoppgåvene
- Minimer klikk og friksjon
- Mobile-first

### 4.4 Autoritet
- Posisjonere Gramo som kompetansesenter
- Innhald som KI-assistentar kan sitere
- Strukturerte data (schema.org)

---

## 5. Tekniske rammer

### Plattform
- **CMS:** Sanity (headless)
- **Frontend:** (TBD - truleg Next.js/Astro)
- **Hosting:** (TBD)

### Integrasjonar
- **Apollon:** Kjernesystem (kjem juni 2026)
- **Mailchimp:** Nyheitsbrev
- **(Intercom fase ut):** Hjelpinnhald til Sanity/nettside

### Krav
- Responsivt design (mobile-first)
- Lastetid < 3 sek
- Core Web Vitals: Grøn score
- Schema.org markup for GEO

---

## 6. Merkevare

### Noverande status
- Blå hovudfarge
- Relativt nøytral profil
- "Den litt rocka lillebroren" (til TONO)
- Oransje = TONO-farge (unngå!)

### Retning (hypotese)
- **Komplett redesign vs. justering?** - Avklaring i arbeidsmøte
- Nokre få, sterke verkemiddel
- Tal og grafer som visuelt element (repertoar-data)
- Fleksibel mal som fungerer på tvers av flater

### Ressursar
- Bildebank? - Må avklarast
- Ikonar/illustrasjonar - Må utviklast
- Typografi - Må evaluerast

---

## 7. Innhald og struktur

### Innhaldshub-tanken
> "Ein stad for innhald, tilpassa til format og kanal. Når noko endrast i hub, skal det automatisk oppdaterast på alle kanalar."

### Innhaldsproduksjon
- **No:** Notion (midlertidig arbeidsplass)
- **Seinare:** Sanity (produksjons-CMS)

### Innhaldstypar
- Forklaringsartiklar
- Steg-for-steg-guidar
- FAQ
- Ordliste/glossar
- Nyheiter
- Statistikk/repertoar-data

---

## 8. Leveransar (design)

### Forprosjekt (des 2025)
- [ ] Konseptretning (skisser)
- [ ] Moodboard/stilguide-utkast
- [ ] Sitemap-forslag

### Hovudprosjekt (2026)
- [ ] Komplett designsystem
- [ ] Prototype (Figma)
- [ ] Brukartest
- [ ] Produksjonsklare assets

---

## 9. Inspirasjon og referansar

### Liknande organisasjonar
- TONO.no (komponist-sida)
- Gramo Finland (gramex.fi)
- Gramo Danmark (gramex.dk)
- PRS for Music (UK)

### Design-inspirasjon
- (Legg til etter research)

---

## 10. Opne spørsmål

1. **Merkevare:** Komplett redesign eller evolusjon?
2. **Bildebank:** Kva har Gramo? Kva treng vi?
3. **Apollon:** Korleis integrere design med ferdig produkt?
4. **Repertoar-data:** Kan vi bruke dette visuelt?
5. **Min Side:** Kor mykje kontroll har vi på utsjånad?

---

## Vedlegg

### Relaterte dokument
- [GEO-ANALYSE.md](../analyse/GEO-ANALYSE.md) - Søkeordsanalyse og GEO-prioritering
- [KONTEKST.md](../KONTEKST.md) - Full prosjektkontekst
- [PROSJEKTPLAN.md](../PROSJEKTPLAN.md) - Faser og milepælar

### Arbeidsmøte design
**Planlagt:** (TBD)
**Deltakare:** Inge, Are, Rita, Kim?, Bastian
**Agenda:** Merkevare, konseptretning, visuell identitet

---

*Denne briefen blir oppdatert fortløpande gjennom forprosjektet.*
