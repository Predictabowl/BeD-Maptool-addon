[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[macro("powers/druidHealTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"curaLL","3","spellName","Ricrescita","inizioRound",0)]