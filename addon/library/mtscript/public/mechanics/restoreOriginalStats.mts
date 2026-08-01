[h: oToken = findToken(arg(0))]

[h, if(oToken == ""): oToken = getImpersonated()]

[h: oData = getDaMemoria(oToken,"ORIGINAL_STATS")]
[h, if(json.isEmpty(oData)): return(0,0)]

[h, foreach(sKey, oData), code:{
	[sValue = json.get(oData,sKey)]
	[setProperty(sKey,sValue,oToken)]
}]

[h: delDaMemoria(oToken,"ORIGINAL_STATS")]
