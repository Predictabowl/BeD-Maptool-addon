[h: source = json.get(macro.args,"source")]

[h: spellName = "MarchioCompulsione"]
[h: macroRemove = ""]
[h: macroInfranto = "spells/MarchioCompulsione/macroMarchio@lib:it.aldinucci.piero.bed.maptool.ruleset"]
[h: iDurata = getSpellDurata(source,spellName)]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]

[h: oParam = json.set("","source",source,"target","","macroInfranto",macroInfranto,"macroParam","","tipo","SFIDA","durata",iDurata,"nome",nomeDec,"macroRemove", macroRemove)]
[macro("mechanics/setMarchio@lib:it.aldinucci.piero.bed.maptool.ruleset"): oParam]