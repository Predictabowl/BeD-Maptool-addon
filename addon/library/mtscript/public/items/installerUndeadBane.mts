[h: oToken = arg(0)]
[h: sArma = arg(1)]
[h: oParGlobali = arg(2)]
[h, if(argCount()>3): sMode = upper(arg(3)); sMode = ""]

[h: sEventId = sArma + "-undeadBane"]


[h, if(sMode == "REMOVE" || sMode == 1), code:{
	[eventUninstaller(oToken, "On_Attack", sEventId)]
	[return(0,"")]
}]

[h: eventInstaller(oToken, "On_Attack", sEventId, "items/undeadBane@it.aldinucci.piero.bed.maptool.ruleset", oParGlobali)]
[h: macro.return = ""]