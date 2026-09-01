[h: source = json.get(macro.args,"source")]
[h: eventParam = json.get(macro.args,"eventParam")]
[h: spellName = json.get(eventParam,"spellName")]

[h: sTipo = upper(fetchSpellProp(spellName,"tipo"))]
[h: tipoList = "MALEDIZIONE"]
[h, if(listContains(tipoList,sTipo)), code:{
	[h: thisSpell = "StraleDellaRovina"]
	[h: nomeDec = fetchSpellProp(thisSpell,"nome_decorativo")]
	[rimuoviEffetto(source,nomeDec)]
}]
