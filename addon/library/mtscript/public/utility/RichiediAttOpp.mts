[h: source = macro.args]
[h: giocatore = getPlayerName()]
[h: target = listGet(getSelected(),0)]
[h: flag = 1]
[h, if(source ==""): flag = 0]
[h, if(target ==""): flag = 0]
[h, if(flag == 1), code:{
	[switchToken(source)]
	[Lista_Dati = setStrProp(Lista_Dati,"oppTarget",target)]
	[macro("utility/pushRichiesta@this"): json.append(giocatore,source,"OPPORTUNITA")]
	[h: broadcast("Richiesta Inoltrata: Attacco di opportunit&agrave; di "+getName(source)+" contro "+getName(target),giocatore)]
	[h: strGM = "<span style='color:#FF00FF;font-weight:bold;'> Richiesta Arrivata: </span>"+giocatore+" richiede un Attacco di Opportunit&agrave; di <b>"+getName(source)+"</b> contro "+getName(target)]

	[h: broadcast(strGM,"gm")]
};{
	[h: broadcast("Per effetturare la richiesta devi selezionare un singolo bersaglio",giocatore)]
}]