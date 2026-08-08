[h: spellName = macro.args]

[h: sTags = upper(fetchSpellProp(spellName,"tags"))]
[h, if(listContains(sTags,"CURA") || listContains(sTags,"HEAL")), code:{
	[bFlag = 1]
};{
	[bFlag = 0]
}]


[h: macro.return = bFlag]