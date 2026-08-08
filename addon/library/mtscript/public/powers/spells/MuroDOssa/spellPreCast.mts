[h: source = json.get(macro.args,"source")]

[h: spellName = "MuroDOssa"]
[h: jArg = json.set("","source",source,"spell",spellName,"categoria","MAGIA", "inizioRound", 1, "copertura", 75, "hasMBL", 1,"triggerRange",0)]
[macro("powers/fixedAreaSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jArg]
[h: jParams = macro.return]

[h: sSpawner = "BoneWallCoreSpawner"]
[macro("powers/spawnWallCoreTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(jParams, "source", source,"spellName",spellName,"spawner",sSpawner)]
