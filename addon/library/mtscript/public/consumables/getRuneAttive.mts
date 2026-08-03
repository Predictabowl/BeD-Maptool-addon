[h: oToken = arg(0)]

[macro("mobs/getIdArmaEquip@this"): json.append(oToken,1)]
[h: sArma = macro.return]
[macro("consumables/getAllRuneFromArma@this"): json.append(oToken,sArma)]
[h: lRune = macro.return]

[h: aRune = "[]"]
[h, foreach(sRuna,lRune), code:{
	[oGetParam = json.append(sArma,sRuna)]
	[aRune = json.append(aRune,oGetParam)]
}]

[h: lRune = ""]
[h, macro("combat/isStile2A@this"): oToken]
[h: bFlag = macro.return || isArmaLancioEquipped(oToken)]
[h, if(bFlag), code:{
	[macro("mobs/getIdArmaEquip@this"): json.append(oToken,2)]
	[h: sArma = macro.return]
	[macro("consumables/getAllRuneFromArma@this"): json.append(oToken,sArma)]
	[lRune = macro.return]
}]

[h, macro("combat/isStileAS@this"): oToken]
[h, if(macro.return), code:{
	[h: sArma = getProperty("Scudo_Equipaggiato",oToken)]
	[macro("consumables/getAllRuneFromArma@this"): json.append(oToken,sArma)]
	[lRune = macro.return]
}]


[h, foreach(sRuna,lRune), code:{
	[oGetParam = json.append(sArma,sRuna)]
	[aRune = json.append(aRune,oGetParam)]
}]

[h, macro("consumables/getRuneAccessori@this"): oToken]

[h: macro.return = json.merge(aRune, macro.return)]
