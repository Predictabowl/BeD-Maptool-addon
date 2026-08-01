[h: oToken = macro.args]

[h: switchToken(oToken)]

[h: iNumArmi = listCount(Armi_Equipaggiate)]

[h, if(iNumArmi <1), code:{
	[Armi_Equipaggiate = "Pugno,Pugno,-"]
	[broadcast(strformat("Errore di integrit&agrave; dati CRITICA rilevata: nome delle armi equipaggiate resettato su %s",getName(oToken)))]
	[iNumArmi = 3]
}]

[h, if(iNumArmi <2), code:{
	[Armi_Equipaggiate = listAppend(Armi_Equipaggiate,"Pugno,-")]
	[broadcast(strformat("Errore di integrit&agrave; dati CRITICA rilevata: nome dell'arma secondaria equipaggiata resettato su %s",getName(oToken)))]
	[iNumArmi = 3]
}]

[h, if(iNumArmi <3), code:{
	[Armi_Equipaggiate = listAppend(Armi_Equipaggiate,"-")]
}]


[h, if(listCount(Danno_Arma1) < 1), code:{
	[Danno_Arma1 = "1d4"]
	[broadcast(strformat("Errore dati rilevato: Danno arma primaria Mancante su %s",getName(oToken)))]
}]

[h, if(listCount(Danno_Arma2) < 1), code:{
	[Danno_Arma2 = "1d4"]
	[broadcast(strformat("Errore dati rilevato: Danno arma secondaria mancante su %s",getName(oToken)))]
}]