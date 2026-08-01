[h: oToken = json.get(macro.args,0)]
[h: oPoteri = json.get(macro.args,1)]

[h: oLibro = getLibroPoteri(oToken)]
[h, foreach(sPotere,oPoteri), code:{
	[if(!json.contains(oLibro,sPotere)): oLibro = json.append(oLibro,sPotere)]
}]
[h: setLibroPoteri(oToken,oLibro)]
