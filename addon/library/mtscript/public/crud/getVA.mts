[h: source = arg(0)]
[h, if(argCount()>1): iArma = arg(1); iArma = getArmaDaUsare(source)]

[h: oArma = getArma(source,iArma)]

[h: switchToken(source)]

[h: iStatMod = (Precisione - 5)*2 + (Conoscenza-5)]
[h: iAVA = getArmaStat(oArma,"VA")]
[h: iReturn = VA + iAVA + iStatMod]

[h:iReturn = iReturn + getStatModifier(source,"VA")]

[h: macro.return = iReturn]