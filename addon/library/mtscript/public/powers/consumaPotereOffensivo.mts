[h: oToken = arg(0)]
[h, if(argCount()>1): bOpp = arg(1); bOpp = 0]

[h: oToken = findToken(oToken)]
[h, if(oToken == ""): oToken = currentToken()]

[macro("combat/toggleArmaUsata@this"):oToken]

[h, if(!isCombat()): return(0)]
[h: switchToken(oToken)]

[iNumOpp = getNumAttacchiRimasti(oToken,1)]
[h, if(bOpp && iNumOpp > 0), code:{
	[Att_Opp_Rimanenti = Att_Opp_Rimanenti -1]
};{
	[h: iPoteri = getNumPoteriOffensivi(oToken)]
	[if(iPoteri > 0), code:{
		[setProperty("Poteri_Offensivi_Rimasti",iPoteri-1,oToken)]
	};{
		[modAttAggCorrenti(-1,oToken)]
	}]

	[if(iPoteri == 1), code:{
		[macro("gui/delPoteriTipoCache@this"): json.append(oToken,"OFFENSIVO")]
	}]
}]


