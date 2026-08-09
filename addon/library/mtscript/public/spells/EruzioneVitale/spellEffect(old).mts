[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "EruzioneVitale"]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
[h: nomeEffetto = strformat("%s (%s)",nomeDec,getName(source))]
[h: idAura = strformat("%s - Generatore",nomeEffetto)]


<!-- Prima il DOT altrimenti potrebbe rimuovere la nausea se rilanciato su se stesso-->
[h: jDotArg = json.set("","source",source,"target",target,"spell",spellName,"danno",1,"stato","",
	"categoria","MAGIA","bloccaTS",0,"effettoAux",idAura,"harmful",1)]
[macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]
[h: iLL = json.get(macro.return,"LL")]
[h: iLP = json.get(macro.return,"LP")]
[h: sDotMsg = popMessaggio(target,"msgEffetto")]
[h: broadcast(sDotMsg)]


<!-- Inizio generazione Aura sul nemico -->


[h: oAuraParam = json.set("", "LP", iLP)]
[h: jParams = json.set("", "origine", target, "caster", source, "spellName", spellName, "isStatic", 0, "auraEffectMacro", buildSpellMacroName("EruzioneVitale","auraCura"), "effetto", oAuraParam, "isTransitable", 0, "autoRoundUpdate", 1)]
[macro("powers/auraSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jParams]
[h: appendMessaggio(target,"msgEffetto",sDotMsg)]
[h: return(0,"")]

<!-- old code never called as replaced by the template, but left for future reference-->
[h: sNomeMacro = buildSpellMacroName("EruzioneVitale","auraCura")]

[h: iDurata = getSpellDurata(source,spellName,target)]
[h: iAOE = getSpellAoE(source,spellName,target)]

<!-- determina il FOF -->
[h: tipoBersaglio = fetchSpellProp(spellName,"tipo_AOE")]
[h: auraParam = json.set("","caster",source,"LP",iLP,"idAura",idAura)]

[h: paramA = json.set("","source",target,"caster",source,"nomeMacro",sNomeMacro,"macroParam", auraParam,"nomeAura",idAura,"durata",iDurata,
	"AOE",iAOE,"tipo","Nascosto","FOF",tipoBersaglio,"visualizza",2, "autoRoundUpdate", 1)]

[h: updateParam = json.set("","idAura",idAura)]
[h: paramA = json.set(paramA,"updateMacro","powers/updateAuraClearBersagli@lib:it.aldinucci.piero.bed.maptool.ruleset","updateParam",updateParam,"firstRoundUpdate",0)]

[macro("powers/effectApplyAura@lib:it.aldinucci.piero.bed.maptool.ruleset"): paramA]