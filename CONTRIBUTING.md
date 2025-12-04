# Samarbeid i dette repositoriet

> Retningsliner for Are og Bastian

---

## Arbeidsflyt

### Før du startar
```bash
git pull origin main    # Hent siste endringar
```

### Etter endring
```bash
git add -A
git commit -m "Kort skildring av endring"
git push origin main
```

---

## Filnamn-konvensjonar

| Type | Format | Eksempel |
|------|--------|----------|
| Møtereferat | `YYYY-MM-DD_Tittel.md` | `2025-12-04_Oppfølging-Rita-Bastian.md` |
| Analysefiler | `Deskriptivt-namn.md` | `GEO-analyse.md` |
| Samandragsfiler | `_MAPPENAVN.md` | `_BAKGRUNN.md` |

---

## Mappestruktur

```
Gramo_kontekstarkitektur/
├── Bakgrunn/         # Ikkje endre ofte (referansemateriale)
├── Kommunikasjon/    # Møtereferat, intervju
├── Dokumenter/       # Formelle dokument
├── Analyse/          # Analysearbeid
├── Design/           # Designfiler
├── Innhald/          # Innhald for ny nettside
└── _TOOLS/           # Verktøy (ikkje rør)
```

---

## Konflikthandtering

Dersom `git push` feiler:

```bash
git pull --rebase origin main   # Hent og flettast inn
# Løys eventuelle konfliktar i filene
git add -A
git rebase --continue
git push origin main
```

---

## Hub-filer (oppdater ved behov)

| Fil | Kva |
|-----|-----|
| `KONTEKST.md` | Hovudoversikt - oppdater ved nye filer |
| `2DOS.md` | Oppgåveliste - oppdater ofte |
| `LOGG.md` | Kronologisk logg - legg til nye hendingar |

---

## Tips

1. **Pull før du startar** - unngå konfliktar
2. **Små commits** - lettare å spore endringar
3. **Beskrivande commit-meldingar** - "Lagt til møtereferat 4. des" ikkje "oppdatert"
4. **Ikkje rediger same fil samtidig** - avtal kven som jobbar med kva

---

## Kontakt

- **Are:** Prosjektleiing, strategi, analyse
- **Bastian:** Innhald, intern koordinering

Ved spørsmål om git/GitHub: spør Are.

---

*Sist oppdatert: 4. desember 2025*
