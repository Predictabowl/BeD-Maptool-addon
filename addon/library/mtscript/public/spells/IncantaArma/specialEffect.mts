[h: target = json.get(macro.args, "target")]
[h: bRemove = json.get(macro.args,"remove")]

[h, if(bRemove == 1), code:{
	[spellName = "IncantaArma"]
	[eventUninstaller(target, "On_Attack", spellName)]
}]

[h: macro.return = ""]