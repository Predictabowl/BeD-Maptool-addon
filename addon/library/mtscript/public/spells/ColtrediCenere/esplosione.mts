[h: source = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]

[h: sMsg = ""]

[h, if(remove != 1), code:{
	[h: spellName = "ColtrediCenere"]
	[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
	
	[h: im = fetchSpellImage(spellName)]
	[h: sMsg = strformat("<img src='%{im}' width='25' height='25' /> %s",nomeDec)]

	[macro("powers/getSpellTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"spellName",spellName)]
	[h: oTargets = macro.return]

	[h, foreach(target,oTargets), code:{
		[macro(buildSpellMacroName("ColtrediCenere","simpleDmgBersaglio")): json.append(source,target,spellName)]
		[sMsg = strformat("%{sMsg}%{macro.return}")]
	}]	
}]

[h: macro.return = sMsg]