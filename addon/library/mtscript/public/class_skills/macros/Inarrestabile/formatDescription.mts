[h: oToken = arg(0)]
[h: sText = arg(1)]

[h: sLibName = "Inarrestabile"]
[h, macro(buildClassSkillMacroName(sLibName,"calcBonus")): oToken]
[h: macro.return = strformat(sText, macro.return)]