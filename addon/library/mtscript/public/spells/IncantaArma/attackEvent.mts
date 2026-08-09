[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oParam = json.get(macro.args,"eventParam")]

[h: iArma = json.get(oParam, "arma")]
[h, if(iArma == 1): pushStatModifier(source, "DannoArma", "1d6")]

[h: macro.return =""]
