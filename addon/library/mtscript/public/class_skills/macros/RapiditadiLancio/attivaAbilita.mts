[h: source = macro.args]

[h: sNomeAb = "RapiditaLancio"]

[h: iBonus = 25]

[h: addSpellMod(source,"AllSpells","VA",iBonus)]
[h, macro("gui/clearSpellStatsFromCache@this"): source]
[h: execFunction("guiUpdateSpellsResource", json.append(source, "VA"), 0, "all")]

[h: macro.return = 0]