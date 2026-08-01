[h, if(argCount()>1), code:{
	[oToken = arg(0)]
	[sStat = arg(1)]
};{
	[macro.args = arg(0)]
	[oToken = json.get(macro.args,0)]
	[sStat = json.get(macro.args,1)]
}]

[h: switchToken(oToken)]

[h: currentMod = getStatModifier(oToken, sStat)]
[h: Stat_Mod = json.remove(Stat_Mod,sStat)]

[h: macro.return = currentMod]
