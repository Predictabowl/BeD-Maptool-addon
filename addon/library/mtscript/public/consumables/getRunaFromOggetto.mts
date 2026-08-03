[h: oToken = arg(0)]
[h: sArma = arg(1)]
[h, if(argCount()>2): iRuna = arg(2); iRuna = 1]

[h: switchToken(oToken)]
[h: oOggetto = json.get(Equipaggiamento, sArma)]
[macro("consumables/getAllRuneFromOggetto@this"): json.append(oToken, oOggetto)]
[h: lRune = macro.return]
[h: sRuna = string(iRuna)]
[h: oRuna = json.get(lRune,sRuna)]

[h: macro.return = oRuna]