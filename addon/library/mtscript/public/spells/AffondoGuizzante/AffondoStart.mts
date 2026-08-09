[h: source = json.get(macro.args,"source")]
[h: switchToken(source)]

<!-- CheckspellCast viene usato solo per vedere se il potere è lanciabile, per controllare che si stia usando una spada -->
[macro("powers/checkSpellCast@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"AffondoGuizzante")]
[h, if(macro.return != 0), code:{
	[h: nomeAzione = upper(json.get(Azione_Corrente,"Nome"))]
	[h, if(nomeAzione == "ATTACCO"), code:{
		[macro("movement/setMovSpeciale@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,1)]
	}]
}]
[h: macro.return = ""]