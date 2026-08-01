[h: source = macro.args]

[macro("mobs/getDifendersi@this"): source]
[h, if(macro.return == 1), code:{
	[macro("mobs/delDifendersi@this"): source]
	[broadcast(getName(source)+": Adesso Difendersi &egrave; disattivato",getPlayerName())]
};{
	[macro("mobs/setDifendersi@this"): source]
	[broadcast(getName(source)+": Difendersi, la prossima azione non genera attacchi di opportunit&agrave;",getPlayerName())]
}]