[macro("gui/setGregario@this"): getSelected()]
[h, if(macro.return == 0), code:{
	[broadcast("Tale creatura non pu&ograve; essere il tuo gregario",getPlayerName())]
};{
	[h: nome = getName(getSelected())]
	[broadcast(strformat("<b>%{nome}</b> &egrave; adesso il tuo gregario"),getPlayerName())]
}]