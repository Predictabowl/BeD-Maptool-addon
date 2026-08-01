[h: source = json.get(macro.args,"source")]
[h: eventParam = json.get(macro.args,"eventParam")]

[h: sEventName = "Energia Distruttiva"]
[h: spellName = json.get(eventParam,"spellName")]
[h, if(spellName != ""), code:{
	[h: tagList = getLibProperty("tags",spellName)]
	[h: nomeDec = getLibProperty("nome_decorativo",spellName)]
	[h: sTipo  = upper(getLibProperty("tipo",spellName))]

	[h, if(listContains(tagList,"MACRODISTRUTTIVA")), code:{
		[sMacroName = strformat("energiaDistruttiva@%{spellName}")]
		[macro(sMacroName): source]
	}]

	[h: msg = ""]

	[macro("mechanics/isEDAble@this"): spellName]
	[h, if(macro.return), code:{
		[im = getImage(spellName)]
		[msg = strformat("<br><img src='%{im}' width='25' height='25' /> Energia distruttiva &egrave attiva per %s",nomeDec)]
	}]


}]

<!-- si auto disinstalla -->
[macro("events/eventUninstaller@this"): json.append(source,"On_Attack",sEventName)]
[macro("events/eventUninstaller@this"): json.append(source,"On_Action_Interrupt",sEventName)]
[macro("events/eventUninstaller@this"): json.append(source,"On_Action_End",sEventName)]

[h: macro.return = msg]