[h: source = json.get(macro.args,"source")]
[h: spellName = json.get(macro.args,"spellName")]
[h: bRemoveMacro = json.get(macro.args,"removeMacro")]

[h, if(bRemoveMacro == 1): macroRemove = "marchioRemove@"+spellName; macroRemove = ""]
[h: macroInfranto = "macroMarchio@"+spellName]
[h: iDurata = getSpellDurata(source,spellName)]
[h: nomeDec = getLibProperty("nome_decorativo",spellName)]

[h: oParam = json.set("","source",source,"target","","macroInfranto",macroInfranto,"macroParam","","tipo","SFIDA","durata",iDurata,"nome",nomeDec,"macroRemove", macroRemove)]
[macro("mechanics/setMarchio@this"): oParam]