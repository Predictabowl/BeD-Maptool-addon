[h: id = json.get(macro.args,0)]
[h: listaEffetti = json.get(macro.args,1)]

[h, if(json.isEmpty(listaEffetti) ==  0), code:{
	[h: list = json.toList(listaEffetti)]
	[h: control =  input("effetto|"+ list +"|Effetto|LIST")]
	[h: abort(control)]
	[h: effetto = json.get(listaEffetti,effetto)]
	[h: parameters = json.append(id,effetto)]
	[macro("core/RemoveEffect@this"): parameters]
	[h:broadcast(macro.return)]
};{}]