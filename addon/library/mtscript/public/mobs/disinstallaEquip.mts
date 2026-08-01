[h: oToken = arg(0)]
[h: sId = arg(1)]

[h: switchToken(oToken)]

[macro("mobs/isOggettoEquip@this"): json.append(oToken,sId)]
[h: bEquip = macro.return]

[h, if(bEquip), code:{
	[broadcast(strformat("%s non può essere rimosso da %s perché è equipaggiato",sId,getName(oToken)))]
	[return (0,0)]
}]


[h: oLocalItem = json.get(Equipaggiamento,sId)]
[h: Equipaggiamento = json.remove(Equipaggiamento,sId)]

[h: macro.return = oLocalItem]