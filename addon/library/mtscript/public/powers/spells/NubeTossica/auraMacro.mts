[h: target = json.get(macro.args,"target")]
[h: oInfo = json.get(macro.args,"otherInfo")]
[h: iLL = json.get(macro.args,"LL")]
[h: remove = json.get(macro.args,"remove")]
[h: source = json.get(oInfo,"auraMaster")]

[h: spellName = "NubeTossica"]

[h, if(remove == 1): return(0,"")]
[macro("powers/isAlreadyHitByAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]
[h, if(macro.return): return(0,"")]
[macro("powers/avoidSpellDefenses@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]
[h, if(!macro.return): return(0,"")]

[h: iMM = -4]
[h: sNomeEffAux = strformat("%s Lentezza", fetchSpellProp(spellName,"nome_decorativo")) ]
[h: bCrit = rollCriticoSpell(json.set("", "source", source, "spellName", spellName, "forceReroll", 1))]
[h: iCD = getSpellCD(source, spellName, bCrit)]

[h: param = json.set("","target",target,"effetto","Lentezza","nome",sNomeEffAux,"moltiplicatore",1)]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: oEffetto = json.set(macro.return,"stato","Veleno")]
[h: oSpellEffectParam = json.set("","source",source,"target",target,"spellName",spellName,"effetto",oEffetto, "LL", iLL, "CD", iCD, "durata", 2)]
[h, macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): oSpellEffectParam]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("", "source", source, "target", target,"spell",spellName,"danno","1d3-1", "LL", iLL, "critRes", bCrit)]


[macro("powers/addBersaglioColpitoAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target, spellName)]
[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, target)]
[h: sMsgOut = strformat("<div style='border: 1px black dotted'>%s</div>", popMessaggio(source, "strPotere"))]
[h: return(0, sMsgOut)]