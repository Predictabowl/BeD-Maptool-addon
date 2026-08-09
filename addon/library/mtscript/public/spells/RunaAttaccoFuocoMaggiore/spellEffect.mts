[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oUseParam = json.get(macro.args,"useParam")]

[macro("consumables/itemDamageTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"danno","1d8","libName","RunaAttaccoFuocoMaggiore")]
[macro("consumables/itemDotTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"danno","1d2","libName","RunaAttaccoFuocoMaggiore","stato","Incendio","inizioRound",0)]