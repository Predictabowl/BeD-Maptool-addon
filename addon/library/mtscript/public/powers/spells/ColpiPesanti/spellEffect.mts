[h: source = json.get(macro.args,"source")]
[h: target = source]

[h: spellName = "ColpiPesanti"]
[h: sMacroName = "powers/spells/ColpiPesanti/eventMacro@lib:it.aldinucci.piero.bed.maptool.ruleset"]

[macro("events/isEventInstalled@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"On_Attack",spellName)]
[h: bCheck = macro.return]
[h, if(bCheck != 1), code:{
	[h: paramON = json.set("","name",spellName,"macroName",sMacroName,"event","On_Attack","token",source)]
	[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"):paramON]
	[broadcast(strformat("Abilit&agrave;  Attivata"),getPlayerName())]
};{
	[macro("powers/spells/ColpiPesanti/uninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"):source]
	[broadcast("Abilit&agrave; Disattivata",getPlayerName())]
}]