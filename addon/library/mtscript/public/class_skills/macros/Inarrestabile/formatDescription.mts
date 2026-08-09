[h: oToken = arg(0)]
[h: sText = arg(1)]

[h: sLibName = "Inarrestabile"]
[h: iEste = fetchClassSkillProp(sLibName,"Estenuante")]
[h, macro("class_skills/macros/Inarrestabile/calcBonus@lib:it.aldinucci.piero.bed.maptool.ruleset"): oToken]
[h: macro.return = strformat(sText, iEste, macro.return)]