[h: source = arg(0)]

[h: usedMov = getMoveCount()]
[h: combat = isCombat()]
[h, if(getPropertyType() != "Basic"): combat = 0]
[h:actionReturn = 0]
[h: bDeny = 0]
[h: bIsAction = combat]

[macro("movement/getMovSpeciale@this"): source]
[h: maxSMove = macro.return]
[h, if(usedMov <= maxSMove): bIsAction = 0]

[h, if(bIsAction == 1), code:{
	[h: sNomeAzione = json.get(Azione_Corrente,"Nome")]
	[h, if(sNomeAzione != "Movimento"), code:{
		[iniziaMov(source)]
		[return(0,1)]
	}]
}]


[h, if(combat == 1), code:{
	[h: firstT = getInitiativeToken()]
	[h, if(source != firstT), code:{
		[h: player = getPlayerName()]
		[h:broadcast("<span style='color:red'>In combattimento non puoi muoverti quando non hai l'iniziativa</span>",player)]
		[return(0,1)]
	}]
}]


[h, if(isMovTattico(source) && combat == 1), code:{
	[macro("movement/checkMovTattico@this"): source]
	[if(!macro.return), code:{
		[broadcast("<span style='color:orange'>Movimento Tattico attivo: non puoi uscire dalle aree di minaccia</span>",getPlayerName())]
		[return(0,1)]
	}]
}]

[h, if(combat == 1), code:{
	[macro("movement/getMoveModifiers@this"):source]
	[h: multiplier = json.get(macro.return,"MoveMul")]
	[h: modifier = json.get(macro.return,"MoveMod")]
	[h: usedMov = ceil((usedMov+modifier)*multiplier)]
	[h: param = json.set("","token",source,"MM",usedMov)]
	[macro("core/payAction@this"): param]
	[h: actionReturn = macro.return]
	[h: bDeny = math.mod(macro.return+1,2)]
	[h, if(actionReturn == 1), code:{
		<!-- run events for On_Move -->
		[macro("movement/delMovSpeciale@this"):source]
		[macro("events/runEvents@this"):json.set("","source",source,"event","On_Move")]
	}]
	[h, if(actionReturn == 1 && bIsAction == 1), code:{
		[macro("mobs/FineAzione@this"): source]
	}]
}]

[h, if(bDeny == 0), code:{
	[sMapVar = findToken("MapVar")]
	[macro("events/runEvents@this"):json.set("","source", sMapVar,"target", source, "event","On_Move_Map")]
	[sMsg = popMessaggio(sMapVar, "msgEventOn_Move_Map")]
	[h, if(sMsg != ""): broadcast(sMsg)]
}]


[h: macro.return = bDeny]








