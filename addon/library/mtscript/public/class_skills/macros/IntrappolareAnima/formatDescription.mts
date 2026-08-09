[h: oToken = arg(0)]
[h: sText = arg(1)]

[h, macro(buildClassSkillMacroName("IntrappolareAnima","calcBonus")): oToken]
[h: iBonus = macro.return]
[h, if(iBonus > 1): sPlural = "i"; sPlural = "o"]
[h: macro.return = strformat(sText, iBonus, sPlural)]