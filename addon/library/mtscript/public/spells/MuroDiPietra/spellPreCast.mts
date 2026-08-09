[h: source = json.get(macro.args,"source")]

[h: spellName = "MuroDiPietra"]
[h: jArg = json.set("","source",source,"spell",spellName,"categoria","MAGIA", "inizioRound", 1, "copertura", 100, "hasMBL", 1, "hasVBL",1,"triggerRange",0)]
[macro("powers/fixedAreaSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jArg]
[h: jParams = macro.return]

[h: sSpawner = "StoneWallCoreSpawner"]
[macro("powers/spawnWallCoreTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(jParams, "source", source,"spellName",spellName,"spawner",sSpawner)]
