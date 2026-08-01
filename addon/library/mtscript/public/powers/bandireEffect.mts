[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: bMacroCalled = json.get(macro.args,"macroCalled")]

[h, if(bRemove == 1), code:{
	[return(0,"")]
}]

[h, if(bMacroCalled == 0), code:{
	[macro("mobs/InterrompiAzione@this"): target]
	[return(0,"Un personaggio bandito è isolato e non può interagire con altre creature.")]
}]

[h: macro.return = ""]