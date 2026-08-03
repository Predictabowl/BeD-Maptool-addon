[h: oToken = arg(0)]
[h: sArma = arg(1)]
[h, if(argCount()>2): iRuna = arg(2); iRuna = 1]

[macro("consumables/getAllRuneFromArma@this"): json.append(oToken,sArma)]
[h: lRune = macro.return]
[h: sRuna = string(iRuna)]
[h: oRuna = json.get(lRune,sRuna)]

[h: macro.return = oRuna]