[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: oParam = json.get(macro.args,"parametri")]

[h, if(bRemove != 1): return(0,"")]

[h: spellName = "MutaformaFerina"]

[h: eventUninstaller(target,"on_Spellstart",spellName)]
[h: popOverride(target,"InventarioBloccato")]
[h: popOverride(target,"StileBloccato")]
[h: macro.return = ""]