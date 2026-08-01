[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
	[h: target = json.get(macro.args,"target")]
	[h: iValore = json.get(macro.args,"valore")]
	[h, if(isNumber(iValore) == 0): iValore = 1]
};{
	[h: source = json.get(macro.args,0)]
	[h: target = json.get(macro.args,1)]
	[h: iValore = 1]
}]

[h: switchToken (target)]

[h: sourceData = json.get(Att_Opportunita,source)]
[h, if(json.type(sourceData) != "OBJECT"): sourceData = "{}"]
[h: sourceData = json.set(sourceData,"EXCLUDE",1)]
[h: Att_Opportunita = json.set(Att_Opportunita,source,sourceData)]

[h: macro.return = 1]