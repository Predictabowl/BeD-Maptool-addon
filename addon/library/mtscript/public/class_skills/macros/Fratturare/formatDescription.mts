[h: oToken = arg(0)]
[h: sText = arg(1)]

[h: sLibName = "Fratturare"]
[h, macro(buildClassSkillMacroName("Fratturare","calcBonus")): oToken]
[h: macro.return = strformat(sText, macro.return)]