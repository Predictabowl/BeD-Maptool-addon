[h: oToken = json.get(macro.args,0)]
[h: sTipo = json.get(macro.args,1)]
[h: nomeEvento = json.get(macro.args,2)]

[h: listaEventi = getProperty(sTipo,oToken)]
[h, if(json.isEmpty(listaEventi)), code:{
	[result = ""]
};{
	[result = json.get(listaEventi,nomeEvento)]
}]

[h: macro.return = result]