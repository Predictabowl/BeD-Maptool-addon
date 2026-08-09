[h: oToken = json.get(macro.args,"source")]

[h: sImpersonated = getImpersonated()]

[h: impersonate(oToken)]
[h: sRange = getMoveCount(0,0)]
[h: aPath = getLastPath(0)]
[h: oStart = json.get(aPath,0)]
[h: xStart = json.get(oStart,"x")]
[h: yStart = json.get(oStart,"y")]

[h: bPC = isPC(oToken)]
[h: oRangeCond = json.set("","token",oToken,"from",0,"upto",sRange)]
[h: oSearchCond = json.set("","pc",!bPC,"npc",bPC,"propertyType","Basic","range",oRangeCond)]

[h: aTokens = getTokens("json",oSearchCond)]

[h: aEligibles = "[]"]
[h, foreach(oEnemy,aTokens), code:{
	[iStartDist = getDistanceToXY(xStart,yStart,0,oEnemy)]
	[iEndDist = getDistance(oEnemy,0,oToken)]
	[if(iStartDist > 1 && iEndDist == 1): aEligibles = json.append(aEligibles,oEnemy)] 
}]

[h: broadcast(strformat("Eligible: %{aEligibles}<br><br>Tokens: %{aTokens}"))]
<!-- WIP 
Manca da aggiornare il framework per gli attacchi di opportunità
-->
[h, foreach(oEnemy, aEligibles), code:{
	[switchToken(oEnemy)]
	[MM = MM -2]
	[modIniziativa(-3,oEnemy)]
}]

[h: impersonate(sImpersonated)]
[h: macro.return = "MARIO si muove! (evento)"]