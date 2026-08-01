[h, if(argCount()>1), code:{
	[oToken = arg(0)]
	[sKey = arg(1)]
};{
	[macro.args = arg(0)]
	[h: oToken = json.get(macro.args,0)]
	[h: sKey = json.get(macro.args,1)]
}]

[h: oToken = findToken(oToken)]
[h, if(oToken != ""), code:{
	[switchToken(oToken)]
	[oMacroData = json.get(Macro_set,sKey)]
};{
	[oMacroData = "{}"]
}]

[h: macro.return = oMacroData]