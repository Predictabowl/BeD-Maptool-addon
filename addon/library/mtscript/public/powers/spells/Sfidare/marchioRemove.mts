[h: source= json.get(macro.args,"source")]
[h: sRemove = upper(json.get(macro.args,"remove"))]

[h: sProp = "PROPRIETARIO"]

[h, if(sRemove == sProp), code:{
	[effectName = strformat("Attivazione Marchio %s","Sfidare")]
	[macro("core/RemoveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,effectName)]
}]