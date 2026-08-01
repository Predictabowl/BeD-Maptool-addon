[h: combat = getProperty("InCombatCheck","MapVar")]
[h: source = currentToken()]

[h, if(getPropertyType() != "Basic"): combat = 0]

[r, if (combat==1), code:{
	[h: firstT = getInitiativeToken()]
	[h, if(source != firstT), code:{
		[tokens.denyMove = 1]
	};{
	}]

	[h: usedMov = getMoveCount()]
	[h: time = 3]
	[h, if(usedMov <= 0): time = 0; time = 0]

	[h: modMov = 0]
	[h: list = getProperty("On_Move",source)]
	[r, foreach(event,list), code:{
		[h: eventParam = json.get(list,event)]
		[h: macroName = json.get(eventParam,"macroName")]
		[h: macroParam = json.get(eventParam,"macroParam")]
		[h: macroParam = json.set(macroParam,"usedMov",usedMov)]
		[macro(macroName):macroParam]
		[h: modMov = modMov + macro.return]
	}]
	[h: usedMov = usedMov + modMov]

	[h: param = json.set("","source",source,"action","Movimento","time",time)]
	[macro("mobs/IniziaAzione@this"):param]
	[h: flag = macro.return]
	[r, if (flag != 0), code: {
		[h: param = json.append(source,0,0,0,usedMov)]
		[macro("core/payAction@this"): param]
		[h: flag = macro.return]
	};{}]
	
	[r, if (flag == 0), code: {
		[h: tokens.denyMove = 1]  
	};{
		[macro("mobs/FineAzione@this"): source]
	}]
};{
}]