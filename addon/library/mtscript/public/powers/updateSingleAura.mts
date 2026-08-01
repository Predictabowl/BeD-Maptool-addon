[h, if(json.type(macro.args) == "OBJECT"), code:{
	[source= json.get(macro.args,"auraOwner")]
	[sAuraId = json.get(macro.args,"idAura")]
	[iMaxRange = json.get(macro.args,"maxRange")]	
};{
	[h: source= arg(0)]
	[h: sAuraId = arg(1)]
	[h, if(argCount() > 2): iMaxRange = arg(2); iMaxRange = ""]
}]

[h: switchToken(source)]
[h: oAura = json.get(Aure_Attive,sAuraId)]

[h: nomeMacro = json.get(oAura,"macro")]
[h: oMacroParam = json.get(oAura,"param")]

[h: oLayer = json.set("","layer","TOKEN")]
[h: oConditions = json.set("","conditions",oLayer)]
[h, if(isNumber(iMaxRange)), code:{
	[h: iMaxRange = iMaxRange + json.get(oAura,"AOE")]
	[h: oRange = json.set("","token",source,"upto",iMaxRange)]
	[oConditions = json.set(oConditions,"range",oRange)]
}]

[h: allTargets = getTokens(",",oConditions)]

[h, foreach(id,allTargets), code:{
	[flag = 1]
	[macro("powers/isTargetLegal@this"): id]
	[if (macro.return == 1), code:{
		[macro("powers/updateSTAura@this"): json.append(source,id,sAuraId)]
	}]
}]

[h:macro.return = ""]