[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]

[h, if(bRemove == 1): delDannoArmaAgg(target,"RafficaLetale")]

[h: macro.return = ""]