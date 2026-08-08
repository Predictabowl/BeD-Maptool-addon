[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "SoffioAcido")]

[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno","1d4","categoria","VELENO")]
[h, macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]