[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: macroName = json.get(macro.args,"macroName")]
	[h: event = json.get(macro.args,"event")]
	[h: target = json.get(macro.args,"token")]
};{
	[h: target = json.get(macro.args,0)]
	[h: event = json.get(macro.args,1)]
	[h: macroName = json.get(macro.args,2)]
}]

[h: return = ""]
[h: eventList = getProperty(event,target)]
[h, if(json.type(eventList) != "OBJECT"): eventList = "{}"]
[h, foreach(item,eventList), code:{
	[oData = json.get(eventList,item)]
	[sEventMacro = json.get(oData,"macroName")]
	[if(sEventMacro == macroName): return = item]
}]

[h: macro.return = return]