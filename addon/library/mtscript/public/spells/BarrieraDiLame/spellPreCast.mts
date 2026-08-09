[h: source = json.get(macro.args,"source")]

[h: spellName = "BarrieraDiLame"]
[h: jArg = json.set("","source",source,"spell",spellName,"categoria","MAGIA", "eventoMacro", "spells/BarrieraDiLame/damageEffect@lib:it.aldinucci.piero.bed.maptool.ruleset", "inizioRound", 0, "copertura", 35)]
[macro("powers/fixedAreaSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jArg]
[h: sDrawId = json.get(macro.return, "drawId")]
[h: bCritRes = json.get(macro.return, "critRes")]

[h: jData = json.set("", "drawId", sDrawId, "critRes", bCritRes)]
[h: addSpellStartData(source, spellName, jData)]