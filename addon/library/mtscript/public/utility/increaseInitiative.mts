[h: oToken = arg(0)]
[h: iValue = arg(1)]

[macro("ModificaIniziativa@this"): json.append(iValue, oToken)]
[macro("modFrazionePersonale@this"): json.append(oToken, -iValue)]

[macro("getFrazionePersonale@this"): oToken]
[h: iPers = macro.return]
[macro("getMapFrazione@this"): 0]
[h: iMapFraz = macro.return + iValue]
[h: iFinal = min(iMapFraz, iPers)]
[macro("setMapFrazione@this"): iFinal]