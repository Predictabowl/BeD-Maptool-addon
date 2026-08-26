[h: source = getImpersonated()]
[h: switchToken(source)]

[macro("combat/hasAttacks@"+getMacroLocation()): json.set("","source",source,"tipo","normale")]
[h: assert((macro.return==1),"Non hai attacchi a disposizione",0)]

[h: target = json.get(getProperty("Azione_Corrente",source),"Bersaglio")]
[h, if(target == ""): target = getSelected()]
[h: assert(target!="","Nessun bersaglio selezionato")]

[macro("core/isInRange@this"): json.set("","source",source,"target",target)]
[h: inRange = macro.return]

[h: action = json.get(Azione_Corrente,"Nome")]
[h: ini = getInitiative()]
[h, if(isNumber(ini)==0): ini = -1]

[r, if(inRange == 1), code:{
	[macro("combat/getArmaDaUsare@this"):source]
	[h: arma = macro.return]

	[r, if (action == "Attacco" || ini < 0), code:{
		[h: param = json.set("","source",source,"target",target,"arma",arma)]
		[macro("combat/AttaccoCore@"+getMacroLocation()):param]
		[macro("mobs/FineAzione@this"):source]
	};{
		[macro("combat/getAttackTime@"+getMacroLocation()): json.set("","target",source,"arma",arma)]
		[h: time = macro.return]
		[h: param = json.set("","target",target,"source",source,"action","Attacco","time",time,"color","red")]
		[macro("mobs/IniziaAzione@this"):param]
		Inizio un attacco contro [r: getName(target)]
	}]
};{
	Bersaglio ([r: getName(target)]) fuori Portata!
}]
