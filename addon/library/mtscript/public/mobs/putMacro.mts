[h, if(argCount()>1), code:{
	[oToken = arg(0)]
	[sKey = arg(1)]
	[oMacroData = arg(2)]
};{
	[macro.args = arg(0)]
	[h: oToken = json.get(macro.args,0)]
	[h: sKey = json.get(macro.args,1)]
	[h: oMacroData = json.get(macro.args,2)]
}]

[h: oToken = findToken(oToken)]
[h, if(oToken != ""), code:{
	[switchToken(oToken)]
	[if(json.type(Macro_Set) != "OBJECT"): Macro_Set = "{}"]
	[Macro_Set = json.set(Macro_set,sKey,oMacroData)]
	[iFlag = 1]
};{
	[iFlag = 0]
}]

[h: macro.return = iFlag]