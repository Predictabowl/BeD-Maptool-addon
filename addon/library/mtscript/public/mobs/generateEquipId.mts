[h: oToken = arg(0)]

[h: switchToken(oToken)]

[h: sLast = "lastIdNum"]
[h: k = getStrProp(Lista_Dati,sLast)]
[h, if(!isNumber(k)): k = 0]

[h: bFound = 0]

[h, while(!bFound), code:{
	[bFound = 1]
	[sId = "EQUIP-"+k]
	[if (json.contains(Equipaggiamento,sId)): bFound = 0]
	[k = k + 1]
}]

[h: Lista_Dati = setStrProp(Lista_Dati,sLast,k)]

[h: macro.return = sId]