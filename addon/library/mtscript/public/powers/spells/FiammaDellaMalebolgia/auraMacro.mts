[h: target = json.get(macro.args,"target")]
[h: oInfo = json.get(macro.args,"otherInfo")]
[h: iLL = json.get(macro.args,"LL")]
[h: remove = json.get(macro.args,"remove")]
[h: source = json.get(oInfo,"auraMaster")]

[h: spellName = "FiammaDellaMalebolgia"]
[h, if(remove == 1):return(0,"")]
[macro("powers/isAlreadyHitByAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]
[h, if(macro.return): return(0,"")]
[macro("powers/avoidSpellDefenses@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]
[h, if(!macro.return): return(0,"")]

[h: sNomeEffAux = strformat("%s-Incendio(%s)", fetchSpellProp(spellName,"nome_decorativo"), getName(source)) ]
[h: bCrit = rollCriticoSpell(json.set("", "source", source, "spellName", spellName, "forceReroll", 1))]

[h: jDotArg = json.set("","source", source,
	"target",target,
	"spell",spellName,
	"danno","1d3",
	"stato","Incendio",
	"categoria", "Incendio",
	"LL", iLL,
	"critRes", bCrit,
	"inizioRound", 0,
	"durata", 1,
	"bloccaTS", 0,
	"idEffetto", sNomeEffAux)]
[h, macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]

[macro("powers/addBersaglioColpitoAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target)]
[h: sMsgOut = strformat("<div style='border: 1px black dotted'>%s</div>", popMessaggio(source, "strPotere"))]
[h: return(0, sMsgOut)]