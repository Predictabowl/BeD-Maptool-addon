[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]

[h, if(bRemove != 1): return(0, "")]

[h: oParam = json.get(macro.args,"parametri")]
[h: bInizioRound = json.get(oParam,"inizioRound")]
[h: sDrawId = json.get(oParam,"drawId")]
[h: sEventName = json.get(oParam,"eventName")]
[h: sCoperturaName = json.get(oParam,"coperturaName")]
[h: bMBL = json.get(oParam,"hasMBL")]
[h: bVBL = json.get(oParam,"hasVBL")]
[h: mapVar = findToken("MapVar")]

[h, if(bMBL == 1 || bVBL == 1), code:{
	[macro("utility/drawingToShape@this"): sDrawId]
	[jShape = macro.return]
	[if(bMBL == 1): eraseMBL(jShape)]
	[if(bVBL == 1): eraseVBL(jShape)]
}]

[h: sSpawnedTag = sDrawId+"spawnedCore"]
[h: oSpawnedToken = getDaMemoria(target, sSpawnedTag)]]
[h, if(oSpawnedToken != ""), code:{
	[removeToken(oSpawnedToken)]
	[delDaMemoria(target, sSpawnedTag)]
}]

[macro("delCoperturaMappa@Lib:Meccaniche"): sCoperturaName]
[h: eventUninstaller(mapVar, "On_Move_Map", sEventName)]
[h, if(bInizioRound): sEvent ="On_Round_Start_Map"; sEvent = "On_Round_End_Map"]
[h: eventUninstaller(mapVar, sEvent, sEventName)]
[h: removeDrawing(getCurrentMapName(), sDrawId)]
[h: macro.return = ""]

