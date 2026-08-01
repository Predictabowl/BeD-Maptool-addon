[h: source = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]

[h: bCleaner = getLibProperty("cleaner",sLibAbilita)]
[h, if(bCleaner == 1), code:{
	[macro("cleanAbilita@"+sLibAbilita):source]
}]

[h: sEventTypes = getLibProperty("eventi",sLibAbilita)]
[h: oArgs = json.append(source,sLibAbilita)]
[h, foreach(sEvento,sEventTypes): eventUninstaller(source,sEvento,sLibAbilita)]