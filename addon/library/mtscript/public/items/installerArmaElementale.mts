[h: oToken = arg(0)]
[h: sArma = arg(1)]
[h: oParGlobali = arg(2)]
[h, if(argCount()>3): sMode = upper(arg(3)); sMode = ""]

[h: sEvent = "On_Attack"]

[h: sNomeInc = strformat("UndeadBane-%{sArma}")]

[h, if(sMode == "REMOVE" || sMode == 1), code:{
		[eventUninstaller(oToken,sEvent,sNomeInc)]
		[return(0,"")]
}]

[macro("mobs/getArma@this"): json.append(oToken,sArma)]
[h: oArma = macro.return]
[h: oDatiCustom = json.get(oArma,"datiCustom")]

[h, if(sMode == "INITIALIZE" || sMode == 2), code:{
	[return(0,"")]
}]

[h: oLocalParam = json.get(oDatiCustom,"armaElementaleParam")]
[sNome = json.get(oLocalParam,"nomeInc")]
[sElemento = json.get(oLocalParam,"elemento")]
[iLL = json.get(oLocalParam,"LL")]
[sDmgBase =	json.get(oLocalParam,"dannoBase")]
[sDmgLP = json.get(oLocalParam,"dannoLP")]

[oLocalParam = json.set(oLocalParam,"idArma",sArma)]
[eventInstaller(oToken,sEvent,sNomeInc,"items/eventDannoElementale@lib:it.aldinucci.piero.bed.maptool.ruleset",oLocalParam)]


