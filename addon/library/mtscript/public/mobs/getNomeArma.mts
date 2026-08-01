[h: oToken = arg(0)]
[h: sArma = arg(1)]

[h, if(isNumber(sArma)), code:{
	[macro("mobs/getIdArmaEquip@this"): json.append(oToken,sArma)]
	[sArma = macro.return]
}]

[h: oArma = getArma(oToken,sArma)]
[h, if(json.isEmpty(oArma)): sNome = sArma; sNome = json.get(oArma,"nome")]

[h: macro.return = sNome]