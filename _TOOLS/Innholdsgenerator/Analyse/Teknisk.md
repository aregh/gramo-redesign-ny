# Teknisk analyse: Sanity-integrasjon

> Utarbeidet 2026-01-22

## Bakgrunn

Innholdsgeneratoren skal integreres i Sanity (Gramos CMS) for å gi redaktører tilgang til SpråkGPT og JusGPT direkte i innholdsarbeidet.

---

## Fire integrasjonsalternativer

### 1. AI Assist med Custom Field Actions

**Beskrivelse:** Legg til SpråkGPT/JusGPT som menyvalg på tekstfelt i Sanity Studio.

**Fordeler:**
- Innebygd i Sanity, ingen ekstern app
- Redaktører kjenner grensesnittet
- Fungerer direkte på tekstfelt

**Begrensninger:**
- Kun OpenAI (ikke Claude)
- Krever Growth-plan
- Begrenset kontroll over UI

**Implementering:**
```typescript
// sanity.config.ts
import { defineAssistFieldAction, defineAssistFieldActionGroup } from '@sanity/assist'

fieldActions: [
  defineAssistFieldActionGroup({
    name: 'kvalitetskontroll',
    title: 'Kvalitetskontroll',
    actions: [
      defineAssistFieldAction({
        name: 'sprakgpt',
        title: 'SpråkGPT - Klarspråk',
        aiAction: { type: 'transform' },
        instruction: `Forbedre teksten etter klarspråkprinsippene:
- Bruk aktiv form
- Korte setninger
- Vanlige ord
- Direkte henvendelse`
      }),
      defineAssistFieldAction({
        name: 'jusgpt',
        title: 'JusGPT - Juridisk sjekk',
        aiAction: { type: 'transform' },
        instruction: `Sjekk teksten for juridiske problemstillinger:
- Opphavsrett til musikk/bilder
- Personvern
- Ansvarsfraskrivelser
- Forbehold som mangler`
      })
    ]
  })
]
```

**Kompleksitet:** Lav
**Tid:** 1-2 dager

---

### 2. Custom Input Component

**Beskrivelse:** Bygg et React-panel som vises ved siden av tekstfelt, med eget chat-grensesnitt.

**Fordeler:**
- Full kontroll over UI
- Kan bruke Claude API direkte
- Chat-grensesnitt som i prototypen

**Begrensninger:**
- Mer utviklingsarbeid
- Må vedlikeholdes som egen kode

**Arkitektur:**
```
┌─────────────────────────────────────────┐
│ Sanity Studio                           │
├─────────────────┬───────────────────────┤
│ Tekstfelt       │ Custom sidecar        │
│ (Portable Text) │ ┌─────────────────┐   │
│                 │ │ SpråkGPT/JusGPT │   │
│                 │ │ chat-panel      │   │
│                 │ └─────────────────┘   │
└─────────────────┴───────────────────────┘
                          │
                          ▼
                   Claude API
```

**Kompleksitet:** Medium
**Tid:** 1-2 uker

---

### 3. MCP Server + Ekstern Agent

**Beskrivelse:** Bruk Sanity MCP-server med Claude Code eller egen agent.

**Fordeler:**
- Full Claude-støtte
- Kan jobbe med hele dokumenter
- Skjema-bevisst (forstår datastrukturen)
- 40+ innebygde verktøy

**Begrensninger:**
- Ikke integrert i Studio-UI
- Krever teknisk bruker
- Egnet for utviklere, ikke redaktører

**Konfigurasjon:**
```json
// claude_desktop_config.json
{
  "mcpServers": {
    "sanity": {
      "url": "https://mcp.sanity.io",
      "headers": {
        "Authorization": "Bearer SANITY_API_TOKEN"
      }
    }
  }
}
```

**Bruksscenario:**
Du kjører batch-operasjoner via Claude Code som oppdaterer mange dokumenter i Sanity samtidig.

**Kompleksitet:** Lav (konfigurasjon)
**Tid:** Timer

---

### 4. Standalone app med Sanity API

**Beskrivelse:** Bygg prototypen som egen web-app, koble til Sanity via API.

**Fordeler:**
- Full frihet i design
- Claude API direkte
- Kan embeddes som iframe i Sanity Studio
- Workshop-vennlig (fungerer uten Sanity-tilgang)

**Begrensninger:**
- Separat app å vedlikeholde
- Manuell synkronisering (eller API-integrasjon)

**Arkitektur:**
```
┌──────────────────┐     ┌──────────────────┐
│ Innholdsgenerator│────▶│ Claude API       │
│ (Next.js app)    │     │ (SpråkGPT/JusGPT)│
└────────┬─────────┘     └──────────────────┘
         │
         ▼
┌──────────────────┐
│ Sanity API       │
│ (hent/lagre)     │
└──────────────────┘
```

**Kompleksitet:** Medium-høy
**Tid:** 2-4 uker

---

## Anbefaling

| Fase | Tilnærming | Begrunnelse |
| --- | --- | --- |
| **Nå (workshop)** | Standalone prototype | Fungerer umiddelbart, ingen avhengigheter |
| **Kort sikt** | AI Assist field actions | Raskt å implementere, integrert i Studio |
| **Lang sikt** | Custom input component | Full kontroll, beste brukeropplevelse |

---

## Tekniske krav

### For AI Assist (Alternativ 1)
- Sanity Growth-plan eller høyere
- `@sanity/assist` v4.3.0+
- OpenAI API-nøkkel (håndteres av Sanity)

### For Custom Component (Alternativ 2)
- React/TypeScript-kompetanse
- Claude API-nøkkel
- Backend for API-proxy (unngå eksponering av nøkkel)

### For MCP (Alternativ 3)
- Sanity API-token
- Claude Desktop eller Claude Code

### For Standalone (Alternativ 4)
- Next.js / Vercel
- Claude API-nøkkel
- Sanity API-token

---

## Prototyper

- [mockup-sanity-ai-assist.html](./../mockup-sanity-ai-assist.html) - Interaktiv demo av alternativ 1
- [prototype.html](./../prototype.html) - Enkel editor med chat-panel

---

## Kilder

- [Sanity AI Assist plugin](https://github.com/sanity-io/assist)
- [Custom field actions](https://www.sanity.io/docs/studio/ai-assist-field-actions)
- [Sanity MCP Server](https://www.sanity.io/docs/compute-and-ai/mcp-server)
- [Form Components API](https://www.sanity.io/docs/studio/form-components)
- [Sanity Agent Toolkit](https://github.com/sanity-io/agent-toolkit)
