[h: source = arg(0)]
[h: jParams = arg(1)]

[h, if(source==""): source = getImpersonated()]

[h: switchToken(source)]

[h, if(getOverride(source,"InventarioBloccato")), code:{
	[sMsg = "Non è possibile accedere all'inventario in questo momento"]
	[broadcast(sMsg,getPlayerName())]
	[return(0,sMsg)]
}]

[macro("mobs/getDifendersi@this"): source]
[if(macro.return): bOpport = 0; bOpport = 1]

[h: oActionParam = json.set("","source",source, "callbackParams", jParams)]
[h, if(isCombat()), code:{
	[h: iTime = calcActionTime(6,source)]
	[h: param = json.set("","target",source,"source",source,"macro","risolviCambioArma@Lib:Combattimento","macroParam",oActionParam,"tipo","tattico","opp",bOpport,"time",iTime,"action","Cambio Arma")]
	[macro("mobs/IniziaAzione@this"):param]
	[h: sMsg= strformat("%s inizia a cambiare le armi",getName(source))]
	[h: broadcast(sMsg)]
};{
	[macro("combat/risolviCambioArma@this"): oActionParam]
	[sMsg = ""]
}]

[h: macro.return = sMsg]
