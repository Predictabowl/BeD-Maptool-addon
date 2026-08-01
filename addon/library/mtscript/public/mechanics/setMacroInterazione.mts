[h: sSpawner = json.get(macro.args,0)]
[h: sMacroName= json.get(macro.args,1)]
[h: oMacroParam = json.get(macro.args,2)]

[h: oDati = getLibProperty("Lista_Dati",sSpawner)]
[h: oDati = setStrProp(oDati,"interagisciMacro",sMacroName)]
[h: setLibProperty("Lista_Dati",sSpawner)]