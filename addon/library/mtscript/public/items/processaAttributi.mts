[h: oToken = arg(0)]
[h: oOggetto = arg(1)]
[h, if(argCount()>2): bAdd = arg(2); bAdd = 1]

[h, if(bAdd != 1): bAdd = -1]

[h: oAttributi = json.get(oOggetto,"attributi")]

[h, foreach(sAttributo, oAttributi), code:{
	[iValue = json.get(oAttributi,sAttributo)*bAdd]
	[if(esisteProprieta(sAttributo)), code:{
		[iProp = getProperty(sAttributo,oToken)]
		[iProp = iProp + iValue]
		[setProperty(sAttributo,iProp,oToken)]
	};{
		[macro("items/processComplexAttribute@this"): json.append(oToken, oOggetto, sAttributo, iValue) ]
	}]
}]

