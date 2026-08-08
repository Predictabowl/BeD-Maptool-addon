[h: oToken = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]

[h, if(bRemove == 1), code:{
	[switchToken(oToken)]
	[Mod_Cura_In = Mod_Cura_In -0.12]
	[return (0,"")]
}]

[macro("powers/basicHotEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): macro.args]