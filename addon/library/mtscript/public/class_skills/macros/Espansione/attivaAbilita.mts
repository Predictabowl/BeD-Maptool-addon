[h: source = macro.args]

[h: libName = "Espansione"]

[h: addSpellMod(source,"AllSpells","VA",-30)]
[h: addSpellMod(source,"AllSpells","PM",0,1)]
[h:switchToken(source)]
[h: Mancare = Mancare + 5]
[h: Controllo_Poteri = Controllo_Poteri -2 ]
[h: addSpellMod(source, buildClassSkillMacroName("Espansione","isEligibleForAoE"), "AoE", 3)]

[h: macro.return = 0]
