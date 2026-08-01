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
	[objectMacro = getMacroFromToken(oServitore,"Servitore")]
	[if(!json.isEmpty(objectMacro)), code:{
		[nomeMacro = json.get(objectMacro,"nomeMacro")]
		[macroParam = json.get(objectMacro,"macroParam")]
		[macro(nomeMacro): json.set(macroParam,"source",source,"interattivo",oServitore)]
		[bFlag = 1]
	};{
		[broadcast("Macro Servitore non trovata",getPlayerName()]
	}]
};{
	[broadcast("Servitore non trovato",getPlayerName()]
}]