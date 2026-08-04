[h: oOwner = arg(0)]

[h: iLiv = getLivelloAbilita(oOwner, "SadismoDiabolico")]

[h: switchToken(oOwner)]

[h: PA = PA + iLiv]
[h: modIniziativa(iLiv, oOwner)]