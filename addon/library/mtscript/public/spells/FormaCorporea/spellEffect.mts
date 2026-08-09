[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "FormaCorporea"]

[h: sSpawner = "SpawnerFormaCorporea"]
[h: sNome = "Forma Corporea"]
[h: sSizeD = "1/2"]

[macro("powers/evocaServitoreTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"size",sSizeD,"nomeCreatura",sNome,"spawner",sSpawner)]





