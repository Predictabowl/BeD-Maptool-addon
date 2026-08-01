[macro("getFirstToAct@"+getMacroLocation()):0]	

[h: combat = getProperty("InCombatCheck","MapVar")]

[r, if (combat==1), code:{
	[macro("getFirstToAct@"+getMacroLocation()):0]	
	[h: target=macro.return]
	[macro("utility/ModificaIniziativa@this"):json.set("","target",target)]
};{
	[r: "Non e possibile modificare l'iniziativa fuori combattimento"]
}]
