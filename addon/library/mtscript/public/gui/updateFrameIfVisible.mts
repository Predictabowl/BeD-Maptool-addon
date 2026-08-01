[h: source = json.get(macro.args,0)]
[h: sFrame = json.get(macro.args,1)]
[h: macroName = json.get(macro.args,2)]

[h, if(isFrameVisible(sFrame) == 1), code:{
	[macro("gui/isAllowed@this"): source]
	[if(macro.return), code:{
		[macro(macroName): json.append(source,sFrame)]
	}]
}]