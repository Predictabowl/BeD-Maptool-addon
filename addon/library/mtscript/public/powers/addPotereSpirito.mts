[h: oToken = json.get(macro.args,0)]
[h: sNomeS = json.get(macro.args,1)]
[h: oPoteri = json.get(macro.args,2)]


[h: oSpirito = getSpirito(oToken,sNomeS)]
[h: assert(!json.isEmpty(oSpirito),"Spirito non esistente")]

[h: lPoteri = json.get(oSpirito,"ListaPoteri")]
[h, if(json.type(lPoteri) != "ARRAY"): lPoteri = "[]"]
[h, foreach(sPotere,oPoteri), code:{
	[sPotere = getName(sPotere)]
	[if(!json.contains(lPoteri,sPotere)): lPoteri = json.append(lPoteri,sPotere)]
}]
[h: oSpirito = json.set(oSpirito,"ListaPoteri",lPoteri)]
[h: setSpirito(oToken,sNomeS,oSpirito)]
