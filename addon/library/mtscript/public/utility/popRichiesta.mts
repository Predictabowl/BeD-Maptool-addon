[h: token = json.get(macro.args,0)]
[h: sTipo = json.get(macro.args,1)]


[h: switchToken("MapVar")]
[h, if(json.type(Richieste_GM) != "OBJECT"): Richieste_GM = "{}"]
[h: rParam = json.get(Richieste_GM,token)]
[h: return = ""]
[h, if(json.type(rParam) == "OBJECT"), code:{
	[sTipo2 = json.get(rParam,"tipo")]
	[if(sTipo2 == sTipo), code:{
		[return = json.get(rParam,"giocatore")]
		[Richieste_GM = json.remove(Richieste_GM,token)]
	}]
}]
[h: macro.return = return]

