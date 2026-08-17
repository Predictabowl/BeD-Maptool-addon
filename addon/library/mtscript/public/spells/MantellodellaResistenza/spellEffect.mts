[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[macro("powers/getScuola@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"spell","MantelloDellaResistenza")]
[h: strScuola = macro.return]

[h: param = json.set("","source",source,"scuola",strScuola)]
[macro("powers/getLMM@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: iLMM = macro.return]
[h: name = fetchSpellProp("MantelloDellaResistenza","nome_decorativo")]
[macro("powers/getDurata@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"spellName","MantelloDellaResistenza")]
[h: iDurata = macro.return]

[r, if(iLMM >= 0), code:{
	[h: bonus = iLMM]

	[h: args = json.set("","source",source,"target",source)]
	[h: args = json.set(args,"spellName","MantelloDellaResistenza")]
	[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
	[h: iLL = macro.return]

	[h: param = json.set("","target",target,"durata",iDurata,"effetto",name,"stato","Protezione","subito",1,"potenza",iLL,"tipo","Magia")]
	[h: resStr ="Res_Acqua,Res_Aria,Res_Fuoco,Res_Terra,Res_Arcano,Res_Mentale,Res_Negativo,Res_Positivo,Res_Fisico"]
	[h: slLength = listCount(resStr)]
	[h: altro = ""]
	[h, for(i,0,slLength,1), code:{
		[h: temp = json.set("","key",listGet(resStr,i),"value",bonus,"tipo","onceMod")]
		[h: altro = json.append(altro,temp)]
	}]

	[h: penalty = - floor(iLMM/2)] 
	[h: resStr ="TS_Rif,TS_Tem,TS_Vol"]
	[h: slLength = listCount(resStr)]
	[h, for(i,0,slLength,1), code:{
		[h: temp = json.set("","key",listGet(resStr,i),"value",penalty,"tipo","onceMod")]
		[h: altro = json.append(altro,temp)]
	}]

	[h: param = json.set(param,"params",altro,"verbose",0)]
	[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
	[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]
};{}]