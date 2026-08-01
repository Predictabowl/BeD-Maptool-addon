[h: oToken = arg(0)]
[macro("gui/getOverlayData@this"): "token"]
[h: oOpenToken = findToken(macro.return)]

[h, if(!isOverlayVisible("UIOverlay")): return(0,"")]

[h, if(oOpenToken == ""), code:{
	[macro("gui/UIOverlay@this"): oToken]
	[macro("gui/updateFrameIfVisible@this"): json.append(oToken,"Poteri","gui/listaPoteriMem@this")]
};{
	[macro("gui/UIOverlay@this"): oOpenToken]
	[macro("gui/updateFrameIfVisible@this"): json.append(oOpenToken,"Poteri","gui/listaPoteriMem@this")]
}]
