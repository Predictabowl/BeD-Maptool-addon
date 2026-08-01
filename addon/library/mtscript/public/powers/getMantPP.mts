[h: source = json.get(macro.args,"source")]
[h: libName = json.get(macro.args,"spellName")]

[h: Pazione= getLibProperty("PP",libName)]

[h, if(isNumber(Pazione)): return (0,0)]

[h: sTag = upper(listGet(Pazione,1))]
[h, if(sTag == "MANT"): Pazione = listGet(Pazione,2); return(0,0)]


[macro("powers/getSpellMod@this"): json.append(source,libName,"PP")]
[h: iMod = json.get(macro.return,"mod")]
[h: dPerc = json.get(macro.return,"perc")]

[macro("powers/getSpellMod@this"): json.append(source,libName,"PPMant")]
[h: iMod = iMod + json.get(macro.return,"mod")]
[h: dPerc = dPerc + json.get(macro.return,"perc")]

[macro("core/popStatModifier@this"):json.append(source,"PPCostMod")]
[h: iMod = iMod + macro.return]

[macro("core/popStatModifier@this"):json.append(source,"PPPerc")]
[h: dPerc = dPerc + macro.return]

[h: dPerc = calcPercentMod(dPerc)]
[h: Pazione=ceil((Pazione+iMod)*dPerc)]

[h, if(Pazione<0): Pazione = 0]

[h: macro.return = Pazione]