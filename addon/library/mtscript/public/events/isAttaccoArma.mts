[h: oEventParam = arg(0)]

[h: sTipo = upper(json.get(oEventParam,"tipo"))]

[h, if(sTipo == "ATTACCO"): return(0,1)]

[h, if(!json.contains(oEventParam,"spellName")): return(0,0)]

[h: spellName = json.get(oEventParam,"spellName")]
[h, if(!isPotereOffensivo(spellName)): return(0,0)]

[h, macro("getSpellTagList@Lib:Poteri"): spellName]
[h: lTags = macro.return]
[h, if(listContains(lTags, "ATTACCO_ARMA")): return(0,1)]
[h, if(listContains(lTags, "OPP")): return(0,1)]
[h, if(listContains(lTags, "MISCHIA")): return(0,1)]
[h, if(listContains(lTags, "LANCIO")): return(0,1)]
[h, if(listContains(lTags, "TIRO")): return(0,1)]

[h: macro.return = 0]