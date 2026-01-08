# Statistikk-visualisering - Gramo

> Idear og plan for interaktiv visualisering av Gramo-statistikk

**Oppretta:** 4. desember 2025
**Kjelde:** Samtale med Inge + Gramo Statistikken 2024

---

## Bakgrunn

Gramo sit på **verifisert metadata** frå fleire kjelder, matcha mot spilledata. Dette er arbeidskrevande, men gir påliteleg data som kan brukast til visualiseringar og historiefortelling.

**Kjerneinsikt frå Inge:**
> "Jeg har så jævla lyst til å se disse dataene opp mot metadata... hvis man hadde gjort litt mer ut av disse listene og fått de til å bli mer interaktiv og interessant."

---

## Tilgjengelege datakjelder (Statistikken 2024)

| Datakjelde | Innhald | Omfang |
|------------|---------|--------|
| Mest spilte låt | Alle låter på norsk radio | Topp 100 |
| Mest spilte norske låt | Norsk plateselskap/egenprodusent | Topp 100 |
| Mest spilte låt norsk på norsk | Norsk tekst | Topp 50 |
| Mest spilte per kanal | P4, Radio Norge, NRK P1/P3/Jazz/Sápmi etc. | Topp 25 per kanal |
| Mest spilte hovudartist | Alle artistar | Topp 100 |
| Mest spilte norske hovudartist | Norske artistar | Topp 100 |
| Mest spilte norske utøvar | Personar (ikkje artistnamn) | Topp 100 |
| Mest spilte siste 10 år | 2015-2024 | Topp 100 |
| Norskandel per kanal | NRK P1/P2/P3, P4, Radio Norge | 2020-2024 |
| Nasjonsfordeling | Spilletid per land | Alle land |

---

## Nøkkeltal (2024)

| Metrikk | Verdi |
|---------|-------|
| Norsk musikk på radio | 39,3% |
| Musikk frå Norden (utanom Norge) | 5,16% |
| NRK P1/P3/distrikt norskandel | >50% |
| Mest spilte låt | «Josefin» (Delara) - 654 timer |
| Mest spilte hovudartist | David Guetta - 1731 timer |
| Mest spilte norske hovudartist | Kygo - 1690 timer |
| Kvinneandel topp 10 norske | 5 av 10 |

---

## 30 visualiseringsidear

### Tidsbaserte vinklingar
1. **«654 timer med Josefin»** – Visualiser mest spilte låt som tidslinje (27 dagar non-stop)
2. **«Din dag i norsk radio»** – Interaktiv klokke som viser kva som spelast time for time
3. **«10 år i norsk radio»** – Animert tidslinje over trender 2015-2024
4. **«Aviciis comeback»** – Artistar som klatrar på listene etter sin død
5. **«Julesonganes livssyklus»** – Maria Menas «Home for Christmas» 14 år seinare

### Geografiske vinklingar
6. **«Bergensmusikk på radio»** – Filtrer artistar etter heimby
7. **«Norge vs. verda»** – Kakediagram med 35% Norge, 35% USA, 18% UK
8. **«Norden på norsk radio»** – 5,16% frå Sverige, Danmark, Finland, Island
9. **«Verdas radiomusikk»** – Interaktivt kart med spilletid per land
10. **«By mot by»** – Oslo vs. Bergen vs. Trondheim-artistar

### Kjønn og representasjon
11. **«Kven får spilletid?»** – Kjønnsbalanse i topp 100
12. **«5 av 10»** – Norske kvinnelege hovudartister i toppen
13. **«P4: 100% kvinner i topp 10»** – Kanalforskjellar i kjønnsbalanse
14. **«NRK Jazz: 0% kvinner»** – Sjangerspesifikke skjevheiter
15. **«Kvinneandelen over tid»** – Utvikling 2020-2024

### Kanalprofiler
16. **«Kva spelar NRK P1 vs. P3?»** – Side-by-side samanlikning
17. **«Radio Norges 80-tallsprofil»** – Whitney Houston, Madonna, Queen
18. **«NRK Sápmi-universet»** – Mari Boine og samisk musikk
19. **«NRK Jazz: Norsk jazz i verdsklasse»** – Frode Kjekstad, Espen Berg
20. **«Barnas favorittar»** – NRK Super-listen visualisert

### Artistfokus
21. **«Kygo-effekten»** – 1690 timer, tilbake på trona etter Emma Steinbakken
22. **«David Guetta vs. Kygo»** – Dei to gigantane samanlikna
23. **«Chris Holstens 23 låter»** – Noregs mest allsidige radioartist
24. **«Orkestera på radio»** – Bergen Filharmoniske, KORK, Oslo Phil
25. **«Kyrre Gørvell-Dahll»** – Mest spilte utøvar (1717 timer)

### Interaktive verktøy
26. **«Bygg din eigen toppliste»** – Filtrer på språk, kjønn, år, sjanger
27. **«Samanlikn to artistar»** – Spilletid, antal låter, kanalfordeling
28. **«Finn din kanal»** – Quiz som matchar deg med radiokanal
29. **«Norskandel-kalkulator»** – Sjå korleis di spilleliste scorar
30. **«Spilletid-konverteraren»** – Gjer timer om til dagar, veker, konsertlengder

---

## Filterlogikk

| Filter | Verdiar | Kommentar |
|--------|---------|-----------|
| Språk | Norsk tekst, engelsk, samisk, andre | Basert på innspilling |
| Kjønn | Kvinne, mann, blanda/gruppe | Hovudartist |
| Geografi | By, fylke, region | Treng metadata-utviding |
| Status | Aktiv, avdød | Treng metadata-utviding |
| Kanal | NRK P1/P2/P3/Jazz/Sápmi, P4, Radio Norge | Tilgjengeleg |
| Tidsperiode | År, månad, veke | 2015-2024 tilgjengeleg |
| Nasjonsalitet | Norge, USA, UK, EU, Norden, andre | Tilgjengeleg |

---

## Visualiseringsformat

| Format | Passer til | Teknologi |
|--------|------------|-----------|
| Animert tidslinje | Trender over tid, comeback-historier | D3.js, Flourish |
| Interaktivt kart | Geografisk fordeling | Mapbox, Leaflet |
| Kakediagram/donut | Andeler (kjønn, nasjon) | Chart.js, Recharts |
| Søylediagram | Topp 10-lister, kanalsamanlikningar | Chart.js, Recharts |
| Bubble chart | Artistar med spilletid + antal låter | D3.js |
| Sankey-diagram | Flyt frå kanal til sjanger til artist | D3.js |
| Scrollytelling | Lange narrativ med data | Scrollama |

---

## Prototype-plan

### Fase 1: Statisk proof-of-concept
- [ ] Vel 1-2 visualiseringar å prototype
- [ ] Hent data manuelt frå Statistikken 2024 PDF
- [ ] Bygg enkel HTML/JS-prototype
- [ ] Vis for Kim og Inge

### Fase 2: Interaktiv prototype
- [ ] Legg til filterlogikk
- [ ] Test ulike visualiseringsbibliotek
- [ ] Integrer med designsystem

### Fase 3: Produksjon (avhengig av API)
- [ ] Avklar datatilgang med Ståle (Metabase/Apollon)
- [ ] Bygg backend-integrasjon
- [ ] Deploy på gramo.no

---

## Tekniske avklaringar (må diskuterast med Kim/Ståle)

1. **API-tilgang:** Finst det API for spilledata frå Apollon eller Metabase?
2. **Sanntidsdata:** Kan vi vise data oftare enn årleg?
3. **ACR Cloud:** Korleis få tilgang til monitoreringsdata?
4. **Metadata-kjelder:** Kva metadata er tilgjengeleg utover det i statistikken?
5. **GDPR:** Er det personvernsomsyn ved å vise artistdata?

---

## Relaterte dokument

- [Design/Designbrief.md](../Design/Designbrief.md) - Overordna designbrief
- [Dokumenter/gramo-statistikken-2024.pdf](../Dokumenter/gramo-statistikken-2024.pdf) - Kjeldedata
- [2DOS.md](../2DOS.md) - Oppgåveliste

---

*Sist oppdatert: 4. desember 2025*
