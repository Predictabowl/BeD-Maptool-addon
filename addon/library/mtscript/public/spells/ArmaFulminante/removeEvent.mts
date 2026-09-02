[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]
[h: oMacroParam = json.get(macro.args,"parametri")]

[h: spellName = "ArmaFulminante"]

[h, if(remove == 1), code:{
	[eventUninstaller(target, "On_Hit", spellName)]
}]
[h: macro.return = ""]
