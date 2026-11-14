[h: oToken = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]

[h: iPABase = fetchClassSkillProp(sLibAbilita,"PA")]

[h, if(!isNumber(iPABase)), code:{
    [h: sCallback = json.get(iPABase, "callback")]
    [h: macroName = strformat("class_skills/%{sCallback}@this")]
    [h, macro(macroName): json.append(oToken, sLibAbilita, "PA")]
    [iPABase = macro.return]
}]

[h: iPAMod =  fetchClassSkillProp(sLibAbilita,"PA_Liv")]
[h, if(!isNumber(iPAMod)): iPAMod = 0]
[h: iLiv = getLivelloAbilita(oToken,sLibAbilita)]

[h: iPATot = iPABase+iPAMod*iLiv]
[h, if(iPATot < 0): iPATot = 0]
[h: return(0, iPATot)]