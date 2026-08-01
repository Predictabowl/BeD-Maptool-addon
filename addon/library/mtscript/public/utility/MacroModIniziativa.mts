[h: target = json.get(macro.args,"target")]
[h: param = json.get(macro.args,"parametri")]
[h: value = json.get(param,"value")]
[h: remove = json.get(macro.args,"remove")]

[h:broadcast(strformat("DEPRECATED: %s@%s",getMacroName(),getMacroLocation()))]

[h: combat = getProperty("InCombatCheck","MapVar")]

[r, if (combat==1 && remove != 1), code:{
	[h: time = value]
	[h: switchToken(target)]
	[h: temp = getInitiative()]
	[h: finish = temp+ time]
	[h: setInitiative(finish)]
	[macro("utility/sortIniziativa@this"):0]
};{
	[r: "Non e possibile modificare l'iniziativa fuori combattimento"]
}]
