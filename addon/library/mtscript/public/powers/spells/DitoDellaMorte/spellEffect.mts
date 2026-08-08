[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oOrigine = json.get(macro.args,"origine")]


[h: spellName = "DitoDellaMorte")]
[h: sFluff = fetchSpellProp(spellName,"nome_decorativo")]
[h: iState = getState("Malato",target) + getState("Maledetto", target)]

[h, if(iState == 1), code:{
	[sDanno = "1d8"]
};{
	[if(iState > 1): sDanno = "1d10"; sDanno = "1d6"]
}]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDanno)]


