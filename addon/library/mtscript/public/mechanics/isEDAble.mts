[h: spellName = macro.args]

[h: sTipo = upper(getLibProperty("tipo",spellName))]
[h: tagList = getLibProperty("tags",spellName)]

[h: bResult = 0]

[h, if(listContains(tagList,"MACRODISTRUTTIVA")): bResult = 1]
[h, if(listContains(tagList,"ENERGIADISTRUTTIVA")): bResult = 1]
[h, if(listContains(tagList,"STREGONERIE") && sTipo == "OFFENSIVO"): bResult = 1]

[h: macro.return = bResult]