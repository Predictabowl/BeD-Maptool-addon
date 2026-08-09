[h: source = json.get(macro.args,"source")]

[h: spellName = "MuroDiFuoco")]
[h: jArg = json.set("","source",source,"spell",spellName,"categoria","MAGIA", "eventoMacro", buildSpellMacroName("MuroDiFuoco","damageEffect"), "inizioRound", 0, "copertura", 50)]
[macro("powers/fixedAreaSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jArg]
[h: sDrawId = json.get(macro.return, "drawId")]
[h: bCritRes = json.get(macro.return, "critRes")]

[h: jData = json.set("", "drawId", sDrawId, "critRes", bCritRes)]
[h: addSpellStartData(source, spellName, jData)]