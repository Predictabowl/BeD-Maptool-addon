[h: oToken = json.get(macro.args,"source")]
[h: sTipo = json.get(macro.args,"tipoAzione")]
[h: sFrame = json.get(macro.args,"frame")]

[h, if(sTipo == "lancio"), code:{
	[spellName = json.get(macro.args,"spellName")]
	[sMacro = json.get(macro.args,"macro")]
	[h: param = json.set("","spellName",spellName,"source",oToken,"macro",sMacro,"frame",sFrame)]
	[macro("gui/iniziaActionBlockWrapper@this"):param]
}]

[h, if(sTipo == "rimuovi"), code:{
	[spellName = json.get(macro.args,"spellName")]
	[delPoteriMem(oToken,spellName)]
}]