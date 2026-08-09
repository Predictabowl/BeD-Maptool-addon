[h: oToken = arg(0)]
[h: sText = arg(1)]

[h: sLibName = "Prontezza"]
[h, macro(buildClassSkillMacroName("Prontezza","calcBonus")): oToken]
[h: macro.return = strformat(sText, macro.return)]