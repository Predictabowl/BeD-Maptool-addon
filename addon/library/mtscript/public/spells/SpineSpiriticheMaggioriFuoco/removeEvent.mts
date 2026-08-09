[h: source = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]

[h, if(remove == 1), code:{
	[spellName = "SpineSpiriticheMaggioriFuoco"]
	[eventUninstaller(source, "On_Attacked", spellName)]
	[eventUninstaller(source, "On_Round_Start", spellName)]	
}]