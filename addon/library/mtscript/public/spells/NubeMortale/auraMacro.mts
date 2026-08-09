[h: target = json.get(macro.args,"target")]
[h: oInfo = json.get(macro.args,"otherInfo")]
[h: iLL = json.get(macro.args,"LL")]
[h: remove = json.get(macro.args,"remove")]
[h: source = json.get(oInfo,"auraMaster")]

[h, if(remove == 1): return(0,"")]

[h: spellName = "NubeMortale"]

[macro("powers/isAlreadyHitByAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]
[h, if(macro.return): return(0,"")]
[macro("powers/avoidSpellDefenses@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]
[h, if(!macro.return): return(0,"")]

[h: sNomeEffAux = strformat("%s-Veleno(%s)", fetchSpellProp(spellName,"nome_decorativo"), getName(source)) ]
[h: bCrit = rollCriticoSpell(json.set("", "source", source, "spellName", spellName, "forceReroll", 1))]
[h: iCD = getSpellCD(source, spellName, bCrit)]
[h: jLP = json.set("","source",source,"target",target,"LL",iLL,"spellName",spellName)]
[h: iLP = getLP(jLP)]
[h: fPercMod = getModDmgPerc(source,target)]


[h: jDotArg = json.set("","source", source,
	"target",target,
	"spell",spellName,
	"danno","1d3",
	"stato","Veleno",
	"LL", iLL,
	"LP", iLP,
	"critRes", bCrit,
	"potenzaCritico", getPCrit(source),
	"dmgPercMod", fPercMod,
	"inizioRound", 0,
	"CD", iCD,
	"durata", 3,
	"bloccaTS", 0,
	"idEffetto", sNomeEffAux)]
[h, macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]

[h: bTS = json.get(macro.return,"TSResult")]

[macro("powers/addBersaglioColpitoAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]
[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target)]
[h: sMsgOut = strformat("<div style='border: 1px black dotted'>%s</div>", popMessaggio(source, "strPotere"))]
[h: return(0, sMsgOut)]