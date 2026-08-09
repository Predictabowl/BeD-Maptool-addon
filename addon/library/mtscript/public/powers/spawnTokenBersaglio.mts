[h: source = arg(0)]

[h, macro("powers/findTokenBersaglio@this"): source]
[h: oBersaglio = macro.return]

[h, if(oBersaglio == ""), code:{	
	[sNomeToken = strformat("Bersaglio-%s",getName(source))]
	[h: sOriginale = "Bersaglio_Da_Copiare"]
	[h: sMappa = "Librerie"]
	[h: iSX = getTokenX(0,source)+1]
	[h: iSY = getTokenY(0,source)]
	[h: oUpdates = json.set("","name",sNomeToken,"x",iSX,"y",iSY,"size","1/2")]
	[h: setOwner (getPlayerName(),sOriginale)]
	[h: oBersaglio = copyToken(sOriginale,1,sMappa,oUpdates)]
	[h: setOwner ("",sOriginale)]
	[sMsg = strformat("Spawn del Token <span style='font-weight:bold'>%s</span>", sNomeToken)]
	[h: broadcast(sMsg)]
}]

[h: macro.return = oBersaglio]