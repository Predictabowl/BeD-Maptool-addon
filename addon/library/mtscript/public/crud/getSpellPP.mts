[h: source= arg(0)]
[h: libName = arg(1)]
[h, if(argCount()>2): bOpp = arg(2); bOpp = 0]
[h, if(argCount()>3): bFlag= arg(3); bFlag = 1] <!-- Determina se usare i modificatori di stat -->

[h: Pazione= fetchSpellProp(libName,"PP")]
[h: Pazione = listGet(Pazione,0)]
[h, if(Pazione == 0 || Pazione == ""): return(0,0)]

[h: sType = fetchSpellProp(libName,"property_type")]
[h, if(sType != "SPELL"): bFlag = 0]
[h, if(bFlag) ,code:{

	[macro("powers/getSpellMod@this"): json.append(source,libName,"PP")]
	[h: iMod = json.get(macro.return,"mod")]
	[h: dPerc = json.get(macro.return,"perc")]

	[macro("core/popStatModifier@this"):json.append(source,"PPCostMod")]
	[h: iMod = iMod + macro.return]

	[macro("core/popStatModifier@this"):json.append(source,"PPPerc")]
	[h: dPerc = dPerc + macro.return]

	[h: dPerc = calcPercentMod(dPerc)]
	[h: Pazione=round((Pazione+iMod)*dPerc)]

	[h, if(Pazione<1): Pazione = 1]
}]

[h: macro.return = Pazione]