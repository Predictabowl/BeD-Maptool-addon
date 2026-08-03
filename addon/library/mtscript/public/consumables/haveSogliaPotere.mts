[h: oToken = arg(0)]
[h: spellName = arg(1)]

[h: sTags = getLibProperty("tags",spellName)]
[h, if(listContains(sTags,"SOGLIAPOTERE")): return(0,1)]

[h, macro("consumables/getTipoConsumabile@this"): spellName]
[h, if(macro.return == "RUNA"): return(0, 0)]

[h: sMana = getLibProperty("mana",spellName)]
[h, if(!isNumber(sMana) && indexOf(sMana,"Var") != -1): return(0,1)]

[h: sPF = getLibProperty("PF",spellName)]
[h, if(!isNumber(sPF) && indexOf(sPF,"Var") != -1): return(0,1)]

[h: macro.return = 0]