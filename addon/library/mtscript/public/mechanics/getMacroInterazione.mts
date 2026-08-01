[h: sSpawned = macro.args]

[h: oDati = getLibProperty("Lista_Dati",sSpawner)]
[h: sMacroName = getStrProp(oDati,"interagisciMacro")]

[h: macro.return = sMacroName]