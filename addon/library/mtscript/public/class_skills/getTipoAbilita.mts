[h: sLibAbilita = arg(0)]

[h: abType = upper(fetchClassSkillProp(sLibAbilita,"tipo"))]
[h, if(abType == ""): abType = "PASSIVA"]
[h: macro.return = abType]