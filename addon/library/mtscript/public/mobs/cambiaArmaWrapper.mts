[h: oToken = macro.args]
[h: broadcast(strformat("DEPRECATED: %s@%s",getMacroName(),getMacroLocation()))]

[macro("combat/getStile@this"): oToken]
[h: sStileOld = macro.return]

[h: switchToken(oToken)]
[h: sArma1Old = listGet(Armi_Equipaggiate,0)]
[h: sArma2Old = listGet(Armi_Equipaggiate,1)]
[h: sArmaLOld = listGet(Armi_Equipaggiate,2)]
[h: sScudoOld = listGet(Scudo_Equipaggiato,0)]

[h: sArma1 =""]
[h: sArma2 =""]
[h: sScudo =""]

[macro("mobs/getListaArmiInstalled@this"): json.set("","token",oToken,"tipoEscluso","Lancio")]
[h: sListaArmi = macro.return]

[macro("mobs/getListaArmiInstalled@this"): json.set("","token",oToken,"tipoArma","Lancio")]
[h: sListaArmiLancio = macro.return]
[h, if(sListaArmiLancio==""): sListaArmiLancio = "-"]

[macro("mobs/getListaScudiInstalled@this"): oToken]
[h: sListaScudi = macro.return]

[h: iIndex = listFind(sListaArmi,sArma1Old)]
[h: inputArma1 = strformat("sArma1|%{sListaArmi}|Arma Primaria|LIST|VALUE=STRING SELECT=%{iIndex}")]
[h: inputArmaL = strformat("sArmaL|%{sListaArmiLancio}|Arma da Lancio|list|VALUE=STRING SELECT=%{iIndex}")]

[h: bFlag = 1]
[macro("combat/isStile2A@this"): oToken]
[h, if(macro.return), code:{
	[iIndex = listFind(sListaArmi,sArma2Old)]
	[inputArma2 = strformat("sArma2|%{sListaArmi}|Arma Secondaria|LIST|VALUE=STRING SELECT=%{iIndex}")]
	[bCheck = input(inputArma1,inputArma2,inputArmaL)]
	[bFlag = 0]
}]

[macro("combat/isStileAS@this"): oToken]
[h, if(macro.return), code:{
	[iIndex = listFind(sListaScudi,sScudoOld)]
	[inputArma2 = strformat("sScudo|%{sListaScudi}|Scudo|LIST|VALUE=STRING SELECT=%{iIndex}")]
	[bCheck = input(inputArma1,inputArma2,inputArmaL)]
	[bFlag = 0]
}]

[h, if(bFlag) , code:{
	[bCheck = input(inputArma1,inputArmaL)]
	[sArma2 = ""]
}]

[h: oReturn = "{}"]

[h, if(bCheck), code:{
	[if(sArma1 == sArma1Old): sArma1 = ""]
	[if(sArma2 == sArma2Old): sArma2 = ""]
	[if(sArmaL != sArmaLOld): Armi_Equipaggiate = listReplace(Armi_Equipaggiate,2,sArmaL)]	
	[if(sScudo == sScudoOld): sScudo = ""]
	[if(sArma1 != "" || sArma2 != "" || sScudo != ""), code:{
		[oReturn = json.set("","source",oToken,"nomeArmaPrimaria",sArma1,"nomeArmaSecondaria",sArma2,"nomeScudo",sScudo)]
	}]
}]

[h: macro.return = oReturn]
