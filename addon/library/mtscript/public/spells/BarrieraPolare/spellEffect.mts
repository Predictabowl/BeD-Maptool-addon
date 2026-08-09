[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: switchToken(source)]
[h: spellName = "BarrieraPolare"]
[h: macroInfranto = buildSpellMacroName("BarrieraPolare","specialEffect")]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]

[macro("combat/getUltimoCritico@lib:it.aldinucci.piero.bed.maptool.ruleset"):source]
[h: critRes = macro.return]

[h: paramCD = json.set("","source",source,"spellName",spellName,"critRes",critRes)]
[macro("powers/getCDSpell@lib:it.aldinucci.piero.bed.maptool.ruleset"): paramCD]
[h: iCD = macro.return]

[macro("powers/getDurata@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spellName",spellName)]
[h: iDurata = macro.return]

[h: macroParam = json.set("","CD",iCD)]
[h: paramMarchio = json.set("","source",source,"target",target,"macroInfranto",macroInfranto,"macroParam",macroParam,"tipo","PROTEZIONE","durata",iDurata,"nome",nomeDec)]
[macro("mechanics/setupMarchio@lib:it.aldinucci.piero.bed.maptool.ruleset"): paramMarchio]


[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]
