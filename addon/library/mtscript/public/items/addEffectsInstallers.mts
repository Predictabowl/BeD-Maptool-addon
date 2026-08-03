<!-- DEPRECATED - must be removed or updated to static data ->
[h: sId = "PUGNALE ASSIDERANTE-1"]
[h: sTable = "Armi_Json"]

<!-- L'effetto in se userà il parametro datiCustom della copia locale sul token per prendere i parametri locali-->
[h: oInstallers = ""]
[h: oInstaller = json.set("","installerMacro","items/installerArmaElementale@this","parametriGlobali","")]
[h: oInstallers = json.append(oInstallers,oInstaller)]

[h: oTable = getLibProperty(sTable,getMacroLocation())]
[h: oOggetto = json.get(oTable,sId)]
[h: oOggetto = json.set(oOggetto,"installers",oInstallers)]
[h: oTable = json.set(oTable,sId,oOggetto)]
[h: setLibProperty(sTable,oTable, getMacroLocation())]