[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "EvocazionedellaTerra"]

[macro("mechanics/getTipoElementaleEvocazione@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: sTipoD = macro.return]

[h, if(sTipoD == "GENIO"), code:{
	[h: sSpawner = "SpawnerShaitan"]
	[h: sNome = "Shaitan"]
	[h: sSizeD = "Medium"]
};{
	[h: sSpawner = "SpawnerGargoyle"]
	[h: sNome = "Gargoyle"]
	[h: sSizeD = "Large"]
}]

[macro("powers/evocaServitoreTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"size",sSizeD,"nomeCreatura",sNome,"spawner",sSpawner)]

