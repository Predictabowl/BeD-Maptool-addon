[h: spellName = arg(0)]

[h: iRecupero = fetchSpellProp(spellName,"recupero")]
[h, if(!isNumber(iRecupero)): iRecupero = 0]
[h: return(0, iRecupero)]
