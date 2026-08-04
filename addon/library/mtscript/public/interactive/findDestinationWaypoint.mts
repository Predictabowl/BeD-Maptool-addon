[h: oWaypoint = arg(0)]
[h: sMap = arg(1)]

[h: sGMName = getGMName(oWaypoint)]
[h: lTargetTokens = getTokens(",",json.set("","mapName", sMap, "layer", "Object", "propertyType", "Interattivo"))]
[h: i = 0]
[h: oTargetToken = ""]
[h, while(i < listCount(lTargetTokens)), code:{
	[sCandidate = listGet(lTargetTokens, i)]
	[if(getGMName(sCandidate, sMap) == sGMName), code:{
		[oTargetToken = sCandidate]
		[i = listCount(lTargetTokens)]
	}]
	[i = i+1]
}]

[h, if(oTargetToken != ""): return(0, oTargetToken)]

[h: oTargetToken = findToken(sGMName,sMap)]
[h, if(oTargetToken == ""): return(0,0)]
[h, if(getPropertyType(oTargetToken, sMap) != "Interattivo"): return(0,0)]
[h: macro.return = oTargetToken]