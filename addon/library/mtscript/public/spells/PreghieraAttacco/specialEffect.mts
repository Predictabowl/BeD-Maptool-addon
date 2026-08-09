[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]

[h: spellName = "PreghieraAttacco"]

[h, if(remove == 1), code:{
	[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","name",spellName,"event","On_Attack","token",target)]
};{
	[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","name",spellName,"event","On_Attack","token",target,"macroName","spells/PreghieraAttacco/eventSpell@lib:it.aldinucci.piero.bed.maptool.ruleset")]
}]
