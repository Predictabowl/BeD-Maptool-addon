[h: source = macro.args]

[h: sNomeAb = "RapiditaLancio"]

[h: addSpellMod(source,"AllSpells","VA",-25)]
[h, macro("gui/clearSpellStatsFromCache@this"): source]
[h: execFunction("guiUpdateSpellsResource", json.append(source, "VA"), 0, "all")]

[h:macro.return = ""]