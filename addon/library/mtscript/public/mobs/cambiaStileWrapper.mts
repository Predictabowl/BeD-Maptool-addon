[h: oToken = macro.args]

[h, if(getOverride(oToken,"StileBloccato")), code:{
	[sMsg = "Non è possibile cambiare stile in questo momento"]
	[broadcast(sMsg,getPlayerName())]
	[return(0,sMsg)]
}]

[macro("combat/getStile@this"): oToken]
[h: sStileOld = macro.return]

[macro("combat/getStileList@this"):0]
[h: sListaStili = macro.return]

[h: iIndex = listFind(sListaStili,sStileOld)]
[h: inputStile = strformat("sStileNew|%{sListaStili}|Scegli Stile|LIST|SELECT=%{iIndex} VALUE=STRING")]

[h: bCheck = input(inputStile)]

<!-- cambia stile -->
[h, if(bCheck), code:{
	[if(sStileOld != sStileNew), code:{
		[macro("combat/changeStile@this"): json.append(oToken,sStileNew)]
	}]
}]