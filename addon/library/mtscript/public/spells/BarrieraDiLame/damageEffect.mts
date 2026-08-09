[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: iLL = json.get(macro.args,"LL")]
[h: bCritRes = json.get(macro.args,"critRes")]
[h: bDLTest = json.get(macro.args, "DLTest")]

[h: spellName = "BarrieraDiLame"]
[h, if(bDLTest), code: {
	[if(isPC(source) == isPC(target)): return(0,"")]
}]

[macro("powers/avoidSpellDefenses@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]
[h, if(macro.return), code: {
	[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("", "source", source, "target", target, "spell",spellName,"danno","1d4", "LL", iLL, "critRes", bCritRes)]
}]
