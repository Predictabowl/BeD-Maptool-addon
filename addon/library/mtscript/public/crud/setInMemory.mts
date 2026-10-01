[h: sToken = arg(0)]
[h: sLabel = arg(1)]
[h: oObject = arg(2)]


[h, if(matches(sToken,"[^:]+:[^:]+")), code:{
	[bLib = 1]
	[oMemoria = getLibProperty("Json_mem",sToken)]
};{
	[bLib = 0]
	[oMemoria = getProperty("Json_mem",sToken)]
}]

[h, if(json.type(oMemoria) != "OBJECT"): oMemoria = "{}"]
[h: oMemoria = json.set(oMemoria,sLabel,oObject)]

[h, if(bLib == 1), code:{
	[setLibProperty("Json_mem",oMemoria,sToken)]
};{
	[setProperty("Json_mem",oMemoria,sToken)]
}]
