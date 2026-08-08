[h: source = json.get(macro.args, "target")]
[h: bRemove = json.get(macro.args, "remove")]

[h, if(bRemove == 1), code:{
	[spellName = "Barricata"]
	[setCoperturaSlot(0, source, spellName)]
}]

[h: macro.return = ""]
