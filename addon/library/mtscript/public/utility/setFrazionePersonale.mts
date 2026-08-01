[h: source = json.get(macro.args,0)]
[h: iValore = json.get(macro.args,1)]

[h: switchToken(source)]
[h: Lista_Dati = setStrProp(Lista_Dati,"Frazione",iValore)]