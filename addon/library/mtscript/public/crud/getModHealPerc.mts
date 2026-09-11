[h: source = arg(0)]
[h: target = arg(1)]
[h, if(argCount()>2): iArma = arg(2); iArma = getArmaDaUsare(source)]

[h: source = findToken(source)]

[h, macro("core/getMCGPerc@this"): source]
[h: dMod = macro.return]
[h, macro("core/getMCRPerc@this"): target]
[h: dMod = dMod + macro.return]
[h: dMod = dMod + getStatModifier(source,"Mod_Cura_Out")]
[h: dMod = dMod + getStatModifier(target,"Mod_Cura_In")]
[h: oArma = getArma(source,iArma)]
[h: dMod = dMod + getArmaStat(oArma,"Mod_Cura_Out")]

[h: dMod = calcPercentMod(dMod)]

[h: macro.return = dMod]