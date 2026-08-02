[h: oOggetto = arg(0)]

[h, if(json.contains(oOggetto,"tipoArma")), code:{
	[sTipo = upper(json.get(oOggetto,"tipoArma"))]
	[if(sTipo == "TIRO"): return (0,"armaDistanza")]
	[if(sTipo == "LANCIO"): return (0,"armaLancio")]
	[return(0, "arma")]
}]
[h, if(json.contains(oOggetto,"categoria")): return(0, json.get(oOggetto,"categoria"))]

[h: macro.return = ""]
