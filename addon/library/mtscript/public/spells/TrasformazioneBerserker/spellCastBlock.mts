[h: source = json.get(macro.args,"source")]
[h: eventParam =  json.get(macro.args,"eventParam")]

[h: sSpellCasted = json.get(eventParam,"spellName")]

[h: sCastedName = fetchSpellProp(sSpellCasted,"nome_decorativo")]
[h: sCastedTipo = upper(fetchSpellProp(sSpellCasted,"tipo"))]
[h: sCastedTags = fetchSpellProp(sSpellCasted,"tags")]

[h: spellName = "TrasformazioneBerserker"]

[h: flag = 1]
[h, if(sCastedTipo == "MARCHIO"): flag = 0]
[h, if(listContains(sCastedTags,"TECNICHEMARZIALI") == 1): flag = 0]
[macro("core/getOverride@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"TrasformazioneBerserker")]
[h, if(macro.return > 0): flag = 0]

[h: msg = ""]
[h, if(flag == 1), code:{
	[h: msg = strformat("L'effetto %s ha bloccato il lancio del potere %s",fetchSpellProp(spellName,"nome_decorativo"),sCastedName)]
	[macro("core/pushOverride@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"SpellBlock")]
	[h: broadcast(msg,getPlayerName())]
}]

[h: macro.return = ""]