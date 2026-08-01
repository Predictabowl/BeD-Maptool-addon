[h: source = json.get(macro.args,0)]
[h: sNome = json.get(macro.args,1)]

[macro("core/getStatsAbilita@this"):json.append(source,sNome)]
[h: sTipo = upper(getStrProp(macro.return,"tipo"))]
[h: sTipoId = "ABILITA"+upper(sTipo)]

[h: switchToken(source)]
[h: sCurrentA = getStrProp(Lista_Dati,sTipoId)]
[h: sCurrentA = listAppend(sCurrentA,sNome)]
[h: Lista_Dati = setStrProp(Lista_Dati,sTipoId,sCurrentA)]