[h: source = json.get(macro.args,"source")]
[h: oPozzo = json.get(macro.args,"interattivo")]


[h: oParametri = json.set("","pozzo",oPozzo)]
[h: nomeDec = getName(oPozzo)]
[h: time = 7]

<!-- Solo per Alleati -->
[h, if(isHostile(source, oPozzo)), code:{
	[sMsg= strformat("%s non può utilizzare %s",getName(source),nomeDec)]
	[broadcast(sMsg,getPlayerName())]
	[return(0, "")]
}]

<!-- Da controllare la distanza dal pozzo -->
[h: iRange = 1]
[h: iDistance = getDistance(source,0,oPozzo)]
[h, if(iDistance <= iRange), code:{
	
	[setMessaggio(source,"iniziaAzioneMsg",strformat("%s Inizia ad attivare %s.",getName(source),nomeDec))]

	[h: param = json.set("","target",source,"source",source,"macro",buildSpellMacroName("PozzoDelleAnime","effettoCura"),"macroParam",oParametri,"tipo","Interazione","opp",0,"time",time,"action","Attiva "+nomeDec)]
	[macro("mobs/IniziaAzione@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
};{
	[h: sMsg= strformat("%s &egrave lontano per attivare %s",getName(source),nomeDec)]
	[h: broadcast(sMsg,getPlayerName())]
}]

[h: macro.return = ""]