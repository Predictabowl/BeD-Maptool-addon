[h: source = json.get(macro.args,"source")]


[h: spellName = "Maestria"]
[h: param = json.set("","source",source,"scuola",fetchSpellProp(spellName,"scuola"))]
[macro("powers/getLMM@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: iLMM = macro.return]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]


[r, if(iLMM >= 0), code:{
	[h: bonus = iLMM]

	[h: param = json.set("","target",source)]
	[h: param = json.set(param,"effetto",nomeDec)]
	[h: param = json.set(param,"stato","Maestria")]
	[h: param = json.set(param,"subito",1)]
	[h: param = json.set(param,"tipo","Magia")]

	[h: temp = json.set("","key","LA1","value",bonus,"tipo","onceMod")]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","LA2","value",bonus,"tipo","onceMod")]
	[h: altro = json.append(altro,temp)]
	[h: param = json.set(param,"params",altro,"verbose",0)]

	[h: oEffetto = param]
	[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]
	[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,source)]
};{}]