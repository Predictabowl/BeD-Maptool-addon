[h: source = arg(0)]
[h, if(argCount()>1): arma = arg(1); h: arma = ""]

[h, if (!isNumber(arma)): arma = getArmaDaUsare(source)]

[h: switchToken(source)]

[h: oArma = getArma(source,arma)]
[h: iALA = getArmaStat(oArma,"LA")]
[h: iReturn = LA + iALA + getCarA(source,oArma)]

[h:iReturn = iReturn + getStatModifier(source,"LA")]
[h: macro.return = iReturn]