# MCP-konfigurasjon for Gramo-prosjektet

> Instruksjonar for å sette opp alle MCP-integrasjonar på nytt.
>
> **Fullstendig tool-dokumentasjon:** `_TOOLS/OVERSIKT.md`

---

## Quick Reference

| Integrasjon | Base/ID | Bruk i prosjektet |
|-------------|---------|-------------------|
| Airtable | `appo0g1sGfgBc6mHg` | Leads, brukaroppgåver, innhald |
| Notion | `2b5e1430...` | Prosjektdokumentasjon |
| Google Drive | - | Bakgrunnsmateriale |

---

## 1. Airtable

### Installasjon
```bash
claude mcp add airtable -- npx -y @modelcontextprotocol/server-airtable
```

### Konfigurasjon
Ved første køyring blir du spurt om API-nøkkel:
1. Gå til [airtable.com/create/tokens](https://airtable.com/create/tokens)
2. Opprett "Personal Access Token" med scopes:
   - `data.records:read`
   - `data.records:write`
   - `schema.bases:read`
3. Lim inn token når spurt

### Gramo-spesifikk info
**Base ID:** `appo0g1sGfgBc6mHg`
**Base namn:** Gramo Redesign
**Tabellar:** Folk, Brukeroppgaver, Innhald, Søkeord, m.fl.

### Testkommando
```
mcp__airtable__list_tables baseId="appo0g1sGfgBc6mHg" detailLevel="tableIdentifiersOnly"
```

---

## 2. Notion

### Installasjon
```bash
claude mcp add notion -- npx -y @modelcontextprotocol/server-notion
```

### Konfigurasjon
1. Gå til [notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Opprett ny integrasjon
3. Kopier "Internal Integration Token"
4. Del relevante sider med integrasjonen i Notion

### Gramo-spesifikk info
**Forprosjekt-side:** `2b5e14309122807086c1cc0c062689e8`
**Målbildeprosjekt:** `269e1430912280769685e0a02992635f`

### Testkommando
```
mcp__notion__API-retrieve-a-page page_id="2b5e14309122807086c1cc0c062689e8"
```

---

## 3. Google Drive

### Installasjon
```bash
claude mcp add google-drive -- npx -y @anthropics/server-google-drive
```

### Konfigurasjon
Ved første køyring opnar nettlesar for OAuth:
1. Logg inn med Google-konto
2. Gi tilgang til Drive
3. Token blir lagra lokalt

### Testkommando
```
mcp__google-drive__search query="Gramo"
```

---

## 4. Gmail

### Installasjon
```bash
claude mcp add gmail -- npx -y @gongrzhe/server-gmail-mcp
```

### Konfigurasjon
Same OAuth-flyt som Google Drive.

### Testkommando
```
mcp__gmail__list_messages q="from:gramo.no" maxResults=5
```

---

## 5. Google Calendar

### Installasjon
```bash
claude mcp add google-calendar -- npx -y @takumi0706/google-calendar-mcp
```

### Konfigurasjon
Same OAuth-flyt som Google Drive.

### Testkommando
```
mcp__google-calendar__calendar_list_events maxResults=5
```

---

## 6. Fiken (eigenutvikla)

### Installasjon
```bash
cd _TOOLS/fiken-mcp
npm install
npm run build
claude mcp add fiken -- node /path/to/_TOOLS/fiken-mcp/dist/index.js
```

### Konfigurasjon
1. Opprett `.env` i fiken-mcp/:
```
FIKEN_API_TOKEN=din_api_token
```
2. Hent token frå Fiken-innstillingar

### Testkommando
```
mcp__fiken__search_contacts company_slug="kjernekaren-as" query="Gramo"
```

---

## Komplett oppsett (alle servere)

```bash
# Offisielle Anthropic-servere
claude mcp add airtable -- npx -y @modelcontextprotocol/server-airtable
claude mcp add notion -- npx -y @modelcontextprotocol/server-notion
claude mcp add google-drive -- npx -y @anthropics/server-google-drive

# Community-servere
claude mcp add gmail -- npx -y @gongrzhe/server-gmail-mcp
claude mcp add google-calendar -- npx -y @takumi0706/google-calendar-mcp

# Eigenutvikla (krev lokal installasjon)
# Sjå fiken-mcp/KONTEKST.md
```

---

## Planlagde integrasjonar

### Sanity CMS (må lagast)
**Bruksområde:** Innhaldshub for strukturert innhald
**Referanse:** https://www.sanity.io/docs/http-api

### Miro (vurderast)
**Bruksområde:** Hente innhald frå workshop-boards

---

## Feilsøking

### MCP-server startar ikkje
```bash
# Sjekk status
claude mcp list

# Restart server
claude mcp remove airtable
claude mcp add airtable -- npx -y @modelcontextprotocol/server-airtable
```

### Token utgått
- **Airtable:** Generer ny PAT på airtable.com/create/tokens
- **Notion:** Generer ny token i integrasjons-innstillingar
- **Google:** Køyr `claude mcp add google-drive` på nytt for re-auth

### Airtable: "Invalid permissions"
- Sjekk at API-nøkkel har tilgang til basen
- Sjekk at tabellnamn er korrekt

### Notion: "Could not find page"
- Sjekk at sida er delt med integrasjonen
- Bruk page ID, ikkje URL

---

## Tilgangsnivå

| Integrasjon | Lese | Skrive | Slette |
|-------------|------|--------|--------|
| Airtable | ✅ | ✅ | ❌ |
| Notion | ✅ | ✅ | ❌ |
| Google Drive | ✅ | ✅ | ❌ |
| Gmail | ✅ | ✅ | ❌ |
| Fiken | ✅ | ❌ | ❌ |
| Sanity | ⏳ | ⏳ | ⏳ |

---

*Sist oppdatert: 28. november 2025*
