[h: source = macro.args]

[h: sNomeAb = "RapiditaLancio"]

[h: iBonus = 25]

[h: addSpellMod(source,"AllSpells","VA",iBonus)]
[h, macro("gui/updateSpellsResource@this"): json.append(source, "VA")]

[h: macro.return = 0]