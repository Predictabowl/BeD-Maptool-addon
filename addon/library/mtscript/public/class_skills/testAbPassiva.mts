[h: oToken = json.get(macro.args,0)]
[h: bRemove = json.get(macro.args,1)]

[h: sNomeAb = "testAbPassiva"]
[h: oParam = json.set("","nomeAbilita",sNomeAb)]

[h, if(!bRemove), code:{
	[eventInstaller(oToken,"on_Attack",sNomeAb,"class_skills/"+ sNomeAb + "Event@lib:it.aldinucci.piero.bed.maptool.ruleset",oParam)]
};{
	[eventUninstaller(oToken,"on_Attack",sNomeAb)]	
}]
[return (0,"")]