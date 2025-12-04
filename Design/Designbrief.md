# Designbrief - Gramo Redesign

> 🚧 **UNDER UTVIKLING** - Denne briefen blir oppdatert gjennom forprosjektet

**Status:** Utkast
**Sist oppdatert:** 4. desember 2025
**Ansvar:** Inge Fossland (ekstern designar), Are Halland (innhald)

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
- **Interaktive datavisualiseringar** (ny)

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

## 10. Statistikk og datavisualisering (frå samtale med Inge 4. des)

### Konseptretning
Gramo sit på **verifisert metadata** frå fleire kjelder, matcha mot spilledata. Dette er ein unik styrke som kan brukast til:
- Interaktive topplister med filtrering
- Datadrypp for SoMe og presse
- Omdømmebygging gjennom transparens

### Filterlogikk
| Filter | Eksempel |
|--------|----------|
| Språk | Norsk tekst, engelsk, samisk |
| Kjønn | Kvinnelege/mannlege hovudartister |
| Geografi | Bergensartister, Oslo, distrikt |
| Status | Avdøde artistar, aktive |
| Kanal | NRK P1, P3, Radio Norge, Jazz |
| Tidsperiode | 2024, siste 10 år |

### Prioriterte visualiseringar
1. **«654 timer med Josefin»** - Spilletid som tidslinje
2. **«Hvem får spilletid?»** - Kjønnsbalanse
3. **«Norge vs. verden»** - 35% NO, 35% US, 18% UK
4. **«Bygg din eigen toppliste»** - Interaktiv filtrering
5. **Kanalprofiler** - Side-by-side samanlikning

### Visualiseringsformat
- Animerte tidslinjer (trender over tid)
- Interaktive kart (geografisk fordeling)
- Kakediagram/donut (andeler)
- Søylediagram (topp 10-lister)
- Scrollytelling (lange narrativ)

→ Sjå [Analyse/Statistikk-visualisering.md](../Analyse/Statistikk-visualisering.md) for komplett idéliste

---

## 11. Prototypar og konseptutforsking

### Formål med prototypane
Prototypane er **utforskingsverktøy**, ikkje ferdige løysingar. Målet er å:
- Utforske ulike konsept og innfallsvinklar
- Slå saman, justere og vidareutvikle idear
- Teste hypotesar om brukarengasjement
- Gi konkret grunnlag for diskusjon i teamet

### Prototypar (Statistikk-2)
Wireframe-stil prototypar som utforskar ulike inngangar til statistikkdata:

| Konsept | Fil | Vinkling | Status |
|---------|-----|----------|--------|
| **A: Storytelling** | `konsept-a-storytelling.html` | Narrativ hook: "654 timer med Josefin" | ✅ Klar |
| **B: Samanlikning** | `konsept-b-samanlikning.html` | VS-format: Norge vs. verden | ✅ Klar |
| **C: Kanal** | `konsept-c-kanal.html` | "Kva spelar din kanal?" | ✅ Klar |
| **D: Long tail + CTA** | `konsept-d-long-tail-cta.html` | 45 000 artistar + medlemsverving | ✅ Klar |
| **E: Geografi + tid** | `konsept-e-geografi-tid.html` | Kart, byar, klatrarar/nedgang | ✅ Klar |
| **F: Bygg toppliste** | `konsept-f-bygg-toppliste.html` | Interaktiv toppliste-byggar | ✅ Klar |
| **G: SoMe-vinklingar** | `konsept-g-some-vinklingar.html` | 10 ferdigbygde delingsbitar | ✅ Klar |

→ **Live demo:** https://aregh.github.io/gramo-redesign-ny/Design/Prototype/Statistikk-2/

### Korleis bruke prototypane
1. **Utforsk individuelt** - Klikk gjennom alle konsept
2. **Noter:** Kva fungerer? Kva manglar? Kva triggar nye idear?
3. **Kombiner:** Kanskje A+C? Eller E+F?
4. **Diskuter i team:** Kva konsept går vidare til neste fase?

### Neste steg
- [ ] Intern gjennomgang (Are + Inge)
- [ ] Velge 2-3 konsept for vidareutvikling
- [ ] Eventuell brukartest på utvalte konsept
- [ ] Produksjonsdesign i Figma

---

## 12. Opne spørsmål

1. **Merkevare:** Komplett redesign eller evolusjon?
2. **Bildebank:** Kva har Gramo? Kva treng vi?
3. **Apollon:** Korleis integrere design med ferdig produkt?
4. ~~**Repertoar-data:** Kan vi bruke dette visuelt?~~ ✅ JA (bekrefta med Inge)
5. **Min Side:** Kor mykje kontroll har vi på utsjånad?
6. **API-tilgang:** Korleis hente data frå Apollon/Metabase/ACR Cloud?

---

## Vedlegg

### Relaterte dokument
- [GEO-ANALYSE.md](../analyse/GEO-ANALYSE.md) - Søkeordsanalyse og GEO-prioritering
- [KONTEKST.md](../KONTEKST.md) - Full prosjektkontekst
- [PROSJEKTPLAN.md](../PROSJEKTPLAN.md) - Faser og milepælar

### Arbeidsmøte design
**Planlagt:** (TBD)
**Deltakare:** Inge, Are, Rita, Kim, Bastian
**Agenda:** Merkevare, konseptretning, visuell identitet

---

*Denne briefen blir oppdatert fortløpande gjennom forprosjektet.*
