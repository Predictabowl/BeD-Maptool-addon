[h: oToken = findToken(arg(0))]

[h, if(oToken == ""): oToken = getImpersonated()]

[h: oData = getDaMemoria(oToken,"ORIGINAL_STATS")]

[h, if(json.isEmpty(oData)), code:{
	[macro("mechanics/arrayStatKeysToLiv@this"):0]
	[aData = macro.return]
	[oMem = "{}"]
	[foreach(sKey, aData), code:{
		[sValue = getRawProperty(sKey,oToken)]
		[oData = json.set(oData,sKey,sValue)]
	}]

	[setInMemoria(oToken,"ORIGINAL_STATS",oData)]
}]

[h, foreach(sKey, oData), code:{
	[iValue = evalMacro(json.get(oData,sKey))]
	[if(!isNumber(iValue)): iValue = 0]
	[oData = json.set(oData,sKey,iValue)]
}]

[h: macro.return = oData]
