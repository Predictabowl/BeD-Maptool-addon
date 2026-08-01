[h: source = json.get(macro.args,"source")]
[h: eventParam = json.get(macro.args,"eventParam")]

[h: spellName = json.get(eventParam,"spellName")]
[h: macro("powers/getSpellComponents@this"): json.set(source,spellName)]
[h: sComponenti = macro.return]

[h, if(listContains(sComponenti,"V")), code:{
	[macro("core/pushOverride@this"): json.append(source,"SpellBlock")]
	[sMsg = strformat("L'effetto di Silenzio impedisce a %s di lanciare il potere %s",getName(source),getLibProperty("nome_decorativo",spellName))]
	[broadcast(sMsg)]
}]

[h: macro.return =""]