[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "AnimareMummia"]

[h: sSpawner = "SpawnerAnimareMummia"]
[h: sNome = "Mummia"]
[h: sSizeD = "Medium"]

[macro("powers/evocaServitoreTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"size",sSizeD,"nomeCreatura",sNome,"spawner",sSpawner)]

