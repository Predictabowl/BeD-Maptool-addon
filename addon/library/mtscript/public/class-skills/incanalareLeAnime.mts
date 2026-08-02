[h: oToken = json.get(macro.args,0)]
[h: bRemove = json.get(macro.args,1)]

[h: sNomeAb = "incanalareLeAnime"]
[h: oParam = json.set("","nomeAbilita",sNomeAb)]

[h, if(!bRemove), code:{
	[eventInstaller(oToken,"on_Kill",sNomeAb,"class-skills/" sNomeAb +"Event@it.aldinucci.piero.bed.maptool.ruleset",oParam)]
};{
	[eventUninstaller(oToken,"on_Kill",sNomeAb)]	
}]
[h: return (0,"")]