[h: spellName = arg(0)]

[h: spellType = upper(getLibProperty("tipo",spellName))]
[h: sAttacks = "OFFENSIVO,CONTROLLO,MALEDIZIONE,MALATTIA"]

[h, if(listContains(sAttacks,spellType)): bFlag = 1; bFlag = 0]

[h: sTipoBer = upper(getLibProperty("tipo_bersaglio",spellName))]
[h, if(listContains(sTipoBer,"TUTTI")): bFlag = 0]
[h, if(listContains(sTipoBer,"UTILE")): bFlag = 0]
[h, if(listContains(sTipoBer,"DANNOSO")): bFlag = 1]
[h, if(listContains(sTipoBer,"ALLEATI")): bFlag = 0]
[h, if(listContains(sTipoBer,"NEMICI")): bFlag = 1]


[h: macro.return = bFlag]
