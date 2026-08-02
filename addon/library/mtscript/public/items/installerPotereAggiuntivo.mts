[h: oToken = arg(0)]
[h: sArma = arg(1)]
[h: oParGlobali = arg(2)]
[h, if(argCount()>3): sMode = upper(arg(3)); sMode = ""]

[h, if(sMode == "INITIALIZE" || sMode == 2): return(0,"")]

[h, if(sMode == "REMOVE" || sMode == 1), code:{
	[delPoteriMem(oToken,oParGlobali)]
	[macro("gui/updatePoteri@this"):""]
	[return(0,"")]
}]

[h: addPoteriMem(oToken,oParGlobali)]
[h, macro("gui/updatePoteri@this"):""]
[h: macro.return = ""]

