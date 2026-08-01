[h: source = arg(0)]
[h: spellName = arg(1)]

[h: spellTag = getLibProperty("tags",spellName)]

[h, if(listContains(spellTag,"CELLTARGET")): return(0,1)]
[h, if(listContains(spellTag,"DRAWTARGET")): return(0,0)]
[h: sShape = upper(getAoEShape(spellName,source))]
[h, if(sShape == "CATENA"): return(0,0)]

[h, if(argCount()>2): iSpellAoe = arg(2); iSpellAOE = getSpellAoE(source,spellName)]
[h, if(argCount()>3): iSpellRange = arg(3); iSpellRange = getSpellRange(source,spellName)]
[h, if(iSpellRange !=0 && iSpellAOE != 0): return(0, 1)]
[h: macro.return = 0]