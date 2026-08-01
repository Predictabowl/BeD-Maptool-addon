[h: source = json.get(macro.args,0)]
[h: oInteractive = json.get(macro.args,1)]

[h: assert(oInteractive != "","Nessun token selezionato!")]

[h: bFlag = 0]

[h: sTokenType = getPropertyType(oInteractive)]

[h, if (sTokenType == "Interattivo"), code:{
	[nomeMacro = getProperty("nome_macro",oInteractive)]
	[macro(nomeMacro): json.set("","source",source,"interattivo",oInteractive)]
	[bFlag = 1]
}]

[h, if (sTokenType == "Basic"), code:{
	[objectMacro = getProperty("Macro_Interazione",oInteractive)]
	[if(!json.isEmpty(objectMacro)), code:{
		[nomeMacro = json.get(objectMacro,"nomeMacro")]
		[macroParam = json.get(objectMacro,"macroParam")]
		[macro(nomeMacro): json.set(macroParam,"source",source,"interattivo",oInteractive)]
		[bFlag = 1]
	}]
}]

[h, if(!bFlag) : broadcast("Questo oggetto non &egrave interattivo",getPlayerName())]
