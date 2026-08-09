[h: source = macro.args]

[h: sNomeAb = "Inarrestabile"]
[h: switchToken(source)]
[h, macro("class_skills/macros/Inarrestabile/calcBonus@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: Mod_Danno_In = Mod_Danno_In - 0.01 * macro.return]

[h:macro.return = ""]