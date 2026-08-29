[h: sToken = arg(0)]
[h: sLabel = arg(1)]

[h: oToken = findToken(sToken)]
[h: assert(oToken != "","Token non trovato "+getMacroName())]

[h: oMemoria = getProperty("Json_mem",oToken)]

[h, if(json.type(oMemoria) != "OBJECT"): oMemoria = "{}"]
[h: return(0,json.get(oMemoria,sLabel))]

