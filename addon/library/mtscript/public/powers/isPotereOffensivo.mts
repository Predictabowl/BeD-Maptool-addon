[h: spellName = arg(0)]

[h: spellType = upper(getLibProperty("tipo",spellName))]
[h, if(spellType == "OFFENSIVO"): return(0,1)]

[h: macro.return = 0]