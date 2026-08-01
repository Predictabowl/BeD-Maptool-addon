[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sCuraLL = string(json.get(macro.args,"curaLL"))]
[h: spellName = string(json.get(macro.args,"spellName"))]
[h: iLL = json.get(macro.args,"LL")]
[h: bCritRes = json.get(macro.args,"critRes")]

[h: sElemento = getLibProperty("elemento",spellName)]

[h, if(!isNumber(bCritRes)), code:{
	[macro("getUltimoCritico@Lib:Combattimento"):source]
	[bCritRes = macro.return]
}]
	
[h, if(!isNumber(iLL)), code:{
	[h: args = json.set("","source",source,"target",target,"spellName",spellName)]
	[macro("powers/getAutoLL@this"): args]
	[h: iLL = macro.return]
}]
	
[h: param = json.set("","LL",iLL,"healLL",sCuraLL,"target",target,"source",source,"elemento",sElemento,"critRes",bCritRes)]
[macro("powers/executeSpellHeal@this"): param]


