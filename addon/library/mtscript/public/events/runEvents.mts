[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
	[h: target = json.get(macro.args,"target")]
	[h: sEvent = json.get(macro.args,"event")]
	[h: eventParam = json.get(macro.args,"eventParam")]

};{
	[h: source = json.get(macro.args,0)]
	[h: target = json.get(macro.args,1)]
	[h: sEvent = json.get(macro.args,2)]
	[h: eventParam = json.get(macro.args,3)]
}]

[h: eventTag = "msgEvent"+string(sEvent)]

[h: list = getProperty(sEvent,source)]
[h, foreach(itemEvent,list), code:{
	[h: eventData = json.get(list,itemEvent)]
	[h: macroName = json.get(eventData,"macroName")]
	[h: macroParam = json.get(eventData,"macroParam")]
	[h: macroParam = json.set(macroParam,"source",source,"target",target,"eventParam",eventParam)]
	[macro(macroName):macroParam]	
	[appendMessaggio(source,eventTag,macro.return)]
}]