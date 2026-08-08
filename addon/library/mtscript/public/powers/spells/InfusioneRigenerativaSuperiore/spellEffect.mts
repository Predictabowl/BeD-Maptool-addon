[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "InfusioneRigenerativaSuperiore"]

[macro("powers/rigeneraVitaTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"curaLL","2","spellName",spellName,"inizioRound",1)]