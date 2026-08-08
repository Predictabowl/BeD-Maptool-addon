[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: switchToken(target)]
[h: fHeal = 12 * (PV_Max - PV) / PV_Max]

[h, if(fHeal > 0), code:{ 
	[macro("powers/PVTSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","source",source,"target",target,"spell","AlbaDelRevenant","pvtLL", fHeal)]
}]
