[h: source = macro.args]
[h: switchToken("MapVar")]

[h, if(json.isEmpty(Lista_Aure)): Lista_Aure="{}"]

[h, if(json.contains(Lista_Aure,source)), code:{
	[iNumAure = json.get(Lista_Aure,source)]
	[iNumAure = iNumAure +1]
};{
	[iNumAure = 1]
}]

[h: Lista_Aure = json.set(Lista_Aure,source,iNumAure)]
