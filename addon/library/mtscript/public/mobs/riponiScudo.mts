[h: oToken = arg(0)]

[h: switchToken(oToken)]

[h: sScudo =  listGet(Scudo_Equipaggiato,0)]

[h, if(sScudo != ""), code:{
	[macro("mobs/getScudo@this"): json.append(oToken,sScudo)]
	[oScudo = macro.return]
};{
	[oScudo = ""]
}]

[h, if(!json.isEmpty(oScudo)), code:{
	[macro("processaAttributi@Lib:EquipEffect"): json.append(oToken,oScudo,-1)]
	[macro("mobs/applyAddArmaturaPenalties@this"): json.append(oToken,oScudo,1)]

	[Scudo_Equipaggiato = listDelete(Scudo_Equipaggiato,0)]
}]

<!-- Mancano da rimuovere gli eventi se hanno effetti aggiuntivi -->