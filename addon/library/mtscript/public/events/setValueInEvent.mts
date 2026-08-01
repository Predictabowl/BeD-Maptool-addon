[h: source = json.get(macro.args,0)]
[h: sTipo = json.get(macro.args,1)]
[h: sEvent = json.get(macro.args,2)]
[h: sValue = json.get(macro.args,3)]
[h: oValue = json.get(macro.args,4)]

[h: oEList = getProperty(sTipo,source)]
[h, if(!json.isEmpty(oEList)), code:{
	[oEvent = json.get(oEList,sEvent)]
};{
	[oEvent = ""]
}]

[h, if(!json.isEmpty(oEvent)), code:{
	[oEvent = json.set(oEvent,sValue,oValue)]
	[oEList = json.set(oEList,sEvent,oEvent)]
	[setProperty(sTipo,oEList,source)]
}]
