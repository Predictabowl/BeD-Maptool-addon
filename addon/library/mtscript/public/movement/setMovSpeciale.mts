[h: source = json.get(macro.args,0)]
[h: iMov = json.get(macro.args,1)]

[h:switchToken(source)]
[h: Lista_Dati = setStrProp(Lista_Dati,"MOVIMENTOSPECIALE",iMov)]