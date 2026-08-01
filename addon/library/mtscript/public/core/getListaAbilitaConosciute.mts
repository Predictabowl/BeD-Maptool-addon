[h: oToken = macro.args]

[macro("core/getAbilitaClasseTutte@this"): oToken]
[h: oListAb = macro.return]
[h: sListA = ""]

[h, foreach(sAbilita,oListAb), code:{
	[sListA = listAppend(sListA,sAbilita)]
}]

[h: macro.return = sListA]