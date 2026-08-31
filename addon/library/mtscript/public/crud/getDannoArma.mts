[h: source = arg(0)]
[h, if(argCount()>1): arma = arg(1); arma = ""]

[h, if (arma == ""), code:{
	[macro("combat/getArmaDaUsare@this"):source]
	[h: arma = macro.return]
}]

[h, if (arma == 2): sDannoArma = getProperty("Danno_Arma2",source); sDannoArma = getProperty("Danno_Arma1",source)]

[h: bDistanza = isStileDistanza(source)]
[h: oDannoAgg = getDaMemoria(source,"DANNOARMIAGGIUNTIVO")]
[h, foreach(oItem,oDannoAgg), code:{
	[oData = json.get(oDannoAgg,oItem)]
	[sFilter = json.get(oData,"filtro")]
	[if(sFilter == ""): sDannoArma =strformat("%{sDannoArma}+%s",json.get(oData,"danno"))]
	[if(sFilter == "MISCHIA" && !bDistanza): sDannoArma =strformat("%{sDannoArma}+%s",json.get(oData,"danno"))]
	[if(sFilter == "DISTANZA " && bDistanza): sDannoArma =strformat("%{sDannoArma}+%s",json.get(oData,"danno"))]
}]

[h: bFurtivo = isAttaccoFurtivo(source)]
[h, if(bFurtivo == 1), code:{
	[sDannoArma = strformat("%{sDannoArma}%+d",getProperty("Livello",source))]
}]

[h: sDannoMod = getStatModifier(source,"DannoArma")]
[h, if(sDannoMod != 0), code:{
	[if (isNumber(sDannoMod)):	sDannoArma = strformat("%{sDannoArma}+%d",sDannoMod); sDannoArma = strformat("%{sDannoArma}%{sDannoMod}")]
}]


[h: return(0, sDannoArma)]