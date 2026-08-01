[h: bActive = arg(0)]

[h: tMapVar = findToken("MapVar")]
[h: sTag = "copertureMappaAttive"]
[h: switchToken(tMapVar)]
[h, if(bActive == 0), code:{
	[setInMemoria(tMapVar, sTag, 0)]
};{
	[delDaMemoria(tMapVar, sTag)]
}]
