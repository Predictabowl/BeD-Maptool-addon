[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "EvocazionedellAcqua"]

[macro("mechanics/getTipoElementaleEvocazione@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: sTipoD = macro.return]

[h, if(sTipoD == "GENIO"), code:{
	[h: sSpawner = "SpawnerMarid"]
	[h: sNome = "Marid"]
	[h: sSizeD = "Medium"]
};{
	[h: sSpawner = "SpawnerImmoth"]
	[h: sNome = "Immoth"]
	[h: sSizeD = "Large"]
}]

[macro("powers/evocaServitoreTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"size",sSizeD,"nomeCreatura",sNome,"spawner",sSpawner)]





