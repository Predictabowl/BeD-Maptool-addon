[h: sToken = arg(0)]
[h: sLabel = arg(1)]
[h: oObject = arg(2)]

[h: sTag = "Round_Mem"]

[h, if(startsWith(sToken,"Lib:")), code:{
	[oToken = sToken]
	[oMemoria = getLibProperty(sTag,sToken)]
};{
	[oToken = findToken(sToken)]
	[oMemoria = getProperty(sTag,oToken)]
}]

[assert(oToken != "","Token non trovato "+getMacroName())]

[h, if(json.type(oMemoria) != "OBJECT"): oMemoria = "{}"]
[h: oMemoria = json.set(oMemoria,sLabel,oObject)]

[h, if(startsWith(sToken,"Lib:")), code:{
	[setLibProperty(sTag,oMemoria,sToken)]
};{
	[setProperty(sTag,oMemoria,oToken)]
}]
