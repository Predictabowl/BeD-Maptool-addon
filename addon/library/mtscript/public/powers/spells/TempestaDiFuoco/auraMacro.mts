[h: target = json.get(macro.args,"target")]
[h: oInfo = json.get(macro.args,"otherInfo")]
[h: iLL = json.get(macro.args,"LL")]
[h: remove = json.get(macro.args,"remove")]
[h: source = json.get(oInfo,"auraMaster")]

[h, if(remove == 1): return(0,"")]

[h: spellName = "TempestaDiFuoco"]

[macro("powers/isAlreadyHitByAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]
[h, if(macro.return): return(0,"")]
[macro("powers/avoidSpellDefenses@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]
[h, if(!macro.return): return(0,"")]

[h: sNomeEffAux = strformat("%s-Incendio(%s)", fetchSpellProp(spellName,"nome_decorativo"), getName(source)) ]
[h: bCrit = rollCriticoSpell(json.set("", "source", source, "spellName", spellName, "forceReroll", 1))]
[h: iCD = getSpellCD(source, spellName, bCrit)]
[h: jLP = json.set("","source",source,"target",target,"LL",iLL,"spellName",spellName)]
[h: iLP = getLP(jLP)]
[h: fPercMod = getModDmgPerc(source,target)]

[h, if(getState("Incendio", target)): sDanno = "1d5"; sDanno = "1d3"]
[h, macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("", "source", source, "target", target, "spell",spellName,"danno", sDanno, "LL", iLL, "critRes", bCrit, "percMod", fPercMod)]

[h: bTS = json.get(macro.return,"TSResult")]

[macro("powers/addBersaglioColpitoAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]
[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target)]
[h: sMsgOut = strformat("<div style='border: 1px black dotted'>%s</div>", popMessaggio(source, "strPotere"))]
[h: return(0, sMsgOut)]