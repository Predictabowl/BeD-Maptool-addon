[h: sToken = arg(0)]
[h: sLabel = arg(1)]

[h, if(startsWith(sToken,"Lib:")), code:{
	[oToken = sToken]
	[oMemoria = getLibProperty("Json_mem",sToken)]
};{
	[oToken = findToken(sToken)]
	[oMemoria = getProperty("Json_mem",oToken)]
}]

[assert(oToken != "","Token non trovato "+getMacroName())]

[h, if(json.type(oMemoria) != "OBJECT"): oMemoria = "{}"]
[h: return(0,json.get(oMemoria,sLabel))]

