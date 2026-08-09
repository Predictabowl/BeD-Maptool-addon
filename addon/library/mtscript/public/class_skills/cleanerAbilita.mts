[h: source = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]

[h: bCleaner = fetchClassSkillProp(sLibAbilita,"cleaner")]
[h, if(bCleaner == 1), code:{
	[macro(buildClassSkillMacroName(sLibAbilita,"cleanAbilita")):source]
}]

[h: sEventTypes = fetchClassSkillProp(sLibAbilita,"eventi")]
[h: oArgs = json.append(source,sLibAbilita)]
[h, foreach(sEvento,sEventTypes): eventUninstaller(source,sEvento,sLibAbilita)]