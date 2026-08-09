[h: source = macro.args]

[h: target = getHostileSelected(source)]
[h, if(target == ""), code:{
	[appendMessaggio(source,"strAbilitaAttivata","Attivazione annullata")]
	[return(0,1)]
}]

[h: sLibName = "NessunaPieta"]
[h: eventName = sLibName+source]
[h: jParams = json.set("", "tokenToExclude", source)]
[h: eventInstaller(target, "On_Attacked", eventName, buildClassSkillMacroName("NessunaPieta","trigger"), jParams)]
[macro("class_skills/setMemAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source, sLibName, target)]

[h: appendMessaggio(source,"strAbilitaAttivata", strformat("%s", getName(target)))]
[h: macro.return = 0]
