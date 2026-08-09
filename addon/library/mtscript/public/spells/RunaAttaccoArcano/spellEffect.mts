[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oUseParam = json.get(macro.args,"useParam")]

[macro("consumables/itemDamageTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"danno","1d6+1","libName","RunaAttaccoArcano")]