[h: spellName = arg(0)]

[h, if(getPropertyType(spellName,"Librerie") != "ConsumabileToken"): return(0,0)]

[h: sTipo = upper(getLibProperty("tipo_oggetto", spellName))]
[h, if(sTipo != "POZIONE"): return(0,0)]

[h: macro.return = 1]