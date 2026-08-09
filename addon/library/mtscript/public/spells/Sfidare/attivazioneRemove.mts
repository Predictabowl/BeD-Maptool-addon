[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]

[h, if(remove == 1), code:{
	[h: spellName = "Sfidare"]
	[macro("utility/delOpportOverride@lib:it.aldinucci.piero.bed.maptool.ruleset"): target]
	[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,"on_Opportunita",spellName)]
}]


