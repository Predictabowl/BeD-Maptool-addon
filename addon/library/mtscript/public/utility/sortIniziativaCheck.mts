[h: ids = getInitiativeList()]
[h: ids = json.get(ids,"tokens")]

[h: broadcast(string("DEPRECATED: %s@%s",getMacroName(),getMacroLocation()))]

[h, foreach(id, ids, ""), CODE: {
	[h: target = json.get(id,"tokenId")]
	[h: switchToken(target)]
	[h: iniz = getInitiative()]
	[macro("checkIniziativa@"+getMacroLocation()):iniz]
	[h: iniz = -macro.return]
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
[h: id = json.get(ids,0)]
[h: frazione = json.get(id,"initiative")] 
[h: setProperty("NumFrazione",frazione,"MapVar")]
[h: setCurrentInitiative(0)]