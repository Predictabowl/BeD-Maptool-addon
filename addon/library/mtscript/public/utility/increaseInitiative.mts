[h: oToken = arg(0)]
[h: iValue = arg(1)]

[macro("utility/ModificaIniziativa@this"): json.append(iValue, oToken)]
[macro("utility/modFrazionePersonale@this"): json.append(oToken, -iValue)]

[macro("utility/getFrazionePersonale@this"): oToken]
[h: iPers = macro.return]
[macro("utility/getMapFrazione@this"): 0]
[h: iMapFraz = macro.return + iValue]
[h: iFinal = min(iMapFraz, iPers)]
[macro("utility/setMapFrazione@this"): iFinal]