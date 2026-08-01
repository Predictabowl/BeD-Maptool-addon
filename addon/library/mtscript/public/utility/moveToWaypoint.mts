[h, if(isCombat()): return(0,"")]
[h: oWaypoint = getSelected()]
[h, if(getPropertyType(oWaypoint) != "Oggetto Fisso"): return(0,0)]

[h: sMap = getProperty("parametri")]

[h: sGMName = getGMName(oWaypoint)]
[h: oTargetToken = findToken(sGMName,sMap)]

[h, if(oTargetToken == ""): return(0,"")]

[macro("gui/getOverlayData@this"): "token"]
[h: oTokenToMove = macro.return]

[h: fDist = getDistance(oWaypoint, 0, oTokenToMove)]
[h, if(fDist > 1): return(0,"")]

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

