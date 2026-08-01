[h: source = json.get(macro.args,0)]
[h: scuolaU = json.get(macro.args,1)]
[h: switchToken(source)]
[h: Lista_Dati = setStrProp(Lista_Dati,"ScuolaUniversale",scuolaU)]
