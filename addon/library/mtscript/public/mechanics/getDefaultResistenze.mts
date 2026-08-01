[h: oToken = arg(0)]

[h: oData = getDaMemoria(oToken,"RESISTENZE_BASE")]
[h, if(json.isEmpty(oData)), code:{
	[macro("mechanics/setResistenzeCorrentiAsDefault@this"): oToken]
	[oData = getDaMemoria(oToken,"RESISTENZE_BASE")]	
}]

[h: macro.return = oData]
