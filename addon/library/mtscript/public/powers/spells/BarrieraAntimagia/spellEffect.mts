[h: source = json.get(macro.args,"source")]

[h: spellName = "BarrieraAntimagia"]
[h: name = fetchSpellProp(spellName,"nome_decorativo")]

[h: param = json.set("","source",source,"spell",spellName)]
[macro("powers/getLMM@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
[h: iLMM = macro.return]

[r, if(iLMM >= 0), code:{
	[h: bonus = iLMM]

	[h: param = json.set("","target",source,"effetto",name,"stato","Protezione","subito",1,"tipo","Magia")]
	[h: resStr ="Res_Acqua,Res_Aria,Res_Fuoco,Res_Terra,Res_Arcano,Res_Mentale,Res_Negativo,Res_Positivo"]
	[h: slLength = listCount(resStr)]
	[h: altro = ""]
	[h, for(i,0,slLength,1), code:{
		[h: temp = json.set("","key",listGet(resStr,i),"value",bonus,"tipo","onceMod")]
		[h: altro = json.append(altro,temp)]
	}]

	[h: oEffetto = json.set(param,"params",altro,"verbose",0)]
	[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]

	[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,source)]
};{}]

[h: setLibProperty("scuola","Universale",spellName)]