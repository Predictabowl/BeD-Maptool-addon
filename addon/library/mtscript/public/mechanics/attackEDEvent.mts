[h: source = json.get(macro.args,"source")]
[h: eventParam = json.get(macro.args,"eventParam")]

[h: sEventName = "Energia Distruttiva"]
[h: spellName = json.get(eventParam,"spellName")]
[h, if(spellName != ""), code:{
	[h: tagList = fetchSpellProp(spellName,"tags")]
	[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
	[h: sTipo  = upper(fetchSpellProp(spellName,"tipo"))]

	[h, if(listContains(tagList,"MACRODISTRUTTIVA")), code:{
		[sMacroName = strformat("energiaDistruttiva@%{spellName}")]
		[macro(sMacroName): source]
	}]

	[h: msg = ""]

	[macro("mechanics/isEDAble@this"): spellName]
	[h, if(macro.return), code:{
		[im = fetchSpellImage(spellName)]
		[msg = strformat("<br><img src='%{im}' width='25' height='25' /> Energia distruttiva &egrave attiva per %s",nomeDec)]
	}]


}]

<!-- si auto disinstalla -->
[macro("events/eventUninstaller@this"): json.append(source,"On_Attack",sEventName)]
[macro("events/eventUninstaller@this"): json.append(source,"On_Action_Interrupt",sEventName)]
[macro("events/eventUninstaller@this"): json.append(source,"On_Action_End",sEventName)]

[h: macro.return = msg]