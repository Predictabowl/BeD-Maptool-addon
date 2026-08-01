[h: oToken = json.get(macro.args,0)]
[h: bRemove = json.get(macro.args,1)]

[h: sNomeAb = "incanalareLeAnime"]
[h: oParam = json.set("","nomeAbilita",sNomeAb)]

[h, if(!bRemove), code:{
	[eventInstaller(oToken,"on_Kill",sNomeAb,sNomeAb+"class-skills/Event@this",oParam)]
};{
	[eventUninstaller(oToken,"on_Kill",sNomeAb)]	
}]
[h: return (0,"")]