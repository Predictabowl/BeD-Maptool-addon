[h: oToken = macro.args]

[h: sSpirito = getSpiritoAttivo(oToken)]
[h, if(sSpirito != ""), code:{
	[h: lPoteri = getPoteriSpirito(oToken,sSpirito)]
	[foreach(sPotere,lPoteri), code:{
		[macro("powers/delMantenimento@this"):json.append(oToken,sPotere)]
	}]
	[delPoteriMem(oToken,lPoteri)]
	[macro("powers/setSpiritoAttivo@this"):json.append(oToken,"")]
}]
