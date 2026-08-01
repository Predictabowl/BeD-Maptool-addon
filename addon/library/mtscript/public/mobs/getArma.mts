[h: oToken = arg(0)]
[h: sArma = arg(1)]
[h, if (isNumber(sArma)), code:{
	[macro("mobs/getIdArmaEquip@this"): json.append(oToken,sArma)]
	[sArma = macro.return]
}]


[h: switchToken(oToken)]
[h: oArma = json.get(Equipaggiamento,sArma)]
[h, if(json.isEmpty(oArma)): return (0,"{}")]

[h: oOverrideDati = json.get(oArma,"override")]
[h: oArma = json.remove(oArma, "override")]

[h: sNomeInDB = json.get(oArma,"idDB")]
[h, if(sNomeInDB == ""): sNomeInDB = sArma]
[h: oDatiArma = getArmaFromDB(sNomeInDB)]
[h: oArma = json.merge(oArma,oDatiArma)]
[h: oArma = json.set(oArma,"localId",sArma)]

[h, if(json.type(oOverrideDati) == "OBJECT"): oArma = json.merge(oArma, oOverrideDati)]

[h: macro.return = oArma]

