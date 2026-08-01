[h: oToken = arg(0)]
[h: sNomeSpi = arg(1)]

[h: oData = getSpirito(oToken,sNomeSpi)]
[h: lPoteri=""]
[h, if(!json.isEmpty(oData)), code:{
	[lPoteri = json.get(oData,"ListaPoteri")]
}]

[h: macro.return = lPoteri]
