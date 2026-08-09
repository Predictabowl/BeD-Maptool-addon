[h: oToken = arg(0)]
[h: sText = arg(1)]

[h: sLibName = "Esecuzione"]
[h, macro("class_skills/macros/Esecuzione/calcBonus@lib:it.aldinucci.piero.bed.maptool.ruleset"): oToken]
[h: macro.return = strformat(sText, macro.return)]