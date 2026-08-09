[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "FormaCorporea"]

[h: sSpawner = "SpawnerFormaCorporea"]
[h: sNome = "Forma Corporea"]
[h: sSizeD = "1/2"]

[macro("powers/evocaServitoreTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"size",sSizeD,"nomeCreatura",sNome,"spawner",sSpawner)]

[h: sNomeFluff = fetchSpellProp(spellName,"nome_decorativo")]
[macro("powers/applyMantStandard@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"listaEffetti",sNomeFluff)]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]




