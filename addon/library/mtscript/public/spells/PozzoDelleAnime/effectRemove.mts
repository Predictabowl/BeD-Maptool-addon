[h: source = json.get(macro.args,"source")]
[h: remove= json.get(macro.args,"remove")]
[h: macroParam = json.get(macro.args,"parametri")]

[h, if(remove == 1), code:{
	[oCreatura = json.get(macroParam,"creaturaName")]
	[h: sNome = getName(oCreatura)]
	[macro("mechanics/despawnCreatura@lib:it.aldinucci.piero.bed.maptool.ruleset"): oCreatura]
	[broadcast(strformat("%{sNome} svanisce"))]
}]

