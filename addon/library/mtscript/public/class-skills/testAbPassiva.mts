[h: oToken = json.get(macro.args,0)]
[h: bRemove = json.get(macro.args,1)]

[h: sNomeAb = "testAbPassiva"]
[h: oParam = json.set("","nomeAbilita",sNomeAb)]

[h, if(!bRemove), code:{
	[eventInstaller(oToken,"on_Attack",sNomeAb,sNomeAb+"class-skills/Event@this",oParam)]
};{
	[eventUninstaller(oToken,"on_Attack",sNomeAb)]	
}]
[return (0,"")]