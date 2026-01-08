---
name: idag
description: Viser dagens dato på norsk med uke og fase
allowed-tools: Bash(date +%H:%M)
---

Hent dato fra `<env>Today's date</env>` (format: YYYY-MM-DD, f.eks. 2026-01-08).

**Output-formater:**

**Standard:**
```
📅 8. januar 2026
📆 Uke 2
🎯 Fase 1 (siste uke)
```

**Filnavn:** `260108-[beskrivelse].md`

**Sist oppdatert:** `Sist oppdatert: 8. januar 2026`

**Fase:** Uke 1-2 (2026) = Fase 1, Feb-mars = Fase 2, Apr-jun = Fase 3

**Måneder:** 01=januar, 02=februar, 03=mars, 04=april, 05=mai, 06=juni, 07=juli, 08=august, 09=september, 10=oktober, 11=november, 12=desember

**Klokkeslett (kun hvis nødvendig):** Kjør `date +"%H:%M"` for å få kl. HH:MM
