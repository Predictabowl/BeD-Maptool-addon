[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: oParam = json.get(macro.args,"parametri")]

[h, if(bRemove != 1): return(0,"")]

[h: spellName = "AlbaDelRevenant"]

[h: addSpellMod(target,"AllSpells","PF",0,0.5)]
[h: macro.return = ""]