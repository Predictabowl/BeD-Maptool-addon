[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oUseParam = json.get(macro.args,"useParam")]

[h: iMana = 180]

[macro("consumables/itemManaHealTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"mana",iMana,"libName","PozioneManaSuperiore")]