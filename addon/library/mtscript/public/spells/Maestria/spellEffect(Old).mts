[h: source = json.get(macro.args,"source")]

[h: param = json.set("","source",source,"scuola",fetchSpellProp("Maestria","scuola"))]
[macro("powers/getLMM@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: iLMM = macro.return]
[h: name = fetchSpellProp("Maestria","nome_decorativo")]
[macro("powers/getDurata@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"spellName","Maestria")]
[h: iDurata = macro.return]

[r, if(iLMM >= 0), code:{
	[h: bonus = iLMM]

	[h: args = json.set("","source",source,"target",source)]
	[h: args = json.set(args,"spellName","Maestria")]
	[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
	[h: iLL = macro.return]

	[h: param = json.set("","target",source)]
	[h: param = json.set(param,"durata",iDurata)]
	[h: param = json.set(param,"effetto",name)]
	[h: param = json.set(param,"stato","Maestria")]
	[h: param = json.set(param,"subito",1)]
	[h: param = json.set(param,"potenza",iLL)]
	[h: param = json.set(param,"tipo","Magia")]

	[h: temp = json.set("","key","LA1","value",bonus,"tipo","onceMod")]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","LA2","value",bonus,"tipo","onceMod")]
	[h: altro = json.append(altro,temp)]
	[h: param = json.set(param,"params",altro,"verbose",0)]

	[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
	[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,source)]
};{}]