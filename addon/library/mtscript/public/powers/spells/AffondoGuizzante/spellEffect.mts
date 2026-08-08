[h: source = json.get(macro.args,"source")]
[h: target = source]

[h: spellName = "AffondoGuizzante"]
[h: sStartEvent = "powers/spells/AffondoGuizzante/AffondoStart@lib:it.aldinucci.piero.bed.maptool.ruleset"]

[macro("events/isEventInstalled@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"On_Action_Start",sStartEvent)]
[h: bAffondo = macro.return]
[h, if(bAffondo != 1), code:{
	[h: paramON = json.set("","name",sStartEvent,"event","On_Action_Start","token",source)]
	[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"):paramON]
	[h: paramOFF = json.set("","name","powers/spells/AffondoGuizzante/AffondoDeplete@lib:it.aldinucci.piero.bed.maptool.ruleset","event","On_Action_End","token",source)]
	[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"):paramOFF]
	[h: paramOFF = json.set("","name","powers/spells/AffondoGuizzante/AffondoDeplete@lib:it.aldinucci.piero.bed.maptool.ruleset","event","On_Action_Interrupt","token",source)]
	[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"):paramOFF]
	[broadcast("Affondo Attivato",getPlayerName())]
};{
	[macro("powers/spells/AffondoGuizzante/uninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"):source]
	[broadcast("Affondo Disattivato",getPlayerName())]
}]