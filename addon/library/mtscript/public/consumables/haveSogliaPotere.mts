[h: oToken = arg(0)]
[h: spellName = arg(1)]

[h: sTags = fetchConsumableProp(spellName,"tags")]
[h, if(listContains(sTags,"SOGLIAPOTERE")): return(0,1)]

[h, macro("consumables/getTipoConsumabile@this"): spellName]
[h, if(macro.return == "RUNA"): return(0, 0)]

[h: sMana = fetchConsumableProp(spellName,"mana")]
[h, if(!isNumber(sMana) && indexOf(sMana,"Var") != -1): return(0,1)]

[h: sPF = fetchConsumableProp(spellName,"PF")]
[h, if(!isNumber(sPF) && indexOf(sPF,"Var") != -1): return(0,1)]

[h: macro.return = 0]