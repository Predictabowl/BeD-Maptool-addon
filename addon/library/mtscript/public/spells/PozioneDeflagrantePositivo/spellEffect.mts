[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oUseParam = json.get(macro.args,"useParam")]

[h: spellName = "PozioneDeflagrantePositivo"]

[h: jArgs = json.set("","source",source,"target",target,"libName",spellName,"danno","1d8","useParam",oUseParam)]

[macro("consumables/itemDamageTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jArgs]