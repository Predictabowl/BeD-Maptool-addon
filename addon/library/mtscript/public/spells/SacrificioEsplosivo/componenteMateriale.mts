[h: source = json.get(macro.args,"source")]
[h: bConsume = json.get(macro.args,"consume")]

[h: bFlag = 0]

[h, if(bConsume == 1), code:{
	[spellName = "SacrificioEsplosivo"]
	[macro("core/getEffettoServitore@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
	[sEffetto = macro.return]
	[macro("core/getEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,sEffetto)]
	[oEffetto = macro.return]

	[oOtherInfo = json.get(oEffetto,"otherInfo")]
	[sServitoreSpell = json.get(oOtherInfo,"spellName")]
	[servitoreSpellTags = fetchSpellProp(sServitoreSpell,"tags")]
	[if(listContains(servitoreSpellTags,"EVOCAZIONE")): sDanno = "1d8";sDanno = "1d6"]
	
	[switchToken(source)]
	[Lista_Dati = setStrProp(Lista_Dati,"SacrificioEsplosivoDanno",sDanno)]

	[sMacroName = buildSpellMacroName("SacrificioEsplosivo","removeServitore")]
	[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"On_Action_End",spellName,sMacroName,"")]
};{
	[macro("core/getServitore@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
	[h: oServitore = macro.return]
	[h, if(oServitore != ""),code:{
		[bFlag = 1]
	}]
}]

[h:macro.return = bFlag]