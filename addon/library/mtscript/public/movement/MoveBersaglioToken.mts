[macro("utility/isCombat@this"):0]
[h: combat = macro.return]
[h: bDeny = 0]


[h, if(bDeny ==0 && combat == 1), code:{
	[h: sToken = getName(currentToken())]
	[macro("powers/getBersaglioOwner@this"):sToken]
	[oProprietario = macro.return]
	[h: switchToken(oProprietario)]
	[if(json.isEmpty(Azione_Corrente)): return(0,0)]

	[macro("powers/canChangeTarget@this"): oProprietario]
	[h, if(macro.return): return(0,0)]
	
	[broadcast("<span style='color:red'>Non puoi muovere il bersaglio dopo aver dichiarato un'azione</span>",getPlayerName())]
	[h: bDeny = 1]
}]


[h: macro.return = bDeny]