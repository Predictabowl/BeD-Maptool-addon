[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]
[h: param = json.get(macro.args,"parametri")]
[h: moltiplicatore = json.get(param,"moltiplicatore")]

[h, if(remove ==""): remove = 0]
[h: effetto = "Debilitato"]

[r, if(remove == 1), code:{
	[macro("core/RemoveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target,effetto)]
};{
	[h: durata = fetchSpellProp("RisucchioSangue","durata")]
	[h: param = json.set("","target",target,"durata",durata,"effetto",effetto,"moltiplicatore",moltiplicatore)]
	[macro("powers/getParamDebilitato@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
	[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set(macro.return,"verbose",0)]
}]
