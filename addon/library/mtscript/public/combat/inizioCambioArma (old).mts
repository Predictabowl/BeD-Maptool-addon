[h: source = json.get(macro.args,"source")]
[h: sArma1= json.get(macro.args,"nomeArmaPrimaria")]
[h: sArma2= json.get(macro.args,"nomeArmaSecondaria")]
[h: sScudo = json.get(macro.args,"nomeScudo")]

[h, if(source==""): source = getImpersonated()]

[h: switchToken(source)]

[h, if(sArma1 != ""), code:{
	[macro("mobs/isArmaDaLancio@this"): json.append(source,sArma1)]
	[h: bLancio1 = macro.return]
	[h, if(!bLancio1), code:{
		[macro("mobs/isArmaDaLancio@this"): json.append(source,listGet(Armi_Equipaggiate,0))]
		[bLancio1 = macro.return]
	}]
};{
	[bLancio1 = 1]
}]

[h, if(sArma2 != ""), code:{
	[macro("mobs/isArmaDaLancio@this"): json.append(source,sArma2)]
	[h: bLancio2 = macro.return]
	[h, if(!bLancio2), code:{
		[macro("mobs/isArmaDaLancio@this"): json.append(source,listGet(Armi_Equipaggiate,1))]
		[bLancio2 = macro.return]
	}]
};{
	[bLancio2 = 1]
}]

[bLancio = bLancio1*bLancio2]

[macro("mobs/getDifendersi@this"): source]
[if(macro.return): bOpport = 0; bOpport = 1]

[h: oActionParam = json.set(macro.args,"armaLancio",bLancio)]
[h, if(isCombat() && !bLancio), code:{
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
