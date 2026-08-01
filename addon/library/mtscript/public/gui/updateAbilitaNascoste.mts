[h: target = json.get(macro.args,"target")]
[h: sListaAb = json.get(macro.args,"listaAb")]


[h, foreach(sItem,sListaAb), code:{
	[bNascosto = json.get(macro.args,sItem)]
	[macro("gui/setAbilitaNascosta@this"): json.append(target,sItem,bNascosto)]
}]