[h: oToken = arg(0)]
[h: skillId = arg(1)]

[h, macro("gui/blockIfNotOwner@this"): oToken]

[h: oParam = json.append(oToken, skillId)]
[h, macro("class_skills/isAbilitaInUso@this"): oParam]
[h: bInUso = macro.return]
[h, if(bInUso), code:{
	[macro("class_skills/DisattivaAbilita@this"): oParam]
	[if(macro.return == 1): jResponse = json.set("", "interrupt", 0, "isActive", 0); jResponse = json.set("", "interrupt", 1, "isActive", 0)]
};{
	[macro("class_skills/AttivaAbilita@this"): oParam]
	[jResponse = macro.return]
}]
	
[h, macro("gui/updateUIOverlay@this"): oToken]
[h: macro.return = jResponse]
[r: jResponse]
