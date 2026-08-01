[h: num = initiativeSize()]
[h: time = 0]
[h, if(num>0), code:{
	[oList = getInitiativeList()]
	[tokenList = json.get(oList,"tokens")]
	[first = json.get(tokenList,0)]
	[time = json.get(first,"initiative")]
}]

[h: macro.return = time]