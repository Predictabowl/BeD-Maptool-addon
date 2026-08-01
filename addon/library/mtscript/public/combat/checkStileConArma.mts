[h: oToken = arg(0)]
[h, if(argCount()>1): iArma = arg(1); iArma = 1]

[h: oArma = getArma(oToken,iArma)]
[h: bStileDist = isStileDistanza(oToken)]
[macro("isArmaDistanza@Lib:EquipEffect"): oArma]
[h: bArmaDist = macro.return]
[h, if(bStileDist != bArmaDist): return (0,0)]

[macro("combat/isStile2M@this"): oToken]
[h: b2H = macro.return]

[macro("isArma1HOnly@Lib:EquipEffect"): oArma]
[h, if(macro.return && b2H): return(0,0)]

[macro("isArma2HOnly@Lib:EquipEffect"): oArma]
[h, if(macro.return && !b2H): return(0,0)]

[h: macro.return = 1]
