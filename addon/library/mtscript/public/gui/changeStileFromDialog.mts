[h: oToken = arg(0)]
[h: sStile = arg(1)]

[macro("combat/changeStile@this"): json.append(oToken,sStile)]
[h, if(macro.return), code:{
	[macro("gui/dialogCambioArma@this"): oToken]
}]