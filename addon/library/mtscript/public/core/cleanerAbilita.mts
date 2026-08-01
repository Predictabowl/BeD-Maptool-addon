[h: source = json.get(macro.args,0)]
[h: sAbilita = json.get(macro.args,1)]
[h: sClasse = json.get(macro.args,2)]

[h: macroName = sAbilita+"@"+sClasse]

[h: abData = getLibProperty(sAbilita,sClasse)]
[h: bCleaner = getStrProp(abData,"cleaner"))]
[h, if(bCleaner == 1), code:{
	[macro("Clean"+macroName):source]
}]



[macro("core/getAbilitaTipoEvento@this"): json.append(sAbilita,sClasse)]
[h: sEventType = macro.return]
[h, if(sEventType != ""), code:{
	[macro("findEventByMacro@Lib:Eventi"): json.append(source,sEventType,macroName)]
	[h: eventName= macro.return]
	[macro("eventUninstaller@Lib:Eventi"):json.set("","token",source,"event",sEventType,"name",eventName)]
}]
