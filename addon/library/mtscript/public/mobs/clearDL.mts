[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
	[h: sCap = json.get(macro.args,"capacita")]
	[h: spellName = json.get(macro.args,"spellName")]
};{
	[h: source = arg(0)]
	[sCap = ""]
	[spellName = ""]
}]

[h: broadcast(strformat("The use of DL is Deprecated. %s@%s", getMacroName(), getMacroLocation()))]

[h: switchToken(source)]
[h: Lista_Dati = deleteStrProp(Lista_Dati,"ultimoTestDL")]
