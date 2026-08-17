[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spellId")]

[macro("mechanics/getTipoElementaleEvocazione@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: sTipoD = macro.return]

[h, if(sTipoD == "GENIO"), code:{
	[h: sSpawner = "SpawnerEfreet"]
	[h: sNome = "Efreet"]
	[h: sSizeD = "Medium"]
};{
	[h: sSpawner = "SpawnerSalamandraDelFuoco"]
	[h: sNome = "Salamandra del Fuoco"]
	[h: sSizeD = "Large"]
}]

[macro("powers/evocaServitoreTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"size",sSizeD,"nomeCreatura",sNome,"spawner",sSpawner)]

