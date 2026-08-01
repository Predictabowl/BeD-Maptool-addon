[h: oToken= macro.args]

[h, if(!isCombat()): return(0,"")]

[h, if(isAzioneInCorso(oToken)), code:{
	[broadcast("<span style='color:red'>Non puoi metterti in attesa, prima finisci o interrompi l'azione corrente</span>",getPlayerName())]
	[return(0,"")]
}]

[h: switchToken(oToken)]

[h: bHold = getInitiativeHold(oToken)]

[h, if(!bHold), code:{
	[setInitiativeHold(1, oToken)]
	[macro("utility/sortIniziativa@this"):0]
	[return(0,"")]
}]

[h, if(isIncapacitato(oToken)): return(0,"")]

[h: setInitiativeHold(0, oToken)]
[h: iInitiative = getInitiative(oToken)]
[h: iCurrentInitiative = getInitiative(getInitiativeToken())]
[h, if(iInitiative > iCurrentInitiative): setInitiative(iCurrentInitiative,oToken)]
[macro("utility/sortIniziativa@this"):0]
[macro.return = ""]