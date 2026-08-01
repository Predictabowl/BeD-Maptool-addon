[h: oToken = arg(0)]


[h: jDatiCap = getDaMemoria(oToken,"Dati-Capacita")]
[h, if(json.contains(jDatiCap,"Medicina")), code:{
	[jMedicina = json.get(jDatiCap,"Medicina")]
	[if(json.contains(jMedicina,"curaFeriteUsato")), code:{
		[jMedicina = json.remove(jMedicina,"curaFeriteUsato")]
		[jDatiCap = json.set(jDatiCap,"Medicina",jMedicina)]
		[setInMemoria(oToken,"Dati-Capacita",jDatiCap)]
	}]
}]
