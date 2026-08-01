[h: sToken = arg(0)]
[h: sDrawId = arg(1)]
[h, if(argCount()>2): bCell = arg(2); bCell = 1]

[macro("utility/getCenterTokenXY@this"): sToken]
[h: aTokenCoord = macro.return]

[macro("utility/distanzaXYDraw@this"): json.append(aTokenCoord, sDrawId, bCell)]
