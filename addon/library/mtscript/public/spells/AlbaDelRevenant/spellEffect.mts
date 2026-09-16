[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: switchToken(target)]
[h: iPVMax = getPVMax(target)]
[h: fHeal = 12 * (iPVMax - PV) / iPVMax]

[h, if(fHeal > 0), code:{ 
	[macro("powers/PVTSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","source",source,"target",target,"spell","AlbaDelRevenant","pvtLL", fHeal)]
}]
