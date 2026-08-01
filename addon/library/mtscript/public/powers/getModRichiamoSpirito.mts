[h: oToken = arg(0)]
[h, if(argCount() > 1): sNome = arg(1); sNome = getSpiritoAttivo(oToken)]

[h: oSpirito = getSpirito(oToken,sNome)]
[h: iModDev = -1]
[h, if(!json.isEmpty(oSpirito)), code:{
	[iModDev = json.get(oSpirito,"devozione")]
	[if(!isNumber(iModDev)): iModDev = 5]
}]

[h: macro.return = iModDev]
