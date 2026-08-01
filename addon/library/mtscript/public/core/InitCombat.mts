[h, if(isCombat()), code:{
	[broadcast("Combattimento già in corso","gm")]
	[return(0,0)]
}]

[h: setInitiativeRound(1)]
[h: setProperty("InCombatCheck",1,"MapVar")]
[macro("utility/setMapFrazione@this"): 0]
[h: broadcast("<hr><h2>Inizio Round: 1</h2>")]

[h: ids = getSelected()]
[h, foreach(id, ids, ""), CODE:{
	[if(getPropertyType(id) == "Basic"), code:{
		[h: switchToken(id)]
		[macro("powers/setAnimeToDefault@this"):id]
		[macro("delAutocastAbilita@Lib:AbilitaClasse"): id]
		[macro("delCaricheSentenza@Lib:AbilitaClasse"): id]
		[h: iniz = getProperty("Tiro_Iniziativa")]
		[h: setTokenSnapToGrid(1)]
		[macro("utility/rollIniziativa@this"): iniz]
		[h: tiro = macro.return]
		[h: addToInitiative(1,tiro)]
		[macro("utility/setFrazionePersonale@this"):json.append(id,tiro)]
		[macro("core/startRoundClear@this"):id]
	}]
}]

[macro("events/runDelaySafeMacros@this"): 0]
[macro("utility/sortIniziativa@this"):0]

