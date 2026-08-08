[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oEventParam = json.get(macro.args,"eventParam")]

[h: sMsg = ""]

[macro("powers/getSpellInCast@this"): source]
[h: sSpellInCast = macro.return]

[macro("powers/getSpellCapacita@this"): sSpellInCast]
[h: sDefSkill = macro.return]

[h, if(json.contains(oEventParam,"spellName")), code:{
	[spellName = json.get(oEventParam,"spellName")]
	[macro("powers/getSpellCapacita@this"): spellName]
	[h: sAttSkill = macro.return]
};{
	[sAttSkill = "Lotta"]
}]

[macro("mobs/rollCapacita@this"): json.set("","source",source,"capacita",sDefSkill,"verbose",1,"storeRoll",0)]
[h: iSourceRoll = macro.return]
[macro("mobs/rollCapacita@this"): json.set("","source",target,"capacita",sAttSkill,"verbose",1,"storeRoll",0)]
[h: iTargetRoll = macro.return]

[h, if(iSourceRoll < iTargetRoll): bResult = 0; bResult = 1]
[h, if(!bResult), code:{
	[macro("mobs/InterrompiAzione@this"): source]	
	[nomeDec = fetchSpellProp(sSpellInCast,"nome_decorativo")]
	[sMsg = strformat("L'incantesimo %s di %s  viene interrotto!",nomeDec,getName(source))]
};{
	[sMsg = strformat("%s resiste con successo e non perde il proprio incantesimo",getName(source))]
}]

[h: macro.return = sMsg]
