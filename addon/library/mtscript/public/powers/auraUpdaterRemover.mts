[h: source = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: idAura = json.get(macro.args,"parametri")]


[h, if(bRemove != 1): return(0,"")]


[h: eventUninstaller(source,"On_Round_Start",idAura)]
[h: eventUninstaller(source,"On_Round_End",idAura)]
[h: return(0,"")]