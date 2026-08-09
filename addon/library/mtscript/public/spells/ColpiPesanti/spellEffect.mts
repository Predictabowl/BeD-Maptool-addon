[h: source = json.get(macro.args,"source")]
[h: target = source]

[h: spellName = "ColpiPesanti"]
[h: sMacroName = buildSpellMacroName("ColpiPesanti","eventMacro")]

[macro("events/isEventInstalled@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"On_Attack",spellName)]
[h: bCheck = macro.return]
[h, if(bCheck != 1), code:{
	[h: paramON = json.set("","name",spellName,"macroName",sMacroName,"event","On_Attack","token",source)]
	[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"):paramON]
	[broadcast(strformat("Abilit&agrave;  Attivata"),getPlayerName())]
};{
	[macro(buildSpellMacroName("ColpiPesanti","uninstaller")):source]
	[broadcast("Abilit&agrave; Disattivata",getPlayerName())]
}]