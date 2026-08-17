[h: sSpawner = json.get(macro.args,"spawner")]
[h: iLivello = json.get(macro.args,"livello")]

[h: capValues = getDaMemoria(sSpawner,"generatori-capacita")]
[h, if(json.type(capValues) != "OBJECT"): return(0, "")]

[h: iTotIncr = 0]
[h, foreach(sCap,capValues), code:{
	[oCap = json.get(capValues,sCap)]
	[iMin = json.get(oCap,"min")]
	[iMax = json.get(oCap,"max")]
	[iIncr = iMax - iMin]
	[oCap = json.set(oCap, "incr", iIncr)]
	[capValues = json.set(capValues, sCap, oCap)]
	[iTotIncr = iTotIncr + iIncr]
}]

[h: fLivIncr = iTotIncr * iLivello / 30]
[h, foreach(sCap,capValues), code:{
	[oCap = json.get(capValues,sCap)]
	[iIncr = json.get(oCap,"incr")]
	[fIncr = (iIncr / iTotIncr) * fLivIncr]
	[iValue = json.get(oCap,"min") + round(fIncr)]
	[setProperty(sCap, iValue, sSpawner)]
}]