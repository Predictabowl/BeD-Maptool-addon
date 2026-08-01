[h: source = arg(0)]
[h: target = arg(1)]
[h, if(argCount()>2): iArma = arg(2); iArma = ""]
[h, if(json.type(iArma) == "OBJECT"), code:{
	[oMoreParams = iArma]
	[iArma = json.get(oMoreParams, "arma")]
	[iCritFailTS = json.get(oMoreParams, "critFailTS")]
};{
	[iCritFailTS = ""]
}]

[h, if(iArma == ""): iArma = getArmaDaUsare(source)]

[h: source = findToken(source)]
[h, if(source == ""), code:{
	[h: dMod = 0]
};{
	[h: oArma = getArma(source,iArma)]
	[macro("core/getMDIPerc@this"): source]
	[h: dMod = macro.return + getArmaStat(oArma,"Mod_Danno_Out")]
}]

[h, if(!isNumber(iCritFailTS)): iCritFailTS = getStatModifier(target,"CriticalFailTS")]
[h, if(iCritFailTS > 0): dMod = dMod + 0.25]


[h: dMod = dMod+ getProperty("Mod_Danno_In",target)]
[h: dMod = dMod + getStatModifier(source,"Mod_Danno_Out")]
[h: dMod = dMod + getStatModifier(target,"Mod_Danno_In")]
[h: dMod = dMod + getSpellStartData(source,"Mod_Danno_Out")]

[h: macro.return = dMod]