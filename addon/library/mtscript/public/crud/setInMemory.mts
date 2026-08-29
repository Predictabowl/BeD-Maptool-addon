[h: sToken = arg(0)]
[h: sLabel = arg(1)]
[h: oObject = arg(2)]

[h: oToken = findToken(sToken)]
[h: assert(oToken != "","Token non trovato "+getMacroName())]

[h: oMemoria = getProperty("Json_mem",oToken)]

[h, if(json.type(oMemoria) != "OBJECT"): oMemoria = "{}"]
[h: oMemoria = json.set(oMemoria,sLabel,oObject)]

[h, if(startsWith(sToken,"Lib:")), code:{
	[setLibProperty("Json_mem",oMemoria,sToken)]
};{
	[setProperty("Json_mem",oMemoria,oToken)]
}]
