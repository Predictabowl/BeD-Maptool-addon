[h, if(argCount()>1), code:{
		[target = arg(0)]
		[event = arg(1)]
		[name = arg(2)]
};{
	[macro.args = arg(0)]
	[if(json.type(macro.args) == "OBJECT"), code:{
		[name = json.get(macro.args,"name")]
		[event = json.get(macro.args,"event")]
		[target = json.get(macro.args,"token")]
	};{
		[target = json.get(macro.args,0)]
		[event = json.get(macro.args,1)]
		[name = json.get(macro.args,2)]
	}]
}]

[h, if(target==""): target = getSelected()]

[h: eventList = getProperty(event,target)]
[h, if(json.type(eventList) != "OBJECT"): eventList = "{}"]
[h: eventList = json.remove(eventList,name)]
[h: setProperty(event,eventList,target)]