[h: oToken = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]

[h: iBase = fetchClassSkillProp(sLibAbilita,"Mana")]

[h, if(iBase == ""): return(0,0)]

[h: iManaMod =  fetchClassSkillProp(sLibAbilita,"mana_liv")]
[h, if(!isNumber(iManaMod)): iManaMod = 0]
[h: iLiv = getLivelloAbilita(oToken,sLibAbilita)]

[h: iManaTot = iBase+iManaMod*iLiv]
[h, if(iManaTot < 0): iManaTot = 0]

[h: return(0, iManaTot)]