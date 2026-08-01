[h: sortInitiative()]

[h: lTokens = json.get(getInitiativeList(),"tokens")]
[h: iIndex = 0]
[h, foreach(jToken, lTokens), code:{
	[if(json.get(jToken,"holding") == "false"), code:{
		[setCurrentInitiative(iIndex)]
		[return(0,"")]
	}]
	[iIndex = iIndex +1]
}]