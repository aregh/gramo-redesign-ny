# Metadata for statistikkvisning

> Oversikt over tilgjengelige metadatafelt fra Echo-databasen for bruk i live-statistikk og visualiseringer.

**Opprettet:** 6. desember 2025
**Kilde:** [Echo-felter.xlsx](Teknisk/Echo-felter.xlsx)

---

## Sammendrag

| Metrikk | Verdi |
|---------|-------|
| Totalt felt i Echo | 1157 |
| Tabeller i Echo | 153 |
| Relevante tabeller for statistikk | 14 |
| Direkte anvendbare felt | ~80 |

---

## Innspilling (`recordings`)

Kjernetabell med 24 felt.

| Felt | Type | Beskrivelse | Bruk i visualisering |
|------|------|-------------|---------------------|
| `title` | text | Låttittel | Topp-lister |
| `main_artist` | text | Hovedartist | Artiststatistikk |
| `isrc` | text | Unik ISRC-kode | Kobling/ID |
| `duration_in_seconds` | double | Lengde i sekunder | Spilletidsberegninger |
| `record_label` | text | Plateselskap | Norsk musikk-filter |
| `release_date` | date | Utgivelsesdato | Tidsserier |
| `recording_date` | date | Innspillingsdato | Historiske trender |
| `produced_in` | integer | Produksjonsår | Årsfilter |
| `recorded_in` | integer | Innspillingsår | Årsfilter |
| `is_classical` | boolean | Klassisk musikk | Sjangerfilter |
| `version` | text | Versjon (remix, live) | Variantfilter |
| `p_line` | text | Produsentrettighet | Rettighetseier |
| `composer_ids` | array | Komponist-IDer | Komponiststatistikk |
| `ownerships` | jsonb | Eierskapsdata | Fordelingsanalyse |

---

## Artist (`performers_and_producers`)

Artisttabell med 10 felt.

| Felt | Type | Beskrivelse | Bruk i visualisering |
|------|------|-------------|---------------------|
| `name` | text | Artistnavn/scenenavn | Topp-lister |
| `person_first_name` | text | Fornavn | Personstatistikk |
| `person_last_name` | text | Etternavn | Personstatistikk |
| `year_of_death` | smallint | Dødsår | Aktiv/avdød-filter |
| `type` | text | Utøver eller produsent | Rollefilter |
| `email` | text | E-post | - |

---

## Kjønn (`gender`)

Separat tabell for kjønnsdata.

| Felt | Type | Beskrivelse | Bruk i visualisering |
|------|------|-------------|---------------------|
| `person_id` | uuid | Kobling til artist | JOIN-nøkkel |
| `gender` | text | Kjønn | Kjønnsbalanse-statistikk |

**Muliggjør:**
- «5 av 10» – Norske kvinnelige hovedartister i toppen
- Kjønnsfordeling per kanal
- Utvikling over tid

---

## Geografi

### Bosted (`performers_and_producers_residencies`)

| Felt | Type | Beskrivelse | Bruk i visualisering |
|------|------|-------------|---------------------|
| `iso3166_numeric` | integer | Landkode | Nasjonsfordeling |
| `from` | date | Fra dato | Historisk bosted |
| `to` | date | Til dato | Nåværende bosted |

### Statsborgerskap (`performers_and_producers_citizenships`)

| Felt | Type | Beskrivelse | Bruk i visualisering |
|------|------|-------------|---------------------|
| `iso3166_numeric` | integer | Landkode | Nasjonsfordeling |
| `from` | date | Fra dato | Historisk |
| `to` | date | Til dato | Nåværende |

### Landoppslag (`iso3166`)

| Felt | Type | Beskrivelse |
|------|------|-------------|
| `alpha_2` | text | NO, SE, US |
| `alpha_3` | text | NOR, SWE, USA |
| `norwegian_name` | text | Norge, Sverige |
| `english_name` | text | Norway, Sweden |
| `numeric` | integer | Numerisk kode |

**Muliggjør:**
- Norge vs. verden (35% Norge, 35% USA, 18% UK)
- Norden på norsk radio
- Interaktivt verdenskart

---

## Spilledata

### Uidentifiserte avspillinger (`unidentified_playback_groups`)

Hovedtabell for spillestatistikk med 20 felt.

| Felt | Type | Beskrivelse | Bruk i visualisering |
|------|------|-------------|---------------------|
| `total_playtime_seconds` | double | Total spilletid | «654 timer med Josefin» |
| `total_times_played` | integer | Antall avspillinger | Frekvensstatistikk |
| `broadcaster_id` | uuid | Kringkaster-ID | Kanalfilter |
| `title` | text | Låttittel | Topp-lister |
| `main_artist` | text | Hovedartist | Artiststatistikk |
| `isrc` | text | ISRC-kode | Kobling |
| `label_name` | text | Plateselskap | Norsk musikk |
| `production_country` | text | Produksjonsland | Geografi |
| `production_year` | text | Produksjonsår | Tidsserier |

### Detaljert spilledata (`playtime_report_unidentified_music_playbacks`)

| Felt | Type | Beskrivelse |
|------|------|-------------|
| `duration_in_seconds` | double | Spilletid per avspilling |
| `play_count` | integer | Antall ganger spilt |
| `played_on` | date | Dato for avspilling |
| `channel_id` | uuid | Kanal-ID |
| `medium` | text | Medium (radio, TV) |

### Kringkasterdata (`worklist_broadcaster_recordings`)

| Felt | Type | Beskrivelse |
|------|------|-------------|
| `total_playtime` | integer | Total spilletid |
| `total_playbacks` | integer | Totalt antall avspillinger |
| `broadcaster_id` | uuid | Kringkaster |
| `production_country` | text | Produksjonsland |

---

## Medvirkning (`performances`)

Kobling mellom artist og innspilling.

| Felt | Type | Beskrivelse | Bruk i visualisering |
|------|------|-------------|---------------------|
| `performer_id` | uuid | Artist-ID | JOIN til artist |
| `recording_id` | uuid | Innspilling-ID | JOIN til innspilling |
| `instrument_played` | text | Instrument | Instrumentfilter |
| `role_codes` | array | Rollekoder | Solist vs. studiomusiker |

---

## Instrument (`instruments`)

| Felt | Type | Beskrivelse |
|------|------|-------------|
| `code` | text | Instrumentkode |
| `norwegian_name` | text | Norsk navn |
| `english_name` | text | Engelsk navn |

---

## Sjanger (`genres`)

| Felt | Type | Beskrivelse |
|------|------|-------------|
| `id` | text | Sjanger-ID |
| `norwegian_name` | text | Norsk navn |
| `english_name` | text | Engelsk navn |

**Merk:** Kobling mellom `genres` og `recordings` ikke dokumentert i skjemaet. Må avklares.

---

## Gap – Felt som mangler

| Ønsket funksjon | Status | Konsekvens |
|-----------------|--------|------------|
| **Språk** (norsk tekst) | ❌ Finnes ikke | Kan ikke filtrere på tekstspråk |
| **By/region** | ❌ Kun landnivå | Kan ikke lage «Bergensmusikk på radio» |
| **Sjanger på innspilling** | ⚠️ Kobling ukjent | Sjangerfilter usikkert |
| **Kanalnavn** | ⚠️ Kun UUID | Trenger oppslag mot kanaltabell |

---

## Hva kan vi bygge?

### ✅ Direkte mulig

| Visualisering | Datafelt |
|---------------|----------|
| Topp 100 mest spilte | `total_playtime_seconds`, `title`, `main_artist` |
| Kjønnsfordeling | `gender` + `performances` + spilledata |
| Nasjonsfordeling | `iso3166` + `residencies`/`citizenships` |
| Norsk vs. utlandsk | `record_label`, `production_country` |
| Aktiv vs. avdød | `year_of_death` |
| Tidsserier (2015-2024) | `release_date`, `played_on` |
| Spilletid-konvertering | `duration_in_seconds`, `total_playtime_seconds` |

### ⚠️ Krever avklaring

| Visualisering | Avhengighet |
|---------------|-------------|
| Kanalspesifikk statistikk | Kanaltabell med navn |
| Sjangerfordeling | Kobling `genres` → `recordings` |
| Språkfilter | Ny metadata eller ekstern kilde |
| By-nivå geografi | Utvidelse av residency-data |

---

## Tekniske avklaringer

Må diskuteres med Ståle/teknisk team:

1. **Kanaltabell:** Hvor ligger mapping fra `broadcaster_id` til kanalnavn (NRK P1, P4, etc.)?
2. **Sjangerkobling:** Hvordan kobles `genres` til `recordings`?
3. **Språkmetadata:** Finnes det i ACR Cloud eller annen ekstern kilde?
4. **By-nivå:** Kan residency-data utvides med by/region?
5. **API-tilgang:** Sanntidsdata fra Metabase?

---

## Relaterte dokumenter

- [Statistikk-visualisering.md](Statistikk-visualisering.md) – Visualiseringsideer
- [Teknisk/Echo-felter.xlsx](Teknisk/Echo-felter.xlsx) – Komplett feltliste
- [Teknisk.md](Teknisk.md) – Teknisk landskap

---

*Sist oppdatert: 6. desember 2025*
