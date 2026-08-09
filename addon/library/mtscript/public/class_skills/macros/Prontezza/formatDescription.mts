[h: oToken = arg(0)]
[h: sText = arg(1)]

[h: sLibName = "Prontezza"]
[h, macro("class_skills/macros/Prontezza/calcBonus@lib:it.aldinucci.piero.bed.maptool.ruleset"): oToken]
[h: macro.return = strformat(sText, macro.return)]