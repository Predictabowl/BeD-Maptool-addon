[h: source= json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sRemove = upper(json.get(macro.args,"remove"))]

[h: sProp = "PROPRIETARIO"]


[h, if(sRemove == sProp), code:{
	[h:spellName = "Salvezza"]
	[h: nomeEffetto = "Marchio: "+fetchSpellProp(spellName,"nome_decorativo")]
	[macro("core/RemoveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,nomeEffetto)]
}]
