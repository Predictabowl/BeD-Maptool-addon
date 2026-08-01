[h: oToken = arg(0)]

[h: sTag = "VisteDisponibili"]
[h: sVista = getDaMemoria(oToken,sTag)]
[h, if(sVista == ""), code:{
	[sVista = json.append("",getSightType(oToken),"Personale")]
	[setInMemoria(oToken,sTag,sVista)]
}]

[h: macro.return = sVista]