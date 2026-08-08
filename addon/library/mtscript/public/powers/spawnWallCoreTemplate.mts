[h: source = json.get(macro.args,"source")]
[h: spellName = json.get(macro.args,"spellName")]
[h: sSpawner = json.get(macro.args,"spawner")]
[h: sDrawId = json.get(macro.args,"drawId")]
[h: sEffectName = json.get(macro.args, "effectName")]
[h: sMacro = json.get(macro.args,"macroForSpawner")] <!-- Opzionale -->


[h: sCoreName =  fetchSpellProp(spellName,"nome_decorativo")+ "- " + getName(source)]
[h: aPath = json.get(getDrawingInfo(getCurrentMapName(), sDrawId), "path")]
[h: iPoint = ceil(json.length(aPath)/2)-1]
[h: jPoint = json.get(aPath, iPoint)]

[h: sMap = "Librerie"]
[h: sThisMap = getCurrentMapName()]
[h, if(sMap != sThisMap), code:{
	[iSpawnerX = getTokenX(0, sSpawner, sMap)]
	[iSpawnerY = getTokenY(0, sSpawner, sMap)]
	[moveTokenFromMap(sSpawner,sMap,0,0,0)]
}]
[h: oSpawner = findToken(sSpawner)]
[h: jEventParam = json.set("", "owner", source, "removeEffectName", sEffectName, "drawId",sDrawId)]
[h: eventInstaller(oSpawner, "On_Death", "destroyWall", "events/wallCoreDeath@lib:it.aldinucci.piero.bed.maptool.ruleset", jEventParam)]
[h, if(isPC(source)): setPC(oSpawner); setNPC(oSpawner)]

[macro("powers/getLivelloIndicativo@this"): json.set("","source",source,"spellName",spellName)]
[h: iLiv = macro.return]
[h: jRes = json.set("","puntiLiv30","","minCasuale",1)]
[macro("mechanics/setLivelloCreatura@this"): json.append(iLiv, oSpawner, jRes)]

[h, if(sMacro != ""), code: {
	[h: jParams = json.set(macro.args, "spawnerToken", oSpawner)]
	[macro(sMacro): jParams]
}]

[h: iX = json.get(jPoint,"x")]
[h: iY = json.get(jPoint,"y")]
[macro("powers/setDrawCoreId@this"): json.append(oSpawner, sDrawId)]

[h: oUpdates = json.set("","name",sCoreName,"x",iX,"y",iY, "useDistance", 1)]
[h: oTokenSpawned = copyToken(sSpawner,1,sThisMap,oUpdates)]
[h: setInMemoria(source, sDrawId+"spawnedCore", oTokenSpawned)]

[h, if(sMap != sThisMap):  moveTokenToMap(sSpawner,sMap,iSpawnerX,iSpawnerY,0)]