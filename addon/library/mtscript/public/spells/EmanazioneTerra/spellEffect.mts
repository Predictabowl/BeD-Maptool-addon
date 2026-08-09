[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "EmanazioneTerra"]

[h: iCD = getSpellCD(source,spellName)]
[h: macroParam = json.set("","CD",iCD)]
[macro("mechanics/addMarchioTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,target,macroParam)]
