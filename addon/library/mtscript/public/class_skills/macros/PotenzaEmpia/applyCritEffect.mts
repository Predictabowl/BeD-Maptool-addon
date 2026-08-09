[h: source = arg(0)]
[h: iCrit = arg(1)]

[h: switchToken(source)]
[h: fPvPerc = PV/PV_Max]

[h, if(fPvPerc > 0.5): return(0,"")]

[h: pushStatModifier(source, "Crit", iCrit)]
[h: pushStatModifier(source, "PCrit", iCrit)]

[h: libName = "PotenzaEmpia"]
[h: sNome = fetchClassSkillProp(libName,"nome_decorativo")]
[h: sImg = fetchClassSkillImage(libName)]

[h: macro.return = strformat("<img src='%{sImg}' width='25'> %{sNome}: %+d Crit e PCrit",iCrit)]