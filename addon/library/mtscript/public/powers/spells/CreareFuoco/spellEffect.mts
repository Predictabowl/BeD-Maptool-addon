[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "CreareFuoco"]

[h: oParam = json.set("","source",source,"target",target,"spell",spellName,"danno","1","stato","Incendio","categoria","MAGIA","inizioRound",1)]
[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): oParam]

