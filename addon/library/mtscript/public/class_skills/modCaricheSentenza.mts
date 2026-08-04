[h: oToken = arg(0)]
[h: iMod = arg(1)]

[h: switchToken(oToken)]
[h, if(!isNumber(Cariche_Sentenza)): Cariche_Sentenza = 0]
[h: Cariche_Sentenza = Cariche_Sentenza + iMod]