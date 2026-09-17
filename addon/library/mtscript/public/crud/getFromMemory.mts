[h: sToken = arg(0)]
[h: sLabel = arg(1)]

[h, if(matches(sToken,"[^:]+:[^:]+")): oMemoria = getLibProperty("Json_mem",sToken); oMemoria = getProperty("Json_mem",sToken)]

[h, if(json.type(oMemoria) != "OBJECT"): oMemoria = "{}"]
[h: return(0,json.get(oMemoria,sLabel))]

