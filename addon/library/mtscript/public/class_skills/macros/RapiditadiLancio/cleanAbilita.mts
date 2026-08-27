[h: source = macro.args]

[h: sNomeAb = "RapiditaLancio"]

[h: addSpellMod(source,"AllSpells","VA",-25)]
[h: delDaCache(source,"SpellStats")]
[h: execFunction("guiUpdateSpellsResource", json.append(source, "VA"), 0, "all")]

[h:macro.return = ""]