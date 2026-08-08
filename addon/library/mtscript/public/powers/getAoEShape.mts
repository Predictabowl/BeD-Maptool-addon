[h: spellName = arg(0)]
[h, if(argCount()>1): oToken = arg(1); oToken = ""]
[h, if(argCount()>2): oParams = arg(2); oParams = "{}"]

[h: lAoETags = upper(fetchSpellProp(spellName,"tipo_AOE"))]

[h: bAoE = isAoESpell(spellName, oToken, oParams)]
[h, if(!bAoE): return (0,"")]
[h: sTipo =""]
[h, if(listContains(lAoETags,"FRONTALE")): sTipo = "Frontale"]
[h, if(listContains(lAoETags,"LINEA")): sTipo = "Linea"]
[h, if(listContains(lAoETags,"CONO")): sTipo = "Cono"]
[h, if(listContains(lAoETags,"CATENA")): sTipo = "Catena"]
[h, if(sTipo == ""): sTipo = "Cerchio"]

[h: macro.return = sTipo]