[h: source = macro.args]

[h: switchToken(source)]
[h: sNomeVar = "TipoDemoneDaEvocare"]

[h: sTipoD = getStrProp(Lista_Dati,sNomeVar)]]

[h, if(sTipoD == ""), code:{
	[bCheck = input("sTipoD|Demone,Diavolo|Scegli la tua specializzazione|RADIO|value=string")]
	[assert(bCheck == 1,"Operazione Annullata")]
	[sTipoD = upper(sTipoD)]
	[Lista_Dati = setStrProp(Lista_Dati,sNomeVar,sTipoD)]
}]

[h: macro.return = sTipoD]