[h: oToken = arg(0)]
[h: sText = arg(1)]

[h: sLibName = "Inarrestabile"]
[h: iEste = fetchClassSkillProp(sLibName,"Estenuante")]
[h, macro(buildClassSkillMacroName("Inarrestabile","calcBonus")): oToken]
[h: macro.return = strformat(sText, iEste, macro.return)]