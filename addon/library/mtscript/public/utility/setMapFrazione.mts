[h: iIni = macro.args]

[h: oMapVar = findToken("MapVar")]
[h, if(oMapVar != ""), code:{
	[setProperty("Frazione",iIni,oMapVar)]
	[macro.return = 1]
};{
	[broadcast("ERRORE MAPPA: Token MapVar Assente")]
	[macro.return = 0]
}]