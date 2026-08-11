[h: oToken = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]

[h: iPABase = fetchClassSkillProp(sLibAbilita,"PA")]

[h, if(isNumber(iPABase)): return(0, iPABase)]

[h: sCallback = json.get(iPABase, "callback")]
[h: macroName = strformat("class_skills/%{sCallback}@this")]
[h, macro(macroName): json.append(oToken, sLibAbilita, "PA")]
