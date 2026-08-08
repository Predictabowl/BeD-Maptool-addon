[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: bMacroCalled = json.get(macro.args,"macroCalled")]
[h: oParam = json.get(macro.args,"parametri")]

[h: source = json.get(oParam, "source")]
[h: spellName = "Imboscata"]

[h: msg = ""]
[h, if(bRemove != 1), code:{
	[macro("mobs/setOverrideAttackerOnTargetFurtivo@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target)]
	[msg = strformat("Il prossimo attacco di %s contro %s sarà un Attacco Furtivo.", getName(source), getName(target))]
};{
	[macro("mobs/popOverrideAttackerOnTargetFurtivo@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target)]
}]

[h: macro.return = msg]
