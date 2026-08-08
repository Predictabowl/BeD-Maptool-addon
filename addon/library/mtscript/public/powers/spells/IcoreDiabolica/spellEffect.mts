[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[macro("powers/curaSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"curaLL","1d6+2","spellName","IcoreDiabolica")]