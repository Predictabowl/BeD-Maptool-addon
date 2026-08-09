[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "SpruzzoVelenoso"]

[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno","1","stato","Veleno","categoria","VELENO")]
[h, macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]