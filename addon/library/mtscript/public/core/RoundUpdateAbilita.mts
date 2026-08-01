[h: source = macro.args]

[macro("core/DisattivaTipoAbilita@this"): json.append(source,"ATTIVA")]
[macro("core/DisattivaTipoAbilita@this"): json.append(source,"ASECONDARIA")]

[macro("core/getAbilitaInUso@this"): json.append(source,"PECULIARE")]
[h: pecList = macro.return]
[h: switchToken(source)]
[h, foreach(item, pecList), code:{
	[sDurata = item+"Durata"]
	[iRound = getStrProp(Lista_Dati,sDurata)]
	[if(iRound == ""): iRound = 1; iRound = iRound+1]
	[macro("core/getDurataAbilita@this"): json.append(source,item)]
	[iDurata = macro.return]
	[if(iDurata > iRound), code:{
		[Lista_Dati = setStrProp(Lista_Dati,sDurata,iRound)]
		[return = 1]
	};{
		[macro("core/DisattivaAbilita@this"): json.append(source,item,1)]
		[Lista_Dati = deleteStrProp(Lista_Dati,sDurata)]
	}]
}]
[macro("updateFrameAzioni@Lib:Scheda"): source]