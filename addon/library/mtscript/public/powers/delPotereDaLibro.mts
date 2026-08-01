[h: oToken = json.get(macro.args,0)]
[h: oPoteri = json.get(macro.args,1)]

[h: jPoteri = "[]"]
[h, foreach(sPotere,oPoteri), code:{
	[jPoteri = json.append(jPoteri,getName(sPotere))]
}]
[h: oLibro = getLibroPoteri(oToken)]
[h: oLibro = json.difference(oLibro,jPoteri)]

[h: setLibroPoteri(oToken,oLibro)]
