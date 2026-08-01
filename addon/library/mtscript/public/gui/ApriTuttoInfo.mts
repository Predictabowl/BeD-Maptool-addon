[h: target = findToken(arg(0))]
[h, if(target == ""): target = getImpersonated(); impersonate(target)]

[h, if(json.length(macro.args)>1): sFrameID = json.get(macro.args,1); sFrameID = ""]
[h: oParam = json.append(target,sFrameID)]

[macro("gui/isAllowed@this"): target]
[h, if(macro.return), code:{
	[closeOverlay("UIOverlay")]
	[macro("gui/UIOverlay@this"): target]
	[macro("gui/listaPoteriMem@this"):oParam]
	[closeDialog("DialogAbilita")]
}]