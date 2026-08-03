[h: ids = getSelected()]
[h: jOptions = json.append("","tutti")]
[h, foreach(id, ids, "<br>"), CODE:{
	[macro("core/getTokenEffects@this"): json.append(id,jOptions)]
	[h: jListaEffetti = macro.return]
	[h, if(!json.isEmpty(jListaEffetti)), code:{
		[h: list = json.toList(jListaEffetti)]
		[h: control =  input("effetto|"+ list +"|Effetto|LIST")]
		[h: abort(control)]
		[h: effetto = json.get(jListaEffetti,effetto)]
		[h: parameters = json.append(id,effetto)]
		[macro("core/RemoveEffect@this"): parameters]
		[h:broadcast(macro.return)]
	};{}]

}]