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
	[oMacroParam = json.get(oEvent,"macroParam")]
	[oMacroParam = json.set(oMacroParam,sValue,oValue)]
	[oEvent = json.set(oEvent,"macroParam",oMacroParam)]
	[oEList = json.set(oEList,sEvent,oEvent)]
	[setProperty(sTipo,oEList,source)]
}]
