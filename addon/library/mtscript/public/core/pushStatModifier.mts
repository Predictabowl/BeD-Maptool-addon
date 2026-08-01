[h, if(argCount()>1), code:{
	[oToken = arg(0)]
	[sStat = arg(1)]
	[iMod = arg(2)]
};{
	[macro.args = arg(0)]
	[oToken = json.get(macro.args,0)]
	[sStat = json.get(macro.args,1)]
	[iMod = json.get(macro.args,2)]
}]

[h: switchToken(oToken)]
[h, if(json.type(Stat_Mod) != "OBJECT"): Stat_Mod="{}"]
[h, if(json.contains(Stat_Mod,sStat)): currentMod = json.get(Stat_Mod,sStat); currentMod = 0]
[h, if(!isNumber(iMod) && currentMod == 0): currentMod = ""]

[h, if(isNumber(currentMod)): currentMod = currentMod+iMod; currentMod = json.append(currentMod, iMod)]
[h: Stat_Mod = json.set(Stat_Mod,sStat,currentMod)]
