[macro("gui/getGregario@this"): getImpersonated()]
[h, if(macro.return != ""), code:{
	[h: token = macro.return]
	[macro("mobs/RisolviAzione@this"): token]
};{
	[broadcast("Non hai alcun gregario",getPlayerName())]
}]