[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: arma = json.get(macro.args,"arma")]
[h: time = json.get(macro.args,"tempo")]

[h, if(source==""): source = getImpersonated()]
[h, if(target==""): target = getSelected()]

[macro("powers/isTargetLegal@this"): target]
[h, if(!macro.return), code:{
	[broadcast("Bersaglio non valido","self")]
	[return(0,"")]	 
}]

[macro("combat/safetyCheckHostile@this"):json.append(source,target)]

<!-- Eventi di inizio Attacco Base -->
[macro("events/runEvents@this"): json.set("","source",source,"event","On_Basic_Attack_Declare")]
[h: msgOut = popMessaggio(source,"msgEventOn_Basic_Attack_Declare")] <!-- al momento inutilizzato -->
mtscript/public/combat

[macro("combat/checkAttFurtivo@this"): json.append(source,target)]
[h: bFurtivo = macro.return]


[macro("combat/isOpportunita@this"): json.append(source,target,json.set("","arma",arma))]
[h: bOpp = macro.return]

[macro("hasAttacks@"+getMacroLocation()): json.set("","source",source,"opportunita",bOpp)]
[h: assert((macro.return==1),getName(source) + " Non ha attacchi a disposizione",0)]

[h, if(arma==""), code:{
	[macro("combat/getArmaDaUsare@this"):json.set("","source",source,"opportunita",bOpp)]
	[h: arma = macro.return]
}]

[h, if(time==""): time = getAttackTime(source,bOpp,arma)]


[h, if(bOpp == 1): sTipo ="Opportunita"; sTipo="Offensivo"]
[h: macroParam = json.set("","opportunita",bOpp,"arma",arma)]
[macro("combat/isGeneraOpp@this"): json.append(source,arma)]
[h: generaOpp = macro.return]

[h: sMsg= getName(source) + " Inizia un attacco"]
[h, if(bFurtivo == 1): sMsg = sMsg + " Furtivo"]
[h, if(bOpp == 1 && bFurtivo == 0): sMsg = sMsg + " di opportunit&agrave;"]
[h: sMsg = sMsg +" contro "+ getName(target)]
[h: setMessaggio(source,"iniziaAzioneMsg",sMsg)]

[h: param = json.set("","target",target,"source",source,"macro","AttaccoFisico@Lib:Combattimento","macroParam",macroParam,"tipo",sTipo,"opp",generaOpp,"time",time,"color","red","action","Attacco")]
[macro("IniziaAzione@Lib:TokenMacros"):param]

[h: macro.return = sMsg]