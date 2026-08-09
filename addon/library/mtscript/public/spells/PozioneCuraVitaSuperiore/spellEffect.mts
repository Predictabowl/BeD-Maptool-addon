[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oUseParam = json.get(macro.args,"useParam")]

[macro("consumables/itemHealTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"cura","1d10+3","libName","PozioneCuraVitaSuperiore")]