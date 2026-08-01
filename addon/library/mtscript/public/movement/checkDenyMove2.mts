[h: source = currentToken()]

[h: usedMov = getMoveCount()]
[macro("utility/isCombat@this"):0]
[h: combat = macro.return]
[h, if(getPropertyType() != "Basic"): combat = 0]
[h:actionReturn = 0]
[h: return = 0]
[h: bIsAction = combat]

[macro("movement/getMovSpeciale@this"): source]
[h: maxSMove = macro.return]
[h, if(usedMov <= maxSMove): bIsAction = 0]


[h, if(return ==0 && combat == 1), code:{
	[h: firstT = getInitiativeToken()]
	[h, if(source != firstT), code:{
		[h: player = getPlayerName()]
		[h:broadcast("<span style='color:red'>In combattimento non puoi muoverti quando non hai l'iniziativa</span>",player)]
		[return = 1]
	}]
}]


[h, if(return ==0 && bIsAction == 1), code:{
	[h: sNomeAzione = json.get(Azione_Corrente,"Nome")]
	[h, if(sNomeAzione != "Movimento"), code:{
		[h: player = getPlayerName()]
		[h:broadcast("<span style='color:red'>Devi dichiarare un'azione di movimento prima di muoverti</span>",player)]
		[h: return = 1]
	}]
}]

[h, if(return ==0 && combat == 1), code:{
	[macro("movement/getMoveModifiers@this"):source]
	[h: multiplier = json.get(macro.return,"MoveMul")]
	[h: modifier = json.get(macro.return,"MoveMod")]
	[h: usedMov = ceil((usedMov+modifier)*multiplier)]
	[h: param = json.append(source,0,0,0,usedMov)]
	[macro("core/payAction@this"): param]
	[h: actionReturn = macro.return]
	[h: return = math.mod(macro.return+1,2)]
	[h, if(actionReturn == 1), code:{
		<!-- run events for On_Move -->
		[macro("movement/delMovSpeciale@this"):source]
		[macro("events/runEvents@this"):json.set("","source",source,"event","On_Move")]
	}]
	[h, if(actionReturn == 1 && bIsAction == 1), code:{
		[macro("mobs/FineAzione@this"): source]
	}]
}]

[h: macro.return = return]








