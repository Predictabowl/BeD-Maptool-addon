[h: oArma = arg(0)]
[h: sStat = arg(1)]

[h, if(json.type(oArma) != "OBJECT"): return(0,0)]
[h, if(json.isEmpty(oArma)): return(0,0)]

[h: oAttributi = json.get(oArma,"attributiArma")]

[h, if(json.contains(oAttributi,sStat)), code:{
	[oStat = json.get(oAttributi,sStat)]
};{
	[oStat = 0]
}]

[h, if(!isNumber(oStat)): oStat = 0]

[h: return(0,oStat)]

