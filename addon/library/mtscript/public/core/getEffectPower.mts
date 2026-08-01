[h: source = json.get(macro.args,0)]
[h: sEvent = json.get(macro.args,1)]

[h: switchToken(source)]

[h, if(json.type(Lista_Effetti) != "OBJECT"): Lista_Effetti = "{}"]
[h, if(json.contains(Lista_Effetti,sEvent)), code:{
	[h: oEvent = json.get(Lista_Effetti,sEvent)]
	[h: return = json.get(oEvent,"potenza")]
};{
	[return = -1]
}]

[h: macro.return = return]