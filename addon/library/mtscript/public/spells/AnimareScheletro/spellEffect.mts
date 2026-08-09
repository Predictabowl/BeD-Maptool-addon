[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "AnimareScheletro"]

[h: sSpawner = "SpawnerAnimareScheletro"]
[h: sNome = "Scheletro"]
[h: sSizeD = "Medium"]

[macro("powers/evocaServitoreTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"size",sSizeD,"nomeCreatura",sNome,"spawner",sSpawner)]

