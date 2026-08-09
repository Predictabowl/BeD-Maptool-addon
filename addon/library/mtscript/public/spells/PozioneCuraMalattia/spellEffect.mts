[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[macro("powers/removeEffectTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",source,"tipo", "Malattia","spellName","PozioneCuraMalattia", "PR", 7)]

