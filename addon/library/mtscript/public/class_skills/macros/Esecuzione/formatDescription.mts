[h: oToken = arg(0)]
[h: sText = arg(1)]

[h: sLibName = "Esecuzione"]
[h, macro(buildClassSkillMacroName("Esecuzione","calcBonus")): oToken]
[h: macro.return = strformat(sText, macro.return)]