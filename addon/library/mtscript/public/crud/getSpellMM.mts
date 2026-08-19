[h: source= arg(0)]
[h: libName = arg(1)]
[h, if(argCount()>2): bOpp = arg(2); bOpp = 0]
[h, if(argCount()>3): bFlag= arg(3); bFlag = 1] <!-- Determina se usare i modificatori di stat -->

[h: iMM= fetchSpellProp(libName,"MM")]
[h: iMM = listGet(iMM,0)]
[h, if(iMM == 0 || iMM == ""): return(0,0)]

[h: sType = fetchSpellProp(libName,"property_type")]
[h, if(sType != "SPELL"): bFlag = 0]

[h, if(bFlag) ,code:{
	[macro("powers/getSpellMod@this"): json.append(source,libName,"SpellMM")]
	[h: iMod = json.get(macro.return,"mod")]
	[h: dPerc = json.get(macro.return,"perc")]

	[macro("core/popStatModifier@this"):json.append(source,"SpellMMCostMod")]
	[h: iMod = iMod + macro.return]

	[macro("core/popStatModifier@this"):json.append(source,"SpellMMPerc")]
	[h: dPerc = dPerc + macro.return]

	[h: dPerc = calcPercentMod(dPerc)]
	[h: iMM=max(round((iMM+iMod)*dPerc), 1)]
}]

[h: macro.return = iMM]