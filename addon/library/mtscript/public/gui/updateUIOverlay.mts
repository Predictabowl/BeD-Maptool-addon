[h: oToken = arg(0)]

[h, if(!isOverlayVisible("UIOverlay")): return(0,"")]

[h, macro("gui/getOverlayData@this"): "token"]
[h, if(oToken == ""): oToken = macro.return]
[h, if(macro.return != oToken): return(0,"")]

[h, macro("gui/UIOverlay@this"): oToken]