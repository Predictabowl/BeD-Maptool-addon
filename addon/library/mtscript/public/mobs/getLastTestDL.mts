[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
	[h: sCap = json.get(macro.args,"capacita")]
	[h: spellName = json.get(macro.args,"spellName")]
};{
	[source = arg(0)]
	[if(argCount()>1): spellName = arg(1); spellName = ""]
	[sCap = ""]
}]

[h: broadcast(strformat("The use of DL is Deprecated. %s@%s", getMacroName(), getMacroLocation()))]

[h: switchToken(source)]
[h: bResult = getStrProp(Lista_Dati,"ultimoTestDL")]
[h, if(bResult == "" && spellName != ""), code:{
	[macro("mobs/testDL@this"): json.append(source,spellName)]
	[bResult = macro.return]
}]

[h: macro.return = bResult]