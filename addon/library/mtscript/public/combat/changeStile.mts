[h: oToken = arg(0)]
[h: sNewStile = arg(1)]


[h, if(getOverride(oToken,"StileBloccato")), code:{
	[sMsg = "Non è possibile cambiare stile in questo momento"]
	[broadcast(sMsg,getPlayerName())]
	[return(0,0)]
}]

[h, macro("combat/getStile@this"): oToken]
[h, if(sNewStile == macro.return): return (0,0)]

[h: switchToken(oToken)]


[h, if(isStileDistanza(oToken)), code:{
	[eventUninstaller(oToken,"On_Attack", "PenalitaStileDistanza")]
	[Num_Attacchi_Opp = Num_Attacchi_Opp + 1]
}]

[macro("combat/isStile1A@this"): oToken]
[h, if(macro.return), code:{
	[PA_Max = PA_Max -1]
	[macro("mobs/getIdArmaEquip@this"): json.append(oToken,2)]
	[macro("mobs/addEquipToSlotVeloce@this"): json.append(oToken,macro.return)]
	[macro("mobs/riponiArma@this"): json.append(oToken,2)]
}]

[macro("combat/isStile2M@this"): oToken]
[h: bStile2MOld = macro.return]
[h, if(bStile2MOld), code:{
	[Moltiplicatore_Att = Moltiplicatore_Att - 0.5]
}]

[macro("combat/isStileAS@this"): oToken]
[h, if(macro.return), code:{
	[macro("mobs/addEquipToSlotVeloce@this"): json.append(oToken,Scudo_Equipaggiato)]
	[macro("mobs/riponiScudo@this"): oToken]
}]


[macro("combat/isStile2A@this"): oToken]
[h, if(macro.return), code:{
	[macro("mobs/getIdArmaEquip@this"): json.append(oToken,2)]
	[macro("mobs/addEquipToSlotVeloce@this"): json.append(oToken,macro.return)]
	[macro("mobs/riponiArma@this"): json.append(oToken,2)]
	[Num_Attacchi = Num_Attacchi - 1]
	[Num_Attacchi_Opp = Num_Attacchi_Opp - 1]
}]

[macro("combat/setStile@this"): macro.args]

[h, if(isStileDistanza(oToken)), code:{
	[eventInstaller(oToken,"On_Attack", "PenalitaStileDistanza","events/PenalitaAttaccoDistanza@lib:it.aldinucci.piero.bed.maptool.ruleset")]
	[Num_Attacchi_Opp = Num_Attacchi_Opp - 1]
}]

[macro("combat/isStile1A@this"): oToken]
[h, if(macro.return), code:{
	[PA_Max = PA_Max +1]
}]

[macro("combat/isStile2M@this"): oToken]
[h: bStile2MNew = macro.return]
[h, if(bStile2MNew), code:{
	[Moltiplicatore_Att = Moltiplicatore_Att + 0.5]
}]

[macro("combat/isStile2A@this"): oToken]
[h, if(macro.return), code:{
	[Num_Attacchi = Num_Attacchi + 1]
	[Num_Attacchi_Opp = Num_Attacchi_Opp + 1]
}]

[h, if(bStile2MOld != bStile2MNew), code:{
	[macro("mobs/riequipaggiaArma@this"): json.append(oToken,1)]
}]
[macro("combat/checkStileConArma@this"): oToken]
[h, if(!macro.return), code:{
	[macro("mobs/getIdArmaEquip@this"): json.append(oToken,1)]
	[macro("mobs/addEquipToSlotVeloce@this"): json.append(oToken,macro.return)]
	[macro("mobs/getIdArmaEquip@this"): json.append(oToken,2)]
	[macro("mobs/addEquipToSlotVeloce@this"): json.append(oToken,macro.return)]
	[macro("mobs/riponiArma@this"): json.append(oToken,1)]
	[macro("mobs/riponiArma@this"): json.append(oToken,2)]
}]

[h: macro.return = 1]
