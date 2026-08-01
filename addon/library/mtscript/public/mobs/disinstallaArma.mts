[h: oToken = json.get(macro.args,0)]
[h: sArma = json.get(macro.args,1)]

[h: switchToken(oToken)]
[h, if(json.type(Equipaggiamento) != "OBJECT"): Equipaggiamento = "{}"]

[h: sArmaEq =  listGet(Armi_Equipaggiate,0)]
[h, if(sArmaEq == sArma), code:{
	[macro("mobs/riponiArma@this"):json.append(oToken,1)]
}]

[macro("combat/isStile2A@this"): oToken]
[h, if(macro.return), code:{
	[sArmaEq =  listGet(Armi_Equipaggiate,1)]
	[h, if(sArmaEq == sArma), code:{
		[macro("mobs/riponiArma@this"):json.append(oToken,2)]
	}]
}]

[h: Equipaggiamento = json.remove(Equipaggiamento,sArma)]