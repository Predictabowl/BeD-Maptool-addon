[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oUseParam = json.get(macro.args,"useParam")]

[h: spellName = "PozioneFuocoLiquido")]

[h: jDotArg = json.set("","source",source,"target",target,"libName",spellName,"danno","1d2","stato","Incendio","inizioRound",0,"useParam",oUseParam)]

[macro("consumables/itemDotTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]