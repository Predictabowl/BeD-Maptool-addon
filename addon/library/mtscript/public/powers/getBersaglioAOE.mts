[h: source = json.get(macro.args,0)]
[h: spellName = json.get(macro.args,1)]

[macro("powers/getSpellOrigine@this"): json.append(source,spellName)]
[h: origine = macro.return]

[h: iAOE = getSpellAoE(source,spellName)]
[h: sShape = upper(getAoEShape(spellName,source))]
[h, if(sShape == "CATENA"), code:{
	[macro("powers/getCatenaTargets@this"): json.append(source, spellName, iAoE)]
	[return(0, macro.return)]

}]
[macro("powers/fixGetTokenBersaglio@this"): json.set("","source",source,"spellName",spellName, "origine", origine)]
[h: tokenBersaglio = macro.return]

[h: lVisibiltyBersaglio = canSeeToken(tokenBersaglio, source)]
[h, if(json.isEmpty(lVisibiltyBersaglio)), code:{
	[broadcast("Token Bersaglio fuori dalla linea visiva",getPlayerName())]
	[return(0,"")]
}]

[h, if(sShape == "LINEA"): sOrigine = source; sOrigine = tokenBersaglio]

[h: rangeParam = json.set("","token",sOrigine,"distancePerCell",0,"upto",iAOE)]
[h: findParam = json.set("","range",rangeParam)]
[h: tempList = getTokens(",",findParam)]

[h: targetList = ""]
[h, foreach(item,tempList), code:{
	[macro("powers/isEffectedByAOE@this"): json.append(source,item,tokenBersaglio,spellName)]
	[if(macro.return == 1): targetList = listAppend(targetList,item)]
}]

[h: broadcast(getMessaggio(source,"ControlloPoteri"),getPlayerName())]
[h: macro.return = targetList]
