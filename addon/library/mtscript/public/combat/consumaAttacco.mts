[h: oToken = arg(0)]
[h, if(argCount()>1): bOpp = arg(1); bOpp = 0]

[h: oToken = findToken(oToken)]
[h, if(oToken == ""): oToken = currentToken()]

[macro("utility/isCombat@this"):0]
[h, if(macro.return == 0): return(1)]

[h: switchToken(oToken)]

[macro("combat/hasAttacks@this"): json.set("","source",oToken,"onlyBasic",1,"opportunita",bOpp)]
[h: bAtt = macro.return]

[h, if(bAtt), code:{
	[iNumOpp = getNumAttacchiRimasti(oToken,1)]
	[if(bOpp && iNumOpp > 0): Att_Opp_Rimanenti = Att_Opp_Rimanenti -1; modAttAggCorrenti(-1,oToken)]
};{
	[iValue = getProperty("Poteri_Offensivi_Rimasti",oToken)]
	[if(iValue > 0): setProperty("Poteri_Offensivi_Rimasti",iValue-1,oToken)]
}]

[macro("combat/toggleArmaUsata@this"):oToken]
