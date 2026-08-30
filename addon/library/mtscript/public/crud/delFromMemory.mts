[h: sToken = arg(0)]
[h: sLabel = arg(1)]

[h: oMemoria = getProperty("Json_mem",sToken)]

[assert(sToken != "","Token non trovato "+getMacroName())]

[h, if(json.type(oMemoria) != "OBJECT"): oMemoria = "{}"]
[h: oMemoria = json.remove(oMemoria,sLabel)]

[h, if(startsWith(sToken,"Lib:")), code:{
	[setLibProperty("Json_mem",oMemoria,sToken)]
};{
	[setProperty("Json_mem",oMemoria,sToken)]
}]
