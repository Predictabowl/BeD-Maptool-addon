[h: source = macro.args]

[h: sNomeAb = getMacroLocation()]
[h: pushOverride(source, "controlloArea", 1)]
[h: eventInstaller(source,"On_Spellcast",sNomeAb,"class_skills/macros/ControlloArea/specialMessage@lib:it.aldinucci.piero.bed.maptool.ruleset")]
[h: macro.return = 0]