[h: list = getInitiativeList()]
[h: list = json.get(list,"tokens")]
[h: num = json.length(list)]
[h: first = ""]
[h, if(num>0), code:{
	[first = json.get(list,0)]
	[first = json.get(first,"tokenId")]
}]
[h: macro.return = first]