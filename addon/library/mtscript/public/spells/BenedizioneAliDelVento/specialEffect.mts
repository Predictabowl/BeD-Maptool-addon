[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]
[h: oMacroParam = json.get(macro.args,"parametri")]
[h: bCalled = json.get(macro.args,"macroCalled")]

[h: spellName = "BenedizioneAliDelVento"]

[h, if(remove == 1), code:{
	[setCoperturaSlot(0, target, spellName)]
	[return(0,"")]
}]

[h, if(!bCalled), code:{
	[setCoperturaSlot(0.04, target, spellName)]
}]

[h: macro.return = ""]