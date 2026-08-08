[h: target = json.get(macro.args,"target")]
[h: oInfo = json.get(macro.args,"otherInfo")]
[h: iLL = json.get(macro.args,"LL")]
[h: remove = json.get(macro.args,"remove")]
[h: source = json.get(oInfo,"auraMaster")]

[h: spellName = "SuoloCorrotto"]

[h, if(remove == 1): return(0,"")]
[macro("powers/isAlreadyHitByAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]
[h, if(macro.return): return(0,"")]
[macro("powers/avoidSpellDefenses@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]
[h, if(!macro.return): return(0,"")]


[h: bCrit = rollCriticoSpell(json.set("", "source", source, "spellName", spellName, "forceReroll", 1))]
[h: jLP = json.set("","source",source,"target",target,"LL",iLL,"spellName",spellName)]
[h: iLP = getLP(jLP)]
[h: fPercMod = getModDmgPerc(source,target)]

[h, macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("", "source", source, "target", target, "spell", spellName, "danno", "1d2", "LP", iLP, "critRes", bCrit,
 "percMod", fPercMod)]

[macro("powers/addBersaglioColpitoAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]
[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target)]
[h: sMsgOut = strformat("<div style='border: 1px black dotted'><div><img src='%s' width='25' height='25'/> %s</div><div>%s</div></div>", fetchSpellImage(spellName), fetchSpellProp(spellName,"nome_decorativo"), popMessaggio(source, "strPotere"))]
[h: return(0, sMsgOut)]