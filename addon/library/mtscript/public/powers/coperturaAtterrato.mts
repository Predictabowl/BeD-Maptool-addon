<!-- Evento On_Attacked -->
[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: eventParam = json.get(macro.args,"eventParam")]

[h: sMsg = ""]
[h:bFlag = 0]
[h, if(!json.isEmpty(eventParam)), code:{
	[h:spellName = json.get(eventParam,"spellName")]
	[if(spellName != ""), code:{
		[macro("powers/getSpellRange@this"): json.set("","source",target,"target",source,"spellName",spellName)]
		[iRange = macro.return]
	};{
		[iRange = 0]
	}]
	[if(iRange > 1): bFlag = 1; bFlag = 0]
};{
	[macro("combat/isStileDistanza@this"):target]
	[bFlag = macro.return]
}]

[h, if(bFlag), code:{
	[macro("core/pushStatModifier@this"):json.append(source,"Copertura",0.2)]
	[sMsg = strformat("<br>%s Atterrato: +20 Copertura contro attacchi a distanza.",getName(source))]
}]

[h: macro.return = sMsg]