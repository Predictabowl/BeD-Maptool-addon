[h: oToken = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]

[h: iBase = fetchClassSkillProp(sLibAbilita,"MM")]

[h, if(iBase == ""): return(0,0)]
[h, if(isNumber(iBase)): return(0, iBase)]

[h, macro(buildClassSkillMacroName(sLibAbilita,"getMMBase")): json.append(oToken, iBase)]
