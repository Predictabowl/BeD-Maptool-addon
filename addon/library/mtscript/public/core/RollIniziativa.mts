[h: ids = getInitiativeList()]
[h: ids = json.get(ids,"tokens")]
[macro("utility/setMapFrazione@this"): 50]

[h, foreach(id, ids, ""), CODE:{
	[h: target = json.get(id,"tokenId")]
	[h: switchToken(target)]
	[setInitiativeHold(0)]
	[h: iniz = getProperty("Tiro_Iniziativa")]
	[macro("utility/rollIniziativa@this"): iniz]
	[h: tiro = macro.return]
	[h: setInitiative(tiro)]
	[macro("utility/setFrazionePersonale@this"): json.append(target,tiro)]
}]

[macro("utility/sortIniziativa@this"):0]