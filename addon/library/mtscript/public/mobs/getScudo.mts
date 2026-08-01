[h: oToken = arg(0)]
[h, if(argCount()>1): sArma = arg(1); sArma = getProperty("Scudo_Equipaggiato",oToken)]

[macro("mobs/getScudoCustomData@this"): json.append(oToken,sArma)]
[h: oArma = macro.return]
[h, if(oArma != ""), code:{
	[h: sNomeInDB = json.get(oArma,"idDB")]
	[if(sNomeInDB == ""): sNomeInDB = sArma]
	[h: oDatiArma = getScudoFromDB(sNomeInDB)]
	[h: oArma = json.merge(oArma,oDatiArma)]
	[h: oArma = json.set(oArma,"localId",sArma)]
};{
	[oArma = "{}"]
}]

[h: macro.return = oArma]