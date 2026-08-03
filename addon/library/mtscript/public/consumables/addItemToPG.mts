[h: oToken = macro.args]
[h: oToken = getSelected()]

[h: bCheck = input("sTipo|POZIONE,INFUSO,RUNA|Tipo Oggetto|LIST|value=string")]
[h: assert(bCheck,"Abortito")]

[h: oGroup = getLibMemoria(getMacroLocation(),sTipo)]

[h: oList = json.fields(oGroup)]

[h: inNome = strformat("sNome|%{oList}| Oggetto|LIST|value=string")]
[h: inLiv = "iLiv|1|Livello"]
[h: bCheck = input(inNome,inLiv)]
[h: assert(bCheck,"Abortito")]
[h:oOggetto = json.set("","nomeOggetto",sNome,"Livello",iLiv,"tipo",sTipo)]

[h, if(sTipo == "RUNA"), code:{
	[inCariche = "iCariche|1|Numero cariche"]
	[macro("mobs/getListaArmiInstalled@this"):oToken]
	[lArmi = macro.return]
	[inArma = strformat("sArma|%{lArmi}|Arma su cui installare|LIST|value=string")]
	[inSlot = "iSlot|1,2|Slot Runa|LIST"]
	[bCheck = input(inCariche,inArma,inSlot)]
	[assert(bCheck,"Abortito")]
	[iSlot = iSlot +1]
	[oOggetto = json.set(oOggetto,"cariche",iCariche)]
	[setRunaToArma(oToken,sArma,oOggetto,iSlot)]
};{
	[addToSlotVeloce(oToken,oOggetto)]	
}]




