[h: source = macro.args]

[h: sNomeAb = "RapiditaLancio"]

[h: iBonus = 25]

[h: addSpellMod(source,"AllSpells","VA",iBonus)]
[h: execFunction("guiUpdateSpellsResource", json.append(source, "VA"), 0, "all")]

[h: macro.return = 0]