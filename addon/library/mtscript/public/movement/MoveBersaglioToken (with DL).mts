[macro("utility/isCombat@this"):0]
[h: combat = macro.return]
[h: bDeny = 0]


[h, if(bDeny ==0 && combat == 1), code:{
	[h: sToken = getName(currentToken())]
	[macro("powers/getBersaglioOwner@this"):sToken]
	[oProprietario = macro.return]
	[h: switchToken(oProprietario)]
	[iniToken = getInitiativeToken()]

	[if(json.isEmpty(Azione_Corrente) == 0), code:{
		[macro("powers/getSpellInCast@this"): oProprietario]
		[spellName = macro.return]
	};{
		[spellName = ""]
	}]
	
	[if(iniToken != oProprietario), code:{
		[broadcast("<span style='color:red'>Non puoi muovere il bersaglio durante la fase di Esecuzione di un'azione</span>",getPlayerName())]
		[flag = 0]
		[bDeny = 1]
	};{
		[flag = 1]
	}]

	[if(spellName != "" && flag == 1), code:{
		[macro("mobs/getLastTestDL@this"): json.set("","source",oProprietario,"spellName",spellName)]
		[bDL = macro.return]
	};{
		[bDL = 1]
	}]

	[h, if(flag == 1  && bDL ==0), code:{
		[broadcast("<span style='color:red'>Non puoi muovere il bersaglio (Tiro DL fallito)</span>",getPlayerName())]
		[bDeny = 1]
	}]
}]


[h: macro.return = bDeny]