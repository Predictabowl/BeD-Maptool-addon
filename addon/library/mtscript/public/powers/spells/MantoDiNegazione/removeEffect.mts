[h: target = json.get(macro.args, "target")]
[h: bRemove = json.get(macro.args,"remove")]


[h, if(bRemove == 1), code:{
	[spellName = "MantoDiNegazione"]
	[setCoperturaSlot(0, target, spellName)]
}]

[h: macro.return = ""]