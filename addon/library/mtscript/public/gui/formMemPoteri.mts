[h: oArgs = arg(0)]
[h: oToken = json.get(macro.args,"token")]


[h: broadcast(strformat("%s ha memorizzato nuovi incantesimi per %s",getPlayerName(),getName(oToken)),"gm")]
[h, if(isCombat()), code:{
	[broadcast("Non puoi cambiare i poteri memorizzati durate il combattimento",getPlayerName())]
	[h: closeDialog("memorizzaPoteri")]
	[return(0,0)]
}]

[h: oListaPot = getLibroPoteri(oToken)]
[h: oMemList = getPoteriMem(oToken)]

[h, foreach(oInc, oListaPot), code:{
	[bMemOld = json.contains(oMemList,oInc)]
	[bMemNew = json.contains(oArgs, oInc)]
	[if (!bMemOld && bMemNew): addPoteriMem(oToken, oInc)]
	[if (bMemOld && !bMemNew): delPoteriMem(oToken, oInc)]	
}]

[macro("gui/updateFrameIfVisible@this"): json.append(oToken,"Poteri","gui/listaPoteriMem@this")]
[h: closeDialog("memorizzaPoteri")]
[h: macro.return = ""]