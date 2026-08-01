[h: oParam = arg(0)]
[h: source = json.get(oParam,"source")]
[h: armaDU = json.get(oParam,"arma")]

[h, if(armaDU == ""): armaDU = getArmaDaUsare(source)]

[h: value = getLMM(oParam)]
[h, if(value < -9): return(0,-1)]

[h: switchToken(source)]
[h: oArma = getArma(source,armaDU)]
[h: iALL = getArmaStat(oArma,"LL")]
[h: iReturn = value + LL_Base + 2 + floor(Livello*8/29) + iALL]
[h: iReturn = iReturn + getStatModifier(source,"LL")]

[h: macro.return = iReturn]