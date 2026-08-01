[h: oToken = json.get(macro.args,"token")]
[h: sArmatura = json.get(macro.args,"input-armatura")]
[h: sAmuleto = json.get(macro.args,"input-amuleto")]
[h: sAnello1 = json.get(macro.args,"input-anello1")]
[h: sAnello2 = json.get(macro.args,"input-anello2")]
[h: sArma1 = json.get(macro.args,"input-arma1")]
[h: sArma2 = json.get(macro.args,"input-arma2")]
[h: sBracciali = json.get(macro.args,"input-bracciali")]
[h: sMantello = json.get(macro.args,"input-mantello")]
[h: sCintura = json.get(macro.args,"input-cintura")]
[h: sStivali = json.get(macro.args,"input-stivali")]
[h: sGuanti = json.get(macro.args,"input-guanti")]
[h: sElmo = json.get(macro.args,"input-elmo")]
[h: oSlotRapidi = json.get(macro.args,"input-slotRapidi")]

[h, if(isCombat()): sDisplayEquip = "none"; sDisplayEquip = "block"]

[macro("mobs/setEquipToSlotVeloce@this"): json.append(oToken,oSlotRapidi)]

[h, if(sArmatura == "rimuovi"), code:{
	[macro("mobs/riponiArmatura@this"): oToken]
};{
	[macro("mobs/equipaggiaArmatura@this"): json.append(oToken,sArmatura)]
}]

[h, if(sAmuleto == "rimuovi"), code:{
	[macro("mobs/riponiAccessorio@this"): json.append(oToken,"amuleto")]
};{
	[macro("mobs/equipaggiaAccessorio@this"): json.append(oToken,sAmuleto)]
}]

[h, if(sAnello1 == "rimuovi"), code:{
	[macro("mobs/riponiAccessorio@this"): json.append(oToken,"anello",1)]
};{
	[macro("mobs/equipaggiaAccessorio@this"): json.append(oToken,sAnello1)]
}]

[h, if(sAnello2 == "rimuovi"), code:{
	[macro("mobs/riponiAccessorio@this"): json.append(oToken,"anello",2)]
};{
	[macro("mobs/equipaggiaAccessorio@this"): json.append(oToken,sAnello2,2)]
}]

[h, if(sBracciali == "rimuovi"), code:{
	[macro("mobs/riponiAccessorio@this"): json.append(oToken,"bracciali")]
};{
	[macro("mobs/equipaggiaAccessorio@this"): json.append(oToken,sBracciali)]
}]

[h, if(sMantello == "rimuovi"), code:{
	[macro("mobs/riponiAccessorio@this"): json.append(oToken,"mantello")]
};{
	[macro("mobs/equipaggiaAccessorio@this"): json.append(oToken,sMantello)]
}]

[h, if(sCintura == "rimuovi"), code:{
	[macro("mobs/riponiAccessorio@this"): json.append(oToken,"cintura")]
};{
	[macro("mobs/equipaggiaAccessorio@this"): json.append(oToken,sCintura)]
}]

[h, if(sStivali == "rimuovi"), code:{
	[macro("mobs/riponiAccessorio@this"): json.append(oToken,"stivali")]
};{
	[macro("mobs/equipaggiaAccessorio@this"): json.append(oToken,sStivali)]
}]

[h, if(sGuanti == "rimuovi"), code:{
	[macro("mobs/riponiAccessorio@this"): json.append(oToken,"guanti")]
};{
	[macro("mobs/equipaggiaAccessorio@this"): json.append(oToken,sGuanti)]
}]

[h, if(sElmo == "rimuovi"), code:{
	[macro("mobs/riponiAccessorio@this"): json.append(oToken,"elmo")]
};{
	[macro("mobs/equipaggiaAccessorio@this"): json.append(oToken,sElmo)]
}]

[h, if(sArma1 == "rimuovi"), code:{
	[macro("mobs/riponiArma@this"): json.append(oToken,1)]
	[sArma1 = ""]
}]

[h: sScudo = ""]
[h, if(sArma2 == "rimuovi" ), code:{	
	[macro("mobs/riponiScudo@this"): oToken]
	[macro("mobs/riponiArma@this"): json.append(oToken,2)]
	[sArma2 = ""]
}]

[macro("combat/isStileAS@this"): oToken]
[h, if(macro.return), code:{
	[sScudo = sArma2]
}]

[macro("combat/isStile2A@this"): oToken]
[h: b2Armi = macro.return]
[macro("combat/isStile1A@this"): oToken]
[h: b2Armi = macro.return || b2Armi]
[h, if(!b2Armi), code:{
	[sArma2 = ""]
}]


[if(sArma1 !=""), code:{
	[macro("mobs/equipaggiaArma@this"): json.append(oToken,1,sArma1)]
}]
[if(sArma2 !=""), code:{
	[macro("mobs/equipaggiaArma@this"): json.append(oToken,2,sArma2)]
}]
[if(sScudo !=""), code:{
	[macro("mobs/equipaggiaScudo@this"): json.append(oToken,sScudo)]
}]

[macro("mobs/applyIngombroPenalties@this"): oToken]

[h:closeDialog("DialogCambioArmi")]
[macro("gui/updateSchedaAttacco@this"): json.append(oToken,"Scheda")]
[macro("gui/updateUIOverlay@this"): oToken]