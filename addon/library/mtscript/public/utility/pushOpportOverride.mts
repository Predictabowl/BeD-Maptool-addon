[h: source = arg(0)]
[h, if(argCount() > 1): jOptions = arg(1); jOptions="{}"]

[h, if(!json.isEmpty(jOptions)), code:{
	[bAll = json.get(jOptions,"ALL")]	
	[oppTarget = json.get(jOptions,"target")]
};{
	[bAll = ""]
	[oppTarget = ""]
}]

[h: switchToken(source)]

[h, if(oppTarget == "" && bAll == ""): oppTarget = getStrProp(Lista_Dati,"oppTarget")]

[h: switchToken("MapVar")]	
[h, if(json.type(Opport_Override) != "OBJECT"): Opport_Override = "{}"]

[h, if(oppTarget != ""), code:{
	[Opport_Override = json.set(Opport_Override,source,oppTarget)]
};{
	[Opport_Override = json.set(Opport_Override,source,"ALL")]
}]

[h: macro.return = 1]