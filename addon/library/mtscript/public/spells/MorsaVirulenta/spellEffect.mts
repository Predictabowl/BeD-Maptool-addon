[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "MorsaVirulenta"]

[h, if(isMalato(target)): pushStatModifier(source,"durataMod",1)]

[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno","2","categoria","MAGIA")]
[h, macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]