[h: sToken = arg(0)]
[h: sLabel = arg(1)]


[h: oToken = findToken(sToken)]
[h: oMemoria = getProperty("Cache",oToken)]

[assert(oToken != "","Token non trovato "+getMacroName())]

[h, if(json.type(oMemoria) != "OBJECT"): oMemoria = "{}"]
[h: return(0,json.get(oMemoria,sLabel))]

