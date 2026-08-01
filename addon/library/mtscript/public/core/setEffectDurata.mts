[h: source = arg(0)]
[h: sEvent = arg(1)]
[h: iDurata = arg(2)]

[h: switchToken(source)]

[h, if(json.type(Lista_Effetti) != "OBJECT"): Lista_Effetti = "{}"]
[h, if(json.contains(Lista_Effetti,sEvent)), code:{
	[h: oEvent = json.get(Lista_Effetti,sEvent)]
	[h: oEvent = json.set(oEvent, "durata", iDurata)]
	[h: Lista_Effetti = json.set(Lista_Effetti, sEvent, oEvent)]
	[h: return = 1]
};{
	[return = 0]
}]

[h: macro.return = return]