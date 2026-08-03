[h: oToken = arg(0)]
[h, if(argCount()>1): jOptions = arg(1); jOptions = "{}"]

[h: switchToken(oToken)]

[macro("mobs/getListaOggettiEquip@this"): oToken]
[h: aEquip = macro.return]


[h, foreach(sEquip, aEquip), code:{
	[jRune = getAllRune(oToken,sEquip)]
	[foreach(sRuna,jRune), code:{
		[modCaricheRuna(oToken,sEquip,sRuna,1000)]
	}]
}]
