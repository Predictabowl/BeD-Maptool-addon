[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]

[h, if(remove == 1), code:{
	[macro("core/removePVT@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,"ArmaturaOssa")]
}]