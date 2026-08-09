[h: oToken = arg(0)]
[h: sText = arg(1)]

[h, macro("class_skills/macros/IntrappolareAnima/calcBonus@lib:it.aldinucci.piero.bed.maptool.ruleset"): oToken]
[h: iBonus = macro.return]
[h, if(iBonus > 1): sPlural = "i"; sPlural = "o"]
[h: macro.return = strformat(sText, iBonus, sPlural)]