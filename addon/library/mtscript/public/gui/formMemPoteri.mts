[h: oArgs = arg(0)]
[h: oToken = json.get(oArgs,"token")]

[h: oProperties = getDialogProperties("memorizzaPoteri")]
[h: setPreferenza("larghezza",json.get(oProperties,"width"),oToken,"Dialog_Libro_Poteri")]
[h: setPreferenza("altezza",json.get(oProperties,"height"),oToken,"Dialog_Libro_Poteri")]

[h, if(json.contains(oArgs, "Annulla")), code:{
	[closeDialog("memorizzaPoteri")]	
	[return(0,"")]
}]

[h: broadcast(strformat("%s ha memorizzato nuovi incantesimi per %s",getPlayerName(),getName(oToken)),"gm")]
[h, if(isCombat()), code:{
	[broadcast("Non puoi cambiare i poteri memorizzati durate il combattimento",getPlayerName())]
	[h: closeDialog("memorizzaPoteri")]
	[return(0,0)]
}]

[h: oListaPot = getLibroPoteri(oToken)]
[h: oMemList = getPoteriMem(oToken)]
[h: broadcast(oArgs)]
[h: broadcast(oListaPot)]
[h: broadcast(oMemList)]

[h, foreach(oInc, oListaPot), code:{
	[bMemOld = json.contains(oMemList,oInc)]
	[bMemNew = json.get(oArgs, oInc)]
	[if (!bMemOld && bMemNew): addPoteriMem(oToken, oInc)]
	[if (bMemOld && !bMemNew): delPoteriMem(oToken, oInc)]	
}]

[h, macro("gui/updateFrameIfVisible@this"): json.append(oToken,"Poteri","gui/listaPoteriMem@this")]
[h: closeDialog("memorizzaPoteri")]
[h: macro.return = ""]