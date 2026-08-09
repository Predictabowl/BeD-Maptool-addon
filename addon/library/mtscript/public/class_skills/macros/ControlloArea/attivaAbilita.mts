[h: source = macro.args]

[h: sNomeAb = getMacroLocation()]
[h: pushOverride(source, "controlloArea", 1)]
[h: eventInstaller(source,"On_Spellcast",sNomeAb,buildClassSkillMacroName("ControlloArea","specialMessage"))]
[h: macro.return = 0]