[h: oToken = arg(0)]

[h: oToken = findToken(oToken)]
[h, if(oToken == ""): oToken = currentToken()]

[h: macro.return = getProperty("Poteri_Offensivi_Rimasti",oToken)]
