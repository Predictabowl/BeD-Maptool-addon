[h: giocatore =  json.get(macro.args,0)]
[h: token = json.get(macro.args,1)]
[h: sTipo = json.get(macro.args,2)]


[h: switchToken("MapVar")]
[h, if(json.type(Richieste_GM) != "OBJECT"): Richieste_GM = "{}"]
[h: rParam = json.set("","tipo",sTipo,"giocatore",giocatore)]
[h: Richieste_GM = json.set(Richieste_GM,token,rParam)]
