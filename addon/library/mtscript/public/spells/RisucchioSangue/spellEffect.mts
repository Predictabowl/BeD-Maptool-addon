[h: source = json.get(macro.args,"source")]
[h: id = json.get(macro.args,"target")]


[h: spellName = "RisucchioSangue"]
[h: elemento = fetchSpellProp(spellName,"elemento")]

[h: args = json.set("","source",source,"target",id)]
[h: args = json.set(args,"spellName",spellName)]
[macro("powers/autoCritRoll@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
[h: critRes = macro.return]
[macro("utility/getMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"key","criticalResult")]
[h: msgPotere = macro.return]
[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set(args,"critRes",critRes)]
[h: iLL = macro.return]


[h: param = json.set("","target",id,"LL",iLL,"spellName",spellName)]
[macro("powers/getLP@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: iLP = macro.return]
[r, if(iLL > 0), code:{
	[h: param = json.set("","target",id,"source",source,"LL",iLL,"spellToken","RisucchioSangue","critRes",critRes)]
	[macro("powers/getSpellTSResult@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
	[h: flag = macro.return]
	[macro("utility/getMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"key","TSResult")]
	[h: msgPotere = msgPotere +"<br>"+macro.return+"<br>"]

};{
	[h: flag = 1]
}]

[h, if(flag == 0), code:{
	[h: durata = fetchSpellProp("RisucchioSangue","durata")]

	[h: param = json.set("","target",id)]
	[h: param = json.set(param,"durata",durata)]
	[h: param = json.set(param,"effetto","Maledizione_RisucchioSangue")]
	[h: param = json.set(param,"subito",1)]
	[h: param = json.set(param,"stato","Maledetto")]
	[h: param = json.set(param,"potenza",iLL)]
	[h: tipo = fetchSpellProp("RisucchioSangue","tipo")]
	[h: param = json.set(param,"tipo",tipo)]
	[h: mutex = tipo+"_"+getName(source)]
	[h: param = json.set(param,"mutex",mutex)]

	[macro("spells/RisucchioSangue/getMultiplier@lib:it.aldinucci.piero.bed.maptool.ruleset"):id]
	[h: moltiplicatore = macro.return]

	[h: param2 = json.set("","moltiplicatore",moltiplicatore)]
	[h: temp = json.set("","tipo","macroCall","macroName","spells/RisucchioSangue/specialEffect@lib:it.aldinucci.piero.bed.maptool.ruleset","parametri",param2)]
	[h: altro = json.append("",temp)]
	[h: param = json.set(param,"params",altro)]
	[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]

	[h: param = json.set("","LL",iLL,"healLL","2","elemento",elemento)]
	[h: param = json.set(param,"target",id,"source",source)]
	[macro("powers/getSpellHeal@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
	[h: cura = macro.return]
	
	[h: param = json.set("","target",source,"valore",cura,"verbose",0)]
	[macro("core/CuraTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]

};{}]


[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,id)]