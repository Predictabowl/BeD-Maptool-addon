[h: sSpawner = json.get(macro.args,"spawner")]
[h: iLivello = json.get(macro.args,"livello")]
[h: iPunti30 = json.get(macro.args,"puntiLiv30")] <!-- opzionale -->
[h: iMinCasuale = json.get(macro.args,"minCasuale")] <!-- opzionale -->

[h, if(!isNumber(iPunti30)): iPunti30 = 81; iPunti30 = iPunti30+81]
[h, if(!isNumber(iMinCasuale)): iMinCasuale = 0]

[macro("mechanics/getDefaultResistenze@this"): sSpawner]
[h: oBaseRes = macro.return]
[h: iNumRes = json.length(oBaseRes)]

[h: iPuntiRes = floor(iLivello*(iPunti30)/30)-iMinCasuale]
[h: iResMedia = floor(iPuntiRes/iNumRes)]
[h: iResiduo = iPuntiRes-(iResMedia*iNumRes)+iMinCasuale]

[h: rollList =""]
[h, for(i,0,iNumRes), code:{
	[rollList = json.set(rollList,i,iResMedia)]
}]

[h, for(i,0,iResiduo), code:{
	[iRan = roll(1,iNumRes)]
	[iTemp = json.get(rollList,iRan-1)+1]
	[rollList = json.set(rollList,iRan-1,iTemp)]
}]

[h: iIndex = 0]
[h, foreach(sRes,oBaseRes), code:{
	[iRes = eval(string(json.get(oBaseRes,sRes)))+json.get(rollList,iIndex)]
	[setProperty(sRes,iRes,sSpawner)]
	[iIndex = iIndex +1]
}]

