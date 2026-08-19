[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spellId")]

[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"stato", "Veleno","danno","1","categoria","VELENO", "inizioRound", 0)]
[h, macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]