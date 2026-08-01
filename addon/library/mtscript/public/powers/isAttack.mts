[h: spellName = macro.args]

[h: sType = upper(getLibProperty("tipo",spellName))]
[h, if(sType == "OFFENSIVO"), code:{
	[return = 1]
};{
	[return = 0]
}]

[h: macro.return = return]