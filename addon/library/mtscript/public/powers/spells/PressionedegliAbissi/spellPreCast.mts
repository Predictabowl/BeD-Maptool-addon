[h: source = json.get(macro.args,"source")]

[h: spellName = "PressionedegliAbissi"]


[macro("mechanics/getEffettoNaturale@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,spellName,"Sei vicino ad uno specchio d'acqua profondo?")]
[h, if(macro.return > 0), code:{
	[iMolt = 2]
	[iDur = -2]
};{
	[iMolt = 1]
	[iDur = 0]
}]

[macro.return = json.set("","durataMod",iDur,"molt",iMolt)]