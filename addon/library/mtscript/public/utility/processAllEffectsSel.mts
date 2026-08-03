[h: ids = getSelected()]

[h, foreach(id, ids), code:{
	[macro("utility/processAllEffectsTarget@this"): id]
}]