[h: spellName = arg(0)]
[h, if(argCount()>1): source = arg(1); source = ""]
[h, if(argCount()>2): oParams = arg(2); oParams = "{}"]

[h: sTipoAOE = upper(fetchSpellProp(spellName,"tipo_AOE"))]
[h, if(listContains(sTipoAOE, "BERSAGLIO")): return(0,0)]

[h: sTags = upper(fetchSpellProp(spellName,"tags"))]
[h, if(listContains(sTags, "SINGLETARGET")): return(0,0)]
[h, if(listContains(sTags, "MULTIPLETARGET")): return(0,0)]

[h: iAOE = getSpellAoE(source, spellName, oParams)]
[h, if(iAOE > 0): return(0,1)]

[h: macro.return = 0]