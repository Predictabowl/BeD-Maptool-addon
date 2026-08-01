[oToken = arg(0)]
[if (argCount()>1): sArma = arg(1); sArma = getProperty("Scudo_Equipaggiato",oToken)]

[h, if(sArma != ""), code:{
	[h: switchToken(oToken)]
	[h, if(json.type(Equipaggiamento) != "OBJECT"): return(0, "")]
	[h: oArma = json.get(Equipaggiamento,sArma)]
	[h, if(json.type(oArma) != "OBJECT"): return(0, "")]
	[h: oDatiCustom = json.get(oArma, "datiCustom")]
	[oDatiCustom = json.set(oDatiCustom,"localId",sArma)]
	[oArma = json.set(oArma,"datiCustom",oDatiCustom)]
};{
	[oArma = ""]
}]

[h: macro.return = oArma]