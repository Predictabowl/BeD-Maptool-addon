[h: oToken = arg(0)]

[h: oToken = findToken(oToken)]
[h, if(oToken == ""): oToken = currentToken()]

[h: switchToken(oToken)]

[h: Poteri_Offensivi_Rimasti = Poteri_Offensivi_Max]
