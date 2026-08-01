[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
	[h: target = json.get(macro.args,"target")]
};{
	[h: source = arg(0)]
	[h: target = arg(1)]
}]

[h, if(getPropertyType(target) != "Basic"): return(0,0)]

[h: switchToken (target)]
[h: flag = 1]
[h, if(json.type(Att_Opportunita) != "OBJECT"), code:{
	[Att_Opportunita = "{}"]
	[return(0,0)]
}]

[if (json.contains(Att_Opportunita,"ATTIVA") == 0): return(0,0)]

[h: sourceData = json.get(Att_Opportunita,source)]
[if(json.type(sourceData) != "OBJECT"), code:{
	[sourceData = "{}"]
	[Att_Opportunita = json.set(Att_Opportunita,source,sourceData)]
}]
[if(json.contains(sourceData,"EXCLUDE")): return(0,0)]

[h: macro.return = 1]