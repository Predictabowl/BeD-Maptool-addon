[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[macro("core/retrieveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"stato","Atterrato")]
[h: sEffect = macro.return]
[h, foreach(oEffect,sEffect), code:{
	[macro("core/RemoveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,oEffect)]
}]