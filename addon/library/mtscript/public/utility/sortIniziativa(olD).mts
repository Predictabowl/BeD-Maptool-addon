[h: ids = getInitiativeList()]
[h: ids = json.get(ids,"tokens")]

[h, foreach(id, ids, ""), CODE: {
	[h: target = json.get(id,"tokenId")]
	[h: switchToken(target)]
	[h: iniz = getInitiative()]
	[h: iniz = -(iniz)]
	[h: setInitiative(iniz)]
}]

[h: sortInitiative()]

[h, foreach(id, ids, ""), CODE: {	
	[h: target = json.get(id,"tokenId")]
	[h: switchToken(target)]
	[h: iniz = getInitiative()]
	[h: iniz = -(iniz)]
	[h: setInitiative(iniz)]
}]


[h: ids = getInitiativeList()]
[h: ids = json.get(ids,"tokens")]
[h, if(json.isEmpty(ids) == 0), code:{
	[h: id = json.get(ids,0)]
	[h: setCurrentInitiative(0)]
}]