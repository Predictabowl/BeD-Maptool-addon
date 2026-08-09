[h: source= json.get(macro.args,"source")]
[h: target= json.get(macro.args,"target")]
[h: iCD = json.get(macro.args,"CD")]
[h: eventParam = json.get(macro.args,"eventParam")]

[h: sMsg = ""]
[h: sSpellCasted = json.get(eventParam,"spellName")]
[h: sTipo = upper(fetchSpellProp(sSpellCasted,"tipo"))]
[h, if(sTipo == "MALEDIZIONE" || sTipo == "MALATTIA"), code:{
	[libName = "Necropotenza"]
	[sAbilName = fetchClassSkillProp(libName,"nome_decorativo")]
	[pushStatModifier(target,"ModMoltLE",1)]
	[pushStatModifier(source,"CD",1)]
	
	[h: sMsg = strformat("<br><img src='%s' width='25' height='25' /> %s: +1 LE effetto, +1 CD",fetchClassSkillImage(libName),sAbilName)]
}]

[h: macro.return = sMsg]