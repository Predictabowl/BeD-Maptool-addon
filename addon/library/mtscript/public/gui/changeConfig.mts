[h: target = json.get(macro.args,"source")]
[h: sFrame = json.get(macro.args,"frameName")]


[h, if(json.contains(macro.args,"Stili")), code:{
	[macro("mobs/cambiaStileWrapper@this"):target]
}]

[h, if(json.contains(macro.args,"Preferenze")), code:{
	[macro("mobs/cambiaStileWrapper@this"):target]
}]


[h: closeDialog("DialogCambioArmi")]
[macro("gui/updateSchedaAttacco@this"): json.append(target,sFrame)]

