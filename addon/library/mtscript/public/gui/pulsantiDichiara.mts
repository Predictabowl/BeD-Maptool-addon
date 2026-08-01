[h: target = json.get(macro.args,"target")]

[macro("gui/blockIfNotOwner@this"):target]

[h, if(json.contains(macro.args,"Azione")), code:{
	[macro("mobs/RisolviAzione@this"): target]
}]
[h, if(json.contains(macro.args,"Interagisci")), code:{
	[h: oInteractive = listGet(getSelected(),0)]
	[macro("mechanics/startInteraction@this"): json.append(target,oInteractive)]
}]

[h, if(json.contains(macro.args,"Interrompi") == 1), code:{
	[macro("mobs/InterrompiAzione@this"):target]
	[macro("utility/sortIniziativa@this"):0]
}]