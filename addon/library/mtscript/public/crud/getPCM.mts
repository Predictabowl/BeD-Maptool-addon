[h: boradcast("DEPRECATED:"+getMacroName()+"@"+getMacroLocation())]
[h: target = arg(0)]
[h, if(argCount()>1), code:{
	[iArma = arg(1)]
};{
	[iArma = ""]
}]


[h, if(!isNumber(iArma)), code:{
	[macro("combat/getArmaDaUsare@this"):target]
	[iArma = macro.return]
}]

[h,if(iArma==2): sPotCrit = "PCM2";  sPotCrit = "PCM"]
[macro("core/popStatModifier@this"): json.append(target,"PCM")]
[h: iMod = macro.return]

[h: iReturn = getProperty(sPotCrit,target) + iMod]

[h: macro.return = iReturn]
