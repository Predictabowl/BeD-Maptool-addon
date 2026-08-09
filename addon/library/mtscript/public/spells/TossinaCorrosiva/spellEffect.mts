[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "TossinaCorrosiva")]
[h, if(getState("Veleno",target)): sDanno = "1d2"; sDanno = "1"]

[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno",sDanno)]
[h, macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]