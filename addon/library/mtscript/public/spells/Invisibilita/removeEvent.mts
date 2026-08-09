[h: source = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]

[h: sNam = getName(source)]
[h: broadcast(strformat("%s@%s - %{sNam}",getMacroName(),"Invisibilita"))]

[h, if(remove == 1), code:{
	[spellName = "Invisibilita"]
	[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"event","On_Attack","name",spellName)]
	[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"event","On_Attacked","name",spellName)]
	[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"event","On_SpellCasted","name",spellName)]
}]