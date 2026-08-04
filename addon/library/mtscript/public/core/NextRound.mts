[h: oTokenList= json.get(getInitiativeList(),"tokens")]
[h: round = getInitiativeRound()+1]
[h: setInitiativeRound(round)]
[h: broadcast("<hr><h2>Inizio Round: "+ round+"</h2>")]

[h, foreach(id, oTokenList), code:{
	[h: target = json.get(id,"tokenId")]
	[macro("core/endRoundEvents@this"):target]
	[macro("class_skills/RoundUpdateAbilita@this"):target]
	[macro("class_skills/endRoundPuntiEroe@this"):target]
}]

[h: sMapVar = findToken("MapVar")]
[h, foreach(id, oTokenList), code:{
	[h: target = json.get(id,"tokenId")]
	[macro("events/runEvents@this"): json.set("","source", sMapVar,"target", target, "event","On_Round_End_Map")]
	[sMsg = popMessaggio(sMapVar,"msgEventOn_Round_End_Map")]
	[h, if(macro.return != ""): broadcast(macro.return)]
}]

[macro("events/runDelaySafeMacros@this"): 0]
[macro("core/RollIniziativa@this"):0]

[h, foreach(id, oTokenList), code:{
	[h: target = json.get(id,"tokenId")]
	[macro("core/startRoundClear@this"):target]
}]

[h, foreach(id, oTokenList), code:{
	[h: target = json.get(id,"tokenId")]
	[macro("core/AutoUpdateEffectTime@this"): json.append(target,-1)]

	[macro("utility/popMessaggio@this"): json.set("","token",target,"key","msgEffetto")]
	[if(macro.return != ""): broadcast(macro.return)]
	[macro("core/startRoundEvents@this"):target]

	[macro("utility/clearMessaggi@this"): target]
	[macro("class_skills/autocastAbilita@this"): target]
}]

[h, foreach(id, oTokenList), code:{
	[h: target = json.get(id,"tokenId")]
	[macro("events/runEvents@this"): json.set("","source", sMapVar,"target", target, "event","On_Round_Start_Map")]
	[sMsg = popMessaggio(sMapVar,"msgEventOn_Round_Start_Map")]
	[h, if(macro.return != ""): broadcast(macro.return)]
}]

[macro("events/runDelaySafeMacros@this"): 0]
[macro("gui/updatePlayersSchede@this"):0]
