[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: jEventParam = json.get(macro.args,"eventParam")]


[h, if(json.get(jEventParam,"tipo") != "ATTACCO"): retun(0,"")]

[h: pushStatModifier(target, "Crit", 18)]
[h: pushStatModifier(target, "PCrit", 18)]

[h: macro.return = ""]