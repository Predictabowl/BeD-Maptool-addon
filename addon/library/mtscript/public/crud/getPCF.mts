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

[h,if(iArma==2): sPotCrit = "PCF2";  sPotCrit = "PCF1"]
[h: iMod = popStatModifier(target,"PCF")]

[h: iReturn = getProperty(sPotCrit,target) + iMod]

[h: macro.return = iReturn]
