[h, if(argCount()>1), code:{
	[source = arg(0)]
	[spellName = arg(1)]
};{
	[h: macro.args = arg(0)]
	[h: source = json.get(macro.args,"token")]
	[h: spellName = json.get(macro.args,"spell")]
}]

[h: macro.return = fetchSpellProp(spellName,"scuola")]