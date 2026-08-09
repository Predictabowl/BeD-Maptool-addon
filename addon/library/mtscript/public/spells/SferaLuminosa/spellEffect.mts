[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "SferaLuminosa"]

[h: sSpawner = "SpawnerSferaLuminosa"]
[h: sNome = "Sfera Luminosa"]
[h: sSizeD = "1/2"]

[macro("mechanics/spawnCreatura@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,sSpawner,sNome,sSizeD)]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]




