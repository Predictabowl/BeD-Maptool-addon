[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: iLL = json.get(macro.args,"LL")]
[h: iCD = json.get(macro.args,"CD")]
[h: bDLTest = json.get(macro.args, "DLTest")]

[h: spellName = "MuroDiGhiaccio"]
[h, if(bDLTest), code: {
	[if(isPC(source) == isPC(target)): return(0,"")]
}]

[macro("powers/avoidSpellDefenses@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]
[h, if(!macro.return): return(0,"")]


[h: sEffetto = "Congelamento"]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"effetto",sEffetto,"moltiplicatore",1)]
[h: oEffetto = macro.return]
[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"effetto",oEffetto,"CD", iCD)]
