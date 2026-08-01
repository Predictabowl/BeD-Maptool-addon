[h: oToken = arg(0)]

[macro("mechanics/getCapacitaData@this"): oToken]
[h: jData = macro.return]

[h, if(json.isEmpty(jData)): return(0,0)]

[h: switchToken(oToken)]
[h: iPunti = Livello*3.3]

[h: iTot = json.get(jData,"totalePriorita")]
[h: jCapData = json.get(jData,"dataCapacita")]

[h, foreach(sCap,jCapData), code:{
	[lData = json.get(jCapData,sCap)]
	[fMod = listGet(lData,1)/iTot]
	[iValue = round(listGet(lData,0)+ fMod*iPunti)]
	[setProperty(sCap,iValue)]
}]

[h: macro.return = 1]