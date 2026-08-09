[h: target  = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]


[h, if(remove == 1), code:{
	[h: spellName = "PattoconOltretomba"]
	[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]

	[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(target,"On_Before_Damaged",spellName)]
	[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(target,"On_Damaged",spellName)]
	[h: nomeEffetto = strformat("Effetto-%s",nomeDec)]
	[macro("core/RemoveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,nomeEffetto)]
}]