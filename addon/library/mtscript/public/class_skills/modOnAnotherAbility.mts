<!-- TODO questa cambia il costo delle abilità, ma non so se è utilizzata ancora -->
[h: oToken = arg(0)]
[h: sLibAbilita = arg(1)]
[h: sTipoCosto = arg(2)]

[h: aDati = json.get(fetchClassSkillProp(sLibAbilita,sTipoCosto), "params")]
[h: sAltraAbilita = json.get(aDati, 0)]
[h: iCostoBase = json.get(aDati, 1)]
[h: iScontoLiv = json.get(aDati, 2)]

[h: iLiv = getLivelloAbilita(oToken, sAltraAbilita)]
[h: iCostoFinale = iCostoBase + iScontoLiv*iLiv]

[h: macro.return = iCostoFinale]