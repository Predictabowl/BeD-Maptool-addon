[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]
[h: jParams = json.get(macro.args, "parametri")]

[h: sMarchioName = json.get(jParams, "marchioName")]

[h, if(remove == 1), code:{
	[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,"on_Attacked",sMarchioName)]
}]


