[h: source = json.get(macro.args,"source")]
[h: bConsume = json.get(macro.args,"consume")]

[macro("core/getServitore@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h, if(macro.return== ""): return(0,0)]

[h:macro.return = 1]