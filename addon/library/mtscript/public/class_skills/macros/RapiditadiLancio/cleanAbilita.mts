[h: source = macro.args]

[h: sNomeAb = "RapiditaLancio"]

[h: addSpellMod(source,"AllSpells","VA",-25)]
[h: execFunction("guiUpdateSpellsResource", json.append(source, "VA"), 0, "all")]

[h:macro.return = ""]