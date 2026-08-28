[h: source = macro.args]

[h: sNomeAb = "RapiditaLancio"]

[h: addSpellMod(source,"AllSpells","VA",-25)]
[h, macro("gui/updateSpellsResource@this"): json.append(source, "VA")]

[h:macro.return = ""]