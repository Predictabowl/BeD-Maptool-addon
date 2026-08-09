[h: source = json.get(macro.args,"source")]
[h: bRemove = json.get(macro.args,"remove")]

[h, if(bRemove == 1), code:{
	[h: spellName = "MaledizioneContrappasso"]
	[eventUninstaller(source,"on_Attack",spellName)]
	[eventUninstaller(source,"on_SpellCast_at",spellName)]
}]
