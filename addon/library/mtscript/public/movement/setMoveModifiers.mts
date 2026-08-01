[h: source = json.get(macro.args,"token")]
[h: multiplier = json.get(macro.args,"MoveMul")]
[h: modifier = json.get(macro.args,"MoveMod")]

[h: switchToken(source)]
[h, if(isNumber(multiplier)): Lista_Dati = setStrProp(Lista_Dati,"MoveMul",multiplier)]
[h, if(isNumber(modifier)): Lista_Dati = setStrProp(Lista_Dati,"MoveMod",modifier)]
