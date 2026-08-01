[h: oToken = arg(0)]

[h: switchToken(oToken)]
[h: jPath = getLastPath(0)]


[h, if(isPc(oToken)): jConditions = json.set("","pc",0,"npc",1); 
	jConditions = json.set("","pc",1,"npc",0)]

<!-- Non considera la gittata delle armi!!! Da aggiornare.
Non testato con creatura grandi, probabilmente farà casino, se così fosse
si dovrebbe cambiare da unit cell a pixel e utilizzare la dimensione del token
-->

[h: jRange = json.set("","token",oToken,"upto",1)]
[h: jCondFinal = json.set(jConditions, "range", jRange)]
[h: jEnemies = getTokens("json", jCondFinal)]

[h: iCount = getMoveCount()]
[h: jRangeStart = json.set("","token",oToken,"upto",iCount+1)]
[h: jCondStart = json.set(jConditions, "range", jRangeStart)]
[h: jSuspects = getTokens("json", jCondStart)]

[h: jStart = json.get(jPath,0)]

[h: jStartEnemies = "[]"]
[h, foreach(oSuspect , jSuspects), code:{
	[iX = json.get(jStart,"x")]
	[iY = json.get(jStart,"y")]
	
	[iDistance = getDistanceToXY(iX, iY, 0, oSuspect)]
	[if(iDistance < 2): jStartEnemies = json.append(jStartEnemies, oSuspect)]
}]

[h: macro.return = json.isSubset(jEnemies, jStartEnemies)]

