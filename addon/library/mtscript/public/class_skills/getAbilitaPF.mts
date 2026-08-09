[h: oToken = arg(0)]
[h: sLibAbilita = arg(1)]
	
[h: iPFBase = fetchClassSkillProp(sLibAbilita,"PF_Base")]
[h, if(!isNumber(iPFBase)), code:{
	[macro(buildClassSkillMacroName(sLibAbilita,"getPFBase")): json.append(oToken, iPFBasE)]
	[iPFBase = macro.return]
}]

[h,macro("class_skills/getEstenuanteValue@this"): json.append(oToken, sLibAbilita)]
[h: iPFBase = iPFBase+ macro.return *6]

[h: iPFMod =  fetchClassSkillProp(sLibAbilita,"PF_Liv")]
[h, if(!isNumber(iPFMod)): iPFMod = 0]
[h: iLiv = getLivelloAbilita(oToken,sLibAbilita)]

[h: iPFTot = iPFBase+iPFMod*iLiv]
[h, if(iPFTot < 0): iPFTot = 0]

[h: macro.return = iPFTot]