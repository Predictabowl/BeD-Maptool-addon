[h: spellName = macro.args]

[h: sTags = upper(getLibProperty("tags",spellName))]
[h, if(listContains(sTags,"CURA") || listContains(sTags,"HEAL")), code:{
	[bFlag = 1]
};{
	[bFlag = 0]
}]


[h: macro.return = bFlag]