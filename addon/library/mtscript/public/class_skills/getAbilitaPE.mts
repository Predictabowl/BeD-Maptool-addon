[h: oToken = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]

[h: iPEBase = fetchClassSkillPorp(sLibAbilita,"Punti_Eroe")]

[h: macro.return = iPEBase]