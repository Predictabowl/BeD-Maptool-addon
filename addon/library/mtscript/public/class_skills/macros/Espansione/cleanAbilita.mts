[h: source = macro.args]

[h: libName = "Espansione"]

[h: addSpellMod(source,"AllSpells","VA",30)]
[h: addSpellMod(source,"AllSpells","PM",0,-1)]
[h, macro("powers/delSpellMod@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, "class_skills/macros/Espansione/isEligibleForAoE@lib:it.aldinucci.piero.bed.maptool.ruleset", "AoE")]
[h:switchToken(source)]
[h: Mancare = Mancare - 5]
[h: Controllo_Poteri = Controllo_Poteri +2 ]

[h:macro.return = ""]
