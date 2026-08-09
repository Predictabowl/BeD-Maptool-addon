[h: oToken = arg(0)]
[h: sText = arg(1)]

[h, macro("class_skills/macros/ManoSpettrale/calcBonus@lib:it.aldinucci.piero.bed.maptool.ruleset"): oToken]
[h: iBonus = macro.return]
[h: macro.return = strformat(sText, iBonus)]