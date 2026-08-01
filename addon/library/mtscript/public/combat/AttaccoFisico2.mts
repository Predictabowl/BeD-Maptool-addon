[h, if(json.type(macro.args) == "OBJECT"), code:{
	[source = json.get(macro.args,"source")]
	[bOpp = json.get(macro.args,"opportunita")]
	[if(isNumber(bOpp) == 0): bOpp = 0]
};{
	[source = macro.args]
	[bOpp = 0]
}]


[h, if(source ==""): source = getImpersonated()]
[h: switchToken(source)]

[macro("hasAttacks@"+getMacroLocation()): json.set("","source",source,"tipo","normale","opportunita",bOpp)]
[h: assert((macro.return==1),getName(source) + " Non ha attacchi a disposizione",0)]

[h: target = json.get(getProperty("Azione_Corrente",source),"Bersaglio")]
[h, if(target == ""): target = getSelected()]
[h: assert(target!="","Nessun bersaglio selezionato")]


[macro("core/isInRange@this"): json.set("","source",source,"target",target)]
[h: inRange = macro.return]

[r, if(inRange == 1), code:{
	[macro("combat/getArmaDaUsare@this"):json.set("","source",source,"opportunita",bOpp)]
	[h: arma = macro.return]
	
	[macro("getAttackPrice@"+getMacroLocation()): json.set("","source",source,"arma",arma,"opportunita",bOpp)]
	[h: cost = macro.return]
	[macro("core/payAction@this"): cost]

	[r, if(macro.return ==1), code:{
		[h: param = json.set("","source",source,"target",target,"arma",arma,"opportunita",bOpp)]
		[macro("combat/AttaccoCore@this"):param]
	}]
};{
	[h: broadcast(getName(source)+": Bersaglio ("+ getName(target)+") fuori Portata!")]
}]
