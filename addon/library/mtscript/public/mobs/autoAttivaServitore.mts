[h:broadcast(strformat("DEPRECATED: %s@%s",getMacroName(),getMacroLocation()))]
[h, if(json.type(macro.args)!="OBJECT"), code:{
	[source = getImpersonated()]
	[macro("core/getServitore@this"): source]
	[oServitore = macro.return]
};{
	[source = json.get(macro.args,"padrone")]
	[oServitore = json.get(macro.args,"servitore")]
}]

[h: oServitore = findToken(oServitore)]

[h, if(oServitore != ""), code:{
	[macro("mobs/attivaServitore@this"): macro.args]
	[macro("ApriTuttoInfo@Lib:Scheda"):json.append(oServitore,getName(oServitore))]
}]