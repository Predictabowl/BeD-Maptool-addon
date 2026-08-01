[h: oToken = json.get(macro.args,0)]
[h: bRemove = json.get(macro.args,1)]
[h: jOtherData = json.get(macro.args,2)]


[h: iOldLiv = json.get(jOtherData, "oldLiv")]

[h: sNomeAb = "EufoniaIncisiva"]
[h: iNewLiv = getLivelloAbilita(oToken, sNomeAb)]

[h: iValue = iNewLiv - iOldLiv]

[h: addSpellMod(oToken, "Controllo", "CD", iValue)]
[h: return (0,"")]