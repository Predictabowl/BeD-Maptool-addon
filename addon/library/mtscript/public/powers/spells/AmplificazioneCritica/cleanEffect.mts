[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: oParam = json.get(macro.args,"parametri")]

[h, if(bRemove != 1): return(0,"")]

[h: spellName = "AmplificazioneCritica"]
[h: eventUninstaller(target,"On_Attacked",spellName)]
[h: eventUninstaller(target,"On_Spellcasted",spellName)]

[h: macro.return = ""]