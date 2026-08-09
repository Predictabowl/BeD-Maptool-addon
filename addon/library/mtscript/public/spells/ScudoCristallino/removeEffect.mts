[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]

[h, if(bRemove != 1): return(0,"")]

[h: setCoperturaSlot(0, target, "ScudoCristallino")]