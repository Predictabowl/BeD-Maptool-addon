[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[macro("powers/rigeneraVitaTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"curaLL","1","spellName","SangueDiTroll","inizioRound",1,
 "blockingStatuses", "Incendio")]