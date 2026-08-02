[h: oToken = arg(0)]
[h: sArma = arg(1)]
[h, if(argCount()>2): bRemove = arg(2); bRemove = 0]

[macro("mobs/getArma@this"): json.append(oToken,sArma)]
[h: oArma = macro.return]
[h: oInstallers = json.get(oArma,"installers")]

[h: allIncant = getLibProperty("incantamenti_Json", getMacroLocation())]
[h, foreach(oInstaller, oInstallers), code:{
	[oIncant = json.get(allIncant, oInstaller)]
	[sMacro = json.get(oIncant,"installerMacro")]
	[jParam = json.get(oIncant,"parametriGlobali")]
	[macro(sMacro): json.append(oToken,sArma,jParam,bRemove)]
}]

[h: oInstallers2 = json.get(oArma,"specialInstallers")]
[h, foreach(oInstaller, oInstallers2), code:{
	[oIncant = json.get(oInstallers2, oInstaller)]
	[sMacro = json.get(oIncant,"installerMacro")]
	[jParam = json.get(oIncant,"parametriGlobali")]
	[macro(sMacro): json.append(oToken,sArma,jParam,bRemove)]
}]