[h: sSpawner = json.get(macro.args,"spawner")]
[h: iLivello = json.get(macro.args,"livello")]
[h: iPunti30 = json.get(macro.args,"puntiLiv30")] <!-- opzionale -->
[h: iCasuale = json.get(macro.args,"minCasuale")] <!-- opzionale -->

[h: aCapac = "Analisi,Arcanologia,Atletica,Autorita,Furtivita,Lotta,Manualita,Perspicacia,Persuasione,Recupero,Sopravvivenza,Tenacia"]

[h: capValues = getDaMemoria(sSpawner,"generatoriCapacita")]
[h, if(json.type(capValues) != "OBJECT"): capValues = "{}"]

[h, foreach(sCap,aCapac), code:{
	[oCap = getProperty(sCap,sSpawner)]
	[if(!isNumber(oCap)): capValues = json.set(capValues,sCap,oCap)]
}]
[h: setInMemoria(sSpawner,"generatoriCapacita",capValues)]

[h, foreach(sCap,capValue), code:{
	[oCap = json.get(capValue,sCap)]
	[iMin = listGet(oCap,0)]
	[iMax = listGet(oCap,1)]
	[iCapLiv = listGet(oCap,2)]
	[fValue = iLivello*(iMax-iMin)/iCapLiv]
	[iValue = floor(math.min(fValue,iMax))]
	[setProperty(sCap,iValue,sSpawner)]
}]

