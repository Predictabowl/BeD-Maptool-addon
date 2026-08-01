[h, if(json.type(macro.args) == "OBJECT"), code:{
	[source = json.get(macro.args,"source")]
	[bOpp = json.get(macro.args,"opportunita")]
	[if(isNumber(bOpp) == 0): bOpp = 0]
	[arma = json.get(macro.args,"arma")]
};{
	[source = macro.args]
	[bOpp = 0]
}]


[h, if(source ==""): source = getImpersonated()]
[h: switchToken(source)]

[macro("combat/hasAttacks@this"): json.set("","source",source,"tipo","normale","opportunita",bOpp)]
[h: assert((macro.return==1),getName(source) + " Non ha attacchi a disposizione",0)]

[h: target = ""]
[macro("getLastTestDL@Lib:TokenMacros"): json.append(source,"ATTACCO")]
[h: bDLTest = macro.return]

[h, if(bDLTest == 1 && bOpp == 0), code:{
	[target = getSelected()]
}]

[h, if(target == ""), code:{
	[target = json.get(Azione_Corrente,"Bersaglio")]
}]

[macro("powers/isTargetLegal@this"): target]
[h, if(!macro.return), code:{
	[broadcast("Bersaglio non valido","self")]
	[return(0,1)]	 
}]

[lVisible = canSeeToken(target,source)]
[if(json.isEmpty(lVisible)), code:{
	[broadcast(strformat("Il bersaglio %s non è linea visiva",getName(target)),"self")]
	[return(0,1)]
}]

[macro("combat/safetyCheckHostile@this"):json.append(source,target)]

[h, if(arma == ""): arma = getArmaDaUsare(source)]
[h: iMaxDist = getPortataArma(source,arma)]
[macro("core/isInRange@this"): json.set("","source",source,"target",target,"portata",iMaxDist)]
[h: inRange = macro.return]

[r, if(inRange == 1), code:{
	[macro("getNomeArma@Lib:TokenMacros"): json.append(source,arma)]
	[h: sArma = macro.return]

	[macro("combat/getAttackPrice@this"): json.set("","source",source,"arma",arma,"opportunita",bOpp)]
	[h: cost = macro.return]
	[macro("core/payAction@this"): cost]
	[bFlag = macro.return]

	[r, if(bFlag), code:{
		[h: param = json.set("","source",source,"target",target,"arma",arma,"opportunita",bOpp)]
		[macro("combat/AttaccoCore@this"):param]
		[h: consumaAttacco(source,bOpp)]
		[h: bInterrupt = 0]
	};{
		[h: bInterrupt = 1]
	}]
};{
	[h: bInterrupt = 1]
	[h: broadcast(getName(source)+": Bersaglio ("+ getName(target)+") fuori Portata!")]
}]

[macro("combat/delUltimoCritico@this"):source]
[h: clearStatModifiers(target)]
[macro("clearDL@Lib:TokenMacros"):source]

[h: macro.return = bInterrupt]