[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]]
[h: oParam = json.get(macro.args,"parametri")]

[h: source = json.get(oParam,"lanciatore")]
[h: spellName = "CommozioneCelebrale"]

[h: sMsg = ""]
[h, if(remove != 1), code:{
	[macro("powers/basicDotEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"):macro.args]
	[sMsg = macro.return]
};{
	[sEffetto = json.get(oParam,"effettoAux")]
	[if(sEffetto != ""): rimuoviEffetto(target,sEffetto)]
}]

[h: macro.return = sMsg]
