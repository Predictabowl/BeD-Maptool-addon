[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "VorticePirocinetico"]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno","1d8")]

[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno",1,"stato","Incendio","categoria","MAGIA","inizioRound",0)]
[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]