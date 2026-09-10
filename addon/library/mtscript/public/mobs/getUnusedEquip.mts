[h: oToken = arg(0)]
[h, if(argCount()>1): bSlotRapido = arg(1); bSlotRapido = 0]

[h: switchToken(oToken)]

[h: oList = "{}"]
[h, foreach(key,Equipaggiamento), code:{
	[oItem = json.get(Equipaggiamento,key)]
	[macro("mobs/isOggettoEquip@this"): json.append(oToken,key)]
	[if(!macro.return && json.contains(Armi,key) == bSlotRapido), code:{
		[macro("mobs/findOggettoFromEquip@this"): json.append(oToken, key)]
		[oList = json.set(oList,key,macro.return)]
	}]
}]

[h: macro.return = oList]
