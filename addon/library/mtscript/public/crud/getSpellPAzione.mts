[h: source= arg(0)]
[h: libName = arg(1)]
[h, if(argCount()>2): bOpp = arg(2); bOpp = 0]
[h, if(argCount()>3): bFlag= arg(3); bFlag = 1] <!-- Determina se usare i modificatori di stat -->

[h: Pazione= fetchSpellProp(libName,"PA")]

[h, if(!isNumber(Pazione)), code:{
	[h: basePA = listGet(Pazione,0)]
	[switch(basePA), code:
	case "arma":{
		[Pazione = getArmaPA(source,bOpp)]
	};
	default:{
		[Pazione = basePA]
	}]
}]

[h, if(Pazione == 0 || Pazione == ""): return(0,0)]


[h: sType = fetchSpellProp(libName,"property_type")]
[h, if(sType != "SPELL"): bFlag = 0]
[h, if(bFlag) ,code:{

	[macro("powers/getSpellMod@this"): json.append(source,libName,"PA")]
	[h: iMod = json.get(macro.return,"mod")]
	[h: dPerc = json.get(macro.return,"perc")]

	[macro("core/popStatModifier@this"):json.append(source,"PACostMod")]
	[h: iMod = iMod + macro.return]

	[macro("core/popStatModifier@this"):json.append(source,"PAPerc")]
	[h: dPerc = dPerc + macro.return]

	[h: dPerc = calcPercentMod(dPerc)]
	[h: Pazione=round((Pazione+iMod)*dPerc)]

	[h, if(Pazione<1): Pazione = 1]
}]

[h: macro.return = Pazione]