[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "SoffioDragoVerde")]

[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno","1d6","stato","Veleno","categoria","VELENO")]
[h, macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]