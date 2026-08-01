[h: spellName = arg(0)]

[h: iRecupero = getLibProperty("recupero",spellName)]
[h, if(!isNumber(iRecupero)): iRecupero = 0]
[h: return(0, iRecupero)]
