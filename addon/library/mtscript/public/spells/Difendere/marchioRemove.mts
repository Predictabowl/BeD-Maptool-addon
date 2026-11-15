[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]
[h: jParametri = json.get(macro.args,"parametri")]

[h, if(remove == "SINGLETARGET"), code:{
	[h: spellName = "Difendere"]
	[eventUninstaller(target, "On_Attacked", spellName)]
}]


