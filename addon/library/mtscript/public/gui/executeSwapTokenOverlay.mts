[h: sSwapIn = findToken(json.get(macro.args,"SwapToken"))]

[h, if(sSwapIn == ""), code:{
	[macro("gui/getOverlayData@this"): "token"]
	[sSwapIn = findToken(macro.return)]
}]
[macro("gui/UIOverlay@this"): sSwapIn]
[macro("gui/updateFrameIfVisible@this"): json.append(sSwapIn,"Poteri","gui/listaPoteriMem@this")]	
[macro("gui/updateFrameIfVisible@this"): json.append(sSwapIn,"PannelloAbilita","gui/dialogAbilitaClasse@this")]	