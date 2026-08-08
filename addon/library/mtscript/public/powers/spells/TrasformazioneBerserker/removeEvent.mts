[h: source = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]

[h: sNam = getName(source)]
[h: broadcast(string(sNam))]

[h, if(remove == 1), code:{
	[spellName = "TrasformazioneBerserker"]
	[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"event","On_Spellcast","name",spellName)]
	[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"event","On_Spellstart","name",spellName)]
}]


<!-- SpellEffect codice rimosso -->
