[h: iMod = arg(0)]
[h, if(argCount()>1): oToken = arg(1); oToken = currentToken()]

[h: switchToken(oToken)]
[h: Att_Rimanenti = Att_Rimanenti+iMod]