# Claude Code Assistant - Gramo Redesign

> Denne filen er Lag 2 (modelspesifikk) - instruksjonar spesifikt for Claude Code.
> For modellagnostisk kontekst, sjå KONTEKST.md i rot.

## Rolle

Du er ein KI-assistent som hjelper Kjernekaren-teamet med Gramo redesign-prosjektet.

---

## MCP-integrasjonar

### Airtable - Gramo Redesign
```json
{
  "baseId": "appo0g1sGfgBc6mHg",
  "tables": {
    "Folk": "Personer og roller",
    "Brukeroppgaver": "Toppoppgaver og prioritering",
    "Innhold": "Innholdskartlegging",
    "Søkeord": "SEO/GEO-analyse"
  }
}
```

**Bruk:** `mcp__airtable__list_records` med baseId over

### Notion - Prosjektdokumentasjon
- **Målbildeprosjekt:** `269e1430912280769685e0a02992635f`
- **Forprosjekt:** `2b5e14309122807086c1cc0c062689e8`

**Bruk:** `mcp__notion__API-retrieve-a-page` eller `API-get-block-children`

### Miro - Workshop og visualisering
- Oppstartsworkshop 18.11: Visuell dokumentasjon av ambisjoner, risiko, tiltak

### Sanity (framtidig)
- Innhaldshub for strukturert innhald
- MCP må lagast/konfigurerast

---

## Kommandoar

### Vanleg arbeidsflyt
```bash
# Se status i Airtable
mcp__airtable__list_records baseId="appo0g1sGfgBc6mHg" tableId="Brukeroppgaver"

# Hent Notion-side
mcp__notion__API-retrieve-a-page page_id="269e1430912280769685e0a02992635f"

# Søk i prosjektet
grep -r "ISRC" analyse/
```

### Oppdatere analyse
```bash
# Etter ny innsikt
Edit analyse/GEO-ANALYSE.md
mcp__airtable__update_records  # Synk til Airtable
```

---

## Arbeidsflyt

### Analyse -> Airtable
```
Innhaldskartlegging -> Airtable:Innhald
Søkeordsanalyse -> Airtable:Søkeord
Brukaroppgåver -> Airtable:Brukeroppgaver
```

### Strategi -> Notion/Miro
```
Kjernemodellen -> Miro (visualisering)
Prioritering -> Notion (dokumentasjon)
Beslutningar -> Notion (sporing)
```

### Innhald -> Sanity (framtidig)
```
Strukturert innhald -> Sanity
Schema.org markup -> Automatisk
Publisering -> Multikanal
```

---

## Viktig å hugse

1. **ISRC er #1** - Alt peikar mot ISRC som viktigaste toppoppgåve
2. **Apollon kjem** - Nytt kjernesystem juni 2026, påverkar alt
3. **Intercom-avgjerd** - Skal det behaldast eller erstattast? Vurderast 2026
4. **Intern forankring** - Bastian: "Det viktigaste er intern forankring"
5. **Kim vil ha basis først** - Fase 1: Enkel nettside, ikkje vente på alt

---

## Kontaktpunkt

| Rolle | Person | Kanal |
|-------|--------|-------|
| Prosjektleiar | Are Halland | Slack/Teams |
| Innhald | Bastian Daae | Slack/Teams |
| Design | Inge Fossland | Slack |
| Kunde | Rita H. Mamelund | Teams |
| Avgjerdstakar | Kim Skarning Andersen | Teams |

---

*Sist oppdatert: 28. november 2025*
