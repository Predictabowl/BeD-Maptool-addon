[h: source = macro.args]

[h: switchToken(source)]
[h, macro(buildClassSkillMacroName("Prontezza","calcBonus")): source]
[h: VA = VA -macro.return]
[h, macro("gui/updateSpellsResource@this"): json.append(source, "VA")]

[h:macro.return = ""]