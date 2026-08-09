[h: source = macro.args]

[h: sNomeAb = "Inarrestabile"]
[h: switchToken(source)]
[h, macro(buildClassSkillMacroName("Inarrestabile","calcBonus")): source]
[h: Mod_Danno_In = Mod_Danno_In - 0.01 * macro.return]

[h:macro.return = ""]