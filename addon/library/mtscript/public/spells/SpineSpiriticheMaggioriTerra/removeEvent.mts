[h: source = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]

[h, if(remove == 1), code:{
	[spellName = "SpineSpiriticheMaggioriTerra"]
	[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"event","On_Hitted","name",spellName)]
}]