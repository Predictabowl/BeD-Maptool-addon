[h: source = macro.args]
[h: switchToken(source)]
[h: modifier = getStrProp(Lista_Dati,"MoveMod")]
[h: multiplier = getStrProp(Lista_Dati,"MoveMul")]
[h, if(isNumber(modifier) != 1): modifier = 0]
[h, if(isNumber(multiplier) != 1): multiplier = 1]

[h: macro.return = json.set("","MoveMod",modifier,"MoveMul",multiplier)]