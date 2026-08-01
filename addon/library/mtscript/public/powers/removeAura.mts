[h: source = json.get(macro.args,0)]
[h: idAura = json.get(macro.args,1)]

[h: switchToken(source)]
[h, if(!json.contains(Aure_Attive,idAura)): return(0,0)]

[oAura = json.get(Aure_Attive,idAura)]
[sMacro = json.get(oAura,"macro")]
[oParam = json.get(oAura,"param")]
[oParam = json.set(oParam,"remove",1)]
[iVisualAura = json.get(oAura,"visualizza")]

[h: oLayer = json.set("","layer","TOKEN")]
[h: oConditions = json.set("","conditions",oLayer)]
[h: iAoE = json.get(oAura,"AOE")]

[macro("powers/getAuraOrigine@this"): json.append(source, idAura)]
[h: aOrigine = macro.return]
[h: iMaxRange = iAoE + getDistanceToXY(json.get(aOrigine,0), json.get(aOrigine,1), 0, source)]
[h: tOrigine = json.get(aOrigine, 2)]
	
[h: oRange = json.set("","token",source,"upto",iMaxRange)]
[oConditions = json.set(oConditions,"range",oRange)]
[h: tokenList = getTokens(",",oConditions)]
[h: tokenList = listAppend(tokenList,source)]


[h, foreach(id,tokenList), code:{
	[oParam = json.set(oParam,"target",id,"source",source)]
	[macro(sMacro):oParam]
}]

[h, switch(iVisualAura), code:
	case "1":{
		[visualizzaAura(tOrigine,iAoE,-1)]
	};
	case "2":{
		[visualizzaAura(tOrigine,iAoE,-1,"Blu")]
	};
	default: {}
]
[h: sPropType = getPropertyType(tOrigine)]
[h, if(sPropType == "Bersaglio"): removeToken(tOrigine)]


[Aure_Attive = json.remove(Aure_Attive,idAura)]
[macro("powers/delAuraSource@this"): source]
