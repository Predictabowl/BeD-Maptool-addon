[macro("gui/getGregario@this"): getImpersonated()]
[h: token = macro.return]
[h, if(token != ""), code:{
	[macro("gui/ApriTuttoInfo@this"):token]
};{
	[broadcast("Non hai alcun gregario",getPlayerName())]
}]