[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[macro("mechanics/addMarchioTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,target,"")]

[h: return(0,"")]
