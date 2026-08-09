[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]
[h: oParam = json.get(macro.args,"parametri")]

[h: spellName = "EruzioneVitale"]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]

[h, if(remove == 1), code:{
	[sCaster = json.get(oParam,"caster")]
	[h: nomeEffetto = strformat("%s (%s)",nomeDec,getName(sCaster))]
	[h: idAura = strformat("%s - Generatore",nomeEffetto)]
	[macro("core/RemoveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,idAura)]
	[switchToken(target)]
	[Lista_Dati = deleteStrProp(Lista_Dati,idAura)]
}]
