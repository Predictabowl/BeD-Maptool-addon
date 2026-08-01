[h: token = json.get(macro.args,0)]
[h: nomeC = json.get(macro.args,1)]

[macro("gui/blockIfNotOwner@this"):token]

[h: switchToken(token)]
[h: datiC = json.get(Configurazioni_Scheda,nomeC)]
[h, foreach(nStat,datiC,"<br>"), code:{
	[setProperty(nStat,json.get(datiC,nStat),token)]	
}]
[macro("core/ReprocessAllDoneEffects@this"):token]