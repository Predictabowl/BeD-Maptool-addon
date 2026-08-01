[h: tP1 = arg(0)]
[h: tP2 = arg(1)]

[h: tMapVar = findToken("MapVar")]

<!-- here we must filter the cover if the tP2 is cover itself!!! -->
[macro("powers/getDrawCoreId@this"): tP2]
[h: sCoreDrawId = macro.return]

[h: aCoperture = "[]"]
[h: switchToken(tMapVar)]
[h: bAllActive = getDaMemoria(tMapVar, "copertureMappaAttive")]
[h, if(bAllActive == 0): return(0, aCoperture)]
[h, foreach(sCop, Coperture), code: {
	[jCop = json.get(Coperture, sCop)]
	[sDrawId = json.get(jCop,"drawId")]
	[bActive = json.get(jCop,"attiva")]
	[macro("mechanics/isTokensCrossingDraw@this"): json.append(tP1, tP2, sDrawId)]
	[if(sCoreDrawId != sDrawId && macro.return && bActive!= 0 ): aCoperture = json.append(aCoperture, json.get(jCop,"value"))]
}]


[h: macro.return = aCoperture]