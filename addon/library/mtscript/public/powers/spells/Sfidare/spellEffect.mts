[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "Sfidare"]

[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, "Sfidare")]
[h: iLL = macro.return]

[h: macroParam = json.set("","LL", iLL, "critRes", getUltimoCritico(source))]

[macro("mechanics/addMarchioTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,target,macroParam)]
