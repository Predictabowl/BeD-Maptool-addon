[h: oToken = arg(0)]
[h: switchToken(oToken)]

[h: iArmaUsata = getStrProp(Lista_Dati,"UltimaArmaUsata")]
[h, if(!isNumber(iArmaUsata)): iArmaUsata = 1]
[h: iArmaUsata = math.mod(iArmaUsata+1,2)]
[h: Lista_Dati = setStrProp(Lista_Dati,"UltimaArmaUsata",iArmaUsata)]