[h: source = arg(0)]

[h, macro("powers/findTokenBersaglio@this"): source]
[h: oBersaglio = macro.return]

[h, if(oBersaglio != ""): return(0, oBersaglio)]

[h: sOriginale = "Bersaglio_Da_Copiare"]
[h: sMap = "Librerie"]
[h: sThisMap = getCurrentMapName()]
[h, if(sMap != sThisMap), code:{
	[iSpawnerX = getTokenX(0, sOriginale, sMap)]
	[iSpawnerY = getTokenY(0, sOriginale, sMap)]
	[moveTokenFromMap(sOriginale,sMap,0,0,0)]
}]

[h: sNomeToken = strformat("Bersaglio-%s",getName(source))]
[h: iSX = getTokenX(0,source)+1]
[h: iSY = getTokenY(0,source)]
[h: oUpdates = json.set("","name",sNomeToken,"x",iSX,"y",iSY,"size","1/2")]
[h: setOwner (getPlayerName(),sOriginale)]
[h: oBersaglio = copyToken(sOriginale,1,sThisMap,oUpdates)]
[h: setOwner ("",sOriginale)]
[h: sMsg = strformat("Spawn del Token <span style='font-weight:bold'>%s</span>", sNomeToken)]
[h: broadcast(sMsg)]

[h, if(sMap != sThisMap):  moveTokenToMap(sOriginale,sMap,iSpawnerX,iSpawnerY,0)]

[h: macro.return = oBersaglio]