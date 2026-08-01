[h: source = json.get(macro.args,0)]
[h: oAzione = json.get(macro.args,1)]

[h: target = json.get(oAzione,"target")]

[h, if(source ==""): source = getImpersonated()]

[h, if(target != source), code:{
	[macro("mobs/RimuoviNascondersi@this"): source]
}]
