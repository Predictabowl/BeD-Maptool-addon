[h: ids = getSelected()]
[h, foreach(id, ids, "<br>"), CODE:{
	[macro("core/getTokenEffects@this"):id]
	[h: lEffetti = macro.return]
	[macro("utility/RimuoviEffettiTarget@this"): json.append(id, lEffetti)]
}]