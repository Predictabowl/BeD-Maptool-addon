[h: oToken = arg(0)]
[h: sArma = arg(1)]
[h: oCustomData = arg(2)]
[h, if (isNumber(sArma)), code:{
	[macro("mobs/getIdArmaEquip@this"): json.append(oToken,sArma)]
	[sArma = macro.return]
}]

[h, if(sArma == ""): return (0,0)]

[h: switchToken(oToken)]
[h, if(json.type(Equipaggiamento) != "OBJECT"): Equipaggiamento = "{}"]
[h: oArma = json.get(Equipaggiamento,sArma)]
[h, if(json.isEmpty(oArma)): return(0,"")]
[h: oArma = json.set(oArma,"datiCustom",oCustomData)]
[h: Equipaggiamento = json.set(Equipaggiamento,sArma,oArma)]
