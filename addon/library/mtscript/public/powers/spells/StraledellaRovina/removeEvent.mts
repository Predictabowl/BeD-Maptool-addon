[h: source = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]


[h, if(bRemove == 1), code:{
	[spellName = "StraledellaRovina"]
	[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"On_Spellcast",spellName)]
	[addSpellMod(source,"MALEDIZIONE","VA",-50)]
	[addSpellMod(source,"MALEDIZIONE","PP",-0,0.5)]
	[addSpellMod(source,"MALEDIZIONE","PM",0,0.5)]
	[macro("gui/delPoteriTipoCache@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"MALEDIZIONE")]
	[macro("gui/updatePoteri@lib:it.aldinucci.piero.bed.maptool.ruleset"): "Poteri"]
}]