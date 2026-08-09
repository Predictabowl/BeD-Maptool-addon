[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "Decomposizione"]

[h, if(getState("Veleno",target)): sDanno = "1"; sDanno = "1d2"]

[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno",sDanno,"stato","","categoria","MAGIA", "inizioRound", 0)]
[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]

