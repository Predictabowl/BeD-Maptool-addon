[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: eventParam = json.get(macro.args,"eventParam")]

[h: sTargetSpell = json.get(eventParam,"spellName")]
[h: msgOut = ""]


[macro("powers/isAOESpell@lib:it.aldinucci.piero.bed.maptool.ruleset"): sTargetSpell]
[h, if(macro.return != 1), code:{
	[h: spellName = "Invisibilita"]
	[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
	[iMancare= 45]
	[macro("core/pushStatModifier@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(target,spellName,1)]
	[macro("core/pushStatModifier@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(target,"Mancare",iMancare)]
	[msgOut = strformat("<br><img src='%s' width='25' height='25' /> &nbsp; %s infligge una penalit&agrave; di %+d Mancare a %s",getImage(spellName), nomeDec,iMancare,getName(target))]

}]

[h:macro.return = msgOut]