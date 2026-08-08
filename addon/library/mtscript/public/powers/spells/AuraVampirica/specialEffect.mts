[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]
[h: oMacroParam = json.get(macro.args,"parametri")]

[h: spellName = "AuraVampirica"]
[h: sTipo = "On_Damage"]

[h, if(remove == 1), code:{
	[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","name",spellName,"event",sTipo,"token",target)]
};{
	[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","name",spellName,"event",sTipo,"token",target,"macroName","powers/spells/AuraVampirica/eventSpell@lib:it.aldinucci.piero.bed.maptool.ruleset","macroParam",oMacroParam)]
}]
