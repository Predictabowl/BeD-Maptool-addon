[h: source = json.get(macro.args,"source")]
[h: libName = json.get(macro.args,"spellName")]

[h: Pmana = fetchSpellProp(libName,"mana")]

[h, if(isNumber(Pmana)): return(0,0)]
	
[h: sTag = upper(listGet(Pmana,1))]
[h: scontoM = 0]
[if(sTag == "MANT"): Pmana = listGet(Pmana,2); return (0,0)]

[macro("powers/getSpellMod@this"): json.append(source,libName,"PM")]
[h: iMod = json.get(macro.return,"mod")]
[h: dPerc = json.get(macro.return,"perc")]

[macro("core/popStatModifier@this"): json.append(source,"PMPerc")]
[h: dPerc = dPerc + macro.return]
[macro("core/popStatModifier@this"): json.append(source,"PMCost")]
[h: iMod = iMod + macro.return]

[h: dPerc = calcPercentMod(dPerc)]
[h: Pmana =floor((Pmana +iMod)*dPerc)]

[h, if(Pmana <0): Pmana = 0]

[h: macro.return = Pmana]
