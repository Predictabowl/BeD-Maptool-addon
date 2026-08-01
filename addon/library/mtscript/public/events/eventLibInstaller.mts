[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: name = json.get(macro.args,"name")]
	[h: event = json.get(macro.args,"event")]
	[h: target = json.get(macro.args,"token")]
	[h: macroName = json.get(macro.args,"macroName")]
	[if(macroName == ""): macroName = name]
	[h: macroParam = json.get(macro.args,"macroParam")]
};{
	[h: target = json.get(macro.args,0)]
	[h: event = json.get(macro.args,1)]
	[h: name = json.get(macro.args,2)]
	[h: macroName = json.get(macro.args,3)]
	[h: macroParam = json.get(macro.args,4)]
}]

[h, if(target==""): target = getSelected()]


[h: eventList = getLibProperty(event,target)]
[h, if(json.type(eventList) != "OBJECT"): eventList = "{}"]
[h: params= json.set("","macroParam",macroParam,"macroName",macroName)]
[h: eventList = json.set(eventList,name,params)]
[h: setLibProperty(event,eventList,target)]