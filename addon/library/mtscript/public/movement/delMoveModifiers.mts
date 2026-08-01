[h: source = json.get(macro.args,"token")]
[h: multiplier = json.get(macro.args,"MoveMul")]
[h: modifier = json.get(macro.args,"MoveMod")]

[h: switchToken(source)]
[h, if(multiplier != ""): Lista_Dati = deleteStrProp(Lista_Dati,"MoveMul")]
[h, if(modifier != ""): Lista_Dati = deleteStrProp(Lista_Dati,"MoveMod")]
