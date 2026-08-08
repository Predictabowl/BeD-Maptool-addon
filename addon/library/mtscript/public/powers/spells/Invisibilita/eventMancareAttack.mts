[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: eventParam = json.get(macro.args,"eventParam")]
[h: bSpellFlag = 0]
[h: msgOut = ""]

[h, if(!json.isEmpty(eventParam)),code:{
	[h: spellReceived = json.get(eventParam,"spellName")]
	[if (spellReceived != ""): bSpellFlag = 1]
}]

[h, if(!bSpellFlag), code:{
	[h: spellName = "Invisibilita"]
	[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
	[iMancare = 45]
	[macro("core/pushStatModifier@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(target,"Mancare",iMancare)]
	[msgOut = strformat("<br><img src='%s' width='25' height='25' /> &nbsp; %s infligge una penalit&agrave; di %+d Mancare a %s",fetchSpellImage(spellName), nomeDec,iMancare,getName(target))]
}]

[h:macro.return = msgOut]
