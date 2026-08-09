[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]
[h: jParametri = json.get(macro.args,"parametri")]

[h, if(remove == 1), code:{
	[h: spellName = "Difendere"]
	[sMarchioName = json.get(jParametri,"marchioName")]
	[eventUninstaller(target, "On_Attacked", sMarchioName)]
}]


