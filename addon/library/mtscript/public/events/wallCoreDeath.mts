[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sOwner = json.get(macro.args,"owner")]
[h: sDrawId = json.get(macro.args,"drawId")]
[h: sEffect = json.get(macro.args, "removeEffectName")]
[h: oEventParam = json.get(macro.args,"eventParam")]


[h: sSpawnedTag = sDrawId+"spawnedCore"]
[h: oSpawnedToken = getDaMemoria(sOwner, sSpawnedTag)]]
[h, if(oSpawnedToken != ""), code:{
	[macro("events/addDelayedSafeMacro@this"): json.append("mechanics/despawnCreatura@lib:it.aldinucci.piero.bed.maptool.ruleset", oSpawnedToken)]
	[delDaMemoria(sOwner, sSpawnedTag)]
}]
[h: rimuoviEffetto(sOwner, sEffect)]

[h: macro.return = ""]
