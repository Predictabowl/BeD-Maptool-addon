[h: ids = getSelected()]
[h: stateList = json.sort(getTokenStates("json"))]
[h: control =  input("stato|"+json.toList(stateList)+"|Stato|LIST","durata|2","moltiplicatore|1","bTrauma|0|Trauma|CHECK") ]
[h: abort(control)]
[h: stato = json.get(stateList,stato)]


[r, foreach(id, ids, "<br>"), CODE:{
	[macro("powers/getParamStatoBase@this"): json.set("","target",id,"source",getImpersonated(),"durata",durata,"effetto",stato,"moltiplicatore",moltiplicatore,"trauma",bTrauma)]
	[h: parameters = json.set(macro.return,"messaggi",0)]
	[macro("core/ApplyEffect@this"): parameters]
	[macro("utility/popMessaggio@this"):json.set("","token",id,"key","msgEffetto")]
	[h: broadcast(macro.return)]
}]