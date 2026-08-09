[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sOrigine = json.get(macro.args,"origine")]

[h: spellName = "FlussoSanguigno"]
[h: iRange = getSpellRange(source, spellName)]

[h: rangeParam = json.set("","token",sOrigine,"distancePerCell",0,"upto",iRange)]
[h: bPC = isPC(source)]
[h: findParam = json.set("","range",rangeParam, "npc", bPC,"pc", !bPC)]
[h: lTokens = getTokens(",",findParam)]

[h: i = 0]
[h: iMax = listCount(lTokens)]
[h: sCura = "1d6"]
[h, while(i < iMax), code :{
	[sToken = listGet(lTokens, i)]
	[bSanguinante = getState("Sanguinamento", sToken)]
	[if(bSanguinante), code:{
		[sCura = "1d6+3"]
		[i = iMax]
	}]
	[h: i = i+1]
}]
[macro("powers/curaSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"curaLL",sCura,"spellName", spellName)]