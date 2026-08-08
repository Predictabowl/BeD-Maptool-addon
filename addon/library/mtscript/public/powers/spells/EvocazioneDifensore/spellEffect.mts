[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "EvocazioneDifensore"]

[macro("mechanics/getTipoDemoneEvocazione@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: sTipoD = macro.return]

[h, if(sTipoD == "DEMONE"), code:{
	[h: sSpawner = "Lib:Glabrezu"]
	[h: sNome = "Glabrezu"]
	[h: sSizeD = "Large"]
};{
	[h: sSpawner = "Lib:Barbazu"]
	[h: sNome = "Barbazu"]
	[h: sSizeD = "Medium"]
}]

[macro("powers/evocaServitoreTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName,"size",sSizeD,"nomeCreatura",sNome,"spawner",sSpawner)]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]




