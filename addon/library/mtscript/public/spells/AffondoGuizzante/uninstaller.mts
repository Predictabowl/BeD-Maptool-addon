[h: source = macro.args]

[h: spellName = "AffondoGuizzante"]

[h: param = json.set("","name",buildSpellMacroName("AffondoGuizzante","AffondoStart"),"token",source,"event","On_Action_Start")]
[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
[h: param = json.set("","name",buildSpellMacroName("AffondoGuizzante","AffondoDeplete"),"token",source,"event","On_Action_End")]
[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
[h: param = json.set("","name",buildSpellMacroName("AffondoGuizzante","AffondoDeplete"),"token",source,"event","On_Action_Interrupt")]
[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]