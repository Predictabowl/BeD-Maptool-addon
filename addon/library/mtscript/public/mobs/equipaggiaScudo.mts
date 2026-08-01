[h: oToken = json.get(macro.args,0)]
[h: sScudo = json.get(macro.args,1)]


[h: switchToken(oToken)]

[h: sScudoEq =  listGet(Scudo_Equipaggiato,0)]


[h, if(sScudoEq != ""), code:{
	[macro("mobs/riponiScudo@this"): oToken]
}]


[macro("mobs/getScudo@this"): json.append(oToken,sScudo)]
[h: oScudo = macro.return]

[h, if(!json.isEmpty(oScudo)), code:{
	[macro("processaAttributi@Lib:EquipEffect"): json.append(oToken,oScudo)]
	[macro("mobs/applyAddArmaturaPenalties@this"): json.append(oToken,oScudo)]

	[Scudo_Equipaggiato = listInsert(Scudo_Equipaggiato,0,sScudo)]
}]

<!-- Mancano da aggiungere gli eventi se hanno effetti aggiuntivi -->