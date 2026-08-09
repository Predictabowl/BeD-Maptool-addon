[h: source = macro.args]

[h: spellName = "ColpiPesanti"]

[h: param = json.set("","name",spellName,"token",source,"event","On_Attack")]
[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]