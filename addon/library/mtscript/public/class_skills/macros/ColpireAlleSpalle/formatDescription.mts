[h: oToken = arg(0)]
[h: sText = arg(1)]

[h, macro(buildClassSkillMacroName("ColpireAlleSpalle","calcBonus")): oToken]
[h: iBonus = macro.return]
[h: macro.return = strformat(sText, iBonus)]