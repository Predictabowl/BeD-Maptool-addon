[h: oToken = arg(0)]

[h: sTag = "CAPACITA_DATA"]

[h: oData = getDaMemoria(oToken,sTag)]
[h, if(json.isEmpty(oData)): return(0,0)]

[h: jCap = json.get(oData,"dataCapacita")]

[h, foreach(sCap,jCap), code:{
	[lCap = json.get(jCap,sCap)]
	[setProperty(sCap,lCap,oToken)]
}]

[h: delDaMemoria(oToken,sTag)]

[h: macro.return = 1]