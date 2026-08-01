[h: target = json.get(macro.args,"target")]
[h: oList = json.get(macro.args,"lista")]

[h:closeDialog("Ordinamento")]
[h: setPoteriMem(target,"")]
[h: addPoteriMem(target,oList)]
[macro("gui/updatePoteri@this"):""]