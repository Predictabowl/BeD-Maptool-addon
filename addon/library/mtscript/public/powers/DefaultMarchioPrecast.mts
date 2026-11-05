[h: source = json.get(macro.args,"source")]
[h: spellName = json.get(macro.args,"spellName")]
[h: bRemoveMacro = json.get(macro.args,"removeMacro")]

[h, if(bRemoveMacro == 1): macroRemove = buildSpellMacroName(spellName,"marchioRemove"); macroRemove = ""]
[h: macroInfranto = buildSpellMacroName(spellName,"macroMarchio")]
[h: iDurata = getSpellDurata(source,spellName)]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
[h: aTags = fetchSpellProp(spellName,"tags")]
[h, if(listContains(aTags, "MARCHIOPROTEZIONE")): sTipoMarchio = "PROTEZIONE"; sTipoMarchio = "SFIDA"]

[h: oParam = json.set("","source",source,"target","","macroInfranto",macroInfranto,"macroParam","","tipo",sTipoMarchio,"durata",iDurata,"nome",nomeDec,"macroRemove", macroRemove)]
[macro("mechanics/setMarchio@this"): oParam]