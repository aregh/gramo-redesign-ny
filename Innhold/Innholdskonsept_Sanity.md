# Innholdskonsept: Headless og Gjenbruk i Sanity

Dette dokumentet beskriver **konseptet** for innholdsforvaltning og publisering i Gramos nye løsning. Det fungerer som en rettesnor og referanse når vi skal vurdere eksisterende og nye løsninger i Sanity.

## Konsept: Innhold som byggesteiner

Vi jobber med et **headless publiseringskonsept** der innhold bygges opp av gjenbrukbare dokumenter så langt det er mulig.

Innhold lages ikke som ferdige "sider", men som selvstendige innholdsenheter med tydelig mening og ansvar. Disse kan brukes:
*   Alene
*   Sammen med andre
*   I ulike sammenhenger og kanaler

Hvordan innholdet kombineres, prioriteres og presenteres kan skje både:
*   I **Sanity**, gjennom struktur, referanser og komposisjon
*   I **kanalene** (frontend) som henter innholdet

Det viktige er ikke hvor sammenstillingen skjer, men at:
*   Innholdet er **strukturert for gjenbruk**
*   Samme innhold kan brukes flere steder **uten kopiering**
*   Endringer gjøres **ett sted** og slår gjennom overalt

## Mål

Målet med denne tilnærmingen er å:
1.  **Redusere dobbeltarbeid**: Aldri skrive samme ting to ganger.
2.  **Bevare fleksibilitet over tid**: Innholdet er ikke låst til designet.
3.  **Unngå låsing**: Unngå å låse innhold til én spesifikk løsning eller flate (nettside vs app vs API).
4.  **Bærekraftig utvikling**: Gjøre det mulig å utvikle struktur og bruk videre etter hvert som behovene blir tydeligere.

---

## Rettesnor for innholdsmodellering

Når vi utvikler eller vurderer strukturen i Sanity, skal vi bruke disse spørsmålene for å sikre at vi følger konseptet:

### 1. Er innholdet frigjort fra presentasjon?
*   Kan dette innholdet gi mening i en app, i en e-post, eller på en annen nettside?
*   Unngår vi å blande inn design-spesifikke felt (f.eks. "farge på knapp", "plassering til høyre") i selve innholdsdokumentet?

### 2. Er innholdet strukturert for gjenbruk?
*   Hvis vi trenger denne informasjonen (f.eks. en definisjon, en ansatt, et fakta-punkt) et annet sted, kan vi referere til det, eller må vi kopiere teksten?
*   Er innholdet brutt opp i små nok biter til å være nyttig i ulike sammenhenger?

### 3. Har innholdet en tydelig kilde?
*   Hvis dette innholdet endrer seg, er det åpenbart **hvor** man skal endre det?
*   Er det kun **ett** sted man trenger å gjøre endringen for at det skal oppdateres overalt?

### 4. Gir innholdsmodellen mening for redaktøren?
*   Forstår redaktøren hva de lager, uavhengig av hvor det havner visuelt?
*   Støtter modellen arbeidsprosessen med å lage, vedlikeholde og forvalte innholdet over tid?

---

## Relevante Sanity-ressurser

Dokumentasjon som hjelper oss å utnytte mulighetene i Sanity for å nå disse målene:

*   **Content Modeling**: [Guide til innholdsmodellering](https://www.sanity.io/docs/content-modelling) - Hvordan tenke struktur.
*   **Schema Types**: [Schema Types Reference](https://www.sanity.io/docs/schema-types) - Byggesteinene vi har til rådighet.
*   **Portable Text**: [Portable Text Documentation](https://www.sanity.io/docs/presenting-block-content) - For strukturert tekst som kan brukes overalt.
*   **Structure Builder**: [Structure Builder API](https://www.sanity.io/docs/structure-builder-introduction) - For å organisere arbeidsflaten effektivt for redaktører.
*   **Sanity Docs**: [Hoveddokumentasjon](https://www.sanity.io/docs) - Søk her for alle tekniske spørsmål.
