[h: ids = getInitiativeList()]
[h: ids = json.get(ids,"tokens")]
[h: list=""]

[h:broadcast(strformat("DEPRECATED: %s@%s",getMacroName(),getMacroLocation()))]

[h, foreach(id, ids, ""), CODE: {
	[h: target = json.get(id,"tokenId")]
	[h: switchToken(target)]
	[h: iniz = getInitiative()]
	[h: elem = json.set("","tiro",iniz,"id",target)]
	[h: list = json.append(list,elem)]
	[removeFromInitiative()]
}]


[h: list = json.sort(list,"ascending","tiro")]

[h, foreach(elem, list, ""), CODE: {	
	[h: id = json.get(elem,"id")]
	[h: iniz = json.get(elem,"tiro")]
	[h: switchToken(id)]
	[h: addToInitiative()]
	[h: setInitiative(iniz)]
}]

[h: ids = getInitiativeList()]
[h: ids = json.get(ids,"tokens")]
[h: id = json.get(ids,0)]
[h: frazione = json.get(id,"initiative")] 
[h: setProperty("NumFrazione",frazione,"MapVar")]
[h: setCurrentInitiative(0)]