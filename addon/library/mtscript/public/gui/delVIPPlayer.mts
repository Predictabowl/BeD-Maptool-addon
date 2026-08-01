[h: idGM = isGM()]
[h, if(idGM == 1), code:{
	[listV = getLibProperty("VIP_List",getMacroLocation())]
	[nIndex = input("nomeP|"+listV+"|Nome giocatore da eliminare|LIST|SELECT=0 VALUE=STRING")]
	[listV=listDelete(listV,nIndex)]
	[setLibProperty("VIP_List",listV,getMacroLocation())]
}]