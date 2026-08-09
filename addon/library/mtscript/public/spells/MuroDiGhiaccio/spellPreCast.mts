[h: source = json.get(macro.args,"source")]

[h: spellName = "MuroDiGhiaccio"]
[h: jArg = json.set("","source",source,"spell",spellName,"categoria","MAGIA", "eventoMacro", "spells/MuroDiGhiaccio/specialEffect@lib:it.aldinucci.piero.bed.maptool.ruleset", "inizioRound", 1, "copertura", 100, "hasMBL", 1,"triggerRange",1)]
[macro("powers/fixedAreaSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jArg]
[h: jParams = macro.return]

[h: sSpawner = "IceWallCoreSpawner"]
[macro("powers/spawnWallCoreTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(jParams, "source", source,"spellName",spellName,"spawner",sSpawner)]
