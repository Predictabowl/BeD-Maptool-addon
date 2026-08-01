[h: target = json.get(macro.args,"target")]
[h: remove= json.get(macro.args,"remove")]
[h: macroParam = json.get(macro.args,"parametri")]

[h: sMsg = ""]
[h, if(remove == 1), code:{
	[oCreatura = json.get(macroParam,"creaturaName")]
	[spellName = json.get(macroParam,"spellName")]
	[sMsg = strformat("%s svanisce",getName(oCreatura))]
	[macro("core/delEffettoServitore@this"):target]
	[macro("mechanics/despawnCreatura@this"): oCreatura]
	[macro("powers/delMantenimento@this"): json.append(target,spellName,0)]
	[macro("gui/closeServitoreOverlay@this"):target]
}]

[h: macro.return = sMsg]

