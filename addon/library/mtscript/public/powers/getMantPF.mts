[h: source = json.get(macro.args,"source")]
[h: libName = json.get(macro.args,"spellName")]

[h: Pfatica = fetchSpellProp(libName,"PF")]


[h, if(isNumber(Pfatica)): return(0,0)]

	
[h: sTag = upper(listGet(Pfatica,1))]
[h, if(sTag == "MANT"): Pfatica = listGet(Pfatica,2); return(0,0)]


[macro("powers/getSpellMod@this"): json.append(source,libName,"PF")]
[h: iMod = json.get(macro.return,"mod")]
[h: dPerc = json.get(macro.return,"perc")]

[macro("core/popStatModifier@this"):json.append(source,"PFCostMod")]
[h: iMod = iMod + macro.return)]

[h: dPerc = calcPercentMod(dPerc)]
[h: Pfatica = floor((Pfatica +iMod)*dPerc)]
[h, if(Pfatica <0): Pfatica = 0]

[h: macro.return = Pfatica]