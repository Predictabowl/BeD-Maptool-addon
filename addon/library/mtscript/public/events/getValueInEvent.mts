[h: source = json.get(macro.args,0)]
[h: sTipo = json.get(macro.args,1)]
[h: sEvent = json.get(macro.args,2)]
[h: sValue = json.get(macro.args,3)]

[h: switchToken(source)]
[h: oEList = getProperty(sTipo,source)]
[h, if(!json.isEmpty(oEList)), code:{
	[oEvent = json.get(oEList,sEvent)]
};{
	[oEvent = ""]
}]

[h, if(!json.isEmpty(oEvent )), code:{
	[result = json.get(oEvent,sValue)]
};{
	[result = ""]
}]

[h: macro.return = result]