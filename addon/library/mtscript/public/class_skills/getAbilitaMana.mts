[h: oToken = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]

[h: iBase = fetchClassSkillProp(sLibAbilita,"Mana")]

[h, if(iBase == ""): return(0,0)]
[h, if(isNumber(iBase)): return(0, iBase)]

[h: sCallback = json.get(iBase, "callback")]
[h, macro(sCallback + "@Lib:AbilitaClasse"): json.append(oToken, sLibAbilita, "Mana")]
