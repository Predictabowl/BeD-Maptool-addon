[h: source = arg(0)]

[h: switchToken(source)]
[h, foreach(idAura,Aure_Attive), code:{
	[macro("powers/removeAura@this"): json.append(source,idAura)]
}]