[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: spellName = "MarchioCompulsione"]

[h: iCD = getSpellCD(source, spellName)]
[h: macroParam = json.set("","CD", iCD, "critRes", getUltimoCritico(source))]
[macro("mechanics/addMarchioTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,target,macroParam)]
