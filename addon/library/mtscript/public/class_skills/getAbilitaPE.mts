[h: oToken = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]

[h: iPEBase = getLibProperty("Punti_Eroe",sLibAbilita)]

[h: macro.return = iPEBase]