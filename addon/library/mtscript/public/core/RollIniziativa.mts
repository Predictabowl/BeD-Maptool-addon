[h: ids = getInitiativeList()]
[h: ids = json.get(ids,"tokens")]
[macro("setMapFrazione@Lib:MetodiVari"): 50]

[h, foreach(id, ids, ""), CODE:{
	[h: target = json.get(id,"tokenId")]
	[h: switchToken(target)]
	[setInitiativeHold(0)]
	[h: iniz = getProperty("Tiro_Iniziativa")]
	[macro("rollIniziativa@Lib:MetodiVari"): iniz]
	[h: tiro = macro.return]
	[h: setInitiative(tiro)]
	[macro("setFrazionePersonale@Lib:MetodiVari"): json.append(target,tiro)]
}]

[macro("sortIniziativa@Lib:MetodiVari"):0]