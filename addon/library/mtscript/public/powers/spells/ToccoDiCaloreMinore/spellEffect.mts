[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "ToccoDiCaloreMinore"]

[macro("powers/rigeneraVitaTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"curaLL","1","spellName",spellName,"inizioRound",1)]