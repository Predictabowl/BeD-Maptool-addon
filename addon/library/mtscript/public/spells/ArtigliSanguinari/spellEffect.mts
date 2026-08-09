[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bOpp = json.get(macro.args,"isOpport")]

[h: spellName = "ArtigliSanguinari"]

[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno","1d2", "stato", "Sanguinamento", "inizioRound", 0)]
[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]
