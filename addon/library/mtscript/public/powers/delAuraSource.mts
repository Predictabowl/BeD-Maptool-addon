[h: source = macro.args]
[h: switchToken("MapVar")]

[h, if(json.contains(Lista_Aure,source)), code:{
	[iNumAure = json.get(Lista_Aure,source)]
	[iNumAure = iNumAure -1]
	[if(iNumAure <= 0), code:{
		[Lista_Aure = json.remove(Lista_Aure,source)]
	};{
		[Lista_Aure = json.set(Lista_Aure,source,iNumAure)]
	}]
}]

<!-- Controllo di sicurezza -->
[h: sourceAuras = getProperty("Aure_Attive",source)]
[h, if(json.isEmpty(sourceAuras) == 1): Lista_Aure = json.remove(Lista_Aure,source)]