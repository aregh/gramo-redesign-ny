# MCP-konfigurasjon for Gramo-prosjektet

Denne guiden hjelper deg å koble AI-assistenten din (Antigravity, Cursor, etc.) direkte til prosjektverktøyene våre, som Sanity (CMS), Notion (Docs) og Airtable (Data).

## 💡 Konseptet: Slik fungerer det

Oppsettet består av to deler:
1.  **Prosjektet** bestemmer *hvilke* verktøy vi bruker. (Dette ligger i filen `mcp-servers.json` i denne mappen).
2.  **Du** må sette opp *din* tilgang lokalt. (Dette gjøres i din egen config-fil på din maskin).

### 🗺️ Visuell oversikt: Hvor filene bor

```
PROSJEKTET (Deles i Git)             DIN MASKIN (Ditt private oppsett)
------------------------             ---------------------------------
📂 gramo-redesign-ny/                🏠 ~/ (Din Hjemmekatalog)
 └── 📂 _TOOLS/                       ├── 📂 .gemini/antigravity/
      └── 📂 MCP/                     │    └── 📄 mcp_config.json  <-- DIN CONFIG
           └── 📄 mcp-servers.json    │        (Her limer du inn tokens)
               (Kilde: "Menyen")      │
                                      ├── 📂 .cursor/
                                      │    └── 📄 mcp.json         <-- DIN CONFIG
```

Filen `mcp-servers.json` i prosjektet er bare en "meny". Du må manuelt kopiere koden derfra (eller fra denne guiden) inn i *din* lokale fil (`mcp_config.json` e.l.) for at det skal virke.

---

## 🏗️ Steg 1: Finn din lokale config-fil

Første steg er å finne filen hvor du skal lime inn konfigurasjonen. Dette varierer basert på hvilken editor du bruker:

### For Antigravity (Google IDE)
*   **Filsti:** `~/.gemini/antigravity/mcp_config.json`
*   **Merk:** Antigravity støtter foreløpig ikke automatisk innlogging (OAuth). Du **MÅ** bruke API-tokens (se veiledninger under).

### For Cursor
*   **Meny:** Trykk `Cmd+Shift+P` -> Søk etter "Open MCP Settings"
*   **Filsti:** `~/.cursor/mcp.json`

### For VS Code
*   **Meny:** `Cmd+Shift+P` -> Søk etter "MCP: Open User Configuration"

---

## 🔑 Steg 2: Sett opp tjenestene

Her er oppskriften for å koble til hver tjeneste. Kopier kodesnutten inn i din config-fil (`mcpServers`-seksjonen), og bytt ut teksten i `<...>` med din nøkkel.

### 1. Sanity (Innhold & Data)

Du trenger en **API Token** fra Sanity.
1.  Gå til [sanity.io/manage](https://sanity.io/manage) -> Velg prosjektet "Gramo hub"
2.  Gå til **All projects** -> **Settings** -> **API** -> **Tokens** -> **Add API token**
3.  Gi den navnet "MCP Access" og velg "Viewer" (lese) eller "Editor" (lese/skrive) rettigheter.
4.  Kopier tokenen (starter med `sk...`).

**Konfigurasjon:**
```json
"Sanity": {
  "serverUrl": "https://mcp.sanity.io",
  "headers": {
    "Authorization": "Bearer <DIN_SANITY_TOKEN>"
  }
}
```

### 2. Airtable (Analyse & Oppgaver)

Du trenger en **Personal Access Token**.
1.  Gå til [airtable.com/create/tokens](https://airtable.com/create/tokens)
2.  Opprett token med scopes: `data.records:read`, `data.records:write`, `schema.bases:read`.
3.  Gi tilgang til basen "Gramo Redesign".

**Konfigurasjon:**
```json
"airtable": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-airtable"],
  "env": {
    "AIRTABLE_API_KEY": "<DIN_AIRTABLE_TOKEN>"
  }
}
```

### 3. Notion (Dokumentasjon)

Du trenger en **Internal Integration Token**.
1.  Gå til [notion.so/my-integrations](https://www.notion.so/my-integrations)
2.  Opprett ny integrasjon.
3.  **Viktig:** I Notion, gå til sidene du vil bruke (Prosjektdokumentasjon) -> `...` -> `Connect to` -> Velg integrasjonen din.

**Konfigurasjon:**
```json
"notion": {
  "command": "npx",
  "args": ["-y", "@notionhq/mcp-server"],
  "env": {
    "NOTION_API_KEY": "<DIN_NOTION_TOKEN>"
  }
}
```

---

## 🤝 Deling av tilgang i teamet

Hvordan gir du andre på teamet tilgang til Airtable/Notion hvis de ikke har egen konto?

**Løsningen er å dele API-nøkkelen (sikkert):**
1.  Admin (du) lager en token som beskrevet over.
2.  Del denne tokenen med teamet via en sikker kanal (f.eks. 1Password/LastPass). **IKKE** legg den i git/Slack.
3.  Teammedlemmet limer inn din token i *sin* lokale `mcp_config.json`.

Nå fungerer deres AI-assistent "på vegne av" deg (eller prosjektet), selv om de ikke har personlig tilgang til verktøyet.

> **Tips:** For langsiktige prosjekter, vurder å opprette en egen "Systembruker" (f.eks. `bot@gramo.no`) i Airtable/Notion, og lag tokens fra den brukeren. Da er ikke tilgangen knyttet til en person som kanskje slutter.

---

## ℹ️ Referanse & ID-er

Dette er faste verdier for Gramo-prosjektet som du kan trenge i mcp-config eller i prompts.

### Sanity Info
| Nøkkel | Verdi |
| :--- | :--- |
| **Project ID** | `b7xj6hwg` |
| **Dataset** | `production` |
| **Org ID** | `oge5qX36E` |

### Andre ID-er
| Tjeneste | ID / Info |
| :--- | :--- |
| **Airtable Base ID** | `appo0g1sGfgBc6mHg` |

---

### Verifisering
For å sjekke at alt virker:
1.  Restart IDE-en din.
2.  Spør chatten: *"Hent de 5 siste dokumentene fra Sanity"* (eller Airtable/Notion).
3.  Får du svar, er du i gang! 🚀
