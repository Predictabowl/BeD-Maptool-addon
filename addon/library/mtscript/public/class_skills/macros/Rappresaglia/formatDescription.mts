[h: oToken = arg(0)]
[h: sText = arg(1)]

[h, macro(buildClassSkillMacroName("Rappresaglia","calcBonus")): oToken]
[h: return(0, strformat(sText, macro.return))]