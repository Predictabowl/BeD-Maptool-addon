
[h: oMapVar = findToken("MapVar")]
[h, if(oMapVar != ""), code:{
	[iFraz = getProperty("Frazione",oMapVar)]
	[if (!isNumber(iFraz)): iFraz = 1]
};{
	[broadcast("ERRORE MAPPA: Token MapVar Assente")]
	[iFraz = -1]
}]

[h: macro.return = iFraz]