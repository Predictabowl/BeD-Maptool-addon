[h, if(argCount()>1), code:{
	[oToken = arg(0)]
	[sStat = arg(1)]
};{
	[macro.args = arg(0)]
	[oToken = json.get(macro.args,0)]
	[sStat = json.get(macro.args,1)]
}]

[h, if(oToken == ""): return(0,0)]

[h: switchToken(oToken)]
[h, if(json.type(Stat_Mod) != "OBJECT"): Stat_Mod="{}"]
[h, if(json.contains(Stat_Mod,sStat)), code:{
	[currentMod = json.get(Stat_Mod,sStat)]
};{
	[currentMod = 0]
}]

[h, if(isNumber(currentMod)): return(0, currentMod)]

[h: sFinal = ""]
[h, foreach(sMod, currentMod), code:{
	[sFinal = strformat("%{sFinal}+%{sMod}")]
}]

[h: macro.return = sFinal]
