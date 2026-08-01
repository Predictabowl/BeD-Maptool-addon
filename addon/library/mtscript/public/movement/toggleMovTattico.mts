[h: oToken = arg(0)]

[h, if(isAzioneInCorso(oToken)), code:{
	[broadcast("<span style='color:red;'>Non puoi cambiare il movimento tattico mentre stai eseguendo un'azione</span>", getPlayerName())]
};{
	
	[setState("Movimento Tattico", math.mod(isMovTattico(oToken)+1,2), oToken)]
}]


