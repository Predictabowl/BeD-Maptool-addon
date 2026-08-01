[h: source = arg(0)]
[h, if(argCount() > 1): iArma = arg(1); iArma = 1]

[macro("mobs/getDifendersi@this"): source]
[if(macro.return): return(0,0)]

[h, if(isStileDistanza(source)): return(0,1)]

[h: oArma = getArma(source,iArma)]
[h, macro("isArmaLancio@Lib:EquipEffect"): oArma]
[h, if(macro.return): return(0,1)]

[h: macro.return = 0]