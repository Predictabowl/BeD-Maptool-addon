[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "ToccoDiCombustione"]

[h: oParam = json.set("","source",source,"target",target,"spell",spellName,"danno","1d4","stato","Incendio","categoria","MAGIA","inizioRound",0)]
[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): oParam]

