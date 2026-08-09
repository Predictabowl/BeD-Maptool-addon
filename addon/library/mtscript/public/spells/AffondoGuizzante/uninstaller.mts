[h: source = macro.args]

[h: spellName = "AffondoGuizzante"]

[h: param = json.set("","name","spells/AffondoGuizzante/AffondoStart@lib:it.aldinucci.piero.bed.maptool.ruleset","token",source,"event","On_Action_Start")]
[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
[h: param = json.set("","name","spells/AffondoGuizzante/AffondoDeplete@lib:it.aldinucci.piero.bed.maptool.ruleset","token",source,"event","On_Action_End")]
[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
[h: param = json.set("","name","spells/AffondoGuizzante/AffondoDeplete@lib:it.aldinucci.piero.bed.maptool.ruleset","token",source,"event","On_Action_Interrupt")]
[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]