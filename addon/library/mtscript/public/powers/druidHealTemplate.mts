[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: iCuraLL = json.get(macro.args,"curaLL")]
[h: spellName = json.get(macro.args,"spellName")]
[h: bInizioRound = json.get(macro.args,"inizioRound")] <!-- Opzionale -->


[h, macro("powers/isFiorituraPrematura@this"): source]
[h, if(macro.return), code:{
	[iDur = getSpellDurata(source,spellName)]
	[iCuraLL = iCuraLL * iDur]
	[macro("powers/curaSpellTemplate@this"): json.set("","source",source,"target",target,"curaLL",iCuraLL,
		"spellName",spellName)]
};{
	[macro("powers/rigeneraVitaTemplate@this"): json.set("","source",source,"target",target,
		"curaLL",iCuraLL,"spellName",spellName,"inizioRound",bInizioRound)]
}]