[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]
[h: oParam = json.get(macro.args,"parametri")]

[h: spellName = "FormaLavica"]
[h: sNomeDec = fetchSpellProp(spellName,"nome_decorativo")]

[h, if(remove == 1), code:{
	[sCaster = json.get(oParam,"caster")]
	[h: sNomeEff = strformat("%s (%s)",sNomeDec,getName(sCaster))]
	[h: idAura = strformat("%s - Generatore",sNomeEff)]
	[macro("core/removePVT@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,spellName)]
	[macro("core/RemoveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,idAura)]
	[delPoteriMem(target,"ColpoDiFuocoElementalismo")]
	[macro("powers/delSpellMod@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(target, buildSpellMacroName("FormaLavica","costModChecker"), "PP")] 
	[macro("gui/updatePoteri@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append("", "", "clearAll")]
}]
