[h: source = arg(0)]
[h: spellName = arg(1)]
[h: iAoE = arg(2)]

[switchToken(source)]
[h, macro("powers/canChangeTarget@this"): source]
[h: bTargetSelect = macro.return]

[h, if(bTargetSelect == 1), code:{
	[target = listGet(getSelected(), 0)]
	[broadcast("Bersaglio Modificabile", getPlayerName())]
};{
	[target = json.get(Azione_Corrente,"Bersaglio")]
	[broadcast("Forzato Bersaglio Originale", getPlayerName())]
}]

[macro("utility/isTokenVisible@this"):json.append(source,target)]
[h, if(!macro.return), code:{ 
	[deselectTokens()]
	[return(0,"")]
}]

[macro("powers/isTargetLegal@this"):target]
[h, if(!macro.return), code:{ 
	[deselectTokens()]
	[return(0,"")]
}]

[macro("powers/getAoETargetLimit@this"): spellName]
[h: iLimit = macro.return]
[h: sOrigine = target]
[h: lTargets = listAppend("", target)]

[h, for(i, 1, iLimit), code :{
	[rangeParam = json.set("","token",sOrigine,"distancePerCell",0,"upto",iAOE)]
	[findParam = json.set("","range",rangeParam)]
	[tempList = getTokens(",",findParam)]
	[macro("powers/getNextCatenaTarget@this"): json.append(source, sOrigine, tempList, lTargets, spellName)]
	[if(macro.return == ""): return(0, lTargets)]
	[sOrigine = macro.return]
	[lTargets = listAppend(lTargets, macro.return)]
	[i = i+1]
}]

[h: macro.return = lTargets]