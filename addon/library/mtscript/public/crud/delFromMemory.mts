[h: sToken = arg(0)]
[h: sLabel = arg(1)]

[h: bIsLib = matches(sToken,"[^:]+:[^:]+")]

[h, if(bIsLib): 
	oMemoria = getLibProperty("Json_mem",sToken);
	oMemoria = getProperty("Json_mem",sToken)]

[assert(sToken != "","Token non trovato "+getMacroName())]

[h, if(json.type(oMemoria) != "OBJECT"): oMemoria = "{}"]
[h: oMemoria = json.remove(oMemoria,sLabel)]


[h, if(bIsLib):
	setLibProperty("Json_mem",oMemoria,sToken);
	setProperty("Json_mem",oMemoria,sToken)]
