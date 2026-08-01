[h: broadcast(strformat("DEPRECATED: %s@%s", getMacroName(), getMacroLocation()))]
[h: target = json.get(macro.args,"target")]
[h: mutex = json.get(macro.args,"mutex")]
[h: originalList = getProperty("Lista_Effetti",target)]

[h: flag = 0]
[h: result = ""]
[h, if(mutex != ""), code:{
	[h, foreach(effect,originalList), code:{
		[h: subList = json.get(originalList,effect)]
		[h: mutex2 = json.get(subList,"mutex")]
		[h, if(mutex==mutex2): result = effect]
	}]
}]
[h: macro.return = result]
