[h: spellName = macro.args]

[h: sType = upper(fetchSpellProp(spellName,"tipo"))]
[h, if(sType == "OFFENSIVO"), code:{
	[return = 1]
};{
	[return = 0]
}]

[h: macro.return = return]