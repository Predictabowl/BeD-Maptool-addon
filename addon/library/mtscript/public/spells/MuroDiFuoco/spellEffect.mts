[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h:return(0,"")]

<!-- Questo va abilitato se si vuole faccia danno subito -->
[h: spellName = "MuroDiFuoco"]
[h: spellStartData = getSpellStartData(source, spellName)]
[h: sDrawId = json.get(spellStartData, "drawId")]
[h: bCritRes = json.get(spellStartData, "critRes")]

[macro("utility/isDentroDraw@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target, sDrawId)]
[h, if(!macro.return): return(0, "")]

[macro("mobs/getLastTestDL@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","source",source,"spellName",spellName)]
[h: bDLTest = macro.return]
[macro(buildSpellMacroName("MuroDiFuoco","damageEffect")): json.set("", "source", source, "target", target, "drawId", sDrawId, "critRes", bCritRes, "DLTest", bDLTest)]