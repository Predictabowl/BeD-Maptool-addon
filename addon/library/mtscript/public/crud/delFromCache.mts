[h: sToken = arg(0)]
[h: sLabel = arg(1)]

[h, if(startsWith(sToken,"Lib:")), code:{
	[oToken = sToken]
	[oMemoria = getLibProperty("Cache",sToken)]
};{
	[oMemoria = getProperty("Cache",oToken)]
}]

[assert(oToken != "","Token non trovato "+getMacroName())]

[h, if(json.type(oMemoria) != "OBJECT"): oMemoria = "{}"]
[h: oMemoria = json.remove(oMemoria,sLabel)]

[h, if(startsWith(sToken,"Lib:")), code:{
	[setLibProperty("Cache",oMemoria,sToken)]
};{
	[setProperty("Cache",oMemoria,oToken)]
}]
