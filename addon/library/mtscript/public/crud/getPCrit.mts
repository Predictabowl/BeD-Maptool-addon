[h: target = arg(0)]
[h, if(argCount()>1), code:{
	[iArma = arg(1)]
};{
	[iArma = ""]
}]


[h, if(!isNumber(iArma)), code:{
	[iArma = getArmaDaUsare(target)]
}]

[h: iStat = (Muscoli + Intuizione -10)*3 + Presenza +10]
[h: oArma = getArma(target,iArma)]
[h: iAPCrit = getArmaStat(oArma,"PCrit")]
[h: iMod = getStatModifier(target,"PCrit")]

[h: iReturn = getProperty("PCrit",target) + iAPCrit + iMod + iStat]

[h: macro.return = iReturn]
