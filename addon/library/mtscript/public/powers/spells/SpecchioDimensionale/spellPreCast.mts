[h: source = json.get(macro.args,"source")]

[h: spellName = "SpecchioDimensionale"]
[h: jArg = json.set("","source",source,"spell",spellName,"categoria","MAGIA", "eventoMacro", "powers/spells/SpecchioDimensionale/crossingEffect@lib:it.aldinucci.piero.bed.maptool.ruleset", "inizioRound", 0, "copertura", 80)]
[macro("powers/fixedAreaSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jArg]
[h: sDrawId = json.get(macro.return, "drawId")]
[h: bCritRes = json.get(macro.return, "critRes")]
[h: iCD = getSpellCD(source, spellName)]

[h: jData = json.set("", "drawId", sDrawId, "critRes", bCritRes, "CD", iCD)]
[h: addSpellStartData(source, spellName, jData)]