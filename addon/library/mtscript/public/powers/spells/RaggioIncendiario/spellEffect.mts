[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "RaggioIncendiario"]

[h, if(isEnergiaDistruttiva(source)), code:{
	[sDanno = "1d7"]
	[pushStatModifier(source, "durataMod", 1)]
}; {
	[sDanno = "1d5"]
}]

[h: sStato = "Incendio"]
[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDanno)]
[h: iLP = json.get(macro.return, "LP")]
[h: iLL = json.get(macro.return, "LL")]
[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spell",spellName,"danno","1","stato",sStato, "categoria", sStato,"LL", iLL, "LP", iLP,"inizioRound",0)]

