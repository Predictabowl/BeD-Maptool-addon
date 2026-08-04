[h, if(isCombat()): return(0,0)]
[h: oTokenToMove = json.get(macro.args,"source")]
[h: oWaypoint = json.get(macro.args,"interattivo")]

[h: jParams = getProperty("parametri", oWayPoint)]
[h, if(json.type(jParams) == "OBJECT"), code:{
	[bBlocked = json.get(jParams, "blocked")]
	[h, if(bBlocked == 1), code:{
		[broadcast(strformat("<span title='You must gather your party before venturing forth!'>%s non è utilizzabile al momento.</span>", getName(oWaypoint)), getPlayerName())]
		[return(0,0)]		
	}]
	[sMap = json.get(jParams, "map")]
}; {
	[sMap = jParams]
}]

[h, if(!isGM() && !getMapVisible(sMap)), code: {
	[broadcast(strformat("%s ha tentato di accedere alla mappa %{sMap}, ma questa non è visibile", getPlayerName()))]
	[return(0,0)]
}]

[h, macro("interactive/findDestinationWaypoint@this"): json.append(oWaypoint, sMap)]

[h: oTargetToken = macro.return]
[h, if(!oTargetToken): return(0,0)]

[h: fDist = getDistance(oWaypoint, 0, oTokenToMove)]
[h, if(fDist > 2), code:{
	[broadcast("<span title='You must gather your party before venturing forth!'>Sei troppo distante per usare il Waypoint.</span>", getPlayerName())]
	[return(0,"")]
}]

[h: iX = getTokenX(0, oTargetToken, sMap)]
[h: iY = getTokenY(0, oTargetToken, sMap)]	
[h: oPartner = getServitore(oTokenToMove)]
[h, if(oPartner == ""), code:{
	[macro("core/getPadrone@this"): oTokenToMove]
	[h: oPartner = macro.return]
}]
[h, if(oPartner != ""): moveTokenToMap(oPartner,sMap,iX,iY,0)]


[h: moveTokenToMap(oTokenToMove,sMap,iX,iY,0)]
[h: setCurrentMap(sMap)]
[h: goto(oTokenToMove)]

