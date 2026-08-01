[h: oToken = arg(0)]

[h: iTokenTox = getTossicoLiv(oToken)]
[macro("mechanics/getResistenzaTox@this"): oToken]
[h: iResTox = macro.return]

[h: macro.return = max(iTokenTox - iResTox,0)]