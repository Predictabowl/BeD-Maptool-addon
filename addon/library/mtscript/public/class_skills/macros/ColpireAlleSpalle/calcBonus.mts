[h: source = arg(0)]
[h: iBonus = getLivelloAbilita(source, "ColpireAlleSpalle")]
[h, if(iBonus == 1): iBonus = 2; iBonus = floor(iBonus*1.5)]
[h: macro.return = iBonus]