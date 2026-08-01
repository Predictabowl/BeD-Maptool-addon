[h, if(argCount()>1), code:{
		[target = arg(0)]
		[event = arg(1)]
		[name = arg(2)]
		[if(argCount()>3): macroName = arg(3); macroName = ""]
		[if(argCount()>4): macroParam = arg(4); macroParam = ""]
};{
	[macro.args = arg(0)]
	[if(json.type(macro.args) == "OBJECT"), code:{
		[name = json.get(macro.args,"name")]
		[event = json.get(macro.args,"event")]
		[target = json.get(macro.args,"token")]
		[macroName = json.get(macro.args,"macroName")]
		[macroParam = json.get(macro.args,"macroParam")]
	};{
		[target = json.get(macro.args,0)]
		[event = json.get(macro.args,1)]
		[name = json.get(macro.args,2)]
		[macroName = json.get(macro.args,3)]
		[macroParam = json.get(macro.args,4)]
	}]

}]

[if(macroName == ""): macroName = name]
[h, if(target==""): target = getSelected()]


[h: eventList = getProperty(event,target)]
[h, if(json.type(eventList) != "OBJECT"): eventList = "{}"]
[h: params= json.set("","macroParam",macroParam,"macroName",macroName)]
[h: eventList = json.set(eventList,name,params)]
[h: setProperty(event,eventList,target)]