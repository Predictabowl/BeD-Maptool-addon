[h: oToken = arg(0)]

[h: switchToken(oToken)]
[h: iValue = 70 + Concentrazione_Poteri + Livello + (Volonta -5) *2 + Risolutezza-5]
[h: bRisoluto = getSpellStartData(oToken,"risoluto")]
[h, if(bRisoluto == 1): iValue = iValue +15]

[h: macro.return = iValue]