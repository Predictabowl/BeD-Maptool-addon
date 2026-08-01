[h, if(argCount() > 1), code:{
	[arguments = ""]
	[oToken = arg(0)]
	[sArma = arg(1)]
	[if (isNumber(sArma)), code:{
		[macro("mobs/getIdArmaEquip@this"): json.append(oToken,sArma)]
		[sArma = macro.return]
	}]
};{
	[arguments = arg(0)]
}]



[h, if(json.type(arguments) == "OBJECT"), code:{
	[h: oToken = json.get(arguments,"token")]
	[h: iArma = json.get(arguments,"numArma")]
	[h: sArma = json.get(arguments,"nomeArma")]
	[if(sArma == ""), code:{
		[macro("mobs/getIdArmaEquip@this"): json.append(oToken,iArma)]
		[sArma = macro.return]
	}]
}]

[h: oDati = "{}"]
[h, if(sArma != ""), code:{
	[switchToken(oToken)]
	[if(json.type(Equipaggiamento) != "OBJECT"): Equipaggiamento = "{}"]
	[oArma = json.get(Equipaggiamento,sArma)]
	[if(json.isEmpty(oArma)): return(0,"")]
	[oDati = json.get(oArma,"datiCustom")]
	[if(json.type(oDati) != "OBJECT"): oDati = "{}"]
}]

[h: macro.return = oDati]