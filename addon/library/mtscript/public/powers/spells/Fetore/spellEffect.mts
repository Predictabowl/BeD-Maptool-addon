[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: id = listGet(target,0)]


[h: spellName = "Fetore"]
[h: elemento = fetchSpellProp(spellName,"elemento")]

Bersaglio: [r: getName(id)]

[h: args = json.set("","source",source,"target",id)]
[h: args = json.set(args,"spellName",spellName)]
[macro("powers/autoCritRoll@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
[h: critRes = macro.return]
[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set(args,"critRes",critRes)]
[h: iLL = macro.return]


[h: param = json.set("","target",id,"LL",iLL,"element",elemento)]
[macro("powers/getLP@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: iLP = macro.return]
[r, if(iLL > 0), code:{
	[h: param = json.set("","target",id,"source",source,"LL",iLL,"spellToken","Fetore","critRes",critRes)]
	[macro("powers/getSpellTSResult@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
	[h: flag = macro.return]

};{
	[h: flag = 1]
}]
[r, if(flag == 0), code:{
	[h: durata = fetchSpellProp("Fetore","durata")]

	[h: param = json.set("","target",target,"durata",durata,"effetto","Nausea","moltiplicatore",1)]
	[macro("powers/getParamNausea@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
	[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"):macro.return]
	
};{}]
