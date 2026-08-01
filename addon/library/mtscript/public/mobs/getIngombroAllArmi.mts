[h: oToken = arg(0)]

[h: switchToken(oToken)]
[h: iIngombro = 0]

[h, foreach(key,Armi), code:{
	[oItem = json.get(Equipaggiamento,key)]
	[if(!json.isEmpty(oItem)), code:{
		[sCat = json.get(oItem,"categoria")]
		[idDB = json.get(oItem,"idDB")]
		[oData = getOggettoFromDB(idDB,sCat)]
		[macro("getIngombroArma@Lib:EquipEffect"): json.append(oData,oToken)]
		[h: iIngombro = iIngombro + macro.return]
	}]
}]

[macro("getIngombroArma@Lib:EquipEffect"): json.append(getArma(oToken,1),oToken)]
[h: iIngombro = iIngombro + macro.return]
[macro("getIngombroArma@Lib:EquipEffect"): json.append(getArma(oToken,2),oToken)]
[h: iIngombro = iIngombro + macro.return]

[macro("mobs/getScudo@this"): oToken]
[macro("getIngombroArma@Lib:EquipEffect"): json.append(macro.return,oToken)]
[h: iIngombro = iIngombro + macro.return]

[macro("mobs/getArmatura@this"): oToken]
[macro("getIngombroArma@Lib:EquipEffect"): json.append(macro.return,oToken)]
[h: iIngombro = iIngombro + macro.return]


[h: macro.return = iIngombro]
