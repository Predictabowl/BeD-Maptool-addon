[h: source = json.get(macro.args,"source")]
[h: target = source]

[h: spellName = "FormaLavica"]
[h: sNomeDec = fetchSpellProp(spellName,"nome_decorativo")]
[h: sNomeEff = strformat("%s (%s)",sNomeDec,getName(source))]

[h: iDurata = getSpellDurata(source,spellName)]
[h: iAOE = getSpellAoE(source,spellName)]

[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","source",source,"target",target,"spellName",spellName)]
[h: iLL = macro.return]
[h: iLMM = getLMM(source, spellName)]

[h: temp = json.set("","key","Res_Fuoco","value",1,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: temp = json.set("","key","Res_Acqua","value",-1,"tipo","onceMod")]
[h: altro = json.append(altro,temp)]
[h: temp = json.set("","macroName","powers/spells/FormaLavica/cleanup@lib:it.aldinucci.piero.bed.maptool.ruleset","parametri",json.set("","caster",source),"tipo","macroCall")]
[h: altro = json.append(altro,temp)]
[h: oEffetto = json.set("","target",source,"tipo","Magia","params",altro,"verbose",0)]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto,"LL",iLL)]
[h: msgOut = popMessaggio(target,"msgEffetto")]

[macro("powers/getSpellHeal@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","LL",iLL,"healLL", 4,"target",target,"source",source)]
[h: iPVT = macro.return]
[macro("core/modPVT@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,iPVT,spellName)]

[h: addPoteriMem(source,"Lib:ColpodiFuocoElementalismo")]
[h: addSpellMod(source, "powers/spells/FormaLavica/costModChecker@lib:it.aldinucci.piero.bed.maptool.ruleset", "PP", 0, 0.4)]

<!-- Inizio generazione Aura -->

[h: sNomeMacro = "powers/generalEffectAura@lib:it.aldinucci.piero.bed.maptool.ruleset"]
[h: sMacroAura = "powers/spells/FormaLavica/macroAura@lib:it.aldinucci.piero.bed.maptool.ruleset"]
[h: idAura = strformat("%s - Generatore",sNomeEff)]
[h: expandedAura = strformat("%s - Effetto",sNomeEff)]

<!-- determina il FOF  -->
[h: sTipoBersaglio = fetchSpellProp(spellName,"tipo_AOE")]

<!-- Al momento non viene calcolata la potenza perché non serve -->
[h: paramA = json.set("","source",source,"caster",source,"nomeMacro",sNomeMacro,"nomeAura",idAura,"durata",-1,"AOE",iAOE,"tipo","Nascosto","FOF",sTipoBersaglio,"visualizza",1)]
[h: updateParam = json.set("", "auraOwner", source,"idAura",idAura)]
[h: paramA = json.set(paramA,"updateMacro","powers/delayedAuraRoundUpdate@lib:it.aldinucci.piero.bed.maptool.ruleset","updateParam",updateParam,"firstRoundUpdate",0)]

<!-- Effetti da applicare -->

[h: oEffetto = json.set("","target",source,"durata",iDurata,"effetto",expandedAura,"subito",1,"potenza",iLL,"tipo","Nascosto","mutex",sNomeDec)]

[h: auraParam = json.set("","caster",source,"LL",iLL,"idAura",idAura,"critRes",getUltimoCritico(source))]
[h: temp = json.set("","tipo","macroCall","macroName",sMacroAura,"parametri",auraParam)]
[h: altro = json.append("",temp)]
[h: oEffetto = json.set(oEffetto,"params",altro)]

<!-- mescolate il tutto -->
[h: paramA = json.set(paramA,"macroParam",oEffetto)]
[macro("powers/effectApplyAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): paramA]

[macro("gui/updatePoteri@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append("", "", "clearAll")]