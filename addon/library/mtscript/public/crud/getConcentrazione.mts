[h: oToken = arg(0)]

[h: switchToken(oToken)]
[h: iValue = 70 + Concentrazione_Poteri + Livello + Volonta*2 + Risolutezza -15]
[h: bRisoluto = getSpellStartData(oToken,"risoluto")]
[h, if(bRisoluto == 1): iValue = iValue +15]

[h: macro.return = iValue]