[h: oToken = arg(0)]
[h, if(argCount()>1): bSlotRapido = arg(1); bSlotRapido = 0]

[h: switchToken(oToken)]

[h: oList = "{}"]
[h, foreach(key,Equipaggiamento), code:{
	[oItem = json.get(Equipaggiamento,key)]
	[macro("mobs/isOggettoEquip@this"): json.append(oToken,key)]
	[if(!macro.return && json.contains(Armi,key) == bSlotRapido), code:{
		[sCat = json.get(oItem,"categoria")]
		[idDB = json.get(oItem,"idDB")]
		[oList = json.set(oList,key,getOggettoFromDB(idDB,sCat))]
	}]
}]

[h: macro.return = oList]
