[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: iLL = json.get(macro.args,"LL")]
[h: iCD = json.get(macro.args,"CD")]
[h: bDLTest = json.get(macro.args, "DLTest")]

[h: spellName = "SpecchioDimensionale"]
[h, if(bDLTest), code: {
	[if(isPC(source) == isPC(target)): return(0,"")]
}]

[macro("powers/avoidSpellDefenses@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]
[h, if(!macro.return): return(0,"")]

[macro("powers/getSpellTSResult@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("", "spellToken", spellName, "source", source, "target", target, "CD", iCD)]
[h, if(macro.return): return(0,"")]

[h: switchToken(target)]
[h: aPath = getLastPath(0)]
[h, if(json.isEmpty(aPath)): return(0,"")]
[h: jPoint = json.get(aPath,0)]
[h: moveToken(json.get(jPoint,"x"),json.get(jPoint,"y"),0)]
