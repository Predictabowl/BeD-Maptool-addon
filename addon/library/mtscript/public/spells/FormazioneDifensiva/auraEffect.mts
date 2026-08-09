[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: oMacroParam = json.get(macro.args,"parametri")]

[h: spellName = "FormazioneDifensiva"]

[h, if(bRemove == 1), code:{
	[setCoperturaSlot(0,target,spellName)]
};{
	[setCoperturaSlot(0.06,target,spellName)]
}]

[h: macro.return = ""]
