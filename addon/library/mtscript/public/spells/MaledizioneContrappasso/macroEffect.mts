[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: eventParam = json.get(macro.args,"eventParam")]
[h: iMolt = json.get(macro.args, "moltiplicatore")]
[h: spellName = json.get(eventParam,"spellName")]

[h: sMsg = ""]
[h: switchToken(target)]
[h, if(PV < (PV_MAX/2)), code:{
	[spellId = "MaledizioneContrappasso"]
	[iMancare = 24 * iMolt]
	[pushStatModifier(source,"Mancare",iMancare)]
	[sMsg= strformat("<br><img src='%s' width='25' height='25'/> %s. %s subisce una penalità di %+d Mancare",fetchSpellImage(spellId),fetchSpellProp(spellId,"nome_decorativo"),
		getName(source), iMancare)]
}]

[h: macro.return = sMsg]