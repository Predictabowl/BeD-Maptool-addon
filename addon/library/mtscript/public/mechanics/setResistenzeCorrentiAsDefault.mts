[h: oToken = arg(0)]

[h: oResList = getListaResistenze()]

[h: oData = "{}"]
[h, foreach(sRes,oResList), code:{
	[vRes = getProperty(sRes,oToken)]
	[oData = json.set(oData,sRes,vRes)]
}]

[h: setInMemoria(oToken,"RESISTENZE_BASE",oData)]

