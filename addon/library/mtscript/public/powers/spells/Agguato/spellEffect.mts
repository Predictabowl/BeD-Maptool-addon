[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bOpp = json.get(macro.args,"isOpport")]

[h: spellName = "Agguato"]

[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"opportunita",bOpp)]

[h, if(!isStile1A(source) && !isStile2A(source)): return(0,0)]

[h: iLiv = getProperty("Livello",source)]
[h: iLP = floor(iLiv/3) +2]
[macro("powers/getSpellTSResult@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","spellToken",spellName,"source",source,"target",target)]

[h, if(!macro.return), code:{
	[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno","1d8","LP"
	,iLP)]
}]

