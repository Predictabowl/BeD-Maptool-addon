[h: source = json.get(macro.args,"source")]
[h: spellName = json.get(macro.args,"spellName")]
[h: bRemoveMacro = json.get(macro.args,"removeMacro")]

[h, if(bRemoveMacro == 1): macroRemove = "powers/spells/"+spellName+"/marchioRemove@"+getMacroLocation(); macroRemove = ""]
[h: macroInfranto = "powers/spells/"+spellName+"/macroMarchio@"+getMacroLocation()]
[h: iDurata = getSpellDurata(source,spellName)]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]

[h: oParam = json.set("","source",source,"target","","macroInfranto",macroInfranto,"macroParam","","tipo","SFIDA","durata",iDurata,"nome",nomeDec,"macroRemove", macroRemove)]
[macro("mechanics/setMarchio@this"): oParam]