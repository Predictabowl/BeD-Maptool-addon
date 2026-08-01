[h: source = json.get(macro.args,0)]
[h: spellName = json.get(macro.args,1)]

[macro("powers/getSpellAnime@this"): macro.args]
[h: iAnime = -macro.return]

[macro("powers/modAnime@this"): json.append(source,iAnime)]

[macro("powers/getSpellComponents@this"): json.append(source,spellName)]
[h: listComponenti = macro.return]
[h, if(listContains(listComponenti,"M")), code:{
	[macro("componenteMateriale@"+spellName): json.set("","source",source,"consume",1)]
}]
