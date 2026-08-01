[h: oToken = arg(0)]
[h, if(argCount()>1): bSlotRapido = arg(1); bSlotRapido = 0]

[macro("mobs/getUnusedEquip@this"): json.append(oToken,bSlotRapido)]
[h: oInventario = macro.return]

[h: sHtml = ""]

[h, foreach(key, oInventario), code:{
	[oItem = json.get(oInventario,key)]
	[macro("gui/makeHtmlOggetto@this"): json.append(oItem,oToken,key)]
	[sHtml = sHtml + macro.return]
}]

[r: macro.return = sHtml]
